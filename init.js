const mongoose = require('mongoose');
const Chat =require ('./models/chat.js');



main()
.then(() => {
    console.log('successsfull connection');
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats=[
    {
        from : 'NVDIA',
        to   : 'RAVISHANKAR',
        msg  : 'job invitation',
        created_at : new Date() //here Date is a constructor it automatically generates a random date and time
    },
    {
        from : 'Hari',
        to   : 'giri',
        msg  : 'hi how are u',
        created_at : new Date() 
    },
    {
        from : 'mili',
        to   : 'malu',
        msg  : 'send me maths notes',
        created_at : new Date() 
    },
    {
        from : 'GOOGLE',
        to   : ' HARIKRISHNAN K R',
        msg  : 'job invitation',
        created_at : new Date() 
    },
    {
        from : 'adithya',
        to   : ' goutham',
        msg  : 'come to collage tmrw',
        created_at : new Date() 
    },

];

Chat.insertMany(allchats);

