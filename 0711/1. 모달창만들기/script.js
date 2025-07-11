// 모달창 : alert, prompt, confirm
// 게시판 버튼

const btnBoard = document.querySelector( '#open' );
const modalBox = document.querySelector ('.black-bg');

btnBoard.addEventListener( 'click', () => {

//js 문법 
document.querySelector( '.black-bg').classList.add('show');   //classList : 클래스를 추가해주는 기능
}
);

/*
//jQuery 문법 : js랑 섞이면 작동 안됨. 하나만 써야함 
$('#open').on('click', () =>{

  //  $('.black-bg').addClass('show');
  $('.black-bg').fadeIn();

}
)
*/

// js 문법 
// 닫기버튼 
const btnClose = document.querySelector( '#close');
btnClose.addEventListener( 'click', () => {

  modalBox.classList.remove('show');

}

);


//jQuery
/*
$('#close').on('click', () => {
 // $('.black-bg').removeClass('show')
 $('.black-bg').fadeOut();
}
);
*/