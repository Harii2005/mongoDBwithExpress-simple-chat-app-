# 💬 Chat App (mini chat app)

A simple and modern CRUD-based chat web app built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows you to create, view, edit, and delete chat messages in a minimal interface.

## 🚀 Features

- View all chats 📄  
- Add a new chat 🆕  
- Edit existing messages ✏️  
- Delete unwanted messages 🗑️  
- Uses EJS for dynamic rendering and MongoDB for storing chats.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: EJS, HTML5, CSS3
- **Styling**: Simple custom CSS
- **Utilities**: Method-override for PUT/DELETE forms

## 📁 Project Structure
├── models/
│   └── chat.js          # Mongoose schema
├── views/
│   ├── index.ejs        # Chat list view
│   ├── new.ejs          # New chat form
│   └── edit.ejs         # Edit message form
├── public/
│   └── style.css        # Basic styling
├── init.js              # Preload sample chat data
├── index.js             # Main server app
└── README.md            

## 🧪 Setup Instructions

1. **Clone this repo**  
   ```bash
   git clone <repo-url>
   cd <project-folder>

2.	**Install dependencies**
    npm install

3.	**Run MongoDB locally** (Make sure MongoDB is running on 127.0.0.1:27017)

4.	**Seed database with initial chats**
    node init.js

5.	**Start the server**
    node index.js
