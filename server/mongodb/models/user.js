import mongoose from 'mongoose'
 

const UserSchema =new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    avatar:{type:String, required:true},
    allProperties:[{type:mongoose.Schema.Types.ObjectID, ref:'Property'}],
});
const userModel=mongoose.model('user',UserSchema);
export default userModel;
