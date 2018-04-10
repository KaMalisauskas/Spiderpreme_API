import mongoose from 'mongoose'
// import config from '../../config.json'

const USERNAME = process.env.username
    // ||config.mongoose.username
const PASSWORD = process.env.password
    // || config.mongoose.password
const URL = `mongodb://${USERNAME}:${PASSWORD}@ds159254.mlab.com:59254/spiderpreme_bot`

const CONNECT = mongoose.connect(URL, (err) => {
    if(err) console.log(`Error in mongoose: ${String(err)}`)
    else console.log('<<<< Mongoose Connected')
})

export default CONNECT