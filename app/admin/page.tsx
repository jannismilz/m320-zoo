"use client";

import { useEffect, useState } from "react";
import { TUser } from "../_types/types";
import UserEntry from "../_components/UserEntry";
import { getDocs, query } from "firebase/firestore";
import { adminsCollection, usersCollection } from "../_firebase/firebaseConfig";

export default function Admin() {
    const [users, setUsers] = useState<TUser[] | []>([]);

    useEffect(() => {
        let adminUsers: string[] = [];
        getDocs(query(adminsCollection)).then((admins) => {
            admins.forEach((admin) => {
                // Admin id is his email address
                adminUsers.push(admin.id);
            });
        });

        getDocs(query(usersCollection)).then((users) => {
            const userObjects = users.docs.map((user) => {
                const userIsAdmin = adminUsers.includes(user.data().email);
                return { id: user.id, ...user.data(), is_admin: userIsAdmin } as TUser;
            });
            setUsers(userObjects);
        });
    }, []);

    return (
        <main>
            <h1 className="text-3xl font-bold">Admin User Management</h1>
            <hr className="my-4" />
            <table className="w-full">
                <tr className="text-left">
                    <th>ID</th>
                    <th>Display name</th>
                    <th>Joined at</th>
                    <th>Role</th>
                    <th></th>
                </tr>
                {users.map((user) => {
                    return <UserEntry user={user} />;
                })}
            </table>
        </main>
    );
}
