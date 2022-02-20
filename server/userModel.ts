import mon, { model, models, Schema, SchemaTypes } from "mongoose";
import  emailValidator from 'email-validator'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 12;
const user = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:3
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength:3
    },
    email:{
        type:String,
        required: true,
        trim:true,
        lowercase:true,
        index:{unique:true},
        validate:{
            validator: emailValidator.validate,
            message: (props:any):string => `${props} is not a valid email address!`
        },
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:8,
        index:{unique:true}
    }
},{timestamps:true})
user.pre('save',async function preSave(next){
    const user = this;
    if(!user.isModified('password')) return next()

    try{
        const hash = await bcrypt.hash(user.password,SALT_ROUNDS)
        user.password= hash;
        return next()
    }catch(e:any){
        console.log(e)
        return next(e)
    }
})

user.methods.comparePassword = async function comparePassword(candidate: string){
    return bcrypt.compare(candidate, this.password);
}

const User = mon.models.User || model('User', user)
export { User }