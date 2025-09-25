const Chat = require("./chat");

const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

let chats = [
  {
    from: "Neeraj",
    to: "Rahul",
    msg: "Hey Rahul, how's it going?",
    checked_at: "2024-12-28T09:00:00Z",
  },
  {
    from: "Rahul",
    to: "Neeraj",
    msg: "All good! What about you?",
    checked_at: "2024-12-28T09:01:00Z",
  },
  {
    from: "Priya",
    to: "Aditi",
    msg: "Are you ready for the presentation?",
    checked_at: "2024-12-28T08:30:00Z",
  },
  {
    from: "Aditi",
    to: "Priya",
    msg: "Yes, almost done.",
    checked_at: "2024-12-28T08:32:00Z",
  },
  {
    from: "Arjun",
    to: "Kavya",
    msg: "Lunch today?",
    checked_at: "2024-12-28T12:00:00Z",
  },
  {
    from: "Kavya",
    to: "Arjun",
    msg: "Sure! What time?",
    checked_at: "2024-12-28T12:02:00Z",
  },
  {
    from: "Sanjay",
    to: "Divya",
    msg: "Can you send me the files?",
    checked_at: "2024-12-28T10:15:00Z",
  },
  {
    from: "Divya",
    to: "Sanjay",
    msg: "Already emailed them.",
    checked_at: "2024-12-28T10:20:00Z",
  },
  {
    from: "Rohan",
    to: "Sneha",
    msg: "What's the plan for tonight?",
    checked_at: "2024-12-27T21:30:00Z",
  },
  {
    from: "Sneha",
    to: "Rohan",
    msg: "Let's go out for dinner.",
    checked_at: "2024-12-27T21:35:00Z",
  },
  {
    from: "Kiran",
    to: "Meera",
    msg: "Did you see the match yesterday?",
    checked_at: "2024-12-28T07:50:00Z",
  },
  {
    from: "Meera",
    to: "Kiran",
    msg: "Yes! What a game!",
    checked_at: "2024-12-28T07:55:00Z",
  },
  {
    from: "Nikhil",
    to: "Ananya",
    msg: "Need help with the project.",
    checked_at: "2024-12-28T06:00:00Z",
  },
  {
    from: "Ananya",
    to: "Nikhil",
    msg: "Sure! Let's discuss it later.",
    checked_at: "2024-12-28T06:05:00Z",
  },
  {
    from: "Amit",
    to: "Pooja",
    msg: "When is the team meeting?",
    checked_at: "2024-12-28T14:30:00Z",
  },
  {
    from: "Pooja",
    to: "Amit",
    msg: "At 3 PM in the conference room.",
    checked_at: "2024-12-28T14:32:00Z",
  },
  {
    from: "Akash",
    to: "Manisha",
    msg: "Happy Birthday!",
    checked_at: "2024-12-28T00:01:00Z",
  },
  {
    from: "Manisha",
    to: "Akash",
    msg: "Thank you so much!",
    checked_at: "2024-12-28T00:05:00Z",
  },
  {
    from: "Rohit",
    to: "Shivani",
    msg: "Can we reschedule our meeting?",
    checked_at: "2024-12-28T11:30:00Z",
  },
  {
    from: "Shivani",
    to: "Rohit",
    msg: "Yes, what time works for you?",
    checked_at: "2024-12-28T11:35:00Z",
  },
  {
    from: "Varun",
    to: "Alia",
    msg: "What's your favorite movie?",
    checked_at: "2024-12-28T18:20:00Z",
  },
  {
    from: "Alia",
    to: "Varun",
    msg: "Inception! What's yours?",
    checked_at: "2024-12-28T18:22:00Z",
  },
  {
    from: "Harish",
    to: "Tanya",
    msg: "Can you share the notes?",
    checked_at: "2024-12-28T17:00:00Z",
  },
  {
    from: "Tanya",
    to: "Harish",
    msg: "Sure, will do it by evening.",
    checked_at: "2024-12-28T17:05:00Z",
  },
  {
    from: "Gaurav",
    to: "Ishita",
    msg: "Can we talk?",
    checked_at: "2024-12-28T15:45:00Z",
  },
  {
    from: "Ishita",
    to: "Gaurav",
    msg: "Yes, call me in 10 minutes.",
    checked_at: "2024-12-28T15:50:00Z",
  },
  {
    from: "Vikas",
    to: "Sunita",
    msg: "Are you joining the event?",
    checked_at: "2024-12-28T19:00:00Z",
  },
  {
    from: "Sunita",
    to: "Vikas",
    msg: "Yes, I'll be there!",
    checked_at: "2024-12-28T19:05:00Z",
  },
  {
    from: "Aditya",
    to: "Rhea",
    msg: "Can you help with my assignment?",
    checked_at: "2024-12-28T13:10:00Z",
  },
  {
    from: "Rhea",
    to: "Aditya",
    msg: "Sure! Send me the details.",
    checked_at: "2024-12-28T13:15:00Z",
  },
  {
    from: "Neeraj",
    to: "Sneha",
    msg: "Is the package delivered?",
    checked_at: "2024-12-28T16:00:00Z",
  },
  {
    from: "Sneha",
    to: "Neeraj",
    msg: "Not yet. Will let you know.",
    checked_at: "2024-12-28T16:05:00Z",
  },
  {
    from: "Aditi",
    to: "Arjun",
    msg: "Can you pick me up?",
    checked_at: "2024-12-28T10:40:00Z",
  },
  {
    from: "Arjun",
    to: "Aditi",
    msg: "Sure! Be ready by 5 PM.",
    checked_at: "2024-12-28T10:45:00Z",
  },
  {
    from: "Meera",
    to: "Divya",
    msg: "What time is the movie?",
    checked_at: "2024-12-27T20:00:00Z",
  },
  {
    from: "Divya",
    to: "Meera",
    msg: "7:30 PM.",
    checked_at: "2024-12-27T20:05:00Z",
  },
  {
    from: "Rahul",
    to: "Kiran",
    msg: "What did the teacher say?",
    checked_at: "2024-12-28T09:20:00Z",
  },
  {
    from: "Kiran",
    to: "Rahul",
    msg: "Assignment deadline is extended.",
    checked_at: "2024-12-28T09:25:00Z",
  },
  {
    from: "Pooja",
    to: "Amit",
    msg: "Is the report ready?",
    checked_at: "2024-12-28T14:00:00Z",
  },
  {
    from: "Amit",
    to: "Pooja",
    msg: "Yes, just sent it.",
    checked_at: "2024-12-28T14:05:00Z",
  },
  {
    from: "Nikhil",
    to: "Tanya",
    msg: "Free for a quick call?",
    checked_at: "2024-12-28T13:30:00Z",
  },
  {
    from: "Tanya",
    to: "Nikhil",
    msg: "Yes, calling now.",
    checked_at: "2024-12-28T13:32:00Z",
  },
  {
    from: "Alia",
    to: "Varun",
    msg: "Are we going to the beach tomorrow?",
    checked_at: "2024-12-27T18:00:00Z",
  },
  {
    from: "Varun",
    to: "Alia",
    msg: "Yes! Can't wait!",
    checked_at: "2024-12-27T18:05:00Z",
  },
  {
    from: "Manisha",
    to: "Harish",
    msg: "Need to discuss something important.",
    checked_at: "2024-12-28T11:10:00Z",
  },
];

async function intialize() {
  await Chat.deleteMany({});
  await Chat.insertMany(chats);
  console.log("data initialized successfully");
}

intialize();
