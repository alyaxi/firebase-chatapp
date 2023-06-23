
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

admin.initializeApp();

const app = express();

app.post("/createChatRoom", async (req, res) => {
  try {
    const {chatRoomName} = req.body;
    const chatRoomRef = admin.firestore().collection("chatRooms").doc();
    await chatRoomRef.set({name: chatRoomName});
    res.status(200).send({message: "Chat room created successfully"});
  } catch (error) {
    console.error("Error creating chat room:", error);
    res.status(500).send({error: " An error occured "});
  }
});

exports.api = functions.https.onRequest(app);
