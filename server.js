const express=require("express")
const app=express();
const cors=require("cors")

app.use(cors())
app.use(express.json());
const db=require("./db.js")

app.use('/db',db)

app.listen(5000,()=>{
    console.log("Listening at 5000");
})