import { Modal, ModalContent, ModalHeader, ModalFooter, Button } from "@nextui-org/react";

export default function TicketNotFoundModal({
    isOpen,
    closeModal,
}: {
    isOpen: boolean;
    closeModal: () => void;
}) {
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
                            Ticket QR code is invalid or ticket was not found.
                        </ModalHeader>
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
