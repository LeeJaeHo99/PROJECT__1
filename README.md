# 경찰청 🚓
### [기획서 보기](./project1.pdf)
> 경찰청 홈페이지를 **리디자인 후 구현한** 프로젝트 입니다.
> 
> 배포화면 보기 [_사이트 보기_](https://leejaeho0104.github.io/PROJECT__1/). 
> 
## 목차 <!-- omit in toc -->
- [경찰청🚓](#경찰청)
    - [기획서 보기](#기획서-보기)
- [프로젝트 소개](#프로젝트-소개)
  - [기술스텍](#기술스텍)
  - [디자인 프로그램](#디자인-프로그램)
  - [주요구현사항](#주요구현사항)
  - [해당 프로젝트를 통해 배운점](#해당-프로젝트를-통해-배운점)
      - [실시간 날씨 표현 (구현 화면)](#실시간-날씨-표현-구현-화면)
      - [현재 시간 표현 (구현 화면)](#현재-시간-표현-구현-화면)
  - [폴더 구조](#폴더-구조)
  - [아웃라인](#아웃라인)
  - [브라우저 호환성](#브라우저-호환성)
  - [메인화면 스크린샷](#메인화면-스크린샷)
  - [Contact](#contact)
<!-- * [License](#license) -->


# 프로젝트 소개
- 경찰청 홈페이지를 리디자인하여 제작한 웹사이트입니다.
- 디자인부터 코딩까지 100% 스스로 작업한 프로젝트 입니다.
- html5, css3, 자바스크립트, jquery를 사용해 구현한 웹사이트입니다.
- PC, Tablet, Mobile 화면을 미디어 쿼리를 이용해 **반응형 페이지**로 구현하였습니다.


## 기술스텍
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/JQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">


## 디자인 프로그램
<img src="https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white">
<img src="https://img.shields.io/badge/illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white">
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">


## 주요구현사항
- **날씨 API**를 활용한 실시간 날씨 정보 표현
- JQuery를 이용한 메인 **배너 슬라이드** 구현
- **new Date** 함수와 **setInterval** 함수를 이용해 현재 시간 1초 단위로 구현
- 바닐라 자바스크립트만으로 **window.scrollY** 값에 따른 **스크롤 애니메이션** 구현


## 해당 프로젝트를 통해 배운점

```javascript
1. 오픈 API를 활용한 데이터 통신 학습
- fetch와 async, await를 사용하여 실제 오픈 API를 호출하고, 응답 데이터를 처리하는 코드를 구현했습니다.
- 이 과정에서 비동기 처리의 사용 이유, 중요성과 데이터를 활용하는 방법을 배웠습니다. 

//프로젝트 내 구현한 코드입니다.
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
```
#### 실시간 날씨 표현 (구현 화면)
![image](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/f6e6cf0e-2c62-4591-8169-4acf1ffc12b1)

---

```javascript
2. 현재 시간 나타내기
- new Date를 이용해 현재 시간을 받아오고, innerHTML을 이용해 미리 만들어둔 태그에 넣는 코드를 구현했습니다.
- 이 과정을 통하여 실시간으로 데이터를 업데이트하는 방법을 배우게 됐습니다.

//프로젝트 내 구현한 코드입니다.
function time(){
  let day = new Date();
  let now = day.toLocaleTimeString();
  document.querySelector('#time').innerHTML = now;
};

setInterval(time, 1000);
```
#### 현재 시간 표현 (구현 화면)
![image](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/bc0b57f3-df45-4b7c-8d7f-07f3d11e5a0a)

---

```javascript
3. 슬라이드 배너
- timer 함수를 통해 일정 시간마다 slideFn 함수를 호출하여 배너가 자동으로 넘어가도록 설정하고, 
  배너 위에 마우스를 올리면 clearInterval 함수를 이용해 중지되도록 합니다.
- 사용자가 'next' 버튼을 클릭하면 배너가 left를 기준으로 0%에서 -100%로 이동하고, 
  'prev' 버튼을 클릭하면 배너의 left를 기준으로 0%에서 100%로 이동하여 새로운 배너가 나타나는 애니메이션 효과가 실행됩니다.
- 페이저 버튼을 클릭하면 해당 배너로 직접 이동할 수 있습니다.  모든 애니메이션은 move 함수를 통해 구현되며, 
  이 함수는 시작 위치와 끝 위치를 매개변수로 받아 CSS 속성을 변경하고 애니메이션을 적용합니다.

//프로젝트 내 구현한 코드입니다.
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
```

## 폴더 구조

폴더는 아래와 같은 구조로 제작되었습니다.
```
root
└── index.html
└── css
│    ├── style.css
│    ├── reset.css
│    ├── media.css
│    └── fonts.css
│
└── js
│    └── script.js
│
└── img
    ├── banner
    ├── bg
    ├── icon
    ├── logo
    ├── picture
    └── sns
```

## 아웃라인
index html파일은 아래와 같은 구조로 제작되었습니다.
```
body
  └── .wrap
        └── header
        │    ├── logo
        │    └── nav
        └── main/
        │    ├── section1
        │    ├── section2
        │    ├── section3
        │    ├── section4
        │    ├── section5
        │    ├── section6
        │    ├── section7
        │    └── section8
        └──footer
             ├── footer_box
             ├── footer_link
             ├── footer_address
             ├── footer_copyright
             └── footer_caution
```

## 브라우저 호환성
|브라우저|![chrome_icon](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/3e912b12-1d18-4635-8f9c-9abba81cfb80)|![edge_icon](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/f494434e-b0bd-447f-a3b1-6e7fc9e41d17)|![firefox_icon](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/6da83ea9-6744-422a-8929-a771dd20d94a)|![opera_icon](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/1fa4b9c9-9aa6-467f-bbc6-1fc46959c053)
|---|---|---|---|---|
|호환성 여부|O|O|O|O|

<!-- 반응형 -->
|디바이스 종류|PC|Tablet|Mobile|
|---|---|---|---
|컨테이너 너비|1800px|1100px|550px


## 메인화면 스크린샷
![main](https://github.com/LeeJaeHo0104/PROJECT__1/assets/151009272/efca0bdc-bbaf-43d6-a757-ffc39a3bfaf3)

## Contact
- 이름 : 이재호
- 연락처 : 010-5351-5294
- 이메일 : ljh2735294@naver.com
