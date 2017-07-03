<?php
$d=3;
$pic="p";
if(isset($_GET['d'])&&!empty($_GET['d']))
$d=$_GET['d'];
if($d==2){
    $pic="q";
}else{
    $pic="r";
}
$main = imagecreatefromjpeg("main.jpg");
$f = imagecreatefromjpeg("pic.jpg");
$b= imagecreatefromjpeg("blank".$d."00.jpg");
$imgx= imagesx($f);
$imgy= imagesy($f);
imagecopyresampled($b,$f,0,0,0,0,$d*100,$d*100,$imgx,$imgy);
for($i=0;$i<$d*$d;$i++)
{
	$ix= (floor($i/$d))*100;
	$iy = ($i%$d)*100;
	imagecopyresampled($main,$b,0,0,0+$iy,0+$ix,100,100,100,100);
	imagejpeg($main,$pic.($i+1).".jpg",100);
    echo '<img src="'.$pic.($i+1).'.jpg" />';
}



?>