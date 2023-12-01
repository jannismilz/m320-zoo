import { TFirestoreTicket } from "../_types/types";
import RefundTicketButton from "./RefundTicketButton";

export default function TicketEntry({ ticket }: { ticket: TFirestoreTicket }) {
    return (
        <tr>
            <td>{ticket.id}</td>
            <td>{new Date(ticket.date).toLocaleDateString("de-De")}</td>
            <td>{ticket.adults_amount}</td>
            <td>{ticket.kids_amount}</td>
            <td>
                <RefundTicketButton ticket={ticket} />
            </td>
        </tr>
    );
}
