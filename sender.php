<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из POST запроса
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Пример отправки email
    $to = "your_email@example.com"; // Замените на свой email
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Отправка email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // Успешный ответ
        echo json_encode(array("message" => "Message sent successfully."));
    } else {
        http_response_code(500); // Ошибка сервера
        echo json_encode(array("message" => "Failed     to send message."));
    }
} else {
    http_response_code(400); // Некорректный запрос
    echo json_encode(array("message" => "Invalid request."));
}
?>
