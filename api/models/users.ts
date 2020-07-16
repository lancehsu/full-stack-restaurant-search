import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
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
