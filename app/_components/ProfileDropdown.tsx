"use client";

import Link from "next/link";
import { auth } from "../_firebase/firebaseConfig";
import { signOut as firebaseSignOut } from "firebase/auth";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function ProfileDropdown({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const signOut = async () => await firebaseSignOut(auth);
    const dropdown = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        const handleClick = (event: any) => {
            if (dropdown.current && !dropdown.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        window.addEventListener("mousedown", handleClick);
        return () => window.removeEventListener("mousedown", handleClick);
    }, [isOpen]);

    return (
        <div
            ref={dropdown}
            className={`${
                isOpen ? "block" : "hidden"
            } absolute right-0 top-full mt-1 flex w-52 flex-col bg-yellow-400`}
        >
            <Link className="w-full px-5 py-1.5 text-start hover:bg-gray-400" href="/me">
                Profile
            </Link>
            <Link
                className="w-full px-5 py-1.5 text-start hover:bg-gray-400"
                href="/mytickets"
            >
                My tickets
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
