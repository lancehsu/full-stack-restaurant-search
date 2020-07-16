import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mon: [Number, Number],
  tue: [Number, Number],
  wed: [Number, Number],
  thu: [Number, Number],
  fri: [Number, Number],
  sat: [Number, Number],
  sun: [Number, Number],
});

const Restaurants = mongoose.model('Restaurant', restaurantSchema);

export default Restaurants;
