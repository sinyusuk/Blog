const express = require('express')
const app = express();
const http = require('http');
const bodyparser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient
const dburl = `mongodb+srv://admin:passwd@cluster0.fubhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    
})




http.createServer(app).listen(80,()=>{
    console.log('ready')
})