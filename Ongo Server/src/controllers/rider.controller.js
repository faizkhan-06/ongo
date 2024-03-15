import { asyncHandler } from '../utils/asyncHandler.js';
import {Rider} from '../models/rider.model.js';
import { User } from '../models/user.model.js';

const createRider = asyncHandler(async (req, res) => {
    try {
      // Extract rider data from request body (assuming EJS template form submission)
      const {location, date, time, seatCount } = req.body;
  
      // Validate required fields
      if (!location || !date || !time || !seatCount) {
        return res.status(400).json({ message: 'Missing required fields!' });
      }
  
      // Check if user exists (assuming User model validation handles this)
      const existingUser = await User.findById(req.user?._id).select("-password")
      console.log(existingUser);
      if (!existingUser) {
        return res.status(400).json({ message: 'Invalid user provided!' });
      }
  
      // Create a new Rider instance
      const rider = new Rider({
        user : existingUser,
        location,
        date,
        time,
        seatCount,
      });
  
      // Save the rider to MongoDB
      const savedRider = await rider.save();
  
      // Success response (assuming EJS rendering or API response)
      return res.status(201).json({ message: 'Rider created successfully!', data: savedRider });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating rider!' });
    }
  })



export {
  createRider,
};
