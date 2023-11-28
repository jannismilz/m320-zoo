import { User } from "firebase/auth";

export default function getAvatarImage(user: User, size: string = "32") {
    const photoURL = user.photoURL;
    if (photoURL) {
        return photoURL.replace("s96-c", `s${size}-c`);
    } else {
        return encodeURI(
            `https://ui-avatars.com/api/?name=${user.displayName}&size=${size}`
        );
    }
}
