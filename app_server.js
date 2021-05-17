const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const filmRoutes = require('./router/filmroutes')
const directorRoutes = require('./router/directorroutes')

app.use(express.json())
app.use(cors())

// connecting to db

mongoose.connect("mongodb+srv://code-insight:technomean@miniproject.mnio3.mongodb.net/MovieDb?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to db")
})
.catch((err)=>{
    console.log("error occured")
})

app.get('',(req,res)=>{
    res.send("hello from here")
})

// film routes
app.use('/film',filmRoutes)


// Director routes
app.use('/director',directorRoutes)


app.listen(8000,()=>{
    console.log("listing at 8000")
    
})
