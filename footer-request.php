<?php
if(isset($_POST['F_tell'])){
	$F_fio = $_POST['F_fio'];
	$F_tell = $_POST['F_tell'];    
	$F_mail = $_POST['F_mail'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Footer Request';

	$message = "
		
		Name: ".htmlspecialchars($F_fio)."
		Telephone: ".htmlspecialchars($F_tell)."
		Mail: ".htmlspecialchars($F_mail);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>