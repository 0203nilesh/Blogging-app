const express = require('express');
const app = express();
const fs= require('fs');
const path = require('path');
const port= 3000;
console.log(__dirname);
// **WE are providing the file path for the html file we are sending that if they need any file while execution then it can use easily all files.
app.use(express.static(path.join(__dirname,'views/HTML')));
app.get('/',(req,res,next)=>{
res.sendFile(path.join(__dirname,'views/HTML','index.html'));
});
app.get('/blogPost',(req,res,next)=>{
res.sendFile(path.join(__dirname,'views/HTML','blogPost.html'));
});
app.get('/contact',(req,res,next)=>{
res.sendFile(path.join(__dirname,'views/HTML','contact.html'));
});
app.get('/search',(req,res,next)=>{
res.sendFile(path.join(__dirname,'views/HTML','search.html'));
});
app.get('/blog',(req,res,next)=>{
res.sendFile(path.join(__dirname,'views/HTML','blog.html'));
});
app.post('/', (req, res)=>{
    let name= req.body.name;
    let phone= req.body.phone;
    let mail= req.body.email;
    let concern= req.body.concern;
    let outputText= `My Name is ${name} and my contact number is ${phone} and in case if the phone is not reachable than you can reache me at my email ${mail}. My issue/ query about the issue is here i am mentionining.${concern}`;
    fs.open('data.txt', 'w');
    fs.writeFile(outputText);
    res.sendFile(path.join(__dirname,'views/HTML','submitted.html'));

})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});