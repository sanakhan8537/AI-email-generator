const mongoose=require('mongoose');
const url='mongodb+srv://sana_khan:abc12345@cluster0.fvh8noi.mongodb.net/mydb1100?retryWrites=true&w=majority&appName=Cluster0'
//mydb1100 is database name jo maine choose kiya hai thoda change krke
mongoose.connect(url)
.then((result) => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});
console.log('task 1');
console.log('task 2');
module.exports=mongoose;

