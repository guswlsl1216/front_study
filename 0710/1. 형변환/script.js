// 불린으로 형 변환
// 뭔가 존재한다 싶으면 true
// 없다는 느낌은 전부 false


let a = Boolean(1); //숫자 1 넣을거임
console.log( typeof a, a);

// 스페이스바 하나도 문자 하나이므로 true
a = Boolean(" ");
console.log( typeof a ,a);

// 빈문자열이 false임
a = Boolean(" ");
console.log ( typeof a, a);


// null, undefined, NaN 이런 느낌들은 false
a = Boolean(null);
console.log( typeof a, a);

// 연산자 ( +, -, *, /, % , ** )   => ** 제곱 
let x = y = z = 10+20;  //java는 이게 안되지만, js는 가능함 ! 

// 논리 연산자 ( && and, || or, ! not ))
// 비트연산자 ( &, |, ~, ^, >>, << ))

// 동등연산자  ( == )
let num1 = 10;

// prompt로 사용자에게 숫자 하나를 입력받아서 , 
// 입력받은 숫자와 변수 num1에 있는 값이 같은지, 다른지 결과를 출력 (true,false)

//let num2 = prompt("숫자 입력"); //prompt 리턴  // prompt는 입력한 값을 스트링으로 인식하기 때문에 

let num2 = "10";

// == 연산자 : 자료형 상관없이 같냐고 물어봄 (java랑 다르게 자료형은 신경쓰지 않음)
console.log(num1 == num2);
console.log(false == 0);
console.log( "" == 0);

// === 연산자 : 일치연산자의 엄격 버전 ( 자료형까지 구분함)
// !==
console.log(num1 === num2);
console.log(false === 0);
console.log( "" === 0);



