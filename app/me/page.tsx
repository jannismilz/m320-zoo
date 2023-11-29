"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../_hooks/useAuth";
import { TUser } from "../_types/types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../_firebase/firebaseConfig";
import ProfileBanner from "../_components/ProfileBanner";
import MyOpenTickets from "../_components/MyOpenTickets";

export default function Me() {
    const { user } = useAuth();
    const [userDoc, setUserDoc] = useState<TUser | null>(null);

    useEffect(() => {
        if (user) {
            getDoc(doc(db, "users", user.uid)).then((data) =>
                setUserDoc(data.data() as TUser)
            );
        }
    }, [user]);

    return (
        user &&
        userDoc && (
            <main>
                <ProfileBanner user={user} userDoc={userDoc} />
                <MyOpenTickets user={user} />
            </main>
        )
    );
}
