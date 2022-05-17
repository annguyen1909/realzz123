const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref:'user',
        required: true
    },
    career:{
        type: String,
        required: true
    },
    institutionName: {
        type: String,
        required: true
    },
    startYear: {
        type: Date,
        min: new Date(1930),
        max: new Date(Date.now).getFullYear(),
        default:'',
        required: true,
    },
    endYear: {
        type: Date,
        max: new Date(Date.now).getFullYear(),
        default:'',
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('educationInfo', educationSchema)