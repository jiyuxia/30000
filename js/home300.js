//获取所有需要的元素
var pic = document.querySelector(".zh-pic-right");
var imgUl = document.querySelector(".zh-pic-right ul");
var prev = document.querySelector(".zh-prev");
var next = document.querySelector(".zh-next");
var uName = document.querySelector(".uName");
var uname = document.querySelector(".uname");
var passName = document.querySelector(".passName");
var passname = document.querySelector(".passname");
var idName = document.querySelector(".idName");
var idname = document.querySelector(".idname");
var yzmName = document.querySelector(".yzmName");
var yzmname = document.querySelector(".yzmname");
var form = document.querySelector("#form");

//轮播图
var index = 0;
var timer = setInterval(autoPlay,(2000));
function autoPlay(){//自动轮播
    if(index == 5){
        index = 1;
        imgUl.style.left = 0;
    }else{
        index++;
    }
    animate(imgUl,{left:-500*index},20);
}


pic.onmouseover = function(){//鼠标移入显示按钮停止轮播
    animate(prev,{opacity:100},50);
    animate(next,{opacity:100},50);
    clearInterval(timer);
}
pic.onmouseout = function(){//鼠标移开按钮消失,轮播重新开始
    animate(prev,{opacity:0},50);
    animate(next,{opacity:0},50);
    timer = setInterval(autoPlay,2000);
}
prev.onclick = function(){//点击左按钮换图
    if(index == 5){
        index = 1;
        imgUl.style.left = 0;
    }else if(index == 0){
        index = 4;
        imgUl.style.left = -2500 + "px";
    }else{
        index--;
    }
    animate(imgUl,{left:-500*index},20);
}
next.onclick = function(){//点击右按钮换图
    if(index == 5){
        index = 1;
        imgUl.style.left = 0;
    }else if(index == 5){
        index = 0;
    }else{
        index++;
    }
    animate(imgUl,{left:-500*index},20);
}



//选项卡
$(".navTab li").click(function(){
    var index = $(this).index();
    $(this).addClass("button").siblings().removeClass("button");
    $(".zhFeature").eq(index).addClass("block").siblings(".zhFeature").removeClass("block");
})


//注册验证
var userFlag = false;//true用户名验证通过
var pwdFlag = false ;//true密码验证通过
var idFlag = false;//true身份证验证通过
var yzmFlag = false;//true验证码验证通过

//==============用户验证=================
var uNameReg = /^[a-zA-Z]{4,20}$/;

//验证用户名是否合法
function checkName(){
    var uVal = uName.value;
    //对value值进行正则验证
    if(uNameReg.test(uVal)){//true通过
        return true;
    }
    return false;//未通过
}
uName.onblur = function(){
    uname.style.opacity = 0;
    if(checkName()){
        userFlag = true;
        console.log(checkName());
        uname.style.opacity = 0;
    }else{
        uname.style.opacity = 1;
        userFlag = false;
    }
}

//==============密码验证=================
var passReg = /^[a-zA-Z0-9]{6,20}$/;
function checkPass(){
    var pVal = passName.value;
    if(passReg.test(pVal)){//true通过
        return true;
    }
    return false;//未通过
}

passName.onblur = function(){
    passname.style.opacity = 0;
    if (checkPass()) {
        pwdFlag = true;
        console.log(checkPass());
        passname.style.opacity = 0;
    } else {
        passname.style.opacity = 1;
        pwdFlag = false;
    }
}

//==============身份证验证=================
// var idReg = /^[1-9]\d{5}((19|20)\d{2}|2100)(0[1-9]|1[0-2])(0[1-9]|[12]\d|30|31)\d{3}(\d|X|x)$/;
var idReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
function checkId(){
    var idVal = idName.value;
    if(idReg.test(idVal)){//true通过
        return true;
    }
    return false;//未通过
}

idName.onblur = function(){
    idname.style.opacity = 0;
    if (checkId()) {
        idFlag = true;
        console.log(checkId());
        idname.style.opacity = 0;
    } else {
        idname.style.opacity = 1;
        idFlag = false;
    }
}

//==============验证码验证=================
/* function checkPass(){
    var pVal = passName.value;
    if(pVal){//true通过
        return true;
    }
    return false;//未通过
}

$(".yzm").click(function(){
    $.ajax({
        url:
    })
}) */

//==============所有验证通过=================
form.onsubmit = function(){
    if(userFlag&&pwdFlag&&idFlag){
        return true;
        alert(1)
    }else{
        return false;
    }
}