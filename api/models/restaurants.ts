import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  0: { open: Number, close: Number },
  1: { open: Number, close: Number },
  2: { open: Number, close: Number },
  3: { open: Number, close: Number },
  4: { open: Number, close: Number },
  5: { open: Number, close: Number },
  6: { open: Number, close: Number },
});

const Restaurants = mongoose.model('Restaurant', restaurantSchema);

export default Restaurants;
