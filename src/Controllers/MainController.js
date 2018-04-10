import Helper from './Helper'
import MainService from '../Modules/Index/indexService'

export const INDEX = (req, res) => Helper.successHandler('Welcome to Api Index Route', res)

export const GETREQ = async (req, res) => {
    try{
        const USERREQUESTS = await MainService.findReqByUser(req.params.username)
        if(!USERREQUESTS.length) throw new Error('User req not found');
        Helper.successHandler(USERREQUESTS, res)
    }catch (err) {
        Helper.errodHandler(err, 500, res)
    }
}

export const ADDREQ = async (req, res) => {
    try{
        const ADD = await MainService.addReq(req.body)
        if(!ADD) throw new Error('Something went wrong')
        Helper.successHandler(ADD, res)
    } catch (err) {
        Helper.errodHandler(err, 500, res)
    }
}

export const DELETEREQ = async (req, res) => {
    try{
        const DELETE = await MainService.deleteReq(req.body)
        if(!DELETE) throw new Error(`Request was not deleted`)
        Helper.successHandler(DELETE, res)
    }catch (err) {
        Helper.errodHandler(err, 500, res)
    }
}

export const GETALLREQ = async (req, res) => {
    try{
        const GET = await MainService.getAllReq();
    }catch(err) {
        Helper.errodHandler(err, 500, res)
    }
}