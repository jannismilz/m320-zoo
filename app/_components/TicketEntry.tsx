import { TFirestoreTicket } from "../_types/types";

export default function TicketEntry({ ticket }: { ticket: TFirestoreTicket }) {
    return (
        <tr>
            <td>{ticket.id}</td>
            <td>{new Date(ticket.date).toLocaleDateString("de-De")}</td>
            <td>{ticket.adultsAmount}</td>
            <td>{ticket.kidsAmount}</td>
            <td>-</td>
        </tr>
    );
}
