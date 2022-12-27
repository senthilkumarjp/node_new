const express = require('express');
const app = express();
// const path = require('path');

app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'/views'));

app.use(express.urlencoded({ extended:true}))

app.get('/',(req,res)=>{
    // res.send('hi');
    res.render('home');
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*1000);
    res.render('rand',{num});
})
app.get('/for',(req,res)=>{
    const fruits=['apple','orange','grapes','banana'];
    res.render('for',{fruits});
})
// title and h1 change
app.get('/r/:data',(req,res)=>{
    const {data}=req.params;
    res.render('data',{data});
})

// app.get('/forms',(req,res)=>{
//     res.send('get method')
// })
app.post('/forms',(req,res)=>{
    // console.log(req.body);
    const {name} = req.body;
    // res.send('hi from forms');
    res.send(`<h1>fetch data from form with name is  ${name.toUpperCase()}</h1>`)
})
app.listen(5000,()=>{
    console.log('listening on port 4000');
})