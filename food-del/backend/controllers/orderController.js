import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = Stripe(
  "sk_test_51LnZSEEiMZAnkmE3l8MTwYGFuUR622PTH7XGnCevGRqefFbNLz3Bh872mtwfdgxzlClLY1oIt1ffiX9MwaMnHwte00K6scB49c"
);
const placeOrder = async (req, res) => {
  const frontdnd_url = "http://localhost:5174";
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    const line_items = req.body.items.map((item) => ({
      price_data: {
        product_data: {
          name: item.name,
        },
        currency: "usd",
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontdnd_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontdnd_url}/verify?success=false`,
    });
    res.json({ succes: true, session_url: session.url });
  } catch (e) {
    console.log("Error " + e);
    res.json({ succes: false, message: `Something went wrong ${e}` });
  }
};

const verfiyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      console.log("Paid and true");
      res.json({ succes: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      console.log("Not Paid and false");

      res.json({ succes: false, message: "Not Paid" });
    }
  } catch (e) {
    console.log(e);
    res.json({ succes: false, message: `Something went wrong ${e}` });
  }
};

//user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ succes: true, data: orders });
  } catch (e) {
    res.json({ succes: false, message: `Something went Wrong ${e}` });
  }
};

//Listing Orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ succes: true, data: orders });
  } catch (e) {
    console.log(e);
    res.json({ succes: false, message: `Some thing went Wrong ${e}` });
  }
};

//api for updating order status
const updateStatus = async (req, res) => {
  try {
    const order = await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    order.save();
    res.send({ succes: true, message: "Status Updated" });
  } catch (e) {
    res.send({ succes: false, message: `Some thing went wrong ${e}` });
  }
};

export { placeOrder, verfiyOrder, userOrders, listOrders, updateStatus };
