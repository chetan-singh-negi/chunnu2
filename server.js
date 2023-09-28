const express=require('express');
const app=express();
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
dotenv.config();
app.use(express.json());
app.use("/afterSignup",(req,res,next)=>{
    console.log(req.headers.authorization);
    console.log(process.env.JWT_KEY);
    try{
    let result=jwt.verify(req.headers.authorization,process.env.JWT_KEY);
    next();
    }catch(e){
        res.status(401).send(e);
    }
})
app.post('/signup',(req,res)=>{
    console.log(req.body);
    let token=jwt.sign(req.body,jwt_key);
    res.send(token);
})
app.get('/afterSignup',(req,res)=>{
    res.send("welcome to home Page");
})




app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("you are connected with port number 8000");
    }
})