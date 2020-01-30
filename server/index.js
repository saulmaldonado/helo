require('dotenv').config()
const express = require('express')
// const session = require('express-session')
const massive = require('massive')
const {CONNECTION_STRING, SESSION_SECRET, PORT_NUMBER} = process.env
const app = express()

//middleware
app.use(express.json())
// app.use(session({
//   secret: SESSION_SECRET,
//   resave: true,
//   saveUninitialized: true
// }))

//db connection
massive(CONNECTION_STRING)
.then(db => {
      app.set('db', db)
      console.log('db connected 😂')
})

//endpoints


app.listen(PORT_NUMBER, () => console.log(`listening on port ${ PORT_NUMBER }...`))