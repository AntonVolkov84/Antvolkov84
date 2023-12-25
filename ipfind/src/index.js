import {validatIp} from './helpers';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';




const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

const mapArea = document.querySelector('.map');
const map = L.map(mapArea,{
	center: [51.505, -0.09],
	zoom: 13,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Volkov Anton</a>'
}).addTo(map);
L.marker([51.505, -0.09]).addTo(map);







btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);




function getData(){
	if (validatIp(ipInput.value)){
	fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_Fg3VDQWEbEohUTtynPdNZIJkPG7UY&ipAddress=${ipInput.value}`)
	.then(response => response.json())
	.then(data => setInfo(data))
	};
};
function handleKey(event){
	if (event.key === 'Enter'){
		getData();
	}
};
function setInfo(mapData){
	const {country, region, timezone} = mapData.location;


	ipInfo.innerText = mapData.ip;
	locationInfo.innerText = country + ' ' + region;
	timezoneInfo.innerText = timezone;
	ispInfo.innerText = mapData.isp;

}	