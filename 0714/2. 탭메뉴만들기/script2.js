const btns = $('.tab-button');
const contents = $('.tab-content');

btns.on('click', (e) => {
//  alert('aa');
 btns.removeClass('selected');
 contents.removeClass('show');


 let no = e.target.dataset.no; //변수로 꺼내오기 //  console.log(e.target.dataset.no)

  btns.eq(no).addClass('selected');
  contents.eq(no).addClass('show');
  
})


