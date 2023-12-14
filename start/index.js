require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ahad', (req, res) => {
    res.send('Hello Ahad!')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})