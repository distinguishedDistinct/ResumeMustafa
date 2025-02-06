const mongoose = require('mongoose');

const formModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  company: {
    type: String,
    trim: true,
  },
  years: {
    type: Number,
    min: 1,
  },
  service: {
    type: String,
    enum: ["Web Development", "Graphic Design", "UI/UX Design", "Logo Design"],
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
}, {
  timestamps: true,
  collection: "form"
});

export const Form = mongoose.models.form || mongoose.model("form", formModel)
