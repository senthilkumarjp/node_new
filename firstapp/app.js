const express = require('express');
const app = express();

// app.use('/',(req,res,next)=>{
//     // console.log('success')
//     res.send('hai')
//     next();
// })

// app.use('/use',(req,res,next)=>{
//     // console.log('success')
//     res.send('use me');
//     next();
// })
app.get('/',(req,res)=>{
    res.send('welcome to the node.js')
})

app.get('/home',((req,res)=>{
    // console.log(req.params)
    res.send('welcome to  home page')
}))

// app.post('/new',((req,res)=>{
//     res.send('welcome new');
//     console.log('post')
// }))

app.get('/:some',((req,res)=>{
    console.log(req.params);
    const { some } = req.params;
    // res.send(`welcome ${some} page`);
    res.send(`<h1>welcome ${some} page</h1>`)   
}))

app.get('/on/:some/:id',((req,res)=>{
    // console.log(req.params);
    const { some,id } = req.params;
    // res.send(`welcome ${some} page`);
    res.send(`<h1>welcome ${some} page with id is ${id}</h1>`)
    
}))



app.get('*',((req,res)=>{
    res.send('invalid url')
}))





app.listen(8080,()=>{
    console.log('listening on port 8080')
});