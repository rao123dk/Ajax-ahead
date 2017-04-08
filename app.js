
const myurL ="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var our_database = [];

fetch(myurL)
	.then(proms => proms.json())
	//.then(data => our_database=data)
	.then(data => our_database.push(...data))
	//console.log(our_database);

function find_result(wordToMatch ,our_database){
	return our_database.filter(newdata =>{
		// here "gi" means global insensetive words
		const regex = new RegExp(wordToMatch,'gi');
		return newdata.city.match(regex) || newdata.state.match(regex);
	});
}


function display_result(){
	//console.log(this.value);
	const matchArray = find_result(this.value, our_database);
	console.log(matchArray);
	const insertHTML = matchArray.map(dData => {
		return ` 
		<span> ${dData.city} </span></br></br>
		<span> ${dData.population}</span>
		`;
	}).join('');

	suggestions.innerHTML =insertHTML;
}

var searchInput = document.querySelector('.resizedTextbox');
var suggestions = document.querySelector('.suggestions');


searchInput.addEventListener("change",display_result);
searchInput.addEventListener("keyup",display_result);