let box = document.getElementById('box')  /*class면 classname으로 접근 => Id*/
box.style.background = 'red';
console.log(box);


// 선택자를 이용해서 요소를 선택할 수 있음 (위에꺼는 정해진거)
 const box2 = document.querySelector('#box');                //querySelector('선택자');
 box2.style.color = 'white'

// 선택자에 해당하는 요소 중 첫번째꺼 하나만 
// class는 여러개가 지정이 될 수 있는데, 얘는 첫번째꺼 하나만 됨. 
const bg = document.querySelector('.bg');
bg.style.background = 'pink';

//선택자에 해당하는 모든 요소들을 가져옴
/*const bg = document.querySelectorAll('.bg');
bg[0].style.background = 'pink'
bg[1].style.background = 'pink'
*/

/*
for(let i=0; i<bg.length; i++) {
  bg[i].style.background = 'pink';

}
*/

// for ... in : object 반복할 때 ( 배열은 키 밸류만 있는게 아니라서 안됨)

for(let b of bg) {
  b.style.background = 'pink'
}

const li = document.querySelectorAll('ul > li');
for (let l of li) {
  l.innerHTML = 'ㅋㅋㅋ';
}



