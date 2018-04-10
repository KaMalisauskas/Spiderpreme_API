import RequestModel from './RequestModel'
import UserModel from '../Auth/UserModel'


class MainService {

    findReqByUser(username) {
        return RequestModel.find({username})
    }

    userExists(id) {
        return UserModel.findOne({_id: id})
    }
    addRequest({username, url, keyword, email}) {
        return RequestModel.create({username, url, keyword, email})
    }
    deleteRequest(username) {
        return RequestModel.findOneAndRemove({username})
    }
    getAllRequests() {
        return RequestModel.find()
    }

    async addReq({id, url, keyword}) {
        try {
            const USERDATA = await this.userExists(id)
            if (!USERDATA) throw new Error(`User doesn't exist`)

            if ((await this.findReqByUser(USERDATA.username)).length) throw new Error('User already has a request!')

            if (!url || !keyword || !id) throw new TypeError('Not all fields submitted')

            return this.addRequest({username: USERDATA.username, url, keyword, email: USERDATA.email})

        } catch(err) {
            throw err
        }
    }

    async deleteReq({username}) {
        try{
            if(!username) throw new TypeError('No id submitted')
            return this.deleteRequest(username)
        } catch (err) {
            throw err
        }
    }

    async getAllReq() {
        try{
            return this.getAllRequests();
        }catch(err) {
            throw err
        }
    }

}


export default new MainService()
