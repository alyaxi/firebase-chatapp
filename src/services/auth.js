import { auth, provider } from "../services/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    console.log(res, "usererrerere");
    const { user } = res;
    return {
      uid: user.uid,
      displayName: user.displayName,
      picture: user.photoURL,
      email: user.email,
    };
  } catch (error) {
    console.log({ error });
  }
};
