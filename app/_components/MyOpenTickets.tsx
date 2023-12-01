import { User } from "firebase/auth";
import { QuerySnapshot, and, getDocs, or, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ticketsCollection } from "../_firebase/firebaseConfig";
import { TFirestoreTicket } from "../_types/types";
import MyOpenTicketsEntry from "./MyOpenTicketsEntry";

export default function MyOpenTickets({ user }: { user: User }) {
    const [tickets, setTickets] = useState<TFirestoreTicket[] | []>([]);
    const dayInMilliseconds = 24 * 60 * 60 * 1000;

    useEffect(() => {
        getDocs(
            query(
                ticketsCollection,
                and(
                    or(where("userId", "==", user.uid), where("email", "==", user.email)),
                    where("date", ">", +new Date() - dayInMilliseconds)
                )
            )
        ).then((data) => {
            const ticketObjects = data.docs.map((doc) => {
                return { id: doc.id, ...doc.data() } as TFirestoreTicket;
            });
            setTickets(ticketObjects as TFirestoreTicket[]);
        });
    }, []);

    return (
        <section>
            <h1>My Open Tickets</h1>
            <ul>
                {tickets.map((ticket) => {
                    return <MyOpenTicketsEntry ticket={ticket} />;
                })}
            </ul>
        </section>
    );
}
