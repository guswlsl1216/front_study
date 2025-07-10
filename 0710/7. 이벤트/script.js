/* 이벤트 -> 인터넷 브라우저에서 발생되는 모든 신호
ex) 클릭, 더블클릭, 포커스 이동, 전송, 엔터 
*/

/* click, dblClick, mouseover, mouseout
submit, focus, 
keyup, keydown

*/
const btn = document.querySelector('.btn');

btn.onclick = function() {
  alert('ㅋㅋ;ㅋㅋ;');
}

// 함수 만들어서 하는 것도 가능 ! , 여러개 넣으면 불편하기 때문에 함수를 통해 작업함 

/* btn.onclick = abc; 

function abc() {
  alert("gggg")
}
  */

//  그래서 !
//  addEventListener 함수를 이용해서 이벤트 설정을 함

/*  사용 방법                                         * 이벤트 종류 : 클릭, 더블 클릭, 등등...
  요소. addEventListener(이벤트 종류, 이벤트핸들러) =>   * 이벤트 핸들러 : 이벤트가 발생했을 때 실행할 코드(보통은 함수)

  요소.removeEventListener (이벤트 종류, 이벤트 핸들러) => 이벤트 삭제! 
*/

btn.addEventListener ( 'click', function() {
  alert('ㅋㅋㅋㅋ');
 }) 

btn.removeEventListener( 'click', function () {
  alert('ㅋㅋㅋㅋ');
 })

 //기능과 코드는 똑같지만, 프로그램한테는 다른 함수임. 메모리에 두개가 있는거임 , 그래서 지울 수 있는 방법이 당장 없어서
 // 아래와 같이 해야함

 //미리 핸들러 함수 만들어 놓고 하면 됨 
 function handler() {
  alert("이건 지울 수 있음");
 }

 btn.addEventListener('click',handler);
 btn.removeEventListener('click',handler);

 const btn2 = document.querySelector('.btn2');

 // 이벤트 객체 : 이벤트가 발생할 때 생기는 모든 정보를 가지고 있음 
 btn2.addEventListener('click', function(e) {     //e,event // 이벤트 객체가 e로 들어옴
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.target);    // event 대상 : 여기서는 button // event에 대한 정보들을 가지고 있음. 
 });



