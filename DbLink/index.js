const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const express = require("express");
const app = express();
const path = require("path");

//to work with patch request
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//creating connection object
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta",
  password: "Neeraj@6637",
});

//returns a random data using faker
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//home route
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";
  try {
    conn.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]["COUNT(*)"]);
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error ocurred");
  }
});

//shows users info route
app.get("/user", (req, res) => {
  let q = "SELECT id,username,email from user";
  try {
    conn.query(q, (err, result) => {
      if (err) throw err;
      res.render("showusers.ejs", { result });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user where id ='${id}'`;
  try {
    conn.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      //console.log(result[0]);
      res.render("editform.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user where id ='${id}'`;
  let { password: formPass, username: newUsername } = req.body;

  try {
    conn.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG PASSWORD");
      } else {
        let q2 = `UPDATE user SET username ='${newUsername}' WHERE id='${id}'`;
        conn.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    res.send("some error occured");
  }
});

//reder a form to add new user
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

//insert new user
app.post("/user/new", (req, res) => {
  let { id, username, password, email } = req.body;
  let q = `INSERT INTO user (id,username,email,password) values (?, ?, ?, ?)`;
  let data = [id, username, email, password];
  try {
    conn.query(q, data, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    res.send("error occured while inserting into DB");
  }
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = `DELETE FROM user WHERE id = '${id}'`;
  try {
    conn.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    res.send("Error while deleting");
  }
});

//making server to start
app.listen("8080", () => {
  console.log("server is listening at port 8080");
});
