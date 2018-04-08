import Http from 'http'
import App from "./app"

const PORT = process.env.PORT || 3000
const SERVER = Http.createServer(App)
SERVER.listen(PORT, () => {
    console.log(`<<<< Server running on port ${PORT}`)
})