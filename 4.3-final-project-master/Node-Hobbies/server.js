const express = require('express');
const server = express();
const Players = require('./models/hobbyModels');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set("strictQuery",false)
const cors = require('cors');
const Hobby = require('./models/hobbyModels');

mongoose.connect("mongodb://localhost:27017/hobbies").then(() =>{
    console.log('connected to db')

}).catch(()=>{

    console.log('error');
}) 

const mongotypes = require('mongoose').Types;

server.use(bodyParser.json());
server.use(cors({origin:'http://localhost:4200'}));

//server.use(express.json())

server.get('/hobbies',async(req,res)=>{
    try {
        const hobbies = await Hobby.find({});
        res.status(200).json(hobbies);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
})

server.get('/hobbies/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const hobbies = await Hobby.findById(id);
        res.status(200).json(hobbies);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
})

server.put('/hobbies/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if(mongotypes.ObjectId.isValid(id)){
        const hobbies = await Hobby.findByIdAndUpdate(id,req.body);
        if(!hobbies){
            return res.status(404).json({message:`cannot find hobby ${id}`});
        }
        const updated = await Hobby.findById(id);
        res.status(200).json(updated);
        } }
        catch (error) {
        res.status(500).json({message:error.mesaage});
    }
})


server.delete('/hobbies/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const hobbies = await Hobby.findByIdAndDelete(id);
        if(!hobbies){
            return res.status(404).json({message:`cannot find hobby ${id}`});
        }
        const updated = await Hobby.findById(id);
        res.status(200).json(updated);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
}) 

server.post('/hobbies',async(req,res)=>{
    try{
        const hobbies = await Hobby.create(req.body)
       
        res.status(200).json(hobbies);

    }catch(error){
        console.log(error.mesaage)
        res.status(500).json({message:error.mesaage});
    }
   
});






server.listen(3010,() =>{console.log(`server running on 3010`)});


