"use client";

import Link from "next/link";
import { auth, isUserAdmin } from "../_firebase/firebaseConfig";
import { signOut as firebaseSignOut } from "firebase/auth";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function ProfileDropdown({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const [isAdmin, setIsAdmin] = useState(false);

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

    useEffect(() => {
        isUserAdmin().then((res) => setIsAdmin(res));
    }, []);

    return (
        <div
            ref={dropdown}
            className={`${
                isOpen ? "block" : "hidden"
            } absolute right-0 top-full mt-1 flex w-52 flex-col bg-yellow-400`}
            onClick={() => setIsOpen(false)}
        >
            <Link className="w-full px-5 py-1.5 text-start hover:bg-gray-400" href="/me">
                Profile
            </Link>
            <Link
                className="w-full px-5 py-1.5 text-start hover:bg-gray-400"
                href="/me/tickets"
            >
                My tickets
            </Link>
            {isAdmin && (
                <div className="flex flex-col">
                    <hr />
                    <Link
                        className="w-full px-5 py-1.5 text-start hover:bg-gray-400"
                        href="/admin/"
                    >
                        Ticket QR Scanner
                    </Link>
                </div>
            )}
            <hr />
            <button
                className="w-full px-5 py-1.5 text-start hover:bg-gray-400"
                onClick={() => signOut()}
            >
                Logout
            </button>
        </div>
    );
}
