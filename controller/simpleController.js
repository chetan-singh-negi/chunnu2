const getController=(req,res)=>{
    res.send({name:req.query.name,role:req.query.role});
}
const postController=(req,res)=>{
    res.send(req.body);
}
module.exports={getController,postController}