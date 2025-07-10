// 함수 선언문
function hello () {
  console.log('hello');
}

// 함수 표현식 - 변수에 함수가 들어간다! //사용하는 방법은 그냥 변수 괄호 하면 호출 가능) // 매개변수도 할 수 있고, 리턴도 할 수 있음
let hi = function() {
  console.log('hiiii');

}

hi();

// 콜백 함수 //(함수에 함수를 보낸다라고 생각하면 됨)

//함수 두개를 만들어 볼거임, 선언으로 // 매개 변수를 세개 설정시킬거임 // 매개 변수를 함수 이름이랑 다르게 설정
// 

function yes () {
  console.log("예");
}

function no () {
  console.log("아니오");
}

function check (question, ok, cancel) {
  if(question === 'y')
    ok();
  else 
    cancel();
}
// 호출할 때, 값을 보내는 매개 변수 'y', 함수도 매개변수로 보낼 수 있음(대신 보낼때 괄호 보내면 안됨..) // 이 내용이 cancle로 보내줌 // ok,cancel은 함수가 됨
check('y', yes, no );

//함수를 호출한 이후에 뒤에오는 함수들이 콜백 함수 
// 매개 변수로는 함수도 보낼 수 있다고 생각하면 됨. 다만 괄호는 없애야 함. 

// 보통 언어는 위에서 아래로, 자바 스크립트는 그걸 실행하기 전에 선언문을 먼저 찾음, 일단 만들어 놓고 실행됨
// 함수 선언문은 위치에 상관없이 사용 가능. 
// 하지만 표현식은 만들고 나서부터 쓸 수 있음...'코드를 만들어서 함수에 담겨있네'하고 쓸 수 있음. 이게 두가지의 차이점 

function buy(item, price, stock, callback) {
  console.log(`${item}을 ${stock}개 구매함`);

    let total = price * stock;
    callback(total);
}

function pay(n) {
  console.log(`총 금액 : ${n}`);
}

// 그 금액을 보내주면 그 결과 값을 보내주는 함수를 만든거임, 자주 쓸 것 같아서

function pay2(n) {
  console.log(`총 금액(할인 적용) : ${n * 0.9}`);
}

let 할인적용여부 = 'y' 

if(할인적용여부 ==='y') {
  buy("컴퓨터", 100, 2, pay2);

} else {
  buy("캄퓨터", 100, 2, pay2);
}

// 개념 - 콜백 함수 : 나중에 호출되는 함수 
// setInterval( 콜백함수, 시간) -> 지정된 시간동안 콜백 함수를 반복해서 실행시킴 // 콜백함수 : 나중에 실행될 함수를 말하는거임.. 
setInterval(hi, 1000);

/* 

// 미리 만들지 않고 그자리에서 콘솔창을 호출하고 싶을 때 이렇게 사용함. 'a' 호출하면 실행될 코드

setInterval(function () {  
  console.log('a');
}, 1000);

*/