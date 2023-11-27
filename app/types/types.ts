import { User } from "firebase/auth";

export type TAuthContextProps = {
    user: User | null;
};

export type TUser = {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    updated_at: number;
    created_at?: number;
};
