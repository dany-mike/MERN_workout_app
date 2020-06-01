require('dotenv').config()

const express = require('express')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())

//Mongoose connection ...

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useCreateIndex: true})

const connexion = mongoose.connection
    connexion.once('open', ()=> {
    console.log('Mongo db connection established successfully')
})


// My routes are declared in the file routes.js in the routes directory

const appRoutes = require('./routes/routes')

// Below app.use(appRoutes) activate my routes 
app.use(appRoutes)

app.listen(5000,() => {
    console.log(`Server is running on port 5000`)
})



