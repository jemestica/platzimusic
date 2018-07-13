import config from './config'

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
const URL_COUNTRIES = `https://restcountries.eu/rest/v2/all`;

function getArtists(country) {
	const url = URL.replace(':country',country)
  	return fetch(url)
  		.then(res => res.json())
  		.then(json => json.topartists.artist)
};

function getCountries(){
    return fetch(URL_COUNTRIES)
    	.then(res => res.json())
    	.then(json => json)
};


export { getCountries, getArtists }