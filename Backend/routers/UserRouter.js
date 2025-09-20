const express=require('express');
const Model=require('../models/UserModel');
const router=express.Router();

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall',(req,res)=>{
        Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/getbycompany/:company',(req,res)=>{
    Model.find({company:req.params.company})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.get('/getbyname/:name',(req,res)=>{
    Model.find({company:req.params.name})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.get('/getbyemail/:email',(req,res)=>{
    Model.find({company:req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.get('/getbypassword/:password',(req,res)=>{
    Model.find({company:req.params.password})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id , req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
module.exports=router;