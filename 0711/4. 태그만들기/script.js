// js로 태그를 생성하는 방법
let div = document.createElement('div');   //(); 안에 무슨 태그 만들건지 써주면 댐!

div.className = 'box';
div.innerHTML = '<h1 class="aaa">div태그</h1> 만듦'

//console.log(div);

document.body.prepend(div);

// 요소.append : 해당 요소 안쪽 마지막에 추가 (f12 개발자 도구 script에서 확인 가능. 들어가는 위치)
// 요소.prepend : 해당 요소 안쪽 첫번째에 추가 
// 요소.before : 해당 요소 전에 추가 
// 요소.after : 해당 요소 후에 추가  (형제 관계로 앞이나 뒤 )

const ulTag = document.querySelector('.list');

let pTag = document.createElement('p');
pTag.innerHTML = '앞에 들어갈 p 태그';

ulTag.before(pTag);

let liTag = document.createElement('li');
liTag.innerHTML = '새로  생성한 li 태그';

ulTag.prepend(liTag);

liTag.remove()