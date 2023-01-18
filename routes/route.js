
const express = require('express')
const axios = require('axios')
const router=express.Router()
const moment = require('moment')



router.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=2637b1dde1f74f1d811fee2fe118b46b';

        const news_get =await axios.get(url)
        res.render('index',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

module.exports=router