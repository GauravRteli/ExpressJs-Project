const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const Staticpath = path.join(__dirname,'../public');
const views_path = path.join(__dirname,'../templates/views');
const partial_path = path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.use(express.static(Staticpath));
hbs.registerPartials(partial_path);
app.set('views',views_path);
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.listen(3000,()=>{
    console.log('listening');
})
