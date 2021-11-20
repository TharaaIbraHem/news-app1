const express = require('express')
const app = express()
const port = 3000


const path = require('path')

// path where app.js file exist
console.log(__dirname)
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

// hbs --> html + dynamic features
app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)


// Partials (header,footer)
const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)

////////////////////////////////////
  const Handlebars = require("handlebars");

  
  // const template = Handlebars.compile("title: {{data.articles[0]}}");
  // console.log(template({ title: "data.articles[0]" }));


////////////////////////////////////////////////////////////////////

const request = require('request')



///////////////////////////////////////////////////////




const news = require('./tools/news')
app.get('',(req,res)=>{

  news((error,data)=>{
    if(error){
      return res.send({error})
    
    } 
    
    Handlebars.registerHelper('print_article', function () {
      return this. source
    })
    
  
  
    res.render('index',{
      articles: [
        {
          source: data.articles[0]
         
        },
        {
          source: data.articles[1]
        },
      ],
    })
    
     })
    
 
            
})

        
          

    
 
    
  








// app.get('*',(req,res)=>{
//     res.render('404page',{
//       title:'Not found',
//       name:'Default page'
//     })
//   })
  


  app.listen(port, () => {
    console.log('Server is running',port)
  })