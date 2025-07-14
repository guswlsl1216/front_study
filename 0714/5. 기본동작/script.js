/* <태그의 기본 동작>
몇몇 태그들은 기본적으로 이벤트들을 수행함

ex ) a태그는 클릭하면 해당 링크로 이동 
ex ) form태그 안 input에서 뭔가 하고 엔터를 누르면 submit이 작동됨 
*/

document.querySelector('a').addEventListener('click', (e) => {       // 막는거는 이벤트 객체가 필요함
 // alert('네이버로 이동합니다');
 
 // 기본 동작 막아주는 메서드
e.preventDefault();
 
 
 console.log('aaaaa');
})

document.querySelector('p').addEventListener('contextmenu', (e) => {
 
  e.preventDefault();
  alert('ㅋㅋㅋ');  


})

document.querySelector('p').addEventListener('selectstart', (e) => {
  e.preventDefault();
  alert('드래그하지마쇼')

})