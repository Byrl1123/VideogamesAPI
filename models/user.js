import mongoose from 'mongoose';
const { Schema, model} = mongoose;

// Definicion del esquema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});



const User = mongoose.model('User', userSchema);
export default User;

userSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject();
    return user;
}