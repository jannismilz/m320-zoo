import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Button,
    ModalBody,
} from "@nextui-org/react";
import { TFirestoreTicket } from "../_types/types";

export default function TicketModal({
    ticket,
    isOpen,
    closeModal,
}: {
    ticket: TFirestoreTicket;
    isOpen: boolean;
    closeModal: () => void;
}) {
    const dayInMilliseconds = 24 * 60 * 60 * 1000;

    return (
        <Modal
            size="sm"
            placement="bottom-center"
            isOpen={isOpen}
            onClose={() => closeModal()}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Ticket #{ticket.id}
                        </ModalHeader>
                        <ModalBody>
                            <ul>
                                <li>
                                    {ticket.date > +new Date() - dayInMilliseconds
                                        ? "VALID"
                                        : "EXPIRED"}
                                </li>
                                <li>
                                    {new Date(ticket.date).toLocaleDateString("de-De")}
                                </li>
                                <li>{ticket.firstname}</li>
                                <li>{ticket.lastname}</li>
                                <li>{ticket.email}</li>
                            </ul>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
