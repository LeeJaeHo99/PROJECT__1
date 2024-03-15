let uid = $('#uid').val();
let upw = $('#upw').val();
const logInBtn = $('#login');
const logOutBtn = $('#logout');
let user = JSON.parse(localStorage.getItem('user'));
logOutBtn.css('display', 'none');

//기본 데이터 세팅
function init() {
    if(!localStorage.getItem('user')){
        localStorage.setItem('user', JSON.stringify({
            id : '이재호',
            password : '0104',
            isLoggenIn : false,
        }));
    }
}

//로그인
function login(){
    if(uid === user.id && upw === user.password){
        alert('로그인성공');
		$('.input_group, #login').css('display', 'none');
		logOutBtn.css('display', 'flex');
		$('#spotlogin').text('로그아웃');
		user.isLoggedIn = true;
		localStorage.setItem('user', JSON.stringify(user));
    }else{
        alert('회원전용페이지 입니다.');
    }
}

//로그아웃
function logout(){
    if(user.isLoggedIn){
		alert('로그아웃 성공');
		user.isLoggedIn = false;
		localStorage.setItem('user', JSON.stringify(user));
		text.text(textold);
		$('.input_group, #login').css('display', 'flex');
		logOutBtn.css('display', 'none');
		$('#spotlogin').text('로그인');
	}
}
//로그인버튼 이벤트
logInBtn.on('click', (e) => {
    e.preventDefault();
	login();
})
//로그아웃버튼 이벤트
logOutBtn.on('click', (e) => {
    e.preventDefault();
	logout();
})

init();