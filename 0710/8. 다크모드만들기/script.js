/*다크모드 버튼을 클릭하면 배경색과 글꼴색이 바뀜 */
/* 배경색은 검정으로 글꼴색은 흰색 */
/* eventlistner // 
/* .stlye.color 글꼴색 // .style.backgroound 배경 */


const btn= document.querySelector('.btn-mode');
const body = document.body;

btn.addEventListener('click', function() {

  alert(btn.value);

  //alert(e.target.value)

body.style.background = 'black';                      // 쿼리셀렉터바디도 같은내용임 
body.style.color = 'white';                           // document.body 두번이나 찾아야함. 불필요한 과정임...... 그래서 위에서 변수로 선언해주고 쓰는게 나음
})                                                    // document.body.style.background




// 버튼 안에 글자 
// 라이트모드로 돌아가는거 숙제


