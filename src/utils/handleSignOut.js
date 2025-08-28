import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const handleSignOut = () => {
    signOut(auth).then(() => {
            /* Sign-out successful. */
    }).catch((error) => {
            /* An error happened. */
    });
}

export default handleSignOut;