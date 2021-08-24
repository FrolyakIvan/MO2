<?php
if(isset($_POST['P_tell'])){
	$P_fio = $_POST['P_fio'];
	$P_tell = $_POST['P_tell'];    
	$P_mail = $_POST['P_mail'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Price Request';

	$message = "
		
		Name: ".htmlspecialchars($P_fio)."
		Telephone: ".htmlspecialchars($P_tell)."
		Mail: ".htmlspecialchars($P_mail);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>