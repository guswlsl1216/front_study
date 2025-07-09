// 알림창 띄우기
// alert ("자바스크립트 파일만듬");

// 출력문 - 콘솔창에 띄워줌 
console.log("콘솔창에 내용띄우기");

//html에 출력해주기
document.write("문서에 쓰기");

// * 기본적인 문법 구조는 자바랑 비슷함 *//

// 변수만들기
var 변수명; // 옛날거
let 변수이름;

let msg = 'hello'; // 문자열 입력할 때 ' , " " 두 가지 다 사용 가능, 섞이지만 않으면 됨 
console.log(msg);
msg = 20;
console.log(msg); // msg 값 바껴서 나옴 

// 상수 : 변하지 않는 값 변수에 담아서 쓸 때, final
// 상수니까 변수명 대문자  
const COLOR = 'red';
// COLOR = 'blue'; => X , 값 변경 못함  

let n = 12.345;

console.log( typeof(n) );
console.log( typeof n);
// 두 가지 다 사용 가능

console.log ( n / 0 ); 
console.log( typeof Infinity );

console.log( "abc" / 2 );
console.log( typeof NaN );
/* 실제로 나누기 0은 불가능 하지만 
  JS 수학적 연산은 전부 처리가 됨 
  대신 결과가 안나오는건 특수 숫자 값으로 처리 
  Infinity 숫자임, 자료형 중 하나 */


// 문자 (자바와 달리 문자열이나 문자)
// js에서는 문자(열)은 쌍따옴표, 작은 따옴표, 빽틱
// 빽틱은 여러줄 한번에 써야할 때 

let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`;

let age = 20;
let name = "홍길동"

// 홍길동님의 나이는 20살입니다. 
console.log(name + "님의 나이는 " + age + "살 입니다.");  //java
console.log(`${name}님의 나이는 ${age+5}살입니다.`);      //js에서는 ${}로 쓸 수 있음 ( + 안해도)
console.log(typeof name);

// 불린 true false
let check = true
console.log( 10 >= 5 );
console.log(typeof check);

// null 값
// js에서 null은 존재하지 않음, 비어있다, 알수없다 
let a = null;

// undefined : 변수는 설정했지만 값을 할당하지 않은 상태. 
let x;    //x=undefined 이렇게 설정해도 됨.
console.log(x);

// 모달창 띄우기
// alert 메세지만 출력하고 확인 버튼 한개
//  * alert('메세지 띄우기');

// prompt 메세지를 출력해주고 사용자에게 입력받는 창이 있고 확인과 취소 버튼이 있음 
// 확인, 취소 버튼 입력 가능, 메세지를 출력해줌
// 입력한 값을 리턴 받을 수 있음, 입력하면 리턴, 취소하면 null이 들어옴.
// prompt ('메시지', 초기값 - 기본적인 값을 넣어줄 수 있다. );
//let result = prompt('메세지', 20);
//console.log(result);

/* let result = Number (prompt('나이를 입력하세요')); // Number (); 숫자로 변환 처리 
console.log( typeof result );
result = result + 1;
console.log(result);
*/

// confirm 메세지를 출력해주고 확인, 취소 버튼이 있음. => 얘도 값이 리턴됨  
// 확인을 누르면 ture, 취소를 누르면 false가 리턴됨  //회원 탈퇴, 닉네임 변경
let re = confirm("메세지");
console.log(re);  

