var data=[
{
	"topic":"古点（001）",
	"create-time":"2016",
	"salary":"3000",
	"item-info":"北京朝阳",

},
{
	"topic":"古点（002）",
	"create-time":"2015",
	"salary":"4000",
	"item-info":"北京朝阳",
},
{
	"topic":"古点（003）",
	"create-time":"2017",
	"salary":"5000",
	"item-info":"北京朝阳",
},
{
	"topic":"古点（004）",
	"create-time":"2018",
	"salary":"6000",
	"item-info":"北京朝阳",
}
]
var hotdata=[
{
	"topic":"古点（005）",
	"create-time":"2019",
	"salary":"2000",
	"item-info":"北京朝阳",

},
{
	"topic":"古点（006）",
	"create-time":"2020",
	"salary":"7000",
	"item-info":"北京朝阳",
},
{
	"topic":"古点（007）",
	"create-time":"2013",
	"salary":"7225",
	"item-info":"北京朝阳",
},
{
	"topic":"古点（008）",
	"create-time":"2012",
	"salary":"7858",
	"item-info":"北京朝阳",
}
]
var newdata=[
{
	"topic":"谷点09",
	"create-time":"2021",
	"salary":"8888",
	"item-info":"吉林",

},
{
	"topic":"谷点10",
	"create-time":"2022",
	"salary":"5252",
	"item-info":"吉林",
},
{
	"topic":"谷点11",
	"create-time":"2023",
	"salary":"6322",
	"item-info":"吉林",
},
{
	"topic":"谷点12",
	"create-time":"2024",
	"salary":"8500",
	"item-info":"吉林",
}
]
var find=document.getElementsByClassName('list-ul')[0];
var str="";
for (var i = 0; i < data.length; i++) {
	str+='<li class="list-item"><div class="item-top"><div class="item-top1"><div class="item-name"><h2 class="topic">'+data[i].topic+'</h2><span class="create-time">'+data[i]['create-time']+'</span><div class="chat-me"></div></div><span class="salary">'+data[i].salary+'</span></div><div class="item-info">'+data[i]['item-info']+'</div></div><div class="labels"><span class="wordcut">技能培训</span><span class="wordcut">节日礼物</span><span class="wordcut">年度旅游</span></div><div class="item-btm"><img src="logo_1.png"><div class="bottom-right"><div class="company_name">古点(dotcom)</div><div class="industry">移动互联网，O2O/不需要融资/北京</div></div></div></li>';

	}
find.innerHTML=str;
var hot=document.getElementsByClassName('list-ul')[1];
var str_hot="";
for (var i = 0; i < hotdata.length; i++) {
	str_hot+='<li class="list-item"><div class="item-top"><div class="item-top1"><div class="item-name"><h2 class="topic">'+hotdata[i].topic+'</h2><span class="create-time">'+hotdata[i]['create-time']+'</span><div class="chat-me"></div></div><span class="salary">'+hotdata[i].salary+'</span></div><div class="item-info">'+hotdata[i]['item-info']+'</div></div><div class="labels"><span class="wordcut">技能培训</span><span class="wordcut">节日礼物</span><span class="wordcut">年度旅游</span></div><div class="item-btm"><img src="logo_1.png"><div class="bottom-right"><div class="company_name">古点(dotcom)</div><div class="industry">移动互联网，O2O/不需要融资/北京</div></div></div></li>';

	}
hot.innerHTML=str_hot;

var hot=document.getElementsByClassName('list-ul')[2];
var str_hot="";
for (var i = 0; i < newdata.length; i++) {
	str_hot+='<li class="list-item"><div class="item-top"><div class="item-top1"><div class="item-name"><h2 class="topic">'+newdata[i].topic+'</h2><span class="create-time">'+newdata[i]['create-time']+'</span><div class="chat-me"></div></div><span class="salary">'+newdata[i].salary+'</span></div><div class="item-info">'+newdata[i]['item-info']+'</div></div><div class="labels"><span class="wordcut">技能培训</span><span class="wordcut">节日礼物</span><span class="wordcut">年度旅游</span></div><div class="item-btm"><img src="logo_1.png"><div class="bottom-right"><div class="company_name">古点(dotcom)</div><div class="industry">移动互联网，O2O/不需要融资/北京</div></div></div></li>';

	}
hot.innerHTML=str_hot;


var list_li=document.getElementsByClassName('job-tab')[0].getElementsByTagName('li');
var list_div=document.getElementsByClassName('list-ul')
for (var n=0;n<list_li.length;n++){
	list_li[n].index=n;
	list_li[n].onclick=function(){
		for(var m=0;m<list_li.length;m++){
			list_li[m].className="";
			list_div[m].className="list-ul hide";
		}
		this.className="selected";
		list_div[this.index].className="list-ul";
	}
}

var ul=$(".banner_ul");
var left=$(".control_left");
var right=$(".control_right");
// var first=$(".banner_ul > li").first();
// var last=$(".banner_ul > li").last();
// left.click(function(){
// 	ul.stop().animate({
// 		left:'-=864px',
// 	},100,function(){
// 		ul.css("left","-864px");
// 		first.insertAfter(last);
// 	})
// })
 left.click(function(){
	ul.stop().animate({
		left:'-=864px',	
	},100,function(){
		ul.css("left","-864px");
		var first=$('.banner_ul > li').first();
		var last=$('.banner_ul > li').last(); 
		first.insertAfter(last);
	})
})
right.click(function(){
	clickright()
})



function clickright(){
	ul.stop().animate({
		left:'+=864px',	
	},100,function(){
		ul.css("left","-864px");
		var first=$('.banner_ul > li').first();
		var last=$('.banner_ul > li').last(); 
		last.insertBefore(first);
	})
}
var lun=setInterval(function(){
	clickright();
},2000)
	ul.mouseover(function(){
	clearInterval(lun);
})
	left.mouseover(function(){
	clearInterval(lun);
})
	right.mouseover(function(){
	clearInterval(lun);
})
ul.mouseout(function(){
	lun=setInterval(function(){
	clickright();
},2000)
})
left.mouseout(function(){
	lun=setInterval(function(){
	clickright();
},2000)
})
right.mouseout(function(){
	lun=setInterval(function(){
	clickright();
},2000)
})
// ul.mouseout(function(){
	
// })
// var li_list=$('.banner_ul > li');
// li_list.mouseover(function(){
// clearInterval(lun);
// })

 