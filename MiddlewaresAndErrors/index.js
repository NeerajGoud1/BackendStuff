const express = require("express");
const app = express();

const CustomError = require("./customError.js");

const checktoken = (req, res, next) => {
  // this is user defined error which has own message.
  let { token } = req.query;
  if (token === "give") {
    return next();
  }
  next(new CustomError(303, "ACCESS DENIED!"));// or throw new CustomError(303, "ACCESS DENIED!")
};

app.get("/hi", checktoken, (req, res) => {
  res.send("Hello World!");
});

// app.use((err, req, res, next) => {
//   console.log("ERROR");
//   next(err); // this normal next() without any parameter will searches for non error-handling middleware.. if with err parameter it actually seraches for next error handling middleware if there no middleware exist it triggers express default error handler
// });

// app.use((err, req, res, next) => {
//   //handling basic error without incling any status code
//   console.log(err);
//   let { message } = err;
//   res.send(message);
// });

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err; //providing default values ensures if the error generated from somewhere that you have not thrown then status code will be undefined and status code undefined is itself is an error.
  res.status(status).send(message);
});

app.listen(8080, (req, res) => {
  console.log("server is listening to port 8080");
});
