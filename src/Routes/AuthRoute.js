import express from 'express'
import * as AuthController from '../Controllers/AuthController'
import AuthService from '../Modules/Auth/AuthService'

const ROUTER = express.Router()

ROUTER.get('/auth', AuthController.INDEX)

ROUTER.post('/auth/addUser', AuthController.ADDUSER)
ROUTER.post('/auth/login', AuthService.loggingMiddleware, AuthController.LOGIN)


export default ROUTER