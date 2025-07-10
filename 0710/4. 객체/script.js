// java에서 map과 비슷한거임 , key와 value

// 객체(object) - 자바에서 Map과 유사
// key, value가 한쌍으로 구성

/*
let user = {
 키:밸류
 }

 */

 // 여러개 설정할거면 , 로 찍어주고 설정하면 됨. 
 // 밸류는 중복 가능, 키는 중복 X (자바랑 공통점)
 // 자바와 달리 넣고 싶은 건 다 넣어도 됨,  string int 상관없이
 let user = {
  name : '홍길동',
  age : 20,
  'math score': 100                   // 자바와 다르게 대문자로 하지 않아도 설정 가능
}

 console.log(user.name);
 console.log(user.age);
 console.log(user['math score']);     // 대괄호 쓸 때는 ' ' 찍고 불러와야함, ' ' 빼면 변수로 인식할 수 있음 

const member = {                  
  name : '홍길동',                       
  age : 20                             
}                                     
console.log(user);                    // 주소 값이 아니라 값을 예쁘게 출력해줌
user = 10;          
console.log(user);

// 당연히 상수니까 변경 못함
// member = 10;

member.name = "김자바";          
console.log(member);

/*  상수와 같은 역할, 원래는 변경이 안되니까 대문자 작성 / js는 변경 가능, 소문자 작성 
    주소를 가지고 있음, 내용물은 변경할 수 있음
    통째로 갈아엎으면 새로운 주소값이 생성되니까 바꿀 수 없음 : 내용물만 바꿀 수 있음

*/

// 이름을 보고싶은지 나이를 보고싶은지 입력받음. 
let key = "name";

console.log(member[key])    // user["name"]

let item = "바나나";

// cart라는 오브젝트를 생성
let cart = {
  [item] : 5
// 변수 아이템에 대한 내용이 키로 설정됨 : 변수 대신에 [] 사용해서 가능 //
};

console.log(cart);

// 10명의 회원 정보가 각각 담긴 객체 10개를 만들고 싶음 .그럼 오브젝트 10개를 만들어야함. 
// 함수 활용해서 할 수 있음 // obj 라는 객체를 생성해서 이름과 나이만 받고, 리턴하기로 함 // 이름과 나이만 잘 입력해주면 알아서 오브젝트에 들어감 

function makeUserObject(name,age) {

  let obj = {
    name,       
    age                     // key로 설정할 이름과 value 설정할 매개 변수가 동일하면 생략해서 하나만 써도 됨. 
  };                        // 같으면 한번만 써도 됨, (매개변수와 활용할 변수가 같으면) /name : name/ 엔터 /age : age/

  return obj;
}

let a = makeUserObject('홍길동', 20);     
let b = makeUserObject('김자바', 11);
console.log(a, b);

// key, value 추가하기
a.addr = "강동구";
console.log(a);

// 삭제하기
delete a.addr;
console.log(a);

//구조 분해 할당
// name : '김자바', age : 20

let { age, ...r } = a;

console.log(age);
console.log( r );

console.log({...r, age:30})                 // 기존 오브젝트를 깨고, 새로운 오브젝트로 // 새로운 값으로 셋트 

console.log( "name" in a);                  // a라는 오브젝트에 name이라는 키가 존재하냐고 물어보는거임. 즉, in 연산자로 키가 있는지 없는지
console.log(" ㅁㄴㅇ" in a);

// 반복문을 활용할건디, 향상 포문처럼 생각하면됨
// a가 key

/*
for(String s : 배열) {

}
*/

for( let key in a) {
  console.log(`${key} : ${a[key]}`);
}

// a안에 있는 키(nmae,age)가 key라는 반복용 변수에 들어가는거임 (향상 포문과 비슷함) 
// ${a[key]} 순수 값 