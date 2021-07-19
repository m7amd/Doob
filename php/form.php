<?php
  // Get all variables 
  $name = "Mohammad Khaseeb";
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  if (!empty($email) && !empty($subject) && !empty($message)) {

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

      $reseiver = "mohammadkhaseeb6@gmail.com";
      $subject = "Form: $name <$email>";
      $body = "Name: $name\nEmal: $email\nMessage: $message\nRegards, \n$name"
      $sender = "From: $email" // sender email 
      if (mail($reseiver, $subject, $body, $sender)) {
        echo "your message has been sent";
      } else {  
        echo "Sorry, failed to send your message!";
      }
    } else {
      echo "Enter a valid email address!";
    }

  } else {
    echo "Email Field, is required!";
  }