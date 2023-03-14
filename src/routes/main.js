const express=require('express')
const { route} = require('express/lib/application')
const review = require("../models/experience")


const routes=express.Router()





// routes.get('/getdetails',async(request,response)=>{
//        review.find({})
//        .then((reviews)=>{
//         response.render("../views/review",{reviews})
//         console.log(reviews)
//        })
//        .catch((y)=>{
//         console.log(y)
//        })

//     });

    routes.post('/process-form',async (request,response)=>{
        console.log("form submitted") 
        console.log(request.body)


        try{
            const data=await  review.create(request.body)
            console.log(data)
            response.redirect("/")
        }
        catch(e){
            console.log(e)
            response.redirect('/')
        }

        })
        routes.get("/viewreview", async (req, res)=> {   
              const details= await review.find({})
                    res.render("viewreview", { details: details })
                
            })

    module.exports=routes