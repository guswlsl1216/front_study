// 문자로 변환
let a = true;
console.log(typeof a);
a = String(a);
console.log(typeof a, a); //a의 타입, a의 값도 보여줘

let b; // let b = underfined;
console.log(typeof b);
b = String(b);
console.log(typeof b, b);

// 숫자 형변환
// 자동 현변환 : js는 산술 계산할 때 알아서 자동 형변환을 해주고 연산됨 
console.log ("12" / "5");

let c = "123";
c = Number(c);

let d = Number("aaaaaaasdsd");
console.log( typeof d, d); //NaN 특수 자동 숫자 나옴
// 변환 불가능한 것들은 에러가 뜨는게 아니라 -> NaN 
// undefined -> NaN
// null -> 0
// true, false -> 1,0

// 처리 순서 : 문자열 -> 양쪽 공백 제거를 먼저 함. 
// => 남는게 없으면 0이 됨 / 숫자만 남으면 숫자로 변환 => 못바꾸면 NaN

let e = Number("        123         ")
console.log(typeof e, e);

let f = Number("              ")
console.log(typeof f, f);