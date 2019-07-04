function animate(ele,params,speedTime,callBack){//ele == li0 li1 
	/*
	 * var callBack = function(){alert("执行完了")};
	 * callBack();
	 */
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;
		for(var attr in params){
			var current = 0;
			if(attr === "opacity"){
				current = getStyle(ele,attr)*100;
			}else{
				current = Math.ceil(parseFloat(getStyle(ele,attr)));
				if(attr == "width"){
					console.log(current,getStyle(ele,attr))
				}
			}
			var speed = (params[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(current != params[attr]){//没有到达目标值
				flag = false;
			}
			
			if(attr === "opacity"){
				ele.style[attr] = (current + speed)/100;
			}else if(attr === "zIndex"){//zIndex的处理
				ele.style[attr] = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		
		if(flag){//true所有的属性都到达了目标值 
			//清除定时器
			clearInterval(ele.timer);
			if(callBack){
				callBack();
			}
		}
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}
// -----------视频点击显示隐藏----------------------
var vid = document.getElementById("vid");
    var pimg = document.getElementById("pimg");
    vid.onclick = function(){
        video.style.display = "block"
        pimg.style.display = "block"
    }
    pimg.onclick = function(){
        video.style.display = "none"
		pimg.style.display = "none"
		video.pause();
	}
	// -------------------账号注册--------------------------
	var user = document.getElementById('userName');
	var pass = document.getElementById('userPass');
	var userId = document.getElementById('userId');
	var register = document.getElementById('register');
	var nones1 = document.getElementById('nones1');
	var nones2 = document.getElementById('nones2');
	var nones3 = document.getElementById('nones3');
	var add = document.getElementById('registers');
	// var code = document.getElementById('vcode');
	
// --------------------用户名-------------------------
	var userNameReg = /^[a-zA-Z]{4,20}$/;
	function checkUserName(){
		// var usval = userName.value;
		// return userNameReg.test(usval);
		if(userNameReg.test(userName.value)){
			return true;
		}
		return false;
	}

	userName.onkeyup = function(){
		nones1.style.display = "none";
		if(checkUserName()){
			return true;
			nones1.style.display = "none";
		}
			nones1.style.display = "inline-block";
			return false;
	} 



// --------------------密码-------------------------

	 var userPassReg = /^[a-zA-Z0-9]{6,20}$/;
	function checkUserPass(){
		// var upval = userPass.value;
		// return userPassReg.test(upval);
		if(userPassReg.test(userPass.value)){
			return true;
		}
			return false;
	}

	userPass.onkeyup = function(){
		nones2.style.display = "none";
		if(checkUserPass()){
			return true;
			nones2.style.display = "none";
		}
			nones2.style.display = "inline-block";
			return false;
	}
 
// --------------------验证身份证-------------------------

// var userIdRed = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// --------------------显示随机验证码-------------------------

	var code; //在全局定义验证码 
	//产生验证码
	function createCode() {
	code = "";
        var checkCode = document.getElementById("kuangd");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数
        for ( var i = 0; i < 4; i++) {//循环操作
            var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
			code += random[index];//根据索引取得随机数加到code上
			checkCode.style.color = getColor()
		//随机获取十六进制颜色值
			function getColor(){
				//#4435ff
				var color = "#";
				var str = "0123456789abcdef";
				for (var i = 0; i < 6; i++) {
					var rand = getRand(0,15);
					color += str.charAt(rand)
				}
				return color;
			}
		}
		checkCode.innerHTML = code;//把code值赋给验证码
		
    }
	window.onload = createCode;//页面加载,生成验证码	
	var vcode = document.getElementById("vcode");        
	function btnLogin(){
		var inputCode = vcode.value.toUpperCase(); //取得输入的验证码并转化为大写
		console.log(inputCode);
		console.log(code);

        if (inputCode.length <= 0) { //若输入的验证码长度为0
			alert("请输入验证码");
			// return false;			
        }else if (inputCode == code) { //若输入的验证码与产生的验证码不一致时
           
			return true;
		}else{
			 alert("验证码不匹配");
            createCode();//刷新验证码
			vcode.value = "";//清空文本框
			// return false;
			console.log(inputCode);
			console.log(code);
	
		}
		
	} 

	// ----------------------提交注册-----------------------
	var user=document.getElementsByName('user')[0];
	var pass=document.getElementsByName('pass')[0];

	add.onclick=function (){
			if (!user.value || !pass.value) {
				alert('账号或密码不能为空.');
				return;
			}else if(checkUserName() && checkUserPass() && btnLogin()){
				ajax({
					method: 'get',
					url: 'login2.php',
					datas: 'act=add&user='+user.value+'&pass='+pass.value,
					succeed: function (str) {
						var json=JSON.parse(str);//必须是严格的json格式{"name":"abc","age":"18"}
						if (json.err) {
							alert(json.msg);
						} else{
							alert(json.msg);
						};
					},
					failed: function (code) {
						alert(code);
					}
				})
			}
	}



	















	// --------------------轮播图----------------------------
	var botright = document.getElementById("bot-right");
	var imglist = document.getElementById("img-list");
	var toLeft = document.getElementById("toLeft");
	var toRight = document.getElementById("toRight");
	var index = 0;
	var timer = setInterval(autoPlay,1000);


	// --------------开始自动轮播------------------
	function autoPlay(){
		if(index ==5){
			index = 1;
			imglist.style.left = 0;
		}else{
			index++;
		}
		animate(imglist,{left:-680*index},10);	
	}

 // -----------------鼠标移上停止/移出开始-----------------
	botright.onmouseover = function(){
		clearInterval(timer);
	}
	botright.onmouseout = function(){
		timer = setInterval(autoPlay,1000);
	}
//------------toLeft点击------------------
	toLeft.onclick = function(){
		if(index == 5){
			index = 0;
			imglist.style.left = 0;
		}else if(index == 0){
			index = 4;	
			imglist.style.left ="-3400px";	  
		}else{
			index--;
		}

		animate(imglist,{left:-680*index},10);
		
	}
//-------------------toRight点击-----------------------------
	toRight.onclick = function(){
		if(index == 5){
			index = 1;
			imglist.style.left = 0;
		// }else if(index == 4){
		// 	index = 5;
		}else{
			index++;
		}
		animate(imglist,{left:-680*index},10);
	} 
