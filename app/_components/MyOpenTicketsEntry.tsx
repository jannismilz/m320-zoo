import { TFirestoreTicket } from "../_types/types";
import RefundTicketButton from "./RefundTicketButton";

export default function MyOpenTicketsEntry({ ticket }: { ticket: TFirestoreTicket }) {
    return (
        <li key={ticket.id}>
            {ticket.id} | {new Date(ticket.date).toLocaleDateString("de-De")} |{" "}
            {ticket.kids_amount} | {ticket.adults_amount} |{" "}
        </li>
    );
}
