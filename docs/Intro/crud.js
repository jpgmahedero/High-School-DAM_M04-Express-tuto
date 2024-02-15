
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let db_items = [
    {"nom":"profe1","rol":"teacher"},
    {"nom":"profe2","rol":"teacher"},
    {"nom":"alu1","rol":"student"}
]

// OPERATION READ single item
// get ALL items
// TEST:
// curl -X GET http://localhost:3000/items
app.get('/items/:id',  (req, res)=>{
app.get('/items',  (req, res)=>{
    res.json(db_items)
})

// OPERATION READ single item
// get details of a SINGLE item
// TEST:
// curl -X GET http://localhost:3000/items
app.get('/items/:id',  (req, res)=>{
    let id = req.params.id
    const user = db_items[id]
    res.send(user)
})

// OPERATION CREATE
// insert a single item
// TEST:
// curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name 1":"new teacher","rol":"unknown"}'
app.post('/items',(req, res)=>{
    params = req.body
    console.log('--- POST /items params:',params)
    db_items.push(params)
    res.send('insert OK')
})
app.listen(3000)








