const mongoose = require("mongoose");
const { Appointment } = require("../models/appointmentModel");
var { Activity } = require("../models/activityModel");

let controler = {
  create: async (obj, callbacks) => {
    let { user, appointmentDate, place, numberOfPeople, activity } = obj;
    let actv = await Activity.findOne({ _id: activity });
    let price = actv.price * numberOfPeople;
    const app = new Appointment({
      user,
      appointmentDate,
      place,
      numberOfPeople,
      activity,
      price
    });
    app.save(callbacks);
  },
  read: (user, callbacks) => {
    let obj = user ? { user } : {};
    Appointment.find(obj)
      .populate("activity", "image description")
      .populate("place", "title")
      .exec(callbacks);
  },
  readOne: async id => {
    let appointment = await Appointment.findOne({
      _id: id
    }).exec();
    console.log({ appointment });
    return appointment;
  },
  update: (id, obj) => {
    return Appointment.findOneAndUpdate({ _id: id }, obj);
  },
  delete: (id, callback) => {
    Appointment.findByIdAndRemove({ _id: id }).exec(callback);
  }
};
module.exports = controler;
