/* 비동기 통신 - (서버와 사용자 사이에서 통신)
통신이 이루어지더라도 넘어가는게 아니라 그 자리에서 작업을 더 수행할 수 있도록 해줌 
(통신은 통신대로 뒤에서, 작업은 할 수 있게)

비동기 : 상관없이 걔 혼자 별도로 돌아가는거 

=> HTTP : 통신 규약 
요청(request)
응답(response)  

요청 시 사용되는 메서드

=> get : 정보를 받아옴 검색했을 때 (ex. 마이 페이지)
=> post : 정보를 생성 (ex. 회원가입, 로그인 ) 
=> put : 정보를 수정 (ex. 회원 정보 수정)
=> delete : 정보를 삭제 (ex. 회원 탈퇴)

*/

//비동기 통신해 주는 객체가 필요함. 객체 생성할거임

//* 옛날거
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
//요청 메서드와 요청 url // 서버에서 이걸 받아주는 곳이 필요함, 서버에서 정해준대로
xhr.setRequestHeader("content-type", "application/json");
// 보내주는 데이터의 정보 ! header에 들어감 // json형식으로 보냄

// json - 통신에서 주고 받는 데이터는 전부 문자임 (다 문자형태로 변환해서 )
// 그래서 어느정도 통일을 한거임, 약속 => JSON 형태의 데이터로 대부분 주고 받음. ("application/json")

/* 배열, 오브젝트, 배열안에 오브젝트 형태로 보낼 수 있음. 
JSON : js에 object처럼 키와 값으로 되어 있음 
       배열 형태도 가능함 
하지만 우리가 js에서 사용하는 배열, 오브젝트를 바로 전송하는건 불가능
그래서 해당 데이터를 JSON으로 변환 후 전송 ! 

요청 후 응답이 온 데이터도 JSON임.
해당 데이터를 js에서 사용하려면 배열, 오브젝트로 변환 
*/

const data = {
  userid: 100,
  title: '비동기 통신 연습',
  body: '이것저것보내는중'
};
// 위는 그냥 사이트가 요청한거 send가 요청
xhr.send( JSON.stringify(data));

xhr.onload = () => {
  console.log(xhr.status);    // 응답 결과에 해당하는 상태 코드
  console.log(JSON.parse(xhr.response));  // 응답 데이터
}


//요즘꺼
/*
fetch('요청주소')
.then((변수) => 성공 시 처리할 코드)
.then((변수) => 성공 시 처리할 코드)
.catch((e) => 요청 실패 시 처리할 코드)
*/

/* 커뮤니티 사이트에 작성된 특정 게시글을 보려고 할 때  
이거 흐름 : get 요청 버튼을 사용자가 누름 
서버로 나 xxxx게시글을 좀 보고 싶어요`~~(버튼에 숨겨져 있는)라고 요청을 날림 

서버가 요청을 받아서 보고싶은 게시글을 찾음
=> DB에 접속해서 해당 게시글을 꺼내옴 

서버가 해당 게시글 데이터를 응답 객체에 담아서 
사용자한테 다시 보내줌 (응답처리)

사용자 측에서 응답 데이터를 받아서 html화면에 이쁘게 뿌려짐! 
*/
const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userId = document.querySelector('.userId');
const body = document.querySelector('.body');


getBtn.addEventListener('click', () =>{

    fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then((response) => response.json())
    .then( (data) => {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;

    })
    .catch( (e) => {
      console.log(e);
    })
    
    // 서버에서 받아온 값을 처리하는 코드 
    // 서버에서 받아오기 전까지 아래 코드를 실행하지 말라고 then이라는 작업을 해줌
    // 처리 결과가 then의 매개변수로 들어옴
    //.then 뒤에 parse 작업이랑 같은ㄱㅓ임 // 두번째 then에 매개 변수가 들어가고  
    //response.json의 값이 data의 매개변수로 들어옴 
    // e는 error일 때 실행할 코드 (then이 아닌 catch에서 실행됨. 보통은 client 문제)
    //성공했을 때 then, 실패했을 때 catch
  
  })

  const post_userId = document.querySelector("[name='userId']");
  const post_title = document.querySelector("[name='title']");
  const post_body = document.querySelector("[name='body']");

postBtn.addEventListener( 'click' , (e) => {
  e.preventDefault();

  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      "content-type" : "application/json"
    }
  
  }).then ( response => response.json() )
    .then ( data => {
      console.log(data);
      alert('게시글 등록 완료!');

    })

    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패');

    })
})

const async_test = document.querySelector('.async');

async_test.addEventListener('click', async () => {

  let a = 1;

  a = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  a = await a.json();
  
  console.log(a);

  //.then도 있지만 await으로 잠시 기다리게 할 수 있음. 
})

function add(i) {

  for(i=0; i<10000; i++) {

  resolve(i);
  }
  return i;
}