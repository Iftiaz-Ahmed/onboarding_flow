import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    aboutMe: {type: String},
    birthdate: {type: Date},
    address: {type: Object},
    activeStep: {type: Number}
})

const userModel = mongoose.models.users || mongoose.model("users", userSchema)

export default userModel