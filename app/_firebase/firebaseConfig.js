import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXD3F6UhSms32TpZJyU7KT8NlBuUmYQZY",
    authDomain: "m322-zoo-4385f.firebaseapp.com",
    projectId: "m322-zoo-4385f",
    storageBucket: "m322-zoo-4385f.appspot.com",
    messagingSenderId: "793866227423",
    appId: "1:793866227423:web:84b141b8284fd7c652236a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        if (auth.currentUser) {
            resolve(auth.currentUser);
        }
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
};

export const isUserAdmin = () => {
    return new Promise((resolve, reject) => {
        if (auth.currentUser) {
            getDoc(doc(db, "admins", auth.currentUser.uid)).then((doc) => {
                if (doc.exists()) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        }
    });
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const usersCollection = collection(db, "users");
const ticketsCollection = collection(db, "tickets");
const adminsCollection = collection(db, "admins");

export { auth, provider, db, usersCollection, ticketsCollection };
export default app;
