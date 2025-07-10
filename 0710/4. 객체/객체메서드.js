// 객체(object)에는 함수(메서드)도 넣을 수 있음 // 클래스처럼 키 밸류 함수도 넣을 수 있음 

let user = {
  name : '홍길동',
  age : 20
}

// 오브젝트를 하나 만들었음. 

user.hi = () => {             //화살표 함수 (function을 ) 
  console.log('hi');
}

user.hi();

function hi2 () {
  console.log('hi2');
}
user.hi2 = hi2;
user.hi2();

let user2 = {
  name : "김자바",
  age : 20,

  hi : function() {
      console.log(this.name);
  },
/*
  hi2() {
    console.log('hi2');   //오브젝트 만들때 바로 만들어도 됨 
  }
*/
}
// 
let member = user2;
member.hi();
user2 = null;
member.hi();

user = {name : '홍길동'}
user = {name : "김자바"}

function show () {
 console.log(this.name);          //그냥 this만 있을 때 // this가 user로 올라갔을 때 값이 생김 // 활용할 수 있다. 

} 
/*
user.f = show;
user2.f = show;

user.f();               //f로 추가함
user2.age();
*/

// 객체 참조

let a = {
  name : '홍길동'
};

let b = a;
a.name = "김자바";
console.log(b.name);

// java랑 똑같은 원리 ..참조하고 있어서 같이 변경됨. 

// 배열 (인덱스 돌리는 것도 가능함)
let arr = [1,2,3,4];

arr[0] = 20;
arr[1] = "a";

arr.push("zzzz");     //추가
console.log(arr)

arr.pop();            //제거
console.log(arr)

//DOM 트리 : Document Object Model
// 자바 인터페이스와 같음. 명령어가 대체로 Document임
// document.body.style.background = 'red';
// 다양한 방법으로 접근해서 제어 가능.                  