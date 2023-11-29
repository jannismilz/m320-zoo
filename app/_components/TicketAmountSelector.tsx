export default function TicketAmountSelector({
    name,
    state,
    setState,
}: {
    name: string;
    state: number;
    setState: (value: number) => void;
}) {
    return (
        <div className="mb-4 flex flex-col">
            <label htmlFor="ticket-amount">{name}</label>
            <div className="flex gap-4">
                <button onClick={() => setState(state - 1 < 0 ? 0 : --state)}>-</button>
                <input
                    type="number"
                    name="ticket-amount"
                    id="ticket-amount"
                    className="bg-gray-400"
                    value={state}
                    onChange={(e) => setState(parseInt(e.target.value) || 0)}
                    min={0}
                />
                <button onClick={() => setState(++state)}>+</button>
            </div>
        </div>
    );
}
