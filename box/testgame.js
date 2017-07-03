//Originally Created by Jmsc on SomeOnes B'day ... Someone Still Doesn't Know. :D
//Created for SelfTime pass ... but you can too play with it by adding some functionality and features.... kinda fun but still programming sucks when you are alone .... make world a opensource place.  
var gid = function(id){	return document.getElementById(id);        };
var gc = function (c) { return document.getElementsByClassName(c); };
var ct = function (t) { return document.createElement(t);          };
//function to return random from a to b both included
var rand = function(a,b){
   "use strict";
   if(a===b){return a;}
   var k = Math.floor(Math.random()*(b+1));//Method below can be very time consuming but it's not framing game .... so just chill...:D
   while(k<a||k>b){ k = Math.floor(Math.random()*(b+1)); }//when you are too lazy.
   return k;
};
var swapboxes = function(box1){
    "use strict";
	var box2 = gid("1");
	if((box1.style.top===box2.style.top)||(box1.style.left===box2.style.left)){
		var btop =box1.style.top;
		var bleft =box1.style.left;
		var pos = box1.getAttribute("pos");
		box1.style.top=box2.style.top;
		box1.style.left=box2.style.left;
		box1.setAttribute("pos",box2.getAttribute("pos"));
		box2.style.top=btop;
		box2.style.left=bleft;
		box2.setAttribute("pos",pos);
        return 1;
	}
    return 0;
};
//Simple function to add shadow kind off effect on primary swapping element 
var createShadow = function(id){
	"use strict";
	var element = gid(id);
	var shadow = document.createElement("div");
	shadow.id = "shadow";
	element.appendChild(shadow);
	console.log("Shadow fn is called");
	return element;
};
//returns Current time.
var currTime = function(){ return new Date().getTime(); }
//I still don't know why the f**k i wrote this function... but can be useful
var startTime = function(){
	"use strict";
	var stime = currTime();//132434535
	console.log("Time Has been started");
	return function(){  
        var diff = new Date().getTime();//132434545
        diff = diff - stime; 
        return diff;
	};
};
//So called Globals ... hahaha
var shuffleme = null;
var checkTime = null;
var timerid = null;
//function to create Elements
var initBoxes = function(cross){
  "use strict";
  var mainbox = gid("mainbox");
  mainbox.style.width = cross*101;
  mainbox.style.height = cross*101;
  var box = [];//array empty
  var xbyx = cross*cross;
  var pic = "p";
  var classnameforboxes = "minibox3";
  var pos = Math.floor((cross*101+1)/cross);//304/3=101.1->101    //3.4 floor(3.4)=3
  if(cross === 2){
	  classnameforboxes = "minibox2";
      pic="q";
  }
  else if (cross === 4){
	  classnameforboxes = "minibox4";
      pic="r";
  }
  for(var i=0;i<xbyx;i++){
	  box[i] = ct("div");//[div]var box1 = ct("div);
	  box[i].setAttribute("pos",i+1);
	  box[i].id=i+1;
	  box[i].className=classnameforboxes;
	  box[i].style.top=Math.floor((i/cross))*pos;//0//101
	  box[i].style.left=(i%cross)*pos;//101 202 //0
	  box[i].style.background="url('p"+(i+1)+".jpg')";
	  box[i].onclick = function(){//
			  swapboxes(this);
          	  if(check(box)){
                  stopme();
			  }
	  };//finish onclick event assigning
  mainbox.appendChild(box[i]);
  }
  //element = createshadow("1");
  console.log("Boxes Has been Created and Event is Set to each box.");
  return (function(){
	  return box;
  })();//
};

var check = function(boxes){//1-9[boxes]
	"use strict";
    for(var i=0;i<boxes.length;i++){
    	if(boxes[i].getAttribute("pos")!=boxes[i].id)
      	{ return false; }
	}
    return true;
};
var stopTimer = function(id){
	"use strict";
	clearInterval(id);
};
var stopme = function(){
  "use strict";
  stopTimer(timerid);
  alert("You have just Won \nThe FriendShip Band in "+Math.floor(checkTime()/1000)+" Seconds");
  gid("info").innerHTML = "You have Done it.";
};

//object of type bind have a and b property
var bind = function(a,b){
   "use strict";
   this.a=a;
   this.b=b;
};
//function to randomise the boxes by fixed steps 
var halwa = function(cross){
		"use strict"; 
		var totalboxes = cross*cross;
		var steps = null;
		var f1 = 1;
		var f2 = null;
		var box1 = null;
		var box2 = null;
		var b1top = null;
		var b1left = null;
		var b1pos = null;
		var b1 = null;
		var b2 = null;
		createShadow(f1);
		return  function(){
				f2 = rand(2,totalboxes);
				box1 = gid(f1);//1
				box2 = gid(f2);//5
				while((box1.style.top!==box2.style.top)&&(box1.style.left!==box2.style.left)){
					f2 = rand(2,totalboxes);
					box2 = gid(f2);
				}
				b1top =box1.style.top;
				b1left =box1.style.left;
				b1pos = box1.getAttribute("pos");
				
				b1 = b1pos;
				b2 = box2.getAttribute("pos");
				//Exchanging Properties of Box2 and Box1
				box1.style.top=box2.style.top;
				box1.style.left=box2.style.left;
				box1.setAttribute("pos",box2.getAttribute("pos"));
			
				box2.style.top=b1top;
				box2.style.left=b1left;
				box2.setAttribute("pos",b1pos);
				
				steps = new bind(b1,b2);
				return steps;
		};
};
var showTimer = function(){
	"use strict";
	var k = currTime();
	var timecounter = gid("timer");
	timecounter.style.display="block";
	timerid = setInterval(function(){ timecounter.innerHTML = "<br>"+Math.floor((new Date().getTime() - k)/1000)+" <br>Seconds";},1000);
	
};
var shufflefn = function(cross) {
	"use strict";
	console.log("Halwa is to be executed");
	var halwafn = halwa(cross);//this will return a fn wihich will swap two random boxes
	var x = null;
	var str = "";
	return function(){
	//this will always
		for(var i=0;i<25;i++){
			setTimeout((x=halwafn()),10);
			str+="<-"+x.a; 
		}
        checkTime =	startTime();
        showTimer();
        var shuffle = gid("shuffleme"+cross);
        shuffle.style.display = "none";
        gid("info").innerHTML=str;
	};
};
var start = function (cross){
	"use strict";
	initBoxes(cross);
	var main = gid("mainbox");
	main.style.display = "block";
	var s3 = gid("start3");
	s3.style.display = "none";
	var s4 = gid("start4");
	s4.style.display = "none";
	var shuffle = gid("shuffleme"+cross);
	shuffle.style.display = "block";
	shuffleme = shufflefn(cross);
	console.log("startfn is and executed");
};