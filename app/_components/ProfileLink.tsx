"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { auth, provider } from "../_firebase/firebaseConfig";
import { signInWithPopup } from "@firebase/auth";
import Image from "next/image";
import { useAuth } from "../_hooks/useAuth";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import getAvatarImage from "../_helpers/getAvatarImage";

export default function ProfileLink() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const signIn = async () => await signInWithPopup(auth, provider);

    return user ? (
        <div>
            <div
                className="flex items-center gap-2 bg-purple-400"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    className="rounded-full"
                    src={getAvatarImage(user)}
                    width={32}
                    height={32}
                    alt="Profile image"
                />
                <span className="hidden md:inline-block">{user.display_name}</span>
                <ChevronDownIcon height={15} width={15} />
            </div>
            <div className="relative">
                <ProfileDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    ) : (
        <button className="p-1" onClick={() => signIn()}>
            Login
        </button>
    );
}
