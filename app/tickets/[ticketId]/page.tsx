"use client";

import { db } from "@/app/_firebase/firebaseConfig";
import { TTicket } from "@/app/_types/types";
import { doc, getDoc } from "firebase/firestore";
import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";

export default function Ticket({ params }: { params: { ticketId: string } }) {
    const { ticketId } = params;
    const [ticketDoc, setTicketDoc] = useState<TTicket | null>(null);
    const { Image } = useQRCode();

    useEffect(() => {
        getDoc(doc(db, "tickets", ticketId)).then((data) =>
            setTicketDoc(data.data() as TTicket)
        );
    }, []);

    return (
        <div>
            <h1>Ticket #{ticketId}</h1>
            <Image
                text={ticketId}
                options={{
                    type: "image/jpeg",
                    quality: 0.3,
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                }}
            />
            <ul>
                <li>
                    User:{" "}
                    {ticketDoc?.user_id || <em>Manually entered contact informations</em>}
                </li>
                <hr />
                <li>firstname: {ticketDoc?.firstname}</li>
                <li>lastname: {ticketDoc?.lastname}</li>
                <li>Email: {ticketDoc?.email}</li>
                <hr />
                <li>Date: {ticketDoc?.date}</li>
                <li>Kids: {ticketDoc?.kids_amount}</li>
                <li>Adults: {ticketDoc?.adults_amount}</li>
                <li>Type: {ticketDoc?.type}</li>
            </ul>
        </div>
    );
}
