const mongoose = require('mongoose');


//here main is not required as that part is responsible for connecting to MongoDB, but your current code only defines the schema and model. 


const chatSchema  = new mongoose.Schema({
    from : {
        type : String,
        require : true
    },

    to : {
        type : String, 
        require : true, 
    },

    msg : {
        type : String,
        maxLength : 50,
        require : true
    },

    created_at : {
        type : String,
        require : true
    }
})

const Chat = mongoose.model("Chat" , chatSchema);
module.exports = Chat;