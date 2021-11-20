
  
       
let addressFunction = async() =>{
    try{
       
        const res = await fetch('http://localhost:3000')
        const data = await res.json()
        if(data.error){
          return  document.getElementById('error').innerText = data.error 
           
        }
        console.log(data)
    }
        
    catch(e){
        console.log(e)
    }
}