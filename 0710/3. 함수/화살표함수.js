// 자바 - 람다, js - 화살표 함수

// 화살표 함수 : 자바에 람다와 유사함
// 함수 작성하는 코드를 간결하게 만들 수 있음 
// 기능은 똑같은데 작성하는 문법이 다르고 좀 더 간단함!

/*
function sum(a, b) {
  return a+b;
}

let sum = function(a, b) {
  return a+b;
}
  */

/*
let sum = (a, b) => a + b;  //return은 원래 써야하지만 한줄이니까 생략한거임. 람다처럼 
*/

let sum = (a, b) => a + b;
let sum2 = (a, b) => {
  return a + b;
}

// 매개 변수가 있으면 괄호 안에 써주고 

let a = () => {
  console.log('aaaa');
} ;

//없으면 이렇게 쓰면 됨.
// 기능은 같은데...

//함수를 만든거기 때문에 호출하는건 똑같이 하면 됨
sum(10, 5);
a();
