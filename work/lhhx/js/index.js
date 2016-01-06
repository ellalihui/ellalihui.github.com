window.onload=function(){
	var  aUl=document.getElementById('aul');
	var  aLi=aUl.getElementsByTagName('li');
	var  aCdiv=document.getElementById('cont_act_l');
	var  aCli=aCdiv.getElementsByTagName('li');
	var  aCimg=aCdiv.getElementsByTagName('img');
	var  aSdiv=document.getElementById('status_m');
	var  aDt=aSdiv.getElementsByTagName('dt');
	var   aUdiv=aSdiv.getElementsByTagName('div');
	var  aSdiv1=document.getElementById('status_m1');
	var  aDt1=aSdiv1.getElementsByTagName('dt');
	var   aUdiv1=aSdiv1.getElementsByTagName('div');
	var  aList=document.getElementById('list');
	var  aMLi=aList.getElementsByTagName('li');
	var   aEdiv=document.getElementById('eye');
	var  aDt2=aEdiv.getElementsByTagName('dt');
	var   aUdiv2=aEdiv.getElementsByTagName('div');	
	var  ocolumn_t=document.getElementById('column_t');
	var  oTCont=document.getElementById('cont');
	var   aTLi=ocolumn_t.getElementsByTagName('li');
	var   aTDiv=cont.getElementsByTagName('div');
	for (var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			this.className='active';
			}
	    aLi[i].onmouseout=function(){
			this.className='';
			}
		}
     for(var i=0;i<aCli.length;i++){
		 aCli[i].index=i;
		 aCli[i].onmouseover=function(){
			 for(var i=0;i<aCli.length;i++)
			 {   
				aCimg[i].style.display='none';
			 }
			 aCimg[this.index].style.display='block';
		 }
	};
	for(var i=0;i<aDt.length;i++){
		aDt[i].index=i;
		aDt[i].onmouseover=function(){
			for(var i=0;i<aDt.length;i++){
				aUdiv[i].style.display='none';
				}
			aUdiv[this.index].style.display='block';
			}
		};
	for(var i=0;i<aDt1.length;i++){
		aDt1[i].index=i;
		aDt1[i].onmouseover=function(){
			for(var i=0;i<aDt1.length;i++){
				aUdiv1[i].style.display='none';
				}
			aUdiv1[this.index].style.display='block';
			}
		};
		for( var i=0;i<aDt2.length;i++){
			aDt2[i].index=i;
			aDt2[i].onmouseover=function(){
				for( var i=0;i<aDt2.length;i++){
					aUdiv2[i].style.display='none';
					}
				aUdiv2[this.index].style.display='block';
				}
			};
     for( var i=0;i<aMLi.length;i++){
	     aMLi[i].onmouseover=function(){
			 for(var i=0;i<aMLi.length;i++){
				 aMLi[i].className='';
				 }
			 this.className='active4';
			 }
		 };
    for(var  i=0;i<aTLi.length;i++){
		aTLi[i].index=i;
		aTLi[i].onmouseover=function(){
			for(var  i=0;i<aTLi.length;i++){
				aTDiv[i].style.display='none';
				aTLi[i].className='';
				}
			aTDiv[this.index].style.display='block';
			this.className='activ'+[this.index];
			}
		}
}
