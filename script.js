$(document).ready(function() {
    $('#contactForm').validate(); // Инициализация jQuery Validation для формы

    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Предотвращаем отправку формы по умолчанию

        if ($(this).valid()) { // Проверяем валидность формы
            $(this).css('opacity', '0.5'); // Устанавливаем непрозрачность формы

            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                dataType: 'json',
                data: $(this).serialize(), // Сериализуем данные формы для отправки
                success: function(response) {
                    $('#contactForm').css('opacity', '1'); // Восстанавливаем прозрачность формы
                    $('#statusMessage').html('<p>Message sent successfully!</p>'); // Выводим сообщение об успешной отправке
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText); // Выводим ошибку в консоль
                    $('#statusMessage').html('<p>Failed to send message. Please try again later.</p>'); // Выводим сообщение об ошибке
                }
            });
        }
    });
});
