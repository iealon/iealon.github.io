/*----------------------------*\
filename: init.js
author  : loganxie
email  	: loganxie@tencent.com
create  : 	
加油少年！GO！GO！GO！
\*----------------------------*/
!function(){
	function getUrlParam(key,url){
		var reg = new RegExp('.*[\?|\&|\#]'+key+'\=([^\&]*)\&?.*','ig');
		url = url||location.href;
		return url.replace(reg,'$1');
	}

}();