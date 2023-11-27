"use client";

import { createContext, useState } from "react";
import { auth, db } from "../_firebase/firebaseConfig";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { TAuthContextProps, TUser } from "../_types/types";

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
                setDoc(doc(db, "users", user.uid), userDataObj, { merge: true });
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
