const Post = require("../models/postSchema")
exports.post = async(req,res)=>{
    try{
        const{desc,title,img}=req.body
        const newpost = new Post({desc,title,img})
        const post = await newpost.save();
        res.status(200).json({post})
    }
    catch{
        res.status(500).json({msg:`something went wrong ${error}`})
    }
}