const box = document.querySelector('.box');
const check = document.querySelector('#chk');
const nextBtn = document.querySelector('.next');

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

nextBtn.addEventListener('click', () => {  
  if( check.checked ) {
  alert('다음 메세지로 이동');
  } else {
    alert('약관동의 안함')
  }  
})

console.log(window.innerHeight);             //window 화면, innerHeight 화면 높이 알려줌 (446p)

console.log(document.body.clientHeight)

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;


window.addEventListener('scroll', () => {
  console.log(window.scrollY);                // 유저는 화면 크기에 따라서 스크롤 가동 범위가 달라짐 (전체 총높이 - 화면 높이 : 스크롤 움직일 수 있는 최대 가동 범위 )

  const status = window.scrollY / (bodyHeight - innerHeight) * 100;
 console.log('비율임',status)

  document.querySelector('.status-bar').style.width = `${status}%`;

})

// 알림창 
// 버튼을 누르면 약관 동의를 안했을 경우 => 동의하십쇼라는 모달창
// 약관 동의를 했을 경우 => 다음 페이지로 이동합니다.라는 모달창