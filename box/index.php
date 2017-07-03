<html>
<head>
<title>
pICANDOm |The Friend Puzzle
</title>
<style>
body{
	margin:0;
	border:0;
	padding:0;
}
#main{
	padding:10px;
	margin:auto;
	text-align:center;
	position:relative;
}
#mainbox{
	
	text-align:center;
	position:relative;
	margin:auto;background:#A8A8A8;width:304px;height:304px;
}
#btndiv{
	position:relative;
	width:80%;
	margin:auto;
	text-align:center;
}
.btnclass {
	position:relative;
	margin:auto;
    border: white 2px solid;
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-family: sans-serif;
    background: rgb(0, 0, 0);
    border-radius: 5px;
    color: #FFB645;
}
.minibox2{
	position:absolute;
	background:#FF6E00;
	width:100px;
	height:100px;
	float:left;
	text-align:center;
	transition:all 0.3s ease-in-out;
}
.minibox3{
	position:absolute;
	background:#FF6E00;
	width:100px;
	height:100px;
	float:left;
	text-align:center;
	transition:all 0.3s ease-in-out;
}
.minibox4{
	position:absolute;
	background:#FF6E00;
	width:100px;
	height:100px;
	float:left;
	text-align:center;
	transition:all 0.3s ease-in-out;
}
#shadow{
position: relative;
width: 99%;
height: 99%;
background: rgba(128, 128, 128, 0.46) none repeat scroll 0% 0%;
border: 1px solid #F90;
}
#timer {
	display:none;
    margin: auto;
    width: 100px;
    margin-top: 20px;
    position: relative;
    height: 100px;
    background: black;
    text-align: center;
    font-size: 18px;
    font-family: monospace;
    border-radius: 50px;
    text-transform: capitalize;
    color: #EFB645;
}
#info {
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 10px;
    padding-top: 20px;
    color: #00FF00;
    font-size: 25px;
}
</style>
</head>

<body>
<div>
	Exchange only Horizontal and Vertical Boxes with Click only ....
</div>
<div id= "main" >
    
    <div id="mainbox" style="display:none;">
    </div>

</div>
    
    
    <div id="btndiv">
    <input type="button" id="start3" class="btnclass" value="Start 3by3" onClick="start(3)">
    <input type="button" id="start4" class="btnclass" value="Start 4by4" onClick="start(4)">
    <input type="button" id="shuffleme3" class="btnclass" value="Shuffle me" onClick="shuffleme(3)" style="display:none;">
    <input type="button" id="shuffleme4" class="btnclass" value="Shuffle me" onClick="shuffleme(4)" style="display:none;">
    </div>
    <div id="timer">
    </div>
	<div id = "info">
	</div>
	<script src="testgame.js"></script>
    <!-- Originally Created by Jmsc on SomeOnes B'day ... Someone Still Doesn't Know-->
</body>
</html>