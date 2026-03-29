<?php
$cfName = $_POST['cfName'];
$cfEmail = $_POST['cfEmail'];
$cfPhone = $_POST['cfPhone'];

ini_set('display_errors', 1);
error_reporting(E_ALL);

/**
 * Set the recipient email address.
 * 
 * FIXME: Update this to your desired email address.
 */
$recipient = "support@themejunction.net";

// Set the email.
$sender = $cfEmail;


//Email Header
$head = "You have a new message from your Tekmino website Contact Form\n=============================";

// Build the email content.
$form_content = "$head\n\n";

$form_content .= "Full Name: $cfName\n";

$form_content .= "Email: $cfEmail\n";

$form_content .= "Phone: $cfPhone\n";


// Build the email headers.
$headers = "From: $cfName < $cfEmail >\r\n" .
    "Reply-To:" . $cfEmail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($recipient, $sender, $form_content, $headers)) {
    echo "Y";
} else {
    echo "N";
}
