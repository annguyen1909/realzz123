const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref:'user',
        required: true
    },
    workPlace: {
        type: String,
        required: true
    },
    workName: {
        type: String,
        default: '',
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
    },
    achievement: {
        type: String,
        default: ''
    }
}, {timestamps: true})

module.exports = mongoose.model('experienceInfo', experienceSchema)