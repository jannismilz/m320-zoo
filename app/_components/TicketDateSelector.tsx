export default function TicketDateSelector({
    state,
    setState,
}: {
    state: string;
    setState: (value: string) => void;
}) {
    return (
        <div className="flex w-max flex-col">
            <label htmlFor="ticketDate">Date</label>
            <input
                type="date"
                name="ticketDate"
                id="ticketDate"
                value={state}
                onChange={(e) => setState(e.currentTarget.value)}
            />
        </div>
    );
}
