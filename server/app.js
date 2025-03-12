const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/conn")
const userApis =   require("./controllers/user");
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello from backend")
})

//apis
app.use("/api/v1",userApis)

app.listen(`${process.env.PORT}`,()=>{
    console.log(`server started AT PORT = ${process.env.PORT}`);
});



