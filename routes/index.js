var express = require('express');
var router = express.Router();
const MongoClient =require('mongodb').MongoClient; 
const url= "mongodb+srv://admin:a12891289@cluster0.cd0rcje.mongodb.net/?retryWrites=true&w=majority";
router.get("/loadcaculus",function(req,res){
    chatrecord.length = 0;
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
  chatrecord.length = 0;
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
  chatrecord.length = 0;
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
  chatrecord.length = 0;
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
  chatrecord.length = 0;
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

module.exports = router;
