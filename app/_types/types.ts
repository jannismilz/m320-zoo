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

export type TTicket = {
    date: number;
    kidsAmount: number;
    adultsAmount: number;
    type: ETicketType;
    userId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    created_at: number;
};

export type TFirestoreTicket = TTicket & {
    id: string;
};

export enum ETicketType {
    DAYPASS = 1,
    HALFDAYPASS = 2,
}
