import { User, signOut } from "firebase/auth";
import { deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, ticketsCollection, usersCollection } from "../_firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button } from "@nextui-org/react";

export default function DeleteAccountButton({ user }: { user: User }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function handleDeleteAccount() {
        await signOut(auth);
        await deleteDoc(doc(usersCollection, user?.uid));

        getDocs(query(ticketsCollection, where("user_id", "==", user?.uid))).then(
            (ticketsDocs) =>
                ticketsDocs.forEach(
                    async (ticketDoc) =>
                        await deleteDoc(doc(ticketsCollection, ticketDoc.id))
                )
        );

        router.push("/");
    }

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Delete Account</button>
            <Modal size="sm" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Are you sure you want to permanently delete your account?
                            </ModalHeader>
                            <ModalFooter>
                                <Button color="default" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={() => handleDeleteAccount()}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
