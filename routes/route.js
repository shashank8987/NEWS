
const express = require('express')
const axios = require('axios')
const router=express.Router()
const moment = require('moment')



router.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=2637b1dde1f74f1d811fee2fe118b46b';
          var url1 = 'https://official-joke-api.appspot.com/random_joke';
          let url2= 'https://catfact.ninja/fact';
          const newFact=await axios.get(url2);
          const newJoke =await axios.get(url1)
        const news_get =await axios.get(url)
        res.render('index',{fact:newFact.data.fact,joke:newJoke.data.setup,punchline:newJoke.data.punchline,articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
   
})

router.get("/about",async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=2637b1dde1f74f1d811fee2fe118b46b';
          var url1 = 'https://official-joke-api.appspot.com/random_joke';
          let url2= 'https://catfact.ninja/fact';
          const newFact=await axios.get(url2);
          const newJoke =await axios.get(url1)
        const news_get =await axios.get(url)
        res.render('about',{fact:newFact.data.fact,joke:newJoke.data.setup,punchline:newJoke.data.punchline,articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})


module.exports=router