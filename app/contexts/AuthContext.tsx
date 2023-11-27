"use client";

import { createContext, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { User } from "firebase/auth";

type AuthContextProps = {
    user: User | null;
};

const defaultValue: AuthContextProps = {
    user: null,
};

export const AuthContext = createContext(defaultValue);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element | null {
    const [user, setUser] = useState<User | null>(null);

    auth.onAuthStateChanged(function (user) {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
