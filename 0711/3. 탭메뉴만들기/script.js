const btns = document.querySelectorAll('.tab-button');  // 추가해줄거를 여기로 가져오는거임. 
const contents = document.querySelectorAll('.tab-content');

function clearClassList() {
  for(let i=0; i<btns.length; i++) {
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
}

// 반복문을 돌려도 비효율적임. 메서드 호출하는 것처럼 생성할거임 

for(let i=0; i<btns.length; i++) {

  btns[i].addEventListener('click', () => {
  clearClassList();
  
  btns[i].classList.add('selected');
  contents[i].classList.add('show');
  });
}


/*
btns[0].addEventListener('click', ( )=> {
  // 0,1,2에 모든 selected, show를 제거 
  clearClassList();

  btns[0].classList.add('selected');
  contents[0].classList.add('show');
});

btns[1].addEventListener('click', ( )=> {
  clearClassList();
  btns[1].classList.add('selected');
  contents[1].classList.add('show');
  contents[0].classList.remove('show');
  contents[0].classList.remove('selected');
});


btns[2].addEventListener('click', ( )=> {
  clearClassList();
  btns[2].classList.add('selected');
  contents[2].classList.add('show');
  
});
*/