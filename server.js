require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')


const app = express()
const port = 5000

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection;

db.on('error', (error) => { console.error(error); })
db.on('open', () => {
    console.log('connected to database');
})


//using a miidleware (make server accept json as body)
app.use(express.json())

/// create a router
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(port, () => {
    console.log("server has started on port  " + port);
})