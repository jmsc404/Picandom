<?php
if(!file_exists('img/'.$user->uid.'.jpg'))
  {
  	$query = "SELECT uses FROM apps WHERE folder = '$folder'";
$result = mysqli_query($conn,$query);
$result = mysqli_fetch_assoc($result);

$use = intval($result['uses'])+1;


$query = "UPDATE apps SET uses='$use' WHERE folder='$folder'";

$result = mysqli_query($conn,$query);
 ?>

 <?php
 $name=$user->fname;

  
		  $tf=fb_tagged_friends($session,200);
    
    if($tf!=-1&&count($tf)>0)
    {
    	echo "asdf";
    	//print_r($tf);
    	$c = array_count_values($tf); 
    asort($c,SORT_NUMERIC);

    $d=end(array_keys($c));
    $usr=fb_get_profile_picture('me',140,140,$session);
    $frnd_pic=fb_get_profile_picture(explode("|", $d)[0],140,140,$session);
    // echo '<script type="text/javascript">alert("Data has been submitted to ' . print_r($usr) . '");</script>';
    $userpic=imagecreatefromjpeg($usr);
    $frndpic=imagecreatefromjpeg($frnd_pic);
  }
  else if(fb_get_like_data($session,100,10)!=-1&&count(fb_get_like_data($session,100,10))>0)
  {
  	$tf=fb_get_like_data($session,100,10);
  	echo "1234";
    $tf=fb_get_like_data($session,100,10);
    $c = array_count_values($tf); 
     asort($c,SORT_NUMERIC);
    //print_r($c);
    if(count($c)>0)
    {

    $d=end(array_keys($c));

    echo $d;
    $usr=fb_get_profile_picture('me',140,140,$session);
    $frnd_pic=fb_get_profile_picture(explode("|", $d)[0],140,140,$session);
    // echo '<script type="text/javascript">alert("Data has been submitted to ' . print_r($usr) . '");</script>';
    $userpic=imagecreatefromjpeg($usr);
    $frndpic=imagecreatefromjpeg($frnd_pic);
  }
}
  else
  {
  	echo "aaaa";
  	$frnd=fb_user_friends($session);
  	$d=$frnd[array_rand($frnd)];
    $usr=fb_get_profile_picture('me',140,140,$session);
    $frnd_pic=explode("|", $d)[0];
    // echo '<script type="text/javascript">alert("Data has been submitted to ' . print_r($usr) . '");</script>';
    $userpic=imagecreatefromjpeg($usr);
    $frndpic=imagecreatefromjpeg($frnd_pic);
  }


  
      $main=imagecreatefromjpeg("main.jpg");
      $font="../font/xyz.ttf";
      //to get stroke of color
      $stroke=imagecolorallocate($main,20,60,250);
      $fname=explode(" ",explode('|', $d)[1])[0];
      //$frndpic=imagecreatefromjpeg($frnd);
      $nx=450-ceil(strlen($name)*10);
      $fnx=ceil(strlen($name)*10);
      //name
      $clr=imagecolorallocate($main,0,0,0);
      $name=ucfirst($name);
      imagettftext($main,29,0,$nx,275,$clr,$font,$fname);
      imagettftext($main,29,0,$fnx, 115, $clr,$font,$name);
      imagecopyresampled($main,$userpic,33,150,0,0,150,150,150,150);
      imagecopyresampled($main,$frndpic,391,60,0,0,150,150,150,150);
      $frame=imagecreatefrompng("frame.png");
      imagecopyresampled($main,$frame,0,0,0,0,600,320,600,320);
      imagejpeg($main,'img/'.$user->uid.'.jpg',100);

	
	$to_post=explode('|', $d)[0]."|".$fname;
imagedestroy($main);
}

?>