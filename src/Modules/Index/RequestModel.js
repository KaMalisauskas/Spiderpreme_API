import UniqueValidator from "mongoose-unique-validator"
const MONGOOSE = require('mongoose')


const REQUESTS = new MONGOOSE.Schema({
    username: {
        type: String,
        trim: true,
        unique: true
    },
    url: {
        type: String,
        trim: true
    },
    keyword: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

REQUESTS.plugin(UniqueValidator, {
    message: `{VALUE} is already existing!`
})

export default MONGOOSE.model('requests', REQUESTS)