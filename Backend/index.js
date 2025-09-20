const express = require('express');
const app=express();
const UserRouter = require('./routers/UserRouter');
const AIRouter = require('./routers/AIRouter');
const cors = require('cors');

const port = 5000;
//middleware for user

app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json());
app.use('/user', UserRouter);
app.use('/ai', AIRouter);
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