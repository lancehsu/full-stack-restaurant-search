import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mon: { open: Number, close: Number },
  tue: { open: Number, close: Number },
  wed: { open: Number, close: Number },
  thu: { open: Number, close: Number },
  fri: { open: Number, close: Number },
  sat: { open: Number, close: Number },
  sun: { open: Number, close: Number },
});

const Restaurants = mongoose.model('Restaurant', restaurantSchema);

export default Restaurants;
