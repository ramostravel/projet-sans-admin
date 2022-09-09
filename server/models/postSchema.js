const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    desc:{type:String,required:true},
    title:{type:String,required:true},
    img:{type:String,required:true}
})
module.exports = mongoose.model("Post",postSchema);