require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./controller')


app.use(express.json());

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance); 
    console.log('Database Connected')
})



app.get('/api/inventory', ctrl.getInventory) 
app.get('/api/product/:id', ctrl.getProduct)
app.post('/api/product', ctrl.createProduct) 
app.put('/api/product/:id', ctrl.updateProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`)); 