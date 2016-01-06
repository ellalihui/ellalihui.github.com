function formatData(time){
	var oDate=new Date();
	oDate.setTime(time*1000);	
	return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
}
window.onload=function(){
	var oImg=document.getElementById('img1');	
	var oNext=document.getElementById('next');
	var oPrev=document.getElementById('prev');
	var oUser=document.getElementById('username');
	var oPass=document.getElementById('password');
	var oAddBtn=document.getElementById('add_btn');
	var oLgnBtn=document.getElementById('lgn_btn');
	
	var oLoginBox=document.getElementById('loginBox');
	var oWrap=document.getElementById('wrap');
	
	var oUl=document.getElementById('ul1');
	var oLeftTop=document.getElementById('left_top');
	
	var oBtn=document.getElementById('btn1');
	var oT=document.getElementById('t1');
	
	
	var iNow=4;
	var URL='http://zhinengshe.com/exercise/im/api.php';
	var maxId=0;
	
	oNext.onclick=function(){
		iNow++;
		if(iNow==9)iNow=1;
		oImg.src='face/'+iNow+'.jpg';	
	};
	
	//用户注册
	oAddBtn.onclick=function(){
		jsonp({
			url:URL,
			data:{
				a:'reg',
				user:oUser.value,
				pass:oPass.value,
				face:iNow	
			},
			success:function(json){
				if(json.err){
					alert('注册失败了:'+json.msg);
				}else{
					alert('注册成功');
				}	
			}
		});	
	};
	oLgnBtn.onclick=function(){
		jsonp({
			url:URL,
			data:{
				a:'lgn',
				user:oUser.value,
				pass:oPass.value	
			},
			success:function(json){
				if(json.err){
					alert('登陆失败了:'+json.msg);
				}else{
					alert('登陆成功');
					oWrap.style.display='block';
					oLoginBox.style.display='none';
					
					//执行各种函数
					getUserList(json.token);
					getAllMsg(json.token);
					sendMsg(json.token);
					
					setInterval(function(){
						getNewMsg(json.token);
					},1000);
				}
			}	
		});	
	};
	
	//获取用户列表
	function getUserList(token){
		jsonp({
			url:URL,
			data:{
				a:'get_user_list',
				token:token	
			},
			success:function(json){
				if(json.err){
					alert('获取用户列表失败了');
				}else{
					var arr=json.data;
					for(var i=0; i<arr.length; i++){
						var face=arr[i].face;
						face<1 && (face=4);
						face>8 && (face=7);
						var oLi=document.createElement('li');
						oLi.innerHTML='<img src="face/'+face+'.jpg" width="22"><span>'+arr[i].username+'</span>';
						oUl.appendChild(oLi);
					}
				}
			}	
		});	
	}
	
	//获取完整留言
	function getAllMsg(token){
		jsonp({
			url:URL,
			data:{
				a:'get_msg',
				token:token	
			},
			success:function(json){
				if(json.err){
					alert('获取完整消息失败了');
				}else{
					var arr=json.data;
					for(var i=0; i<arr.length; i++){
						var oDl=createMsg(arr[i].username,arr[i].post_time,arr[i].content);
						oLeftTop.appendChild(oDl);
						scrollBottom(oLeftTop);
						
						if(arr[i].ID>maxId){
							maxId=arr[i].ID;
						}
					}
				}
			}	
		});	
	}
	
	function createMsg(username,time,content){
		var oDl=document.createElement('dl');
		oDl.innerHTML='<dt><strong>'+username+'</strong> <em>'+formatData(time)+'</em></dt> <dd>'+content+'</dd>';
		return oDl;	
	}
	
	//点击发送
	function sendMsg(token){
		oBtn.onclick=function(){
			jsonp({
				url:URL,
				data:{
					a:'snd_msg',
					content:oT.value,
					token:token	
				},
				success:function(json){
					if(json.err){
						alert('发言失败了');
					}else{
						var oDl=createMsg(oUser.value,json.time,oT.value);	
						oLeftTop.appendChild(oDl);
						scrollBottom(oLeftTop);
						
						oT.value='';
						
						if(json.ID>maxId){
							maxId=json.ID;
						}
					}	
				}	
			});	
		};	
	}
	
	//保持在底部
	function scrollBottom(obj){
		obj.scrollTop=obj.scrollHeight;
	}
	
	//获取更新
	function getNewMsg(token){
		jsonp({
			url:URL,
			data:{
				a:'get_msg_n',
				n:maxId,
				token:token	
			},
			success:function(json){
				if(json.err){
					alert('获取更新失败了');
				}else{
					var arr=json.data;	
					for(var i=0; i<arr.length; i++){
						var oDl=createMsg(arr[i].username,arr[i].post_time,arr[i].content);
						oLeftTop.appendChild(oDl);
						scrollBottom(oLeftTop);
						
						if(arr[i].ID>maxId){
							maxId=arr[i].ID;
						}
					}
				}
			}	
		});	
	}
};