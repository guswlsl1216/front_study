const btn = document.querySelector ('.navbar-toggler');
const list = document.querySelector('.list-group');


//let isList = false;  /*상태 보관하는 변수* false가 (목록이) 안보이는 상태 */ 

btn.addEventListener('click', ( ) => {
  list.classList.toggle('show');

});

// jQuery
// $('.list-group').toggleClass('show');

const btnli = document.querySelectorAll('.list-group-item');    // 여러개 리턴하는건 배열에 담아서 해줌, 배열안에 태그들이 들어있는거임.  
                                                                // 안에 있는 애들한테 이벤트를 걸고 싶으니까 각각 지정해줘야 함.                                                                    
 for (let i=0; i<btnli.length; i++) {

  btnli[i].addEventListener('click', () => {   
  alert('ㅋㅋㅋㅋㅋㅋ');

});
}

/*
  if ( isList ) {
  // isList가 True일 때 실행되는 영역
  // True라는 소리는 목록이 현재 보이는 상태이니까             
   list.classList.remove('show');
   isList = !isList
    } else {
    list.classList.add('show');    //클릭했을 때 바로 작동되는게 아니라, 조건문 사용해서 조건을 한다음에 만족하면 보여라 
    isList = !isList
  }

*/

  /* alert('aaaa'); 테스트용 */

/*
 btn.addEventListener('click', ( ) => {
if(isList) {

doqument.querySelector('.list-group').classList.remove('show');
isList = !isList
}
else {


doqument.querySelector('.list-group').classList.add('show');
isList = !isList
}

 }
*/