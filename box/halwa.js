var yl = function(x){
		  var c = String(x.id);
		  var k = Number(c[1]);
		  //alert(k);
		  for(var i=1;i<=k;i++)
		  {
			  var idc="r"+String(i);
			  var getstar=document.getElementById(idc);
			  getstar.src="http://www.appsfame.com/images/star2.png";
		  }
		  var arr=Array("Total shit!","I hate this","Not Bad","Awesome","Love it!");
		  var t=document.getElementById("ratetext");
		  t.innerHTML=arr[k-1];
		  if(k>3)
		  {
			  t.style.color="#0000FF";
		  }
		  else if(k>1)
		  t.style.color="#00FF00";
		  else
		  t.style.color="#FF0000";
}
	  
var g = function(x){
		  var c = String(x.id);
		  var k = Number(c[1]);
		  //alert(k);
		  for(var i=1;i<=k;i++)
		  {
			  var idc="r"+String(i);
		  //	alert(idc);
			  var getstar=document.getElementById(idc);
			  getstar.src="http://www.appsfame.com/images/star1.png";
		  }
  		  var t=document.getElementById("ratetext");
		  t.innerHTML="";

}
var rateme = function(x)
{
		  var c = String(x.id);
		  var k = Number(c[1]);
		  var i=0;
		  //alert(k);
		  //AXAX Request to add Rating to app.
		  for(i=1;i<=5;i++)
		  {
			  var idc="r"+String(i);
			  var getstar=document.getElementById(idc);
			  getstar.onmouseover="";
			  getstar.onmouseout="";
		  }
		  for(i=1;i<=k;i++)
		  {
			  var idc="r"+String(i);
			  var getstar=document.getElementById(idc);
			  getstar.src="http://www.appsfame.com/images/star2.png";
		  }
		  for(i=k+1;i<=5;i++)
		  {
			  var idc="r"+String(i);
			  var getstar=document.getElementById(idc);
			  getstar.src="http://www.appsfame.com/images/star1.png";
		  }
  		  var arr=Array("Total shit!","I hate this","Not Bad","Awesome","Love it!");
		  var t=document.getElementById("ratetext");
		  t.innerHTML=arr[k-1];
		  var appuri = document.URL;
		  x = appuri.split('/');
		  
		  rating(x[4],k);
}
function toggle(id)
{
	menu=document.getElementById(id);
	if(menu.style.display=="block")
	{
		menu.style.display="none";
	}
	else
	{
		menu.style.display="block";
	}
}
function load()
{
	document.getElementById('loadbar').style.display="block";
	document.getElementById('loginbtn').style.display="none";
	document.getElementById('loginfb').style.display="none";	
}
function share(url) 
{
	ff = window.open(url, "popup", "width=590px,height=300px,left=50%,top=50%");
}
var popup = null;
window.onload = function(){
    popup = document.getElementById('popup1');
    if(popup!=null){
        setTimeout(function(){ popup.style.display = "block"; },2000);
    }
}

function pup(app,uid){
	toggle('popup1');
	mc(app,uid);

}
function rating(app,rating)
{
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
  }
  };
  xhttp.open("GET", "http://www.appsfame.com/rating.php?app="+app+"&rate="+rating, true);
  xhttp.send();
}
function mc(app,uid){
        var afs = "www.appsfame.com/share.php?app="+app+"&uid="+uid;
	    var url="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(afs);
        
		ff = window.open(url, "popup", "width=590px,height=300px,left=50%,top=50%");
}




