const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

router.get('/allUsers',(req,res)=>{
    const user = UserModel.find()
    .then(data=> res.status(200).json({"users": data}))
    .catch(err=>res.status(400).json({"error": err}))
});

router.post('/register',(req,res)=>{
    const { name, email, password } = req.body;
    const user = new UserModel({
        name,email,password
    });
    user.save()
    .then(data=> res.status(200).json({'message': 'registered successfully', 'data': data}))
    .catch(err=>res.status(400).json({'message': 'registration failed', 'error': err}))
});

router.get('/profile/:userId',(req,res)=>{
    const { userId } = req.params;
    const user = UserModel.findById(userId)
    .then(data=> res.status(200).json({"user": data}))
    .catch(err=>res.status(400).json({'message': ' user not found ', "error": err}))
});

router.delete('/delete/:userId',(req,res)=>{
    const { userId } = req.params;
    const user = UserModel.findByIdAndDelete(userId)
    .then(data=> res.status(200).json({"message":" user deleted successfully"}))
    .catch(err=>res.status(400).json({'message': ' error in deleting the user ', "error": err}))
});

router.put('/update/:userId',(req,res)=>{
    const { userId } = req.params;
    const { name } = req.body;
    const user = UserModel.findByIdAndUpdate({_id:userId},{$set:{name}},{new:true})
    .then(data=> res.status(200).json({"message":" updated data successfully"}))
    .catch(err=>res.status(400).json({'message': ' error in updating the data ', "error": err}))
});

module.exports = router;