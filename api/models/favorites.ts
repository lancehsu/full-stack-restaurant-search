import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    coAuthor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
  },
  { timestamps: true }
);

const Favorites = mongoose.model('Favorite', favoriteSchema);

export default Favorites;
