import Helper from './Helper'
import AuthService from "../Modules/Auth/AuthService";


export const INDEX = (req, res) => Helper.successHandler('Welcome to AUTH Route', res)

export const ADDUSER = async (req, res) => {
    try{
        const User = await AuthService.addUser(req.body)
        Helper.successHandler(User.toJson(), res)
    } catch(err) {
        Helper.errodHandler(String(err), 400, res)

    }
}

export const LOGIN = (req, res, next) => {
    Helper.successHandler(req.user.toAuthJson(), res)
    return next()
}