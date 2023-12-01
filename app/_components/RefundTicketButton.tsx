import { doc, setDoc } from "firebase/firestore";
import { TFirestoreTicket } from "../_types/types";
import { ticketsCollection } from "../_firebase/firebaseConfig";

export default function RefundTicketButton({ ticket }: { ticket: TFirestoreTicket }) {
    function refundTicket() {
        setDoc(
            doc(ticketsCollection, ticket.id),
            { status: "refunded" },
            { merge: true }
        );
    }

    return ticket.status === "refunded" ? (
        <span className="rounded bg-red-200 px-2 py-1 text-xs text-white">
            Refund Ticket
        </span>
    ) : (
        <button
            className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-700"
            onClick={() => refundTicket()}
        >
            Refund Ticket
        </button>
    );
}
