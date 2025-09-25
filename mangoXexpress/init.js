
const mongoose = require("mongoose");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

const Chat = require("./models/chat.js");


let allChats = [
    {
        from : "Lucus",
        to : "Max",
        msg : "hey Max! How are you.",
        checked_at : new Date()

    },
    {
        from : "Nancy",
        to : "Steve",
        msg : "You have beautiful hair Steve!",
        checked_at : new Date()

    },
    {
        from : "E11",
        to : "Will",
        msg : "how are you?",
        checked_at : new Date()

    },
    {
        from : "Steve",
        to : "Max",
        msg : "hey Max! How was it going.",
        checked_at : new Date()

    },
    {
        from : "Will",
        to : "Dustin",
        msg : "Dustin you are too funny!",
        checked_at : new Date()

    }
];


Chat.insertMany(allChats).
then((res) => {
    console.log(res);
})
