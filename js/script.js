const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup>span');
btn.onclick = function(){
    pop.style.display = 'none';
};

$('.o').on('click', function () {
    $('html').addClass('all_scrollFixed');
    $('#sitemap').show();
    $('.x').on('click', function () {
    $('#sitemap').hide();
    $('html').removeClass('all_scrollFixed');
    });
})