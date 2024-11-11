import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please provide first Name'],
        minlength: [5, 'first Name must be atleast 5 characters long'],
        maxlength: [20, 'first Name can not greater then 20 characters'],
        trim: true,
        lowercase: true
    },
    midName: {
        type: String,
        maxlength: [20, 'mid Name can not greater then 20 characters'],
        trim: true,
        lowercase: true,
        default: " "
    },
    lastName: {
        type: String,
        required: [true, 'please provide last Name'],
        minlength: [5, 'last Name must be atleast 5 characters long'],
        maxlength: [20, 'last Name can not greater then 20 characters'],
        trim: true,
        lowercase: true
    },
    mobileNumber: {
        type: String,
        trim: true,
        unique: [true, 'Phone number is already in use'],
        minlength: [10, 'mobile number atleast 10 numbers long'],
        maxlength: [10, `mobile number can't greater then 10 numbers`],
        required: [true, 'please provide mobile number']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'please provide email address'],
        unique: [true, 'email is already in use'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'password atleast 6 characters long'],
        maxlength: [20, 'password atleast 20 characters length']
    },
    address: {
        type: String,
        required: [true, 'please provide address'],
        minlength: [10, 'address atleast 10 characters long'],
        trim: true,
        lowercase: true
    }
}, {
    timestamp: true
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  });


const User = mongoose.model("User", userSchema);

export default User;