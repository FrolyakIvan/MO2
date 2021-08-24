<?php
if(isset($_POST['M_tell'])){
	$M_fio = $_POST['M_fio'];
	$M_tell = $_POST['M_tell'];    
	$M_mail = $_POST['M_mail'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Main Request';

	$message = "
		
		Name: ".htmlspecialchars($M_fio)."
		Telephone: ".htmlspecialchars($M_tell)."
		Mail: ".htmlspecialchars($M_mail);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>