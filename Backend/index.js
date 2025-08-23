const express = require('express');
const app =  express();
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');

//using the productRouter
app.use('/product',ProductRouter);

const port = 5000;
//loaclhost:5000 request in thunder

//middleware for user
app.use('/user', UserRouter);
//this for userrouter 
//localhost:5000/user/add or whatever from userrouter.js in thunder 

// endpoint
app.get('/add',(req , res) => {
    res.send('response from add')
});

//getall
app.get('/getall',(req , res) => {
    res.send('response from getall')
});

//delete
app.get('/delete',(req , res) => {
    res.send('response from delete')
});

//starting the server
app.listen(port, () => {
    console.log("express server started");
});