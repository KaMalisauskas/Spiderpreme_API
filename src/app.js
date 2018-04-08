import "babel-polyfill";
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import AuthRoute from './Routes/AuthRoute'
import CONNECT from './DB/connect'

//Routes
import IndexRoute from './Routes/MainRoute'

const APP = express()

APP.use(cors())
APP.use(bodyParser.urlencoded());
APP.use(bodyParser.json());


APP.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: "Welcome to Spiderpreme api!"
    })
})

APP.use(IndexRoute)
APP.use(AuthRoute)



export default APP
