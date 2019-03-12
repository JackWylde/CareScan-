<?php

$name = $_POST['contactName'];
$company = $_POST['contactCompany'];
$email = $_POST['contactEmail'];
$formsubject = $_POST['contactSubject'];
$message = $_POST['contactMessage'];
$from = 'From: carescan+.com';
$to = 's6200601@live.tees.ac.uk';
$subject = 'Contact Form Enquiry';
$body = "From: $name\n Company: $company\n E-Mail: $email\n Subject: $formsubject\n Message:\n $message";
 
mail($to, $subject, $body);
header("Location: index.html")

?>