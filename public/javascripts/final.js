/*初始設定*/
const account=decodeURIComponent((location.search).substring(1));
const randomarr=["b0cybhfNXl4","u0rgcWyuQbY","3IlQNqvzc2M"];
$(document).ready(function(){
    var which;//影片代碼儲存變數
    let seconds;//秒數
    var count=null;//開始暫停
    $("#stoptime").prop('disabled',true);
    play(randomarr[Math.floor(Math.random()*3)]);//homepage
    /*計時*/
    $("#starttime").click(function(){
        $.get("/time",{username:account},function(res){
            seconds=res.toString();
        });
        count=setInterval(update,1000);
        $("#starttime").prop('disabled',true);
        $("#stoptime").prop('disabled',false);
    });
    function update(){
        seconds=Number(seconds);
        seconds++;
        seconds=seconds.toString();
        $.post("/newtime",{username:account,timerecord:seconds},function(res){
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
    $("#stoptime").click(function (){
        clearInterval(count);
        count=null;
        $("#starttime").prop('disabled',false);
        $("#stoptime").prop('disabled',true);
    });
    $("#logout").click(function(){
        alert("登出成功 請按下確認回到登入頁面")
        location.href=("index.html");
    });
    $("#homepage").click(function (){     
        which=randomarr[Math.floor(Math.random()*3)];
        play(which);
    });
    $("#showcaculus").click(function(){
        $.get("/loadcaculus", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="caculuschange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    });
    $("#showprobability").click(function(){
        $.get("/loadprobability", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue"onclick="probabilitychange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    });
    $("#showlinear").click(function(){
        $.get("/loadlinear", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="linearchange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    });
    $("#showdiscrete").click(function(){
        $.get("/loaddiscrete", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="discretechange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    });
    $("#showditc").click(function(){
        $.get("/loaditc", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="itcchange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    });
    $("#showca").click(function(){
        $.get("/loadca", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div class="hover" style="color:blue" onclick="cachange(${Obj.index})" >${Obj.list}</div>`;
            }
            $("#display").html(content);
        });
    });
    $("#showds").click(function(){
        $.get("/loadds", function (res) {
                    let content = "";
                    for (let Obj of res) {
                        content +=`<div class="hover" style="color:blue" onclick="dschange(${Obj.index})" >${Obj.list}</div>`;
                    }
                    $("#display").html(content);
                });
    });
    $("#login").text(account);
    $("#123").text("");
});
/*影片播放*/{
    function caculuschange(i){
        $.get("/loadcaculus", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
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
    function linearchange(i){
        $.get("/loadlinear", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
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
    function itcchange(i){
        $.get("/loaditc", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
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
    function dschange(i){
        $.get("/loadds", function (res) {
            for (let Obj of res) {
               if(Obj.index==i){
                play(Obj.value);
               }
            }
        });
    }
    function play(which){
        $("#display").html(`<iframe width="924" height="519.75" src="https://www.youtube.com/embed/${which}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }
}
/*關於我們*/function aboutus(){
    us="";
    $("#display").html(us);
}
/*功能介紹*/function introduce(){
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


