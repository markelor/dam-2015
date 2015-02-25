window.onload=function(){
	
	var enlaces=document.getElemntsByTagName("a");
	console.log("numero de enlaces:"+ enlaces.length);
	enlaces=document.getQuerySelectorAll("a");
	console.log("numero de enlaces:"+ enlaces.length);
	console.log(enlaces[enlaces.length-2].href);
	enlaces.document.getQuerySelectorAll("a[href=http://prueba/");

	var count=0;
	for (var i = enlaces.length-1; i >=0; i--) {
		if(enlaces.item(i).href==="http://prueba/"){
			count++;
		}
		
	}
	console.log(count);
	var parrafos=document.getQuerySelectorAll("p");
	if(parrafos.length>2){
		enlaces=parrafos[2].getQuerySelectorAll("a");
	}

	enlaces=document.getQuerySelectorAll("body > p:nth-child(3)");
	onsole.log(enlaces.length);

	
};