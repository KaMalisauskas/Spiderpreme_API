import express from 'express'
import * as MainController from '../Controllers/MainController'

const ROUTER = express.Router()

ROUTER.get('/indexRoute', MainController.INDEX);
ROUTER.get('/getRequest/:username', MainController.GETREQ);
ROUTER.get('/getAllRequests', MainController.GETALLREQ);

ROUTER.post('/addRequest', MainController.ADDREQ)

ROUTER.delete('/deleteRequest', MainController.DELETEREQ)


export default ROUTER