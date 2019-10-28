var $ = {
	//get请求
	get : function(url,handler){
		//1.实例化xhr对象
		var xhr = new XMLHttpRequest();
		//2.设置请求行
		xhr.open("get",ur l);
		//3.设置请求头(Content-Type)
		xhr.responseType = "json";
		//4.设置请求体，并且发送
		xhr.send();
		//设置监听响应
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
		} 
	},
	//post 提交
	post : function(url,data,handler,type){
		//1.实例化xhr对象
		var xhr = new XMLHttpRequest();
		//2.设置请求行
		xhr.open("post",url);
		//3.设置请求头(Content-Type)
		xhr.responseType = "json";
		if(!type){
			type = "application/x-www-form-urllencoder"
		}
		xhr.serRequestHeader("Content-Type",type)
		//4.设置请求体，并且发送
		xhr.send();
		//设置监听响应
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
		}
}
$.