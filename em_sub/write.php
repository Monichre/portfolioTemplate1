<?php

$enable_cookies = ($_GET['c'] == "1");

$file = "emails.txt";
$email = $_GET['e'];
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == "XMLHttpRequest"){
	
	$email_list = file_exists("emails.txt") ? explode(",", file_get_contents("emails.txt")) : array();
	array_pop($email_list);
	
	if(!in_array($email, $email_list)){
		if(file_put_contents($file, $email.",", FILE_APPEND)){
			echo "Added ".stripslashes(htmlspecialchars($email)) ." to the list!";
			if(substr(sprintf('%o', fileperms('emails.txt')), -4) != "0640"){
				chmod("emails.txt", 0640);
			}
			if($enable_cookies){
				setcookie("em_email", $email, time()*2, "/");
			}
		}
		else{
			echo "Failed to add to list!";
		}
	}
	else{
		echo "E-mail already exists in list!";
	}
}
else{
	echo "This script can only be accessed through javascript!";
}
?>