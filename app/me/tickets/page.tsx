"use client";

import TicketEntry from "@/app/_components/TicketEntry";
import { ticketsCollection } from "@/app/_firebase/firebaseConfig";
import { useAuth } from "@/app/_hooks/useAuth";
import { TFirestoreTicket } from "@/app/_types/types";
import { table } from "console";
import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Me() {
    const { user } = useAuth();
    const [tickets, setTickets] = useState<TFirestoreTicket[] | []>([]);

    useEffect(() => {
        if (user) {
            getDocs(query(ticketsCollection, where("user_id", "==", user.uid))).then(
                (tickets) => {
                    const ticketsData = tickets.docs.map((ticket) => {
                        return { id: ticket.id, ...ticket.data() } as TFirestoreTicket;
                    });
                    setTickets(ticketsData as TFirestoreTicket[]);
                }
            );
        }
    }, [user]);

    return user && tickets.length > 0 ? (
        <main>
            <h1 className="text-3xl font-bold">My tickets</h1>
            <hr className="my-4" />
            <table className="w-full">
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Adults amount</th>
                    <th>Kids amount</th>
                    <th></th>
                </tr>
                {tickets.map((ticket) => {
                    return <TicketEntry ticket={ticket} />;
                })}
            </table>
        </main>
    ) : (
        <div>No current tickets</div>
    );
}
