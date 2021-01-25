var express = require("express");
var appointmentControle = require("../db/controllers/appointmentControle.js");
var placeControle = require("../db/controllers/placeControle.js");
const exphbs = require("express-handlebars");
var smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer");
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
var router = express.Router();
const stripe = require("stripe")(stripeSecretKey);


router.route("/").post(async function(req, res) {
  appointmentControle.create(
    { ...req.body, user: req.user.id },
    (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    }
  );
  const output = `
    <p>You have a new reservation</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>User: ${req.user.email}</li>
      <li>Appointment Date: ${req.body.appointmentDate}</li>
      <li>Place: ${req.body.place_title}</li>
      <li>Number Of People: ${req.body.numberOfPeople}</li>
    </ul>
  `;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "escapercompany@gmail.com",
      pass: "escaperrbk2021"
    }
  });

  var mailOptions = {
    from: "escapercompany@gmail.com",
    to:
      "messaoudighofrane2@gmail.com , dhiadhaferr@gmail.com , ahmedbouhrira365@gmail.com  ",
    subject: "Appointment for ESCAPER",
    text: "NEW RESERVATION",
    html: output
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send({ error });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ info });
    }
  });
});

router.route("/").get(function(req, res) {
  if (req.user.type === "admin" && !!req.query.all) {
    appointmentControle.read(false, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } else {
    appointmentControle.read(req.user._id, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  }
});
router.route("/:id").put(async function(req, res) {
  debugger;
  try {
    let appointment = await appointmentControle.readOne(req.params.id);
    await stripe.charges.create({
      amount: appointment.price * 100,
      source: req.body.stripeTokenId,
      currency: "usd"
    });
    await appointmentControle.update(req.params.id, { payed: true });
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false });
  }
});
router.route("/:id").delete((req, res) => {
  appointmentControle.delete(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

module.exports = router;
