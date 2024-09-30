const express = require("express")

const app = express.app()

app.get('',(req,res)=>{
    res.json({a:"bbb"})
})
app.listen(3000,()=>{
    console.log("hello")
})