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

export const getMsgs = (roomId) => {
  return new Promise((resolve, reject) => {
    try {
      const q = query(
        collection(firestore, "chatRooms", roomId, "texts"),
        orderBy("timestamp", "asc")
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

    

        // console.log(, "dataaaa");
        resolve(data); 
      });
    } catch (error) {
      console.log(error, "errorororororer");
      reject(error); 
    }
  });
};


export const fetchChatRooms = async () => {
  try {
    const q = query(
      collection(firestore, "chatRooms")
    );
    const querySnapshot = await getDocs(q);
    console.log({ querySnapshot });
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;

  } catch (error) {
    console.log(error);
  }
};
