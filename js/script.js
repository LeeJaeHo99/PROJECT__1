// const pop = document.querySelector('.popup');
// const btn = document.querySelector('.popup>span');
// btn.onclick = function(){
//     pop.style.display = 'none';
// };

const pager = $('.pager li')

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
})

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
    })

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
    })

      //페이저 버튼
        pager.on('click', function(){
        const i = $(this).index();
        pager.removeClass('on');
        $(this).addClass('on');
        pagerMove(i);
    });
    function pagerMove(i){
        let currentEl = banner.eq(current); //0
        let nextEl = banner.eq(i); //클릭한 pager index
        currentEl.css('left', 0).stop().animate({
            'left' : '-100%',
        }, 500);
        nextEl.css('left', '100%').stop().animate({
            'left' : 0,
        }, 500);
        current = i;
    }

    //스크롤 애니메이션
    $(window).scroll(function(){
        let height = $(window).scrollTop();
        console.log(`스크롤 높이 확인 : ` + height);

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

      //section_thr_title
      if(height >= 350){
          $('.section_thr_left_title').css({
              'opacity' : 1,
              'transform' : 'translate(0)',
      });
          $('.section_thr_right_title').css({
              'opacity' : 1,
              'transform' : 'translate(0)',
      });
      }else{
          $('.section_thr_left_title').css({
              'opacity' : 0,
              'transform'  : 'translate(0, 50%)',
      });
          $('.section_thr_right_title').css({
              'opacity' : 0,
              'transform'  : 'translate(0, 50%)',
      });
      }

      //section_eig_title
      if(height >= 800){
          $('.section_eig_title').css({
              'opacity' : 1,
              'transform' : 'translate(0)',
      });
          $('.section_eig_box_title').css({
              'opacity' : 1,
              'transform' : 'translate(0)',
      });
      }else{
          $('.section_eig_title').css({
              'opacity' : 0,
              'transform'  : 'translate(0, 50%)',
      });
          $('.section_eig_box_title').css({
              'opacity' : 0,
              'transform'  : 'translate(0, 50%)',
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