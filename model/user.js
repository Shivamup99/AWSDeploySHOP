import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    street:{
        type:String,
        default:''
    },
    apartment:{
        type:String,
        default:''
    },
    city:{
        type:String,
        default:''
    },
    zip:{
        type:Number,
        default:''
    },
    country:{
        type:String,
        default:''
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    image:{
        type:String
    }
},{timestamps:true})

userSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

userSchema.set('toJSON',{
    virtuals:true
})

const userModal = mongoose.model('User',userSchema);
export default userModal;