const express=require("express");
const router=express.Router();
// const Blog=require("../models/todo")

router.get("/",(req,res)=>{
   
    res.render("index")
})



module.exports=router;