"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup, signOut as firebaseSignOut } from "@firebase/auth";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";

export default function ProfileLink() {
    const { user } = useAuth();

    const signIn = async () => await signInWithPopup(auth, provider);
    const signOut = async () => await firebaseSignOut(auth);

    return user ? (
        <div className="flex items-center gap-2">
            <Image
                className="rounded-full"
                src={user.photoURL} // TODO: Default profile picture
                width={30}
                height={30}
                alt="Profile image"
            />
            <span className="hidden md:inline-block">{user.displayName}</span>
            <ChevronDownIcon height={15} width={15} />
            <button onClick={() => signOut()}>Logout</button>
        </div>
    ) : (
        <button onClick={() => signIn()}>Login</button>
    );
}
