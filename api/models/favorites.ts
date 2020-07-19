import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    coAuthors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Favorites = mongoose.model('Favorite', favoriteSchema);

export default Favorites;
