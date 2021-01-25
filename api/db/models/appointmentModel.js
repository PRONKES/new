var mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "activity",
    required: true
  },
  appointmentDate: { type: String, required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: "place", required: true },
  numberOfPeople: { type: Number, required: true },
  price: { type: Number },
  payed: { type: Boolean }
});

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports.Appointment = Appointment;
