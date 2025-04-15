const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat =require ('./models/chat.js');

app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");

main()
    .then(() => {
        console.log('successsfull connection');
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(port , ()=>{
    console.log(`listing to port : ${port}`);
});

app.get("/" , (req, res) =>{
    res.send('hello welcome back!!');
});


let chat1 = new Chat({
    from : 'Hari',
    to   : 'faang company',
    msg  : 'thank u for the job',
    created_at : new Date() //here Date is a constructor it automatically generates a random date and time
});

chat1.save().then((res)=>{
    console.log(res);
}).catch((err) =>{
    console.log('there is some error');
});