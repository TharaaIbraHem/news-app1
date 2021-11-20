const request = require('request')

const news = (callback)=>{
    const url =' http://newsapi.org/v2/everything?q=egypt&apiKey=6f9212ed506f4501a0acbc68919f3d46'; 
    
request({ url, json: true }, (error,res) => {
    if (error) {
        callback('Unable to connect to location service',undefined)
    } 
    
    else {
       callback(undefined,{
      articles:res.body.articles
        
       }) 
       
    }

  });
}
       
    










    





module.exports =news