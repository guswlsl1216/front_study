let cart = JSON.parse( localStorage.getItem('cart')) ;    //로컬 스토리지에 있는거 꺼내오고 배열로 변환 => parse //cart라는 키의 값을 꺼내와라

//console.log(cart); 모르겠으면 그냥 찍어봄..

const cartList = document.querySelector('.list');

cart.forEach((item) => {      //아이템 변수임

  cartList.insertAdjacentHTML( 'beforeend'
    ,`<div>${item.name} : ${item.cnt}</div>`);

})


