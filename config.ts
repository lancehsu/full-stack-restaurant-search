require('dotenv').config()

export default {
  SECRET_KEY: process.env.SECRET_KEY,
  MONGO_URL: process.env.MONGO_URL,
  PORT: 8000,
};
