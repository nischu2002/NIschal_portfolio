<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  // Validate the form data
  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    die('Please fill out all required fields.');
  }
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Please enter a valid email address.');
  }

  // Send the email
  $to = 'bhattarainischal2002@gmail.com';
  $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  if (mail($to, $subject, $body, $headers)) {
    echo 'Your message has been sent.';
  } else {
    echo 'There was an error sending your message.';
  }
}
?>
