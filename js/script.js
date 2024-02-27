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

  //시간
function time(){
  let day = new Date();
  let now = day.toLocaleTimeString();
  document.querySelector('#time').innerHTML = now;
};

setInterval(time, 1000);