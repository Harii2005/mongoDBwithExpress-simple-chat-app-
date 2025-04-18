const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat =require ('./models/chat.js');
const methodOverride = require('method-override');

app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

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

//index route
app.get("/chats" , async (req , res) => {
    let chats = await Chat.find();//database call are async , since .then() is not used await should be used for proper execution
    // console.log(chats);
    res.render('index.ejs' , {chats});


     
});

//new route
app.get("/chats/new" , (req , res) => {
    res.render('new.ejs');
});

//create route
app.post('/chats' , (req , res) => {
    let {from , to , msg} = req.body;
    let newchat = new Chat({
        from : from,
        to   : to,
        msg  : msg,
        created_at : new Date() 
    });
    console.log(newchat);
    res.redirect('/chats');


    newchat.save().then((res) => {
        console.log('chat was saved');
    }).catch((err)=>{
        console.log("there was some error");
    })

});


//edit route
app.get('/chats/:id/edit' , async (req , res)=>{
    let {id} = req.params;
    let chat =  await Chat.findById(id);
    console.log(id,"");
    console.log(chat)
    res.render('edit.ejs' , {chat});
});

// upadate route
app.put('/chats/:id' , async(req , res) => {
    let {id} = req.params;
    id = id.trim();
    let {msg : newMessage} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMessage },
        { new: true, runValidators: true }
    );
    console.log('updated chats');
    res.redirect('/chats');
});

// delete route
app.delete('/chats/:id' , async (req , res)=>{
    let {id} = req.params;
    let chatdeleted = await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});

