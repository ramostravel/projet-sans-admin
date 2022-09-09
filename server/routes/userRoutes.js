const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const { register } = require("../controllers/register")
const { login }= require("../controllers/login")

router.post('/addUser',register);
router.post("/signin",login);


router.get("/getUsers",(req,res)=>{
    User.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})

router.get("/getUser/:id",(req,res)=>{
    User.findById({_id:req.params.id} )

    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})

router.put("/updateUser/:id", (req, res) => {
    const userID = req.params.id;
    User.findByIdAndUpdate(userID, { ...req.body })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ msg: "User not found" });
        }
        res.send({ msg: "User updated", user });
      })
      .catch((err) => res.status(400).send({ msg: "ERROR UPDATING USER" }));
  });


router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(404).json({msg:"ERROR ID not valid"})
        }else{
            res.status(200).json({msg:"user deleted"})
        }
    })
    .catch((err)=>{res.status(400).send(err)})

})


module.exports = router