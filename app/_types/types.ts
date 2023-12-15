import { User } from "firebase/auth";

export type TAuthContextProps = {
    user: User | null;
};

export type TUser = User & {
    id?: string;
    is_admin?: boolean;
    updated_at: number;
    created_at?: number;
};

export type TTicket = {
    date: number;
    kids_amount: number;
    adults_amount: number;
    type: ETicketType;
    firstname?: string;
    lastname?: string;
    email?: string;
    created_at: number;
};

export type TFirestoreTicket = TTicket & {
    id: string;
};

export type TAdmin = {
    promoted_by: string | null;
    promoted_at: number;
};

export enum ETicketType {
    DAYPASS = 1,
    HALFDAYPASS = 2,
}
