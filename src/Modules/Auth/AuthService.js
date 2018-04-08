import UserModel from "./UserModel";
import {authLocal, authJwt} from "./passport"

class AuthService {
    addUser({username, password, email}) {
        if(!username || !password || !email) throw new Error("Not all required fields are sent")
        try{
            return UserModel.create({username, password, email})
        } catch(err) {
            throw err
        }
    }
    loggingMiddleware(req, res, next) {
        return authLocal(req, res, next)
    }

    authMiddleware(req, res, next) {
        return authJwt(req, res, next)
    }
}


export default new AuthService()