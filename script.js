jQuery(document).ready(function() {
    jQuery('form').validate(); // Инициализация jQuery Validation для всех форм на странице

    jQuery('form').submit(function(e) {
        e.preventDefault();
        var form = jQuery(this);

        if (form.valid()) { // Теперь метод valid() будет доступен для проверки валидности формы
            form.css('opacity', '.5');
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function(data) {
                    form.html(data);
                    form.css('opacity', '1');
                },
                error: function() {
                    form.find('.status').html('серверная ошибка');
                }
            });
        }
    });
});
