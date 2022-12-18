//demo_mongodb_insert_many.js
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:a12891289@cluster0.cd0rcje.mongodb.net/?retryWrites=true&w=majority";
//const url = "mongodb+srv://admin:admin6631@cluster0.gt34a.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myobjs = [
    { index: 1, list: "[計算機概論] 第一講、Data Storage (1)",value:"EDYjPpn1OmE" },
    { index: 2, list: "[計算機概論] 第二講、Data Storage (2)",value: "0sNoGFvfmyg"},
    { index: 3, list: "[計算機概論] 第三講、Data Storage (3)",value:"sL9LlTtDLeQ"},
    { index: 4, list: "[計算機概論] 第四講、Data Manipulation (1)",value: "XkptnZWDF2o"},
    { index: 5, list: "[計算機概論] 第五講、Data Manipulation (2)",value:"oTrhNw5tAz8" },
    { index: 6, list: "[計算機概論] 第六講、Data Manipulation (3)",value:"RkbrXMljEZU"},
    { index: 7, list: "[計算機概論] 第七講、Operating Systems",value: "URpr8Tq8FyI"},
    { index: 8, list: "[計算機概論] 第八講、Networking and the Internet (1)",value:"VmEkpCZCiqc" },
    { index: 9, list: "[計算機概論] 第九講、Networking and the Internet (2)",value:"MoumhXZP0gA" },
    { index: 10, list: "[計算機概論] 第十講、Algorithms",value:"hqJhPzaiUm8" },
    { index: 11, list: "[計算機概論] 第十一講、Algorithms (2)",value: "AlscQi4C-Vo"},
    { index: 12, list: "[計算機概論] 第十二講、Programming Languages (1)",value: "-j2n0MSOb3c"},
    {index: 13,list:"[計算機概論] 第十三講、Programming Languages (2)",value:"GUtYi1uOM8k"},
    {index: 14,list:"[計算機概論] 第十四講、Data Abstractions (1)",value:"Sb-MikTR8Ys"},
    {index: 15,list:"[計算機概論] 第十五講、Data Abstractions (2)",value:"QzO0rag6geA"},
    {index: 16,list:"[計算機概論] 第十六講、Data Abstractions (3)",value:"ksJKIlJgSqw"},
    {index: 17,list:"[計算機概論] 第十七講、Database Systems",value:"kmEXn0jerDw"},
    {index: 18,list:"[計算機概論] 第十八講、Computer 3D Graphics",value:"QD4r4SMQMu4"},
    {index: 19,list:"[計算機概論] 第十九講、Artificial Intelligence (1)",value:"T7urPNJ74cM"},
    {index: 20,list:"[計算機概論] 第二十講、Artificial Intelligence (2)" ,value:"tA83NUDJA38"},
    {index: 21,list:"[計算機概論] 第二十一講、Theory of Computation",value:"bwki9vyHvV4"},
    ];
    const options = { ordered: true };
    dbo.collection("itc").insertMany(myobjs, options, function (err, res) {
        if (err) throw err;
        console.log(`multiple documents were inserted`);
        db.close();
    });
});