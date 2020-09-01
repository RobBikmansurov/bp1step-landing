$(document).ready(function() {
  $('.block__title').click(function(event) {
    if($('.block').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('active'); // удалить класс active у всех кроме выбранного
      $('.block__text').not($(this).next()).slideUp(300); // свернуть все кроме выбранного
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
});

