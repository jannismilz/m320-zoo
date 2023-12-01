"use client";

import { useState } from "react";
import { ETicketType, TTicket } from "../_types/types";
import TicketAmountSelector from "../_components/TicketAmountSelector";
import TicketTypeSelector from "../_components/TicketTypeSelector";
import Input from "../_components/Input";
import { useAuth } from "../_hooks/useAuth";
import { addDoc } from "firebase/firestore";
import { ticketsCollection } from "../_firebase/firebaseConfig";
import TicketDateSelector from "../_components/TicketDateSelector";
import { useRouter } from "next/navigation";

export default function Tickets() {
    const { user } = useAuth();
    const router = useRouter();

    const [date, setDate] = useState("");
    const [kidTickets, setKidTickets] = useState(0);
    const [adultTickets, setAdultTickets] = useState(0);
    const [ticketType, setTicketType] = useState<ETicketType>(ETicketType.DAYPASS);
    const [next, setNext] = useState(false);

    const [useLoggedInUser, setUseLoggedInUser] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    // TODO: Add purchase email

    async function handlePurchase() {
        const ticketData: TTicket = {
            date: +new Date(date),
            kidsAmount: kidTickets,
            adultsAmount: adultTickets,
            type: ticketType,
            created_at: +new Date(),
        };

        if (useLoggedInUser) {
            ticketData.userId = user?.uid;
        } else {
            ticketData.firstName = firstname;
            ticketData.lastName = lastname;
            ticketData.email = email;
        }

        const ticketDoc = await addDoc(ticketsCollection, ticketData);
        router.push(`/tickets/${ticketDoc.id}`);
    }

    return (
        <div>
            <TicketDateSelector state={date} setState={setDate} />
            <TicketAmountSelector
                name="Kids"
                state={kidTickets}
                setState={setKidTickets}
            />
            <TicketAmountSelector
                name="Adults"
                state={adultTickets}
                setState={setAdultTickets}
            />
            <TicketTypeSelector state={ticketType} setState={setTicketType} />
            <button
                className={`${next ? "hidden" : "block"}`}
                onClick={() => setNext(true)}
            >
                Next
            </button>
            <div className={`${next ? "block" : "hidden"} flex flex-col`}>
                <hr />
                <button onClick={() => setUseLoggedInUser(!useLoggedInUser)}>
                    {useLoggedInUser
                        ? "Using logged in. Click to enter information manually"
                        : "Use logged in user"}
                </button>
                <div className={`${useLoggedInUser ? "hidden" : "block"} flex flex-col`}>
                    <Input
                        name="Firstname"
                        state={firstname}
                        setState={setFirstname}
                        placeholder="Firstname"
                    />
                    <Input
                        name="Lastname"
                        state={lastname}
                        setState={setLastname}
                        placeholder="Lastname"
                    />
                    <Input
                        name="Email"
                        state={email}
                        setState={setEmail}
                        placeholder="Email"
                        email
                    />
                </div>
                <button onClick={() => handlePurchase()}>Purchase</button>
            </div>
        </div>
    );
}
