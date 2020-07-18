import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
});

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);
export default User;
