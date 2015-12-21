// JavaScript Document
$(function(){
	//头部导航
	var oHead_nav=document.getElementById('head_nav');
	var aHli=oHead_nav.children;
	var  oHbox=aHli[aHli.length-1];
	
	var m=0;
	
	for(var i=0;i<aHli.length-1;i++)
	{
			aHli[i].index=i;
			aHli[i].onmouseover=function(){
				startMove(oHbox,this.offsetLeft);	
			};
			aHli[i].onmouseout=function(){
				startMove(oHbox,m*aHli[0].offsetWidth);	
			};
			aHli[i].onclick=function(){
				m=this.index;	
			};
	}
	//分类导航
	var  aAside=document.getElementById('aside');	
	var  aA=aAside.children;
	var  aB=aAside.getElementsByTagName('b');
	
	for(var i=0;i<aA.length;i++)
	{
		;(function(index){	
			addEvent(aA[i], 'mouseover', function(){
				move(aB[index],{opacity:1},{duration:500});
			});
			addEvent(aA[i],'mouseout',function(){
				move(aB[index],{opacity:0},{ duration:500});
			});
			
		})(i);
	}
	//鼠标滚轮	
	
	var  n=0;
	var bFlag=false;
	var timer=null;
	
	addWheel(document,function(down){
		if(bFlag)
		{
			return;	
		}
		bFlag=true;
		timer=setTimeout(function(){
		if(down)
		{
			n++;	
			switch (n)
			{
				case  1:
					pub(0,aSkill);
					break;
				case  2:
					move(aTitle[1],{opacity:1},{dration:4000});	
					break;	
				case  3:
					move(aTitle[2],{opacity:1},{dration:4000});
				case  4:
					pub(3,aDli);
					break;	
			}
			if(n==aA.length)
			{
				n=aA.length-1;	
			}
				prev();
		    }
		else
		{
			n--;
			if(n==-1)
			{
				n=0;	
			}
			next();
		}
		},500);			
	});
	
	function  prev(){
		move(oHome,{top:-n*h},{duration:350,complete:function(){
			bFlag=false;
			for(var i=0;i<aA.length;i++)
			{
				aA[i].className='round'+(i+1);	
			}
			aA[n].className='active';	
		}});						
	}
	function  next(){
		move(oHome,{top:-n*h},{duration:350,complete:function(){
			
			bFlag=false;
			for(var i=0;i<aA.length;i++)
			{
				aA[i].className='round'+(i+1);	
			}
			aA[n].className='active';	
		}});	
	}	
	//切换块
	var h=document.documentElement.clientHeight;//获取body 的高度
	document.body.style.height=h+'px';	//把高度赋值给body
	var oHome=document.getElementById('home');
	var aDiv=oHome.children;	
		for(var i=0;i<aA.length;i++)
		{
			aDiv[i].style.height=h+'px';//每个块的高度
			;(function(index){
				addEvent(aA[i],'click',function(){
					n=index;
					switch (n)
					{
						case  1:
							pub(0,aSkill);
							break;
						case  2:
							move(aTitle[1],{opacity:1},{dration:4000});	
							break;
						
						case  3:
							move(aTitle[2],{opacity:1},{dration:4000});
						case  4:
							pub(3,aDli);
							break;	
					}
					for(var i=0;i<aA.length;i++)
					{
						aA[i].className='round'+(i+1);	
					}
					aA[n].className='active';	
					move(oHome,{top:-n*h},{duration:350});
				});
			})(i);
		}	
	//公共
	var aTitle=document.getElementsByClassName('title');
	
	
	var oBox_cont=document.getElementById('box_content');
	var aBli=oBox_cont.getElementsByTagName('li');
	
	
	function  pub(num,obj){
			var now=0;
			var Ttimer=setInterval(function(){	
			    move(aTitle[num],{opacity:1},{dration:4000});		
				move(obj[now],{opacity:1},{duation:2000});
				now++;
				if(now==obj.length)
				{
					clearInterval(Ttimer);	
				}
			},300);	
	}	
		
	//第一块
	var oHome_head=document.getElementById('home_head');
	var oF1=document.getElementById('home_info1');
	var oFbox=document.getElementById('home_info_box');
	var oAside=document.getElementById('aside');
	var aRound=oAside.getElementsByTagName('a');
	first();
    function first(){
		move(oHome_head,{opacity:1,top:160},{duration:2000,complete:function(){
			move(oF1,{opacity:1},{duration:1000,complete:function(){
				move(oFbox,{opacity:1},{duration:1000,complete:function(){
					 for(var i=0;i<aRound.length;i++)
					 {
						move(aRound[i],{opacity:1},{duration:1000,easing:Tween.Circ.easeIn,complete:function(){
							
						}}); 
						}
					}})
			  }})
		}});	
	};
	
	//第二块  效果
	var oSkill=document.getElementById('skill_list');
	var aSkill=oSkill.children;
	
	for(var i=0;i<aSkill.length;i++)
	{
			var  iNow=1;
			aSkill[i].index=i;
			aSkill[i].onclick=function(){
				if(iNow%2)
				{
					var oSdivt=this.getElementsByTagName('div')[2];
					var oSdivs=this.getElementsByTagName('div')[3];
					oSdivt.className='skill_flag   b_hover';
					move(oSdivs,{opacity:1,height:80},{duration:250});
				}
				else
				{
					var oSdivt=this.getElementsByTagName('div')[2];
					var oSdivs=this.getElementsByTagName('div')[3];
					oSdivt.className='skill_flag';
					move(oSdivs,{opacity:0,height:0},{duration:250});			
				}
				iNow++;
		   }
	 }
		
	
	
	//第三块    拉钩效果
	(function(){
		var oUl1=document.getElementById('js_con_con1');
		var aDiv=oUl1.getElementsByClassName('js_tab_li1');
	for (var i=0; i<aDiv.length; i++)
	{
		enter(aDiv[i]);
		leave(aDiv[i]);
	}
	function enter(obj){
		var olgSpan=obj.getElementsByClassName('lg')[0];
		obj.onmouseenter=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);

			switch (n)
			{
				case 0:
					olgSpan.style.left=obj.offsetWidth+'px';
					olgSpan.style.top=0;

					break;
					
				case 1:
					olgSpan.style.left=0;
					olgSpan.style.top=obj.offsetHeight+'px';
					break;
				
				case 2:
					olgSpan.style.left=-obj.offsetWidth+'px';
					olgSpan.style.top=0;
					break;
					
				case 3:
					olgSpan.style.left=0;
					olgSpan.style.top=-obj.offsetHeight+'px';
					break;
			}
			
			move(olgSpan, {top:0, left:0},{duration:300});
		};
	};
	
	function leave(obj){
		var olgSpan=obj.getElementsByClassName('lg')[0];
		
		obj.onmouseleave=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			switch (n)
			{
				case 0: // right
					move(olgSpan, {left:300, top:0},{duration:300});
					break;
					
				case 1: // bottom
					move(olgSpan, {top:200, left:0},{duration:300});
					break;
				
				case 2: // left
					move(olgSpan, {top:0, left:-300},{duration:300});
					break;
					
				case 3: // top
					move(olgSpan, {top:-200, left:0},{duration:300});
					break;
			}
		};
	};
	function getN(obj, ev)
	{
		var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
		var y=getPos(obj).top+obj.offsetHeight/2-ev.clientY;
		return Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
	}
	function d2a(d)
	{
		return d*180/Math.PI;
	}
	})();
	//获取定位父级的距离
	function getPos(obj)
	{
		var left=0;
		var top=0;
		while(obj)
		{
			left+=obj.offsetLeft;
			top+=obj.offsetTop;
			obj=obj.offsetParent;
		}	
		return  {left:left,top:top};
	}
	//第五块
	var oDbox=document.getElementById('demo_box');
	var aDli=oDbox.getElementsByTagName('li');
	var aDp=oDbox.getElementsByTagName('p');

	for(var i=0;i<aDli.length;i++)
	{
		(function(index){
			aDli[i].onmouseover=function(){
				move(aDp[index],{opacity:1});
			};	
			aDli[i].onmouseout=function(){
                move(aDp[index],{opacity:0},{duration:1000})
			};					
		})(i)		
	}
});
