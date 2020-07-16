import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: '',
    },
  }
  // {
  //   usePushEach: true,
  // }
);

UserSchema.plugin(passportLocalMongoose);
const Users = mongoose.model('User', UserSchema);
export default Users;
