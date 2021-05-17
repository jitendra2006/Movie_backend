const mongoose = require('mongoose');

let FilmSchemaa = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    boxOfficeCollection:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        rquired:true,
        max:5,
        default:2
    },
    directors:[
        {
            type:String
        }
    ]
    
})

let FilmModel = new mongoose.model('film',FilmSchemaa)
module.exports= FilmModel