const mongoose = require("mongoose");
const { Schema } = mongoose;

main();

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    console.log("connected to DB successfully");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

const orderSchema = new Schema({
  item: { type: String },
  price: { type: Number },
});

const customerSchema = new Schema({
  name: { type: String },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);
const Order = mongoose.model("Order", orderSchema);

const addCust = async () => {
  try {
    let cust1 = new Customer({
      name: "ramesh",
    });

    let order1 = new Order({
      item: "pizza",
      price: 250,
    });

    // Save the Order
    await order1.save();

    // Push the ObjectId
    cust1.orders.push(order1._id);

    // Save the Customer
    await cust1.save();

    console.log("Added new customer with order");
  } catch (err) {
    console.error("Error adding customer or order:", err);
  }
};

addCust();
