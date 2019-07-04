//获取需要获取的元素
var video = document.getElementById("v1");
var cha = document.querySelector(".cha");
var gamea = document.querySelector(".gamea");
var gameaa = document.querySelector(".gameaa");
var gameb = document.querySelector(".gameb");
var gamebb = document.querySelector(".gamebb");
var gamec = document.querySelector(".gamec");
var gamecc = document.querySelector(".gamecc");
var zh_g1 = document.querySelector(".zh-gallery1a");
var zh_g11 = document.querySelector(".zh-gallery11");
var zh_g2 = document.querySelector(".zh-gallery2b");
var zh_g22 = document.querySelector(".zh-gallery22");
var zh_g3 = document.querySelector(".zh-gallery3c");
var zh_g33 = document.querySelector(".zh-gallery33");
var zh_g4 = document.querySelector(".zh-gallery4d");
var zh_g44 = document.querySelector(".zh-gallery44");
var zh_g5 = document.querySelector(".zh-gallery5e");
var zh_g55 = document.querySelector(".zh-gallery55");
var zh_g6 = document.querySelector(".zh-gallery6f");
var zh_g66 = document.querySelector(".zh-gallery66");
var zh_g7 = document.querySelector(".zh-gallery7g");
var zh_g77 = document.querySelector(".zh-gallery77");

//鼠标点击.v 弹出视频
$(".v").click(function(){
  $(".vid").css({
    "display":"block"
  });
  $("#mask").css({
    "display":"block"
  });
});

//鼠标点击.cha 关闭视频
$(".cha").click(function(){
    $(".vid").css({
        "display":"none",
    });
    $("#mask").css({
        "display":"none"
    });
});
;
cha.onclick = function(){
    video.pause();
}

//动画封装
function animateUp(target,document,obj,speed,fn){//封装鼠标移入从底往上效果
  target.onmouseover=function(){
    animate(document,obj,speed,function(){
      animate(document,obj,speed);
    })
  }
};
function animateDown(target,document,obj,speed,fn){//封装鼠标移出从上收回效果
  target.onmouseout=function(){
    animate(document,obj,speed,function(){
      animate(document,obj,speed);
    })
  }
};
animateUp(gamea,gameaa,{height:180},8);
animateDown(gamea,gameaa,{height:0},8);
animateUp(gameb,gamebb,{height:180},8);
animateDown(gameb,gamebb,{height:0},8);
animateUp(gamec,gamecc,{height:180},8);
animateDown(gamec,gamecc,{height:0},8);
animateUp(zh_g1,zh_g11,{height:239},15);
animateDown(zh_g1,zh_g11,{height:0},15);
animateUp(zh_g2,zh_g22,{height:239},15);
animateDown(zh_g2,zh_g22,{height:0},15);
animateUp(zh_g3,zh_g33,{height:441},15);
animateDown(zh_g3,zh_g33,{height:0},15);
animateUp(zh_g4,zh_g44,{height:571},15);
animateDown(zh_g4,zh_g44,{height:0},15);
animateDown(zh_g5,zh_g55,{height:0},15);
animateUp(zh_g5,zh_g55,{height:441},15);
animateUp(zh_g6,zh_g66,{height:239},15);
animateDown(zh_g6,zh_g66,{height:0},15);
animateUp(zh_g7,zh_g77,{height:239},15);
animateDown(zh_g7,zh_g77,{height:0},15);


//点击切换
$(".car").each(function(index,target){
  $(this).click(function(){
    $(this).addClass("nav").siblings().removeClass("nav");
    $(".xs").eq(index).addClass("tab").siblings().removeClass("tab");
  })
})


