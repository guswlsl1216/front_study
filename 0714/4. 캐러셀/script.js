const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const carousel = document.querySelector('.carousel');

// 현재 보고있는 캐러셀의 이미지 번호, 저장용 변수 
let slideNo = 1;

const preBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');

// transform의 기준은 처음 위치 고정 // 이동이 아니라 

btn2.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-100vw)'
  slideNo = 2;
})

btn3.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-200vw)'
  slideNo = 3;
})

btn1.addEventListener('click', () => {
  carousel.style.transform = 'translateX(0vw)'  // 1일 때 움직이지 않을거니까 0으로 설정해줌 
  slideNo = 1;
})



preBtn.addEventListener ('click', () => {
 if(slideNo == 1)
  return;           //break; 함수니까 return;
 
carousel.style.transform = `translateX(-${slideNo-2}00vw)`;
slideNo--;
 /*
  if( slideNo == 2 ) {
    carousel.style.transform = 'translateX(0)'
    slideNo--;
  } else if ( slideNo == 3) {
    carousel.style.transform = 'translateX(-100vw)'
    slideNo--;
  }
    */
})

nextBtn.addEventListener ('click', () => {
 // 1번 이미지를 보고 있으면 2번 이미지로 이동
 // -100vw만큼 이동

 // 2번 이미지를 보고 있으면
 // 3번 이미지로 이동 = 200vw
  if(slideNo >= 3)
    return;

  carousel.style.transform = `translateX(-${slideNo}00vw)`;
  slideNo++;
 
 /*
  if( slideNo == 1) {
    carousel.style.transform = 'translateX(-100vw)'
    slideNo++;
  } else if (slideNo == 2) {
    carousel.style.transform = 'translateX(-200vw)'
    slideNo++;
  }
*/

})