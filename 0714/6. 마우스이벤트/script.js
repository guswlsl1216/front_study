/*
click / mousedown / mouseup (누르면 다운 => 업 => 클릭) , dblclick (더블클릭)
mouseover / mouseout 
*/

document.querySelector('button').addEventListener('click', (e) => {

  // 0 : 왼쪽, 1 : 가운데, 2: 오른쪽
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);

  console.log(e.clientX, e.clientY);  // 현재 보고 있는 화면 기준
  console.log(e.pageX, e.pageY);      // 스크롤 있을 때 전체 페이지 값으로 알려줌

  if(e.ctrlKey) {
    alert('컨트롤 클릭함')

  }

  if(e.ctrlKey && e.shiftKey) {      //조합도 가넝! 
    alert('컨트롤 쉬프트 클릭')
  }

})

// change : 변경되고 포커스가 나가면 작동
// input : 변경 감지되는 모든 순간 작동
// cut : 잘라내기 (C+c)
// copy : 복사 (C+v)
// paste : 붙여넣기

document.querySelector('input').addEventListener('input', () => {   //change, keyup, keydown //input 키 하나 입력할 때 마다  // cut 잘라내기 

 alert('zzzzinput 이벤트 작동됨');

})