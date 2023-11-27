"use client";

import Link from "next/link";
import { auth } from "../firebase/firebaseConfig";
import { signOut as firebaseSignOut } from "firebase/auth";

export default function ProfileDropdown({ isOpen }: { isOpen: boolean }) {
    const signOut = async () => await firebaseSignOut(auth);
    return (
        <div
            className={`${
                isOpen ? "block" : "hidden"
            } absolute -bottom-20 right-0 flex w-52 flex-col bg-yellow-400`}
        >
            <Link className="w-full px-5 py-1.5 text-start hover:bg-gray-400" href="/me">
                Profile
            </Link>
            <button
                className="w-full px-5 py-1.5 text-start hover:bg-gray-400"
                onClick={() => signOut()}
            >
                Logout
            </button>
        </div>
    );
}
