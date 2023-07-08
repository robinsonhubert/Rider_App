require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const PORT = process.env.PORT || 8080


app.get("/",(req,res)=>{
    res.status(201).json("Server Started")
})


app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})