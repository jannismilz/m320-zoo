import { TUser } from "../_types/types";

export default function UserEntry({ user }: { user: TUser }) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.displayName}</td>
            <td>
                {user.created_at ? (
                    new Date(user.created_at).toLocaleDateString("de-De")
                ) : (
                    <em>Unknown</em>
                )}
            </td>
            <td>{user.is_admin ? "Admin" : "User"}</td>
            <td>-</td>
        </tr>
    );
}
