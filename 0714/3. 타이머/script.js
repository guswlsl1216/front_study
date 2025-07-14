// 정해진 시간이 흐른 뒤 해당 코드가 작동되도록 함
/* 기본 구조 -> 
=> setTimeout( 콜백함수, 시간 (ms));
*/
// 예시 : 5초 뒤에 콜백함수가 실행됨 

const time = document.querySelector('.time');

let t = 5;

const interval = setInterval( ( ) => {
    t--;
    time.innerHTML = t;

   // console.log(t);
  }, 1000);


setTimeout( ( ) => {
 // console.log('setTimeout 작동!')
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval)    // 5초가 지나도 0, -1 계속 돌아가서 clear로 멈춰줘야함 
}, 5000);


// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동 ( 타임 아웃은 한번 실행되면 끝, 인터벌은 반복적으로 실행함.)
/* 기본 구조 
=> setInterval ( 콜백함수, 시간(ms) );
*/

/*
setInterval( ( ) => {
  console.log('2초마다 실행되는 코드임')
}, 2000 )
*/

let timer;

document.querySelector('.btn').addEventListener('click', () => {

  clearTimeout(timer)    // 지워버릴 변수를 써주면 됨. 

  timer = setTimeout(() => {                  // 객체 값이 변수에 들어가면서, 여러개의 시계 번호가 생기는건데, 그 시계 번호를 내가 알아야 지울 수 있음.// 그래서 기억하려고 변수를 만든거임  
    console.log('클릭하면 3초 뒤에 나타남');     // 
  },3000);

})


// 날짜와 관련된 함수들이 있음! 
// 현재 날짜와 시간 
/*
const date = new Date(); //Date라는 새로운 객체 생성
console.log(date);

// 년도 추출
console.log(date.getFullYear());

// 월 추출 ( 0부터 11로 출력해줌 )
console.log(date.getMonth());

// 일 추출 
console.log(date.getDate());

// 요일 추출 (0 - 일요일, 6-토요일)
console.log(date.getDay());

// 시간 추출
console.log(date.getHours());

// 분 추출
console.log(date.getMinutes());

//초 추출
console.log(date.getSeconds());
*/

const clock = document.querySelector('.clock');

function insertTime() {
  const date = new Date();
  const hour = String( date.getHours() ).padStart(2,0); 
  const minute = String( date.getMinutes() ).padStart(2,0);
  const second = String( date.getSeconds() ).padStart(2,0);

clock.innerHTML = `${hour} : ${minute} : ${second}`;  


}
insertTime();
setInterval( insertTime, 1000);

let a = "1";

console.log( a.padEnd(3,0));   // padStart 문자열 관련 함수임, 문자열 밖에 작업 못함, 첫번째 인수 - 자릿 수, 두번째 인수 - 매꿔줄 값 






