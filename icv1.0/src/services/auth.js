import { auth, googleAuthProvider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = async () => {
    let user;
    await signInWithPopup(auth, googleAuthProvider).then((result) => {
        console.log(result.user)
        user = result.user;
    }).catch((err) => {
        console.error(err.message);
    });

    return user;
}

export const logout = async () => {
    let logout_success;
    await auth.signOut().then(() => {
        logout_success = true;
    }).catch((error) => {
        console.error(error.message);

    })
    return logout_success;
}