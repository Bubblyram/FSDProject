var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var connection=require('./model/database.js');
var connection=require('./model/database');

app.use(bodyParser.urlencoded({exteded:false}));
app.use(express.static(__dirname));

app.use('/signup1',function(req,res){
    console.log('hello');
    res.sendFile(__dirname+'/views/signup1.html');
})

app.post('/check',function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var pwd=req.body.pwd;
    var cpwd=req.body.cpwd;
    var radio=req.body.radio;
    connection.query('insert into signup values(?,?,?,?,?)',[fname,lname,email,pwd,cpwd],(err,results)=>{
        if(err) throw err;
        if(results){
            console.log("Values Inserted");
            res.sendFile(__dirname +'/views/index1.html');
        }
    })
})

app.use('/index1',function(req,res){
    console.log('hi');
    res.sendFile(__dirname+'/views/index1.html');
})

app.post('/validate',function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var pwd=req.body.pwd;
    connection.query('select email from signup where email like ?',[email],(err,results)=>{
        if (err) throw err;
        if(results){
            connection.query('select password from signup where email like ? and password like ?)',[email,pwd],(err,results)=>{
                res.send(`<h3>Hello everyone<br>${fname},Have a Good day!!!</h3>`);
            })
        }
    })
})

app.listen(2000,()=>{
    console.log("Server is running at the port 2000");
})