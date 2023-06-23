import { db as firestore } from "./firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  where,
  collectionGroup,
} from "firebase/firestore";

export const sendMessage = async (chatroomId, user, msg) => {
  console.log(chatroomId, user, msg, "jelelelelel");
  try {
    const data = await addDoc(
      collection(firestore, "chatRooms", chatroomId, "texts"),
      {
        userId: user.uid,
        username: user.displayName,
        email: user.email,
        picture: user.picture || "",
        message: msg.trim(),
        timestamp: serverTimestamp(),
      }
    );
    console.log(data, "dataaaaaaaaaaaaaa");
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getMsgs = async (roomId) => {
  // console.log(roomId, cb, "clllclclc");
  // const data = []
  try {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, "chatRooms", roomId, "texts"),
        orderBy("timestamp", "asc")
      )
    );

    const messages = await querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return messages;
  } catch (error) {
    console.log(error, "errorororororer");
  }
};

export const fetchChatRooms = async () => {
  try {
    const q = query(
      collection(firestore, "chatRooms") // Add any additional query conditions as needed
    );
    const querySnapshot = await getDocs(q);
    console.log({ querySnapshot });
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
    // Handle the retrieved documents here or pass them to a callback function
  } catch (error) {
    console.log(error);
  }
};
