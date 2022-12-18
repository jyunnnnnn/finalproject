/*影片播放*/{
    var which;
    function showcaculus(){
        $.get("/loadcaculus", function (res) {
            let content = "";
            for (let Obj of res) {
                content +=`<div style="color:blue" onclick="caculuschange(${Obj.index})" >${Obj.list}</div>`;
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
                content +=`<div style="color:blue" onclick="probabilitychange(${Obj.index})" >${Obj.list}</div>`;
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
                content +=`<div style="color:blue" onclick="linearchange(${Obj.index})" >${Obj.list}</div>`;
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
                content +=`<div style="color:blue" onclick="discretechange(${Obj.index})" >${Obj.list}</div>`;
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
                content +=`<div style="color:blue" onclick="itcchange(${Obj.index})" >${Obj.list}</div>`;
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
    var seconds=0;
    function timerun(){
        if(count==null){
            if(parseInt(localStorage.getItem("time"))){
                seconds=localStorage.getItem("time");
                count=setInterval(update,1000);
                
            }
            else{
                localStorage.setItem("time",seconds);
                count=setInterval(update,1000);
            }
        }
    }
    function update(){
        seconds++;
        localStorage.setItem("time",seconds);
        foo=document.getElementById("123");
        numtime=parseInt(localStorage.getItem("time"))
        foo.innerHTML="目前累積使用網站"+Math.floor(numtime/3600)+"小時"+Math.floor(numtime/60)%60+"分鐘"+numtime%60+"秒";
        switch(Math.floor(numtime/3600)){
            case 0:
                $("#level").attr("src","sushi/11.png");
                $("#levelmsg").text("等級1")
                break;
            case 1:
                $("#level").attr("src","sushi/10.png");
                $("#levelmsg").text("等級2")
                break;
            case 2:
                $("#level").attr("src","sushi/09.png");
                $("#levelmsg").text("等級3")
                break;
            case 3:
                $("#level").attr("src","sushi/08.png");
                $("#levelmsg").text("等級4")
                break;
            case 4:
                $("#level").attr("src","sushi/07.png");
                $("#levelmsg").text("等級5")
                break;
            case 5:
                $("#level").attr("src","sushi/06.png");
                $("#levelmsg").text("等級6")
                break;
            case 6:
                $("#level").attr("src","sushi/05.png");
                $("#levelmsg").text("等級7")
                break;
            case 7:
                $("#level").attr("src","sushi/04.png");
                $("#levelmsg").text("等級8")
                break;
            case 8:
                $("#level").attr("src","sushi/03.png");
                $("#levelmsg").text("等級9")
                break;
            case 9:
                $("#level").attr("src","sushi/02.png");
                $("#levelmsg").text("等級10")
                break;
            case 10:
                $("#level").attr("src","sushi/01.png");
                $("#levelmsg").text("等級11")
                break;
            default:
                $("#level").attr("src","sushi/00.png");
                $("#levelmsg").text("等級12")
                break;                    
        }
    }
    function stoptimerun(){
        clearInterval(count);
        count=null;
    }
    
}
function start(){
    showhomepage();
    foo=document.getElementById("123");
    foo.innerHTML="目前累積使用網站"+Math.floor(parseInt(localStorage.getItem("time"))/3600)+"小時"+Math.floor(parseInt(localStorage.getItem("time"))/60)%60+"分鐘"+parseInt(localStorage.getItem("time"))%60+"秒";
} 

window.addEventListener("load",start,false);

