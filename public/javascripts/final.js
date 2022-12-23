const account=decodeURIComponent((location.search).substring(1));
$(document).ready(function(){
    $("#logout").click(function(){
        alert("登出成功 請按下確認回到登入頁面")
        location.href=("index.html");
    });
    showhomepage();
    $("#login").text(account);
    
    $("#123").text("");
});
function aboutus(){
    us="";
    $("#display").html(us);
}
function introduce(){
    dis=`<div class="intro1">Introduce Our Website Function`;
    dis+=`<hr width="75%"  style="margin-top: 20px;"></div>`;
    dis+=`<div id="flex-container"></div>`;
    content=`<div><img src="images/home.png" alt="home" class="intro_pic"><br><span class="pic_txt">網站首頁</span></div>`
    content+=`<div><img src="images/pencil.png" alt="pencil" class="intro_pic"><br><span class="pic_txt">選擇科目</span></div>`
    content+=`<div><img src="images/clock.png" alt="clock" class="intro_pic"><br><span class="pic_txt">時間紀錄</span></div>`
    content+=`<div><img src="images/bingo.png" alt="bingo" class="intro_pic"><br><span class="pic_txt">抽獎遊戲</span></div>`
    $("#display").html(dis);
    $("#flex-container").html(content);
}   
/*影片播放*/{
    var which;
    function showcaculus(){
        $.get("/loadcaculus", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="caculuschange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function caculuschange(i){
        $.get("/loadcaculus", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showprobability(){
        $.get("/loadprobability", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue"onclick="probabilitychange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function probabilitychange(i){
        $.get("/loadprobability", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showlinear(){
        $.get("/loadlinear", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="linearchange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function linearchange(i){
        $.get("/loadlinear", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showdiscrete(){
        $.get("/loaddiscrete", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="discretechange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function discretechange(i){
        $.get("/loaddiscrete", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showditc(){
        $.get("/loaditc", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="itcchange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function itcchange(i){
        $.get("/loaditc", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showca(){
        $.get("/loadca", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="cachange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function cachange(i){
        $.get("/loadca", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showds(){
        $.get("/loadds", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="dschange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    }
    function dschange(i){
        $.get("/loadds", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function showhomepage(){
        var randomarr=["b0cybhfNXl4","u0rgcWyuQbY","3IlQNqvzc2M"]
        which=randomarr[Math.floor(Math.random()*3)];
        play(which);
    }
}
function stoplay(){
    var plpyvideo=document.getElementById("display");
    plpyvideo.innerHTML="";
}
function play(which){
    document.getElementById("display").innerHTML="";
    var plpyvideo=document.getElementById("display");
    plpyvideo.innerHTML=`<iframe width="924" height="519.75" src="https://www.youtube.com/embed/${which}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

/*計時*/{
    var count=null;
    let seconds;
    function timerun(){
        $.get("/time",{username:account},function(res){
            seconds=res.toString();
            console.log("取得:"+seconds+"型態:"+typeof seconds)
        });
        count=setInterval(update,1000);
    }
    
    function update(){
        seconds=Number(seconds);
        seconds++;
        console.log("取得:"+seconds+"型態:"+typeof seconds)
        seconds=seconds.toString();
        console.log("取得:"+seconds+"型態:"+typeof seconds)
        $.post("/newtime",{username:account,timerecord:seconds},function(res){
            console.log("轉換:"+res);
        });
        $("#123").text("目前累積使用網站"+Math.floor(seconds/3600)+"小時"+Math.floor(seconds/60)%60+"分鐘"+seconds%60+"秒");
        if(Math.floor(seconds/3600)<=10){
            $("#level").attr("src","sushi/"+(11-Math.floor(seconds/3600))+".png");
            $("#levelmsg").text("等級"+(Math.floor(seconds/3600)+1));
        }
        else{
            $("#level").attr("src","sushi/00.png");
            $("#levelmsg").text("等級12")
        }
    }
    function stoptimerun(){
        clearInterval(count);
        count=null;
    }
    
}



