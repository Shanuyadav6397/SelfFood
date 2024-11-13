import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name should be at least 2 characters long"],
    },
    gmail: {
        type: String,
        required: [true, "Gmail address is required"],
        trim: true,
        lowercase: true,
        match: [/.+@gmail\.com$/, "Please enter a valid Gmail address"], // Ensures it matches Gmail format
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid Gmail address"], // Ensures it matches Gmail format
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        trim: true,
        minlength: [10, "Message should be at least 10 characters long"],
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
