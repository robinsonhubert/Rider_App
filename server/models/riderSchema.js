const mongoose = require("mongoose");
const validator = require("validator")

const riderSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        default: null,
    },
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("Not a valid Email")
            }
        }
    },
    Position: {
        type: String,
        required: true,
        trim: true
    },
    NRIC: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    Status: Boolean,
    Image: String,
    cloudinary_id: String,
    datecreated:Date,
    dateUpdated:Date
})

module.exports = mongoose.model("Riders", RiderSchema)