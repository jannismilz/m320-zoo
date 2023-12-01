import { User, signOut } from "firebase/auth";
import { deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import {
    auth,
    db,
    ticketsCollection,
    usersCollection,
} from "../_firebase/firebaseConfig";
import { useRouter } from "next/navigation";

export default function DeleteAccountButton({ user }: { user: User }) {
    const router = useRouter();

    async function handleDeleteAccount() {
        await signOut(auth);
        await deleteDoc(doc(usersCollection, user?.uid));

        getDocs(query(ticketsCollection, where("userId", "==", user?.uid))).then(
            (ticketsDocs) =>
                ticketsDocs.forEach(
                    async (ticketDoc) =>
                        await deleteDoc(doc(ticketsCollection, ticketDoc.id))
                )
        );

        router.push("/");
    }

    return <button onClick={() => handleDeleteAccount()}>Delete Account</button>;
}
