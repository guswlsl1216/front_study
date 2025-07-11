/*다크모드 버튼을 클릭하면 배경색과 글꼴색이 바뀜 */
/* 배경색은 검정으로 글꼴색은 흰색 */
/* eventlistner // 
/* .stlye.color 글꼴색 // .style.backgroound 배경 */


const btn= document.querySelector('.btn-mode');
const body = document.body;


 let isDark = false;   
btn.addEventListener('click', function() {
                                //처음에 다크 모드 아니니까 false로 뒀음
                                // 다크모드이면 true, 아니면 false
  if(isDark) {                        //플래그용 변수를 만들어서 조건문을 쓴거임 
    body.style.background = 'white';
    body.style.color = 'black';
    btn.value = '다크모드';
    isDark = !isDark;
    
  } else {
      body.style.background = 'black'; 
      body.style.color = 'white';  
      btn.value = '라이트모드';
      isDark = !isDark;
  }


  
  //alert(btn.value);
  //alert(e.target.value)

                    // 쿼리셀렉터바디도 같은내용임 
                  // document.body 두번이나 찾아야함. 불필요한 과정임...... 그래서 위에서 변수로 선언해주고 쓰는게 나음
})                                                    // document.body.style.background




// 버튼 안에 글자 
// 라이트모드로 돌아가는거 숙제
// if를 활용해도 되지만 변수를 만들어서 해볼거임 

