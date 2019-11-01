require('dotenv').config()
const massive = require('massive') 
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING} = process.env
// const ctrl = require('./controller')

const app = express()

app.use(express.json)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} where it all  began`))
})
