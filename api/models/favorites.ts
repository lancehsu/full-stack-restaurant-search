import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
});

const favoriteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  list: [categorySchema],
});

const Favorites = mongoose.model('Favorite', favoriteSchema);

export default Favorites;
