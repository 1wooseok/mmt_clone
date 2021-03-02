const API_KEY = 'c9e56c052ad77bb3869cf956cc818d67';
const COORDS_LS = "coords";
const weather = document.querySelector('.myWeather');

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ ${place}`;
    });
}

function saveCoords(obj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(obj));
}

function GeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const obj_coords = {
        latitude,
        longitude
    };
    saveCoords(obj_coords);
    getWeather(latitude, longitude);
}

function GeoError() {
    console.log("Can't access");
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(GeoSuccess, GeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if(loadedCoords === null){
        askCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords()
}

init();

// const API_KEY = 'c9e56c052ad77bb3869cf956cc818d67';

// const weather = document.querySelector('.myWeather');

// const COORDS_LS = 'coords';

// // function getWeather(lat, lng) {
// //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
// //         .then(function(response) {
// //             console.log(reponse);
// //             //return response.json();
// //         })
// //         .then(function(myJson) {
// //             console.log(JSON.stringify(myJson));
// //         });
// // }


// function saveGeoCoords(obj) {
//     localStorage.setItem(COORDS_LS, JSON.stringify(obj));
// }

// function geoSuccess(position) {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     const coordsObj = {
//         lat,
//         lng
//     }
//     saveGeoCoords(coordsObj);
//     getWeather(lat, lng);
// }

// function geoError() {
//     console.log('cant access geo location');
// }

// function getGeoLocation() {
//     const myCoords = localStorage.getItem(COORDS_LS);
//     if(myCoords === null){
//         navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
//     } else {
//         const parsedCoords = JSON.parse(myCoords);
//         getWeather(parsedCoords.latitude, parsedCoords.longitude);
//     }
// }

// function init() {
//     getGeoLocation();
// }

// init();

// navigator 를 이용해서 위도, 경도를 LocalStorage에 저장.

//js를 통해 url호출.
//js는 웹사이트로 Request를 보내고 응답을 통해 데이터를 얻을 수 있음.
// ---> Refresh 없이 실시간으로 web-site 에 적용 시킬수 있음 (장점)
// ex) 이메일이 새로고침 하지 않아도 실시간으로 옴( js가 Back-end 에서 계속 Data를 가져오고 있기 때문)