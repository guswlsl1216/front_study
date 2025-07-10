// 조건문


// if문
let age = 20;
if (age >= 20) {
  console.log("성인");
} else if(age >= 12) {
  console.log("청소년");
} else {
  console.log("어린이");
}

// 삼항연산자 
// 조건식 ? 참 : 거짓
let result = age >= 20 ? "성인" : "청소년"; 

// switch 문 ( 사용법은 자바랑 똑같음)
let a = 3;

switch(a) {
  case 1:
    console.log("a는 1이다");
    break;
  case 2:
    console.log("a는 2이다");
    break;
  default:
    console.log("a는 1,2가 아니다"); 
}

// 문자가 들어올 수도 있고 숫자도 들어올 수 있어서, case 2 , case '2' 숫자인지 문자인지 잘 표시해 줘야함.

// 반복문 
// for문
/*

for(초기값; 조건식; 증감식) {
  반복할 코드  
}
*/

//!~10까지 합의 결과
/*let sum = 0;

for ( i=1; i<=10; i++ ) { 
  sum = sum + i;
}
console.log (sum);  
*/

let total=0;
let innerTotal =0;

for(let i=1;i<=10;i++) {
    innterTotal=0;        //초기화
  
    for(let j=1; j<=i; j++) { // i=1 한번, i=2 두번, i숫자까지 더할거, 그러고 끝낼거) // 전체 결과 보관할 변수 하나, 덩어리 안에 있는 합계 보관할 변수 하나 두개 설정할거임 
    innterTotal = innerTotal + j;
    }
    total = total + innerTotal;
}

/*
  for (let i=1; i<=10; i++){
  innerTotal = innerTotal + i;
  total = total + innerTotal;
  }

*/
/* console.log(total, total); */

// while 문 : 조건식 만족 안하면 반복문 탈출 (무한 반복 시킬 때 많이 사용) 
/*
while(조건식) {

  반복할 코드 
}
*/

// 반복 종료 - break;
// 반복문 상단으로 돌아감 - continue ! 바로 위 반복문으로 돌아감 )

