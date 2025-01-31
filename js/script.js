//사이트맵
$('.menu_open').on('click', function () {
    $('html').addClass('all_scrollFixed');
    $('#sitemap').show();
    $('.close_btn').on('click', function () {
      $('#sitemap').hide();
      $('html').removeClass('all_scrollFixed');
    });
  })

//날씨api
async function weather() {
  try {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=78e9ebd4228ee28d89014f0e8042ed0e&units=metric');
      if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다.');
      }
      const data = await response.json();

      const tempNow = data.main.temp;
      document.querySelector('.tempNow').innerHTML += tempNow + '℃';

      const tempMax = data.main.temp_max;
      document.querySelector('.tempMax').innerHTML += tempMax + '℃';

      const tempMin = data.main.temp_min;
      document.querySelector('.tempMin').innerHTML += tempMin + '℃';

      const feelsLike = data.main.feels_like;
      document.querySelector('.feelsLike').innerHTML += feelsLike + '℃';

      const wIcon = data.weather[0].icon;
      document.querySelector('.wIcon').innerHTML += '<img src="http://openweathermap.org/img/w/' + wIcon + '.png">';
  } catch (error) { 
      console.error('날씨 정보를 가져오는 중 에러가 발생했습니다:', error); 
  } 
}
weather();



//시간
function time(){
  let day = new Date();
  let now = day.toLocaleTimeString();
  document.querySelector('#time').innerHTML = now;
};

setInterval(time, 1000);

//팝업창 닫기
$('.close').on('click', function(){
  $('.popup').fadeOut(800);
})

//슬라이드 배너
const banner = $('.banner_wrap > ul > li');
let current = 0;
let setIntervalID; 

function timer(){
  setIntervalID = setInterval(() => {
      slideFn();
  }, 2000);
}

function slideFn(){
  let prev = banner.eq(current);
  let prevPage = pager.eq(current);
  move(prev, '0%', '-100%');
  prevPage.removeClass('on');
  current++;
  if(current == banner.length){
      current = 0;
  }
  let next = banner.eq(current);
  let nextPage = pager.eq(current);
  move(next, '100%', '0%');
  nextPage.addClass('on');
}

function move(tg, start, end){
  tg.css('left', start).stop().animate({
      'left' : end,
  }, 500, 'easeOutCubic')
}

$('.banner_wrap').on({
  'mouseenter' : function(){clearInterval(setIntervalID)},
  'mouseleave' : function(){
      timer()
  },
});

//컨트롤 버튼 클릭
    const prev = $('.btnImg > img[alt = left');
    const next = $('.btnImg > img[alt = right');
    //next
    next.on('click', function(){
      let prev = banner.eq(current);
      let prevPage = pager.eq(current);
      move(prev, '0%', '-100%');
      prevPage.removeClass('on');
      current++;
      if(current >= banner.length){
          current = 0;
      }
      let next = banner.eq(current);
      let nextPage = pager.eq(current);
      move(next, '100%', '0%');
      nextPage.addClass('on');
  });

  //prev
      prev.on('click', function(){
      let prev = banner.eq(current);
      let prevPage = pager.eq(current);
      move(prev, '0%', '100%');
      prevPage.removeClass('on');
      current--;
      if(current < 0){
          current = 2;
      }
      let next = banner.eq(current);
      let nextPage = pager.eq(current);
      move(next, '-100%', '0%');
      nextPage.addClass('on');
  });

      //페이저 버튼
      const pager = $('.pager li');
      pager.on('click', function(){
        const i = $(this).index();
        pager.removeClass('on');
        $(this).addClass('on');
        pagerMove(i);
    });
    function pagerMove(i){
        let currentEl = banner.eq(current);
        let nextEl = banner.eq(i);
        currentEl.css('left', 0).stop().animate({
            'left' : '-100%',
        }, 500);
        nextEl.css('left', '100%').stop().animate({
            'left' : 0,
        }, 500);
        current = i;
    }

    $(window).scroll(function(){
      let height = $(window).scrollTop();
      //fixed_button
      if(height >= 500){
          $('.fixed_button').css({
              'opacity' : 1,
              'transform' : 'translate(-50%)',
      });
      }else{
          $('.fixed_button').css({
              'opacity' : 0,
              'transform'  : 'translate(50%)',
      });
      }
  });

    //탑버튼
$('.topbutton').on('click', function(){
  window.scroll({
      'top' : 0,
      'behavior' : 'smooth',
  })
});