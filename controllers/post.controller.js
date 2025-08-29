const generateCaption = require("../service/ai.service");
const postModel = require("../models/post.model");
const uploadFile = require("../service/cloud.service");
const { v4 : uuidv4 } = require("uuid");
const userModel = require("../models/user.model");
async function postController(req,res){    
    const file = req.file
    const base64Image = new Buffer.from(file.buffer).toString('base64');
    const response = await generateCaption(base64Image);
    const result = await uploadFile(base64Image,`${uuidv4()}`)

    const post = await postModel.create({
        image : result.url,
        caption : response,
        user : req.user._id
    })
    
    return res.json({
        message : "Post created successfully",
        post
    })
}

module.exports = postController;