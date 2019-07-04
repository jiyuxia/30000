
function ajax(option) {
    // 1.创建XMLHttpRequest对象（ajax对象）
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();//非IE5 6
    } else {
        var xhr = new ActiveXObject(Microsoft.XMLHTTP);//IE5 6
    }

    if (option.type == 'get' || option.type == 'GET') {
        // 2.连接服务器  data =>  'age=18&abc=123'
        xhr.open(option.type,option.url + '?'+ option.data +'&_=' + new Date().getTime(),true);//异步

        // 3.将请求发送到服务器
        xhr.send(null);//get请求
    } else if (option.type == 'post' || option.type == 'POST'){
        // 2.连接服务器  data =>  'age=18&abc=123'
        xhr.open(option.type,option.url,true);//异步
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头
        // 3.将请求发送到服务器
        xhr.send(option.data);//post请求
    } else {
        alert('该方法暂时支持get和post请求.');
        return;
    }

    // 4.服务器响应情况
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {//请求完成
            if (xhr.status == 200) {//ok 成功
                //得到响应数据
                option.succeed(xhr.responseText);
            } else {
                option.failed(xhr.status);
            }
        }
    }
}