const mongoose = require("mongoose");


main()                    // handling aynchronously 
   .then(() => {
    console.log("connection successful");
   })
   .catch((err) => {
   console.log(err);
   })


async function main(){         // making connection with mongodb
     await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// const userSchema = new mongoose.Schema({  // defining a shema to collections
//     name : String,
//     email : String,
//     age : Number
// });


//const User = mongoose.model("User", userSchema);  //converting defined schema into actual collection by creating a model named User which is now acts as a class fro which objects are created called docs


// User.insertMany([     //this is also returns a promise
//     {name : "Luci", email : "luci@gmail.com", age : 21},
//     {name : "Dustin" , email: "dustin@gmail.com", age : 22},
// ]);





// const user2 = new User({
//     name : "Eve",
//     email : "Eve@gmail.com",
//     age: 20
// });

// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })




// User.find({}).then((res) => { // finding data from which is same like db.collection.find() but it returns query obj and you can use then on it.
//     console.log(res);
// })  
//there are so many specific methods to find. just explore in mongooshsazejs.com





//update

// User.updateOne({name: "Dustin"}, {age: 100})
// .then((res) => {
//     console.log(res);
// });

// User.findByIdAndUpdate("672334e80c57fe122759a078" , { age : 18}, {new : true})
// .then((res) => {
//     console.log(res);
// });


//working with schema validations

const bookSchema = new mongoose.Schema({
    title : {
        type :String,
        lowercase : true
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        min : [100, "price penchu bayya"]
    },
    categiry : {
       type : String,
       enum : ["comedy", "biography"]
    }
});


const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("67235d491584321e23a196c7", {price : 2}, {runValidators : true})
.then((res) => {
    console.log(res);
}).catch((err) => {

    console.log(err.errors.price.properties.message);
})


// const book1 = new Book({
//     title : "THRESHOLD",
//     author : "greed",
//    price : 200,
//    categiry : "comics"
// });

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


