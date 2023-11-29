"use client";

import { db } from "@/app/_firebase/firebaseConfig";
import { TTicket } from "@/app/_types/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Ticket({ params }: { params: { ticketId: string } }) {
    const { ticketId } = params;
    const [ticketDoc, setTicketDoc] = useState<TTicket | null>(null);

    useEffect(() => {
        getDoc(doc(db, "tickets", ticketId)).then((data) =>
            setTicketDoc(data.data() as TTicket)
        );
    }, []);

    return (
        <div>
            <h1>Ticket #{ticketId}</h1>
            <ul>
                <li>
                    User:{" "}
                    {ticketDoc?.userId || <em>Manually entered contact informations</em>}
                </li>
                <hr />
                <li>Firstname: {ticketDoc?.firstName}</li>
                <li>Lastname: {ticketDoc?.lastName}</li>
                <li>Email: {ticketDoc?.email}</li>
                <hr />
                <li>Date: {ticketDoc?.date}</li>
                <li>Kids: {ticketDoc?.kidsAmount}</li>
                <li>Adults: {ticketDoc?.adultsAmount}</li>
                <li>Type: {ticketDoc?.type}</li>
            </ul>
        </div>
    );
}
