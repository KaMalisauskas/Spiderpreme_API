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
    deleteRequest(id) {
        return RequestModel.findOneAndRemove({_id: id})
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

    async deleteReq({id}) {
        try{
            if(!id) throw new TypeError('No id submitted')
            return this.deleteRequest(id)
        } catch (err) {
            throw err
        }
    }

}


export default new MainService()



