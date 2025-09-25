const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//for post req
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//establising the mongoose
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

const Chat = require("./models/chat.js");

const sessionOptions = {
  secret: "somescretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success"); //global middleware for creating flash.
  res.locals.failure = req.flash("failure");
  next();
});

//index route..
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

//renders a form to add a new chart
app.get("/chats/new", (req, res) => {
  res.render("form.ejs");
});

//adds new chat
app.post("/chats/add", async (req, res) => {
  let { from, to, msg } = req.body;
  let chat = new Chat({
    from: from,
    to: to,
    msg: msg,
    checked_at: new Date(),
  });

  await chat.save();
  req.flash("success", "chat successfully added");
  res.redirect("/chats");
});

//edit route which renders a form to edit
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let c = await Chat.findById(id);
  if (c) {
    res.render("edit.ejs", { c });
  } else {
    req.flash("failure", "chat does not exist");
    res.redirect("/chats");
  }
});

//edits the message
app.post("/chats/:id", async (req, res) => {
  //here you can handle the data finding fun which is asynchronous with then as well as await
  let { id } = req.params;
  let { msg } = req.body;
  await Chat.findByIdAndUpdate(id, { msg: msg.toString() });
  http: req.flash("success", "chat edited");
  res.redirect("/chats");
});

//detete
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  console.log("deleted sucessfully");
  req.flash("failure", "chat deleted");
  res.redirect("/chats");
});

app.listen(8080, () => {
  console.log("server is listening at port 8080");
});
