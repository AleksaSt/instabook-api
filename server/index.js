const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require("../routes/authRoutes")
const cookieParser = require("cookie-parser")

const app = express()
//middleware
app.use(express.json())
app.use(cookieParser())

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.ejs');
});

const dbURI = "mongodb+srv://aleksa1:aleksa1@cluster0.mdy2r.mongodb.net/instabook?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to db'))
  .catch(error => console.log(error.message));

const port = process.env.PORT || 5000;

app.listen(port)
app.use(authRoutes)
