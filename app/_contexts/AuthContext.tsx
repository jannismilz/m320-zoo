"use client";

import { createContext, useState } from "react";
import { auth, db, isUserAdmin } from "../_firebase/firebaseConfig";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { TAuthContextProps, TUser } from "../_types/types";
import { useRouter, usePathname } from "next/navigation";

const defaultValue: TAuthContextProps = {
    user: null,
};

export const AuthContext = createContext(defaultValue);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element | null {
    const [user, setUser] = useState<User | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    const authRoutes = ["/me"];
    const adminRoutes = ["/admin"];

    // Check if pathname startsWith every route defined in authRoutes
    if (authRoutes.some((route) => pathname.startsWith(route))) {
        auth.onAuthStateChanged(async function (user) {
            if (!user) {
                router.push("/");
            }
        });
    }

    if (adminRoutes.some((route) => pathname.startsWith(route))) {
        auth.onAuthStateChanged(async function (user) {
            if (!user || !(await isUserAdmin())) {
                router.push("/");
            }
        });
    }

    auth.onAuthStateChanged(async function (user) {
        if (user) {
            setUser(user);
            const userDoc = await getDoc(doc(db, "users", user.uid));

            const userDataObj: TUser = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                updated_at: Date.now(),
            };

            if (userDoc.exists()) {
                const currDate = new Date();

                // Only update updated_at at most every 5 minutes
                if (
                    userDoc.data()!.updated_at <
                    currDate.setMinutes(currDate.getMinutes() - 5)
                ) {
                    setDoc(doc(db, "users", user.uid), userDataObj, { merge: true });
                }
            } else {
                userDataObj["created_at"] = Date.now();
                setDoc(doc(db, "users", user.uid), userDataObj, { merge: true });
                // TODO: Send welcome email
            }
        } else {
            setUser(null);
        }
    });

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
