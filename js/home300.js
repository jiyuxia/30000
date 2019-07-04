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
var dl = document.querySelector(".dl");
var user = document.getElementsByName("user")[0];
var pass=document.getElementsByName('pass')[0];
var cg = document.querySelector(".zh-qw");
var logon = document.querySelector(".zh-logon");
var id = document.getElementById("id");

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
        /* alert("账号有误哦!~"); */
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
        /* alert("密码有误哦!~"); */
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
       /*  alert("身份证有误哦!~"); */
        idFlag = false;
    }
}

// --------------------显示随机验证码-------------------------

$(function(){
    var show_num = [];
    draw(show_num);

    $("#canvas").on('click',function(){
        draw(show_num);
    })
    $(".dl").on('click',function(){
        var val = $(".input-val").val().toLowerCase();
        var num = show_num.join("");
        if(val==''){
            alert('请输入验证码！');
        }else if(val == num){
            alert('提交成功！');
            $(".input-val").val('');
            draw(show_num);

        }else{
            alert('验证码错误！请重新输入！');
            $(".input-val").val('');
            draw(show_num);
        }
    })
})

function draw(show_num) {
    var canvas_width=$('#canvas').width();
    var canvas_height=$('#canvas').height();
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度
    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 20;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}

function randomColor() {//得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
//==============所有验证通过=================
dl.onclick = function(){
    if(!userFlag||!pwdFlag||!idFlag){
        alert("注册失败~!")
        // window.event? window.event.cancelBubble = true : e.stopPropagation();
        return true;
    }else if(!user.value || !pass.value){
        alert("账号或密码不能为空啦!~");
        return;
    }else {
        ajax({
            type:"get",
            url:"http://localhost/zheng/login2.php",
            data:"act=add"+"&user="+user.value+"&pass="+pass.value,
            succeed:function(str){
                logon.style.display = "none";
                cg.style.display = "block";
                id.innerHTML = uName.value;
                return false
                /* alert(str); */
            },
            failed:function(code){
                alert(code);
            }
        })
            /* alert("注册成功~!"); */
            return false;
        }
    }




