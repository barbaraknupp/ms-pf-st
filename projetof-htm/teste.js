window.onload=function(){
var variaveis=location.search.split("?"); 
var split = variaveis[1].split("="); 
var comando = split[1];

switch (comando){
	//rele 1
	case "rele1on":
	 var div = document.getElementById('sts-rele1');
	 div.style.background='#65a954';
	break;
	
	case "rele1off":
	 var div = document.getElementById('sts-rele1');
	 div.style.background='red';	
	break;
	
	//rele2
	case "rele2on":
	 var div = document.getElementById('sts-rele2');
	 div.style.background='#65a954';
	break;
	
	case "rele2off":
	 var div = document.getElementById('sts-rele2');
	 div.style.background='red';	
	break;
	
	//rele3
	case "rele3on":
	 var div = document.getElementById('sts-rele3');
	 div.style.background='#65a954';
	break;
	
	case "rele3off":
	 var div = document.getElementById('sts-rele3');
	 div.style.background='red';	
	break;
	
	//rele4 
	case "rele4on":
	 var div = document.getElementById('sts-rele4');
	 div.style.background='#65a954';
	break;
	
	case "rele4off":
	 var div = document.getElementById('sts-rele4');
	 div.style.background='red';	
	break;
	
	default:
	 alert("deu ruim");
}
}