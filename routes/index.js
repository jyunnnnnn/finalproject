var express = require('express');
var router = express.Router();
const MongoClient =require('mongodb').MongoClient; 
const url= "mongodb+srv://admin:a12891289@cluster0.cd0rcje.mongodb.net/?retryWrites=true&w=majority";
/*router.post('/login',function(req,res){
  let {username,password}=req.body;
  let a={username:username,password:password};
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("account").find(a)(function (err, a) {
      if (err){
        dbo.collection("account").insertOne(a,function(err,res){
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        })
      };
      res.send(a);
      console.log(a);
      db.close();
    });
  });
    console.log("username=",username,"password=",password);
    res.redirect("http://localhost:3000/main.html");
});*/
router.post("/signIn", function (req, res) {
  //console.log(req.body);
  console.log("Sign in now...");
  const q = req.body;
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("account").findOne({username:q.username},function (err, a) {
      if (err) throw err;
      if(a.password==q.password){
        res.send("ok");
      }
      console.log("登入失敗");
      res.send("fail");
      db.close();
    });
  });
});
router.post("/signUp", function (req, res) {
  //console.log(req.body);
    console.log("Sign up now...");
    const q = req.body;
    MongoClient.connect(url,function(err,db){
        if(err)throw err;
        console.log("連線成功load");
        const dbo =db.db("mydb");
        dbo.collection("account").findOne({username:q.username},function(err,a){
          if(err){
            dbo.collection("account").insertOne({username:q.username,password:q.password},function (err, result) {
              if (err) throw err;
              res.send("ok");
              console.log(a.username+" "+a.password);
              db.close();
            });
          }
          res.send("fail");
        })
    });
});
router.get("/loadcaculus",function(req,res){
    MongoClient.connect(url,function(err,db){
      if(err)throw err;
      console.log("連線成功load");
      const dbo =db.db("mydb");
      dbo.collection("caculus").find({}).toArray(function (err, chatrecord) {
        if (err) throw err;
        res.send(chatrecord);
        console.log(chatrecord);
        db.close();
      });
    });
});
router.get("/loadprobability",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("probability").find({}).toArray(function (err, chatrecord) {
      if (err) throw err;
      res.send(chatrecord);
      console.log(chatrecord);
      db.close();
    });
  });
});
router.get("/loaditc",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("itc").find({}).toArray(function (err, chatrecord) {
      if (err) throw err;
      res.send(chatrecord);
      console.log(chatrecord);
      db.close();
    });
  });
});
router.get("/loadlinear",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("linear").find({}).toArray(function (err, chatrecord) {
      if (err) throw err;
      res.send(chatrecord);
      console.log(chatrecord);
      db.close();
    });
  });
});
router.get("/loaddiscrete",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("discrete").find({}).toArray(function (err, chatrecord) {
      if (err) throw err;
      res.send(chatrecord);
      console.log(chatrecord);
      db.close();
    });
  });
});
router.get("/loadca",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("CA").find({}).toArray(function (err, chatrecord) {
      if (err) throw err;
      res.send(chatrecord);
      console.log(chatrecord);
      db.close();
    });
  });
});
router.get("/loadds",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("連線成功load");
    const dbo =db.db("mydb");
    dbo.collection("ds").find({}).toArray(function (err, chatrecord) {
      if (err) throw err;
      res.send(chatrecord);
      console.log(chatrecord);
      db.close();
    });
  });
});
module.exports = router;
