// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임

const FRUITS = [
  { name : 'apple', memo : '빨갛고 맛있는 사과'},
  { name : 'mango', memo : '달달하고 맛있는 맹고'},
  { name : 'melon', memo : '맛도리 멜론'}
];


for(let i=0; i<FRUITS.length; i++) {


let card = `
 <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./images/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">

            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
         </div>
`;     
                                                                    //변수 만든 다음에, html 긁어와서 여러줄이니까 ``에 넣어줌

document.querySelector('.row').insertAdjacentHTML('beforeend', card);   // 박스라는 class row를 찾아서 card를 넣어보라고 시킴, 두번부터 쓸때 pc는 새로 써도 이전꺼를 밀어버리고 하기 때문에 
}                                                                            // 누적켜서 해야함. //.insertAdjacentHTML('왼 : 위치', 변수 명 card);
                                                                        // beforebegin : 해당 요소 앞에 // afterbegin : 해당 요소 첫번째 자식으로 추가 /2,3은 형제 관계로 1,4는 부모관계로 들어감, 
                                                                        // beforeend : 해당 요소 자식으로 추가 // afterend : 해당 요소 뒤에 넣어줌 

                                                                        /*
  FRUITS.forEach( (data, i) => {
                                                                        //흐름은 향상 for문과 같음. 배열방 번호 쓰지 않아도 알아서 돌아감 // data, 반복용 변수 출력 필요하면 i, index로 넣음 
    console.log(data.memo, i);
  });
*/

const cart = document.querySelectorAll('.cart');

for (let i=0; i<cart.length; i++) {

  cart[i].addEventListener('click', (e) => {   //(e) 이벤트 객체 넣어줌
 //   console.log(e.target.previousElementSibling.previousElementSibling);         //이전, 요소, 형제관계 가져와라 // 클릭한 버튼의 형제 관계 p태그가 나옴 //기준은 e.target // 
  let nameTag = e.target.previousElementSibling.previousElementSibling;              //이름을 뽑아와야 하니까 이전 previous 한번 더 입력해줌
  let name = nameTag.innerHTML;                                                      //name이라는 변수에 넣어주고, 로컬에 넣어줘야 하는데, 값이 다달라서 배열로 // 또 JSON으로 변환해줌
  let temp = localStorage.getItem('cart');

  if(temp != null) {                                    // cart가 널이 아닐때 꺼내와라 
    //로컬 스토리지에 있으면 먼저 그 정보들을 꺼내와야 함
    //문자열 형태이므로 원본인 배열로 돌려줌

    temp = JSON.parse(temp);

    // 새로 장바구니에 담을 name을 추가
    temp.push(name);
    // 추가된 정보를 로컬스토리지에 다시 넣음 
    localStorage.setItem('cart', JSON.stringify( temp ));

  } else {

    localStorage.setItem('cart',JSON.stringify( [name]));
  }
  
})                             
}



/* 로컬 스토리지에 담기 버튼을 누르면 새로운게 추가 되는게 아니라 계속 기존꺼 사라지면서 새거만 추가됨.
  담기 버튼을 누르면 새로운게 추가되서 로컬 스토리지에 저장될 수 있게 하고 싶음. 
  그냥 setItem으로는 불가능함 = > 동일한 key를 넣으면 기존꺼 사라짐 
  1.이미 로컬 스토리지에 cart가 존재하면 해당 값을 먼저 꺼내오는게 필요할듯. 
  2. 꺼내온 데이터에 새로 담을 정보를 추가
  3. 추가된, 데이터를 다시 로컬 스토리지에 넣음 */











/*
const cardTitle = document.querySelectorAll('.card-body h5');
const cardMemo = document.querySelectorAll('.card-body p');
const cardImg = document.querySelectorAll('img');

for (let i=0; i<FRUITS.length; i++) {

  cardTitle[i].innerHTML = FRUITS[i].name;
  cardMemo[i].innerHTML = FRUITS[i].memo;
  cardImg[i].setAttribute('src', `./images/${FRUITS[i].name}.jpg`);  
}
*/  
/*
document.querySelectorAll('.card-body h5')[0].innerHTML = FRUITS[0].name;
document.querySelectorAll('.card-body p')[0].innerHTML = FRUITS[0].memo;
document.querySelectorAll('img')[0].setAttribute( 'src', `./images/${FRUITS[0].name}.jpg`);     //태그니까 . 안붙였음 //속성 변경, 추가 // (속성명, 속성 값)


document.querySelectorAll('.card-body h5')[1].innerHTML = FRUITS[1].name;
document.querySelectorAll('.card-body p')[1].innerHTML = FRUITS[1].memo;
document.querySelectorAll('img')[1].setAttribute( 'src', `./images/${FRUITS[1].name}.jpg`);

document.querySelectorAll('.card-body h5')[2].innerHTML = FRUITS[2].name;
document.querySelectorAll('.card-body p')[2].innerHTML = FRUITS[2].memo;
document.querySelectorAll('img')[2].setAttribute( 'src', `./images/${FRUITS[2].name}.jpg`);  
*/


/* 로컬 스토리지 : 지우지 않는 이상 계속 있음* - (사용자 pc에 몰래 저장시킴)/
/* 세션 스토리지 : 브라우저를 종료하면 사라짐 */    //둘다 문자열만 저장할 수 있음 


/* 로컬 스트리지에 저장 or 수정 (동일한 키를 넣으면 기존 데이터를 지움) */
localStorage.setItem( '키' , '값')
/* 로컬 스트리지에서 해당 키에 대한 값을 리턴해줌*/
localStorage.getItem('키')
/* 로컬 스트리지에서 해당 키를 삭제*/ 
localStorage.removeItem('키')

let arr = [1,2,3,4,5];
let obj = {
  name : 'kim',
  age : 20
};

// * 로컬 스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리되어 사용하기 힘들어요! *
localStorage.setItem( 'arr', arr );
localStorage.setItem( 'obj', obj );

// JSON 형식으로 변환 (그냥 문자열! ) // "[1,2,3,6]" // " " 붙여 구조를 유지한 채로 문자 취급을 하고 보내버림. // 직렬화
// arr인 배열을 문자열(JSON)로 변환
let arr_json = JSON.stringify(arr); 
// console.log(arr_json, typeof arr_json);
localStorage.setItem( 'arr', arr_json); // [] 포함해서 들어가짐 // 배열은 아니고 문자열인데, 구조가 살아있다 보니 다시 꺼내서 배열로 전환할 수 있음

arr = localStorage.getItem('arr');
// 로컬 스토리지에서 꺼내와도 아직까진 문자열임. (구조가 아직은 살아있는 상태) 
console.log(arr, typeof arr);
// 문자열인 형태를 다시 배열로 되돌려줌.
arr = JSON.parse(arr);
console.log(arr, typeof arr);

// 오브젝트도 동일하게 하면 됨. 