require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

//logger
const morgan = require("morgan");
app.use(morgan("tiny"))

app.get("/",(req,res,next)=>{
    res.json({message: "home"});
})

app.listen(
  process.env.PORT,
  console.log(`server is runnig on port ${process.env.PORT}`)
);
