import mongoose ,{ Schema }from "mongoose";
import {User} from '../models/user.model.js';

// Define the schema
const riderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  location: {
    type: [String],
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  seatCount: {
    type: Number,
    required: true
  }
});

// Define the model
export const Rider = mongoose.model('Rider', riderSchema);

