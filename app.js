const express=require("express");
const axios=require("axios")
const moment = require('moment')

const app=express();
app.locals.moment = moment;
const port=process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/",require("./routes/route"))
app.set('views','./views')
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})