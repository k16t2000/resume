const axios=require('axios');



exports.homeRoutes=(req,res)=>{
   
    //make a get request to api/users
    axios.get('http://localhost:5000/api/users')
     .then(function(response){
         let n=response.data[0].name;
         let d=response.data[0].description;
         let word=String(d.split(";")[0]);
         let word2=String(d.split(";")[1]);
         let word3=String(d.split(";")[2]);
         let word4=String(d.split(";")[3]);
         let word5=String(d.split(";")[4]);
         let word6=String(d.split(";")[5]);
        //console.log(d);
        console.log(word3);
        
        res.render('index',{users:response.data, name:n, w:word, w2:word2, w3:word3, w4:word4, w5:word5, w6:word6});
     })
     .catch(err=>{
         res.send(err)
     })
     
    
}

exports.addUserRoutes=(req,res)=>{
    res.render('add_user');
}
exports.updateUserRoutes=(req,res)=>{
    axios.get('http://localhost:5000/api/users',{params:{id:req.query.id}})
     .then(function(userdata){
         res.render("update_user",{user:userdata.data})
     })
    .catch(err=>{
        res.send(err);
    })
}