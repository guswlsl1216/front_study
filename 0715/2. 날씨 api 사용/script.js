const weatherName = document.querySelector( '.weather > h3');
const weatherImg = document.querySelector ('.weather> img');
const weatherTemp = document.querySelector ('.temp')
const weatherDesc = document.querySelector('.desc')


function connectGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

 // console.log(`위도:${lat} 경도:${lon}`);       // 위치 정보 뽑아내기 위한 작업 
  const APIKEY = '3f26b5f71faa0d36b9d4897ee31759c7';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
    .then(response => response.json())
    .then(data => {
    
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0];

      weatherName.innerHTML = name;
      weatherTemp.innerHTML = temp;
      weatherDesc.innerHTML = desc;

      
    /*
     console.log(data)
     console.log(data.weather[0].description)
    console.log(data.main.temp)

    */ 

    

  })
}

function errorGeo () {
  alert('위치 정보 연결 실패')

}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);  //위치 정보를 허용하시겠습니까에 대한 성공, 실패 콜백 