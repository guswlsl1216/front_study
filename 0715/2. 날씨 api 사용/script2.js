const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};

  const selectBox = document.querySelector('select');
  
  let country = selectBox.value;
  
  selectBox.addEventListener('change', (e) => {
  country = e.target.value;

  const lat = countryCoordinates[country].latitude;
  const long = countryCoordinates[country].longitude;

  console.log(country);
  console.log(lat);
  console.log(long);

  })


  
//select는 change 이벤트씀, 변경되니까 



/*
작업 순서
1-1. select 박스가 변경되면 
1-2. 선택된 국가가 뭔지 알아내야함. 
2. 선택된 그 국가에 해당하는 위경도를 구함 
3. 위경도 꺼내와서 날씨 api로 해당 날씨 정보를 얻기
4. 얻은 날씨 정보를 html에 나타내줌 


*/