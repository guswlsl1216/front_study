/*
function show () {
  document.getElementById('ab').style.display = 'block';
}

/*버튼 누르면 보여지게 하는 함수 만들거임*/ 
/*
function hide () {
 document.getElementById('ab').style.display = 'none';

}
*/

//기능을 하나로! 
function showHide(state) {
 // document.getElementById('ab').style.display = state;
//js문법

//jQuery  문법 // $('선택자') 
$('#ab').css( 'display', state ); 

}


//innerHTML = 'aaa;' 
//버튼을 누르면 서로 다른 메세지가 보이도록 구현 

function showMsg(msg) {
 // document.querySelector('.alert').innerHTML = msg;
  $('.alert').html(msg); //jQuery 문법

}

// 바닐라 JS, jQuery / jQuery 무조건 스크립트 링크 위에 cdn 넣어줌 //



