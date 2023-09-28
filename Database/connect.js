const mysql2=require("mysql2");
const conn=mysql2.createConnection({
    host:"a52ewar-stage2-mysql.ceomkhb5vruy.ap-south-1.rds.amazonaws.com",
    user:"stage2_rw",
    password:"jzJzYQWKw58cuZsp",
    database:"Ludo_stage2"
})
// const sequelize=require("sequelize");
// const seq=new sequelize("Ludo_stage2","stage2_rw","jzJzYQWKw58cuZsp",{
//     host:"a52ewar-stage2-mysql.ceomkhb5vruy.ap-south-1.rds.amazonaws.com",
//     dialect:"mysql"
// })
module.exports=conn;

const sequelize=require('sequelize');
const conn1=new sequelize("databsename","user_id","password",{
    host:"",
    dialect:""
})
(async()=>{
    await conn1.authentivcate()
})
const mysql2=require("mysql2");
const conn2=mysql2.createConnection({
    host:"",
    database:"",
    password:"",
    user:""
})
conn2.connect(()=>{

})
