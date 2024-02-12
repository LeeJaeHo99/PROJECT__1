const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup>span');
btn.onclick = function(){
    pop.style.display = 'none';
};

$('.menu_open').on('click', function () {
    $('html').addClass('all_scrollFixed');
    $('#sitemap').show();
    $('.close_btn').on('click', function () {
      $('#sitemap').hide();
      $('html').removeClass('all_scrollFixed');
    });
  })