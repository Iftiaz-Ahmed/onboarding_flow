import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    secondStep: {type: Array, required: true},
    thirdStep: {type: Array, required: true}
})

const componentModel = mongoose.models.components || mongoose.model("components", componentSchema)

export default componentModel