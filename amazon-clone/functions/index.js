const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQEDXGLqz0xmg62boxegD5EMxMam0fzEzldDmsvOrwIM3EXwj2hnZcAaadcgAT3NQiZtVu2086hw1fbr1jQ2Oso00yWmabpNe"
);
//API

//App config
const app = express();
//Midleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Created - 201
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-efe6b/us-central1/api
