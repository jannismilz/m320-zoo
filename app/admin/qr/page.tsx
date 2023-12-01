"use client";

import TicketModal from "@/app/_components/TicketModal";
import TicketNotFoundModal from "@/app/_components/TicketNotFoundModal";
import { db } from "@/app/_firebase/firebaseConfig";
import { TFirestoreTicket } from "@/app/_types/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";

export default function Qr() {
    const [ticketId, setTicketId] = useState("");
    const [paused, setPaused] = useState(false);

    const [ticketNotFound, setTicketNotFound] = useState(false);
    const [ticket, setTicket] = useState<TFirestoreTicket | null>(null);

    const { ref } = useZxing({
        onDecodeResult(result) {
            if (!ticketId) {
                const textResult = result.getText();

                if (!textResult.match(/^[0-9a-zA-Z]{20}$/)) {
                    setTicketNotFound(true);
                } else {
                    setTicketId(result.getText());
                }

                setPaused(true);
            }
        },
        paused: paused,
    });

    useEffect(() => {
        if (ticketId) {
            getDoc(doc(db, "tickets", ticketId)).then((ticket) => {
                if (!ticket.exists()) {
                    setTicketNotFound(true);
                } else {
                    setTicket({ id: ticket.id, ...ticket.data() } as TFirestoreTicket);
                }
            });
        }
    }, [ticketId]);

    function closeModal() {
        setTicketNotFound(false);
        setTicket(null);
        setTicketId("");
        setPaused(false);
    }

    return (
        <div className="flex justify-center">
            {!ticketId && <video ref={ref} />}
            <TicketNotFoundModal isOpen={ticketNotFound} closeModal={closeModal} />
            {ticket && (
                <TicketModal ticket={ticket} isOpen={!!ticket} closeModal={closeModal} />
            )}
        </div>
    );
}
