<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    $to = "mirjalilovodil@gmail.com";
    $subject = "Message from Website";
    $message = "Name: $name\nEmail: $email\nMessage: $text";

    // Additional headers
    $headers = "From: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "<p>Thank you! Your message has been sent.</p>";
    } else {
        echo "<p>Oops! Something went wrong and we couldn't send your message.</p>";
    }
}
?>
