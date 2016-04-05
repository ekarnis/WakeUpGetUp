var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
	var d=new Date();
	var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
	var nhour=d.getHours(),nmin=d.getMinutes(),ap;
	if(nhour==0){ap=" am";nhour=12;}
	else if(nhour<12){ap=" am";}
	else if(nhour==12){ap=" pm";}
	else if(nhour>12){ap=" pm";nhour-=12;}

	if(nhour<10){document.getElementById("clock").style.left = "25vw";}

	if(nmin<=9) nmin="0"+nmin;

	document.getElementById("clock").innerHTML=""+nhour+":"+nmin+"";
	document.getElementById("noon_or_midnight").innerHTML=""+ap+"";
	document.getElementById("date").innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
