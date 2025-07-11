let cart = JSON.parse( localStorage.getItem('cart')) ;    //로컬 스토리지에 있는거 꺼내오고 배열로 변환 => parse 

//console.log(cart);

const cartList = document.querySelector('.list');

cart.forEach((item) => {      //아이템 변수임

  cartList.insertAdjacentHTML( 'beforeend',`<div>${item}</dov>`);

})