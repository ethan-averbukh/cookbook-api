require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 4000;


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Add the middleware code needed to accept incoming data and add it to req.body

const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
const { urlencoded } = require('express')
app.use('/api/authors/', authorRouter)
app.set("port", process.env.PORT || 8080)
app.listen(app.get("port"), () => {console.log(`PORT: ${app.get("port")}`)})
