import { ETicketType } from "../_types/types";

export default function TicketTypeSelector({
    state,
    setState,
}: {
    state: number;
    setState: (value: number) => void;
}) {
    return (
        <div>
            <div>
                <label
                    htmlFor={`ticketType-${ETicketType.DAYPASS}`}
                    onClick={() => setState(ETicketType.DAYPASS)}
                >
                    <input
                        type="radio"
                        name={`ticketType-${ETicketType.DAYPASS}`}
                        className="mr-2"
                        checked={state === ETicketType.DAYPASS}
                        onChange={() => setState(ETicketType.HALFDAYPASS)}
                    />
                    Daypass
                </label>
            </div>

            <div>
                <label
                    htmlFor={`ticketType-${ETicketType.HALFDAYPASS}`}
                    onClick={() => setState(ETicketType.HALFDAYPASS)}
                >
                    <input
                        type="radio"
                        name={`ticketType-${ETicketType.HALFDAYPASS}`}
                        className="mr-2"
                        checked={state === ETicketType.HALFDAYPASS}
                        onChange={() => setState(ETicketType.HALFDAYPASS)}
                    />
                    Halfdaypass
                </label>
            </div>
        </div>
    );
}
