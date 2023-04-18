const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.Port || 5000;



const categories = require('./data/categories.json')

app.get('/app' , (req, res) =>{
        res.send('dargon is rani')
})

app.use(cors());

app.get('/categories' , (req, res) =>{
    res.send(categories)
})

app.listen(port, () =>{
    console.log(`dragon api is run ${port}`)
})
