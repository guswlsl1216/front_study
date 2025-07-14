const box = document.querySelector('.box');
const check = document.querySelector('#chk');
const cBtn = document.querySelector('.btn');

let boxY = box.scrollHeight;        //눈에 보이는 div가 아니라, 스크롤 포함한 높이를 콘솔로 찍어서 알 수 있음 ! 
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight);

let isDisabled = true;

box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
 
  if ( isDisabled && boxHeight + scroll > boxY  - 5 ) {
  //  alert('약관 다 읽음')

    document.querySelector('#chk').disabled = false;
    isDisabled = false; 
  }

})

/*
cBtn.addEventListener('click', () => {  
  if ()
})
*/


// 알림창 
// 버튼을 누르면 약관 동의를 안했을 경우 => 동의하십쇼라는 모달창
// 약관 동의를 했을 경우 => 다음 페이지로 이동합니다.라는 모달창