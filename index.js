require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! This is my first express app')
})

app.get('/login' , (req, res) => {
    res.send('<h1>Login Page</h1>')
})

app.get('/signup' , (req, res) => {
    res.send('<h1>Signup Page</h1>')
})
app.get('/apple' , (req,res) =>{
    res.send('apple is red and sweet')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})