
//2. 잘됐을 때
function onGeoOk(postion){
    const lat=postion.coords.latitude;
    const lng=postion.coords.longitude;
    console.log('you leave in',lat,lng)
};
//3. 안됐을 때
function onGeoError(){
alert('cant find you')
};

//1. getCurrentPosition은 argument가 2개가 필요('하나는 모든게 잘 됐을때 실행 될 함수(success)','에러가 발생했을 때 실행 될 함수(error)')
// success함수는 getCurrentPosition object 하나를 입력 받는다.js가 gcp obj를 준다
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//4. https://openweathermap.org/
