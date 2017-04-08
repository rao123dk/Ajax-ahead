
const myurl ="https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/a-detailed-version.json";
var our_database =[];

fetch(myurl)
	.then(proms => proms.json())
	.then(function(data){
		
		//var parsed = JSON.parse(data);
		for(var x in data){
  			our_database.push(data[x]);
		}
		console.log(our_database[0]);	

})
	

function find_result(wordToMatch ,our_database){
	return our_database.filter(function(newdata){
		// here "gi" means global insensetive words
		const regex = new RegExp(wordToMatch,'gi');
		return newdata.city.match(regex) || newdata.population.match(regex);
	});
}


function display_result(){
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