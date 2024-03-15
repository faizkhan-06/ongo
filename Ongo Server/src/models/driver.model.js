import mongoose, { Schema } from "mongoose";
import { User } from "./user.model.js";

// Define the schema
const driverSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  location: {
    type: [Number],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seatCount: {
    type: Number,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,
    enum: ["Cash"],
    required: true,
  },
});

// Define the model
export const Driver = mongoose.model("Driver", driverSchema);

