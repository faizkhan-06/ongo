import { Driver } from '../models/driver.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// Function to create a new driver
const createDriver = asyncHandler(async (req, res) => {
    try {
      // Extract driver data from request body
      const { location, date, time, seatCount, vehicleType, price, payment } = req.body;
      
      const existingUser = await User.findById(req.user?._id).select("-password")
      // Validate required fields
      if (!location || !date || !time || !seatCount || !vehicleType || !price || !payment) {
        return res.status(400).json({ message: "Missing required fields!" });
      }
  
      // Check if user exists (assuming User model validation handles this)
      if (!existingUser) {
        return res.status(400).json({ message: "Invalid user provided!" });
      }
  
      // Create a new driver instance
      const driver = new Driver({
        user: existingUser,
        location,
        date,
        time,
        seatCount,
        vehicleType,
        price,
        payment,
      });
  
      // Save the driver to MongoDB
      const savedDriver = await driver.save();
  
      return res.status(201).json({ message: "Driver created successfully!", data: savedDriver });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating driver!" });
    }
  }
  )

  
export {
  createDriver,
};