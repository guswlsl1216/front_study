// 함수 - 자바의 메서드와 똑같음 (함수 = 메서드 , 클래스 내부에 있으면 메서드, 클래스 외부에 있으면 함수 ! / 키워드만 좀 다름)
// function 나 함수 만들거야! 

/*
function 함수 이름 (매개변수) {
 실행시킬 코드 
}
*/

function showMsg () {
  let msg = "하이";

  console.log(msg);
}

//자주 쓸거니까 만들었어. 임 / 호출을 해야 볼 수 있음

//함수 호출 - 함수이름();
showMsg();

// console.log(msg); - 해당 영역에서 선언한 변수는 영역 내에서만 사용할 수 있음 (java와 똑같음 - 함수 내부에서만 쓸 수 있는 지역변수)
// -> msg 변수는 showMsg함수의 지역변수이므로 사용못함 

let name = "고길동";

function showInfo () {
  let msg = `안녕하세요 ${name}님`;

  console.log(msg);
}

console.log(name);
showInfo();
console.log(name)

//상위 영역에 있는건 하위 영역에서 사용 가능 
// name 값을 바꿔도 사용 가능 

/*
java에서 setname 하면 메서드를 호출할 때 값이 바뀌는 것과 같은 원리임.
메서드 호출 전엔 설정해 놓은 이름, 메서드 호출하면 값이 달라짐 
*/


//매개 변수와 리턴 (리턴 시키고 싶으면 시키는건데 안쓸거면 안해도 됨. ) // 매개 변수가 있으면 그냥 넣으면 됨 //
// 두 숫자 입력받아서 sum을 구할거야
function sum(x,y) {
  console.log(x + y);
}

sum(10,5);

// 리턴 시키고 싶으면 그냥 이렇게 넣으면 됨.
function sum2(x,y) {
  return x+y;
}

let result = sum2(10,5);
console.log(result);

// <함수 선언문>에 대한 내용임 