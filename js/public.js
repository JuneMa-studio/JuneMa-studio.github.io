// public.js
// 此处编写的是整个站点的公用方法和函数
// 这些函数通常带有参数,使用时应准确对应以保证页面正常
// -----------------------------------------------------------
// dia(e,a) dialog标签专用方法集成，控制dialog显示和隐藏
// e: 需要控制的dialog对象的id名 形如: "#name"
// a: 需要执行的操作 规定为'show','showModal'or'close'.不规定时默认为'show'
// 示例 : dia('#dia','showModal').
function dia(e,a){
	var a = a || 'show';
	if(document.querySelector(e) != undefined){
		var ele = document.querySelector(e);
	}else{
		console.error("Error,id 'e' is not an element.");
	}
	switch(a){
		case 'show' : ele.show();break;
		case 'showModal' : ele.showModal();break;
		case 'close' : ele.close();break;
		default : console.error("Error,the 2ed tag is undefind,it must like 'show','showModal'or'close'.");break;
	}
}
// -----------------------------------------------------------
// localStg(name,value,active) localStorage相关方法集成，控制localStorage数据的写入，修改，读取，删除
// name: 字段名 形如:'name'
// value: 字段名对应值,可以是数组
// active: 需要执行的操作 形如:'del','add','upload','get'
function localStg(name,value,active){
	
}
// -----------------------------------------------------------
// 个人心得:
// 传参是可以传数组的
