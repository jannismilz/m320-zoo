import { TUser } from "../_types/types";
import { User } from "firebase/auth";
import getAvatarImage from "../_helpers/getAvatarImage";
import Image from "next/image";

export default function ProfileBanner({ user, userDoc }: { user: User; userDoc: TUser }) {
    function unixConvertToDateTimeString(unix: number) {
        const date = new Date(unix);

        const year = date.getFullYear();
        const month = date.toLocaleString("en-US", { month: "long" });
        const day = ("0" + date.getDate()).slice(-2);
        const weekday = date.toLocaleString("en-US", { weekday: "short" });

        const hour = ("0" + date.getHours()).slice(-2);
        const minute = ("0" + date.getMinutes()).slice(-2);
        const second = ("0" + date.getSeconds()).slice(-2);

        return `${weekday} ${day}.${month} ${year},  ${hour}:${minute}:${second}`;
    }

    return (
        <div className="flex gap-4">
            <Image
                className="rounded-full"
                src={getAvatarImage(user, "192")}
                width={192}
                height={192}
                alt="Profile image"
            />
            <div className="p-4">
                <h1 className="text-5xl">{user.displayName}</h1>
                <p className="text-lg">{user.email}</p>
                <p className="text-lg">
                    Joined at: {unixConvertToDateTimeString(userDoc.created_at!)}
                </p>
                <p className="text-lg">
                    Last online at: {unixConvertToDateTimeString(userDoc.updated_at!)}
                </p>
            </div>
        </div>
    );
}
