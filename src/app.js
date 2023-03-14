const express=require('express');
const bodyparser=require('body-parser');
const hbs=require('hbs');
const mongoose=require("mongoose");
const app=express();
const routes=require('./routes/main');
const { handlebars } = require('hbs');



app.use(bodyparser.urlencoded({
       extended: true
}))
app.use('/static',express.static("public"))
app.use('',routes)


app.set('view engine','hbs');
app.set('views','views')
app.get('/',(req,res)=>{
      res.render('index')
    })
app.get('/review',(req,res)=>{
        res.render('review')
      })
      app.get('/viewreview',(req,res)=>{
        res.render('viewreview')
      })
app.get('/fun',(req,res)=>{
        res.render('fun')
      })
      app.get('/food',(req,res)=>{
        res.render('food')
      })
      app.get('/historical',(req,res)=>{
        res.render('historical')
      })
      app.get('/Movies',(req,res)=>{
        res.render('Movies')
      })
      app.get('/nature',(req,res)=>{
        res.render('nature')
      }) 
      app.get('/religious',(req,res)=>{
        res.render('religious')
      })      
mongoose.connect("mongodb://localhost:27017/experience",()=>{
    console.log("connected")
})


app.listen(process.env.PORT|3000,()=>{
    console.log('Serving on port 3000')
})