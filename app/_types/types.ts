import { User } from "firebase/auth";

export type TAuthContextProps = {
    user: User | null;
};

export type TUser = {
    display_name: string | null;
    email: string | null;
    photo_url: string | null;
    updated_at: number;
    created_at?: number;
};

export type TTicket = {
    date: number;
    kids_amount: number;
    adults_amount: number;
    type: ETicketType;
    user_id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    created_at: number;
};

export type TFirestoreTicket = TTicket & {
    id: string;
};

export type TAdmin = {
    promoted_by: string;
    promoted_at: number;
};

export enum ETicketType {
    DAYPASS = 1,
    HALFDAYPASS = 2,
}
