var Userdb=require('../model/model');

//create
exports.create =(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    //new user
    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        programming:req.body.programming,
        design:req.body.design,
        skills:req.body.skills,
        status:req.body.status,
        description:req.body.description
      
    })
    //save user in database
    user
     .save(user)
     .then(data=>{
         res.send(data)
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message||"Some error occurred while creating a create operation"
         });
     });
}


//return a single user
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        Userdb.findById(id)
         .then(data=>{
             if(!data){
                 res.status(404).send({message:"Not found user with id "+id})
             }else{
                 res.send(data)
             }
         })
         .catch(err=>{
             res.status(500).send({message:"Error retrieving user with id "+id})
         })
    }else{
      Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error occurred while retriving user information"})
        })

    }
    
}



//update user by id
exports.update=(req,res)=>{
    if(!req.body){
        return res
         .status(400)
         .send({message:"Data to update can not be empty"})
    }

    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
     .then(data=>{
        if(!data){
            res.status(404).send({message:`Can not Update user with ${id}.Maybe user not found.`})
        }else{
            res.send(data)
        }
     })
     .catch(err=>{
         res.status(500).send({message:"Error Update user information"})
     })

}

