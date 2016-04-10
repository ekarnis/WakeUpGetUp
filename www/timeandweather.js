var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
	var d=new Date();
	var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
	var nhour=d.getHours(),nmin=d.getMinutes(),ap;

	var night_hour = 10, night_minute = 60;

	if(nhour==0){ap=" am";nhour=12;}
	else if(nhour<12){ap=" am";}
	else if(nhour==12){ap=" pm";}
	else if(nhour>12){ap=" pm";nhour-=12;}

	if(nhour<10){document.getElementById("clock").style.left = "25vw";}

	if(nmin<=9) nmin="0"+nmin;

	night_hour -= nhour;
	night_minute -= nmin;
	if(night_minute < 60) night_hour--;
	if(night_minute < 10) night_minute = "0" + night_minute;

	document.getElementById("clock").innerHTML=""+nhour+":"+nmin+"";
	document.getElementById("noon_or_midnight").innerHTML=""+ap+"";
	document.getElementById("date").innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
	document.getElementById("night_alarm_time").innerHTML=""+night_hour+":"+night_minute+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
