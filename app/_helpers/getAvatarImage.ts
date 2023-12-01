import { User } from "firebase/auth";

export default function getAvatarImage(user: User, size: string = "32") {
    const photo_url = user.photo_url;
    if (photo_url) {
        return photo_url.replace("s96-c", `s${size}-c`);
    } else {
        return encodeURI(
            `https://ui-avatars.com/api/?name=${user.display_name}&size=${size}`
        );
    }
}
