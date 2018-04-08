import mongoose, {Schema} from "mongoose"
import {hashSync, compareSync} from "bcrypt-nodejs"
import jwt from "jsonwebtoken"
import UniqueValidator from "mongoose-unique-validator"
import CONFIG from "../../../config.json"

const UserSchema = new Schema({
    username: {
        trim: true,
        unique: true,
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

UserSchema.plugin(UniqueValidator, {
    message: `{VALUE} already exist!`
})

UserSchema.pre("save", function(next) {
    if(!this.isModified()) return next()
    this.password = this._hashSync(this.password)
    return next()
})

UserSchema.methods = {
    _hashSync(password) {
        return hashSync(password)
    },
    comparePassword(password) {
        return compareSync(password, this.password)
    },
    createToken() {
        let secret = process.env.secret || CONFIG.passport.secret
        return jwt.sign({_id: this._id}, secret)
    },
    toAuthJson() {
        return {
            token: this.createToken(),
            ...this.toJson()
        }
    },
    toJson() {
        return {
            _id: this._id,
            username: this.username,
            email: this.email,
        }
    }
}

export default mongoose.model("User", UserSchema)