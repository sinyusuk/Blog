const express = require('express');
const app = express();
const port = 3000;

app.get('/api/host',(req,res)=>{
    res.send({
        host:'tester'
    });
})

app.listen(port,()=>{
    console.log(`ready on http://localhost:${port}`);
})