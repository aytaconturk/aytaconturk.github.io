var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };




function addScore() {
	$('name').focus()
	let score =  $("score").value
	score =  parseInt(score)
	let name =  $("name").value

	const isEmpty = str => !str.trim().length;

	if (isEmpty(name) || (score < 0 || score > 100) || Number.isNaN(score) ){
		alert("You must enter a name and a valid score!!!")
		return false
	}

	else{
		scores.push(score);
		names.push(name);

		console.log("name: " + name)
		console.log("score: " + score)
	}

}

function displayResults() {

	let max = 0;
	let maxIndex = -1
	for (let i in scores) {
		if(scores[i] > max){
			max = scores[i];
			maxIndex = i
		}
	}
	let highestValue = max;

	let sum = 0;
	for (let i in scores) {	sum += scores[i]; }

	const avgScore = sum / scores.length;

	console.log("high value: " + highestValue)
	console.log("avg value: " + avgScore)

	const results = $("results")
	//firstly empty inside result div contents
	results.innerHTML = ""

	results.insertAdjacentHTML('beforeend', `<h2> Results </h2>`);

	results.insertAdjacentHTML('beforeend', `<p> Average score = ${avgScore} </p>`);
	results.insertAdjacentHTML('beforeend', `<p> High score = ${names[maxIndex]} with a score of ${highestValue} </p>`);
	// results.innerHTML = names;


}

function displayScores() {
	let table = $("scores_table");

	//firstly empty table contents
	table.innerHTML = ""

	table.insertAdjacentHTML('beforeend', `<h2> Scores </h2>`);

	// add table headers
	table.insertAdjacentHTML('beforeend', `<tr> <td> <strong>Names</strong></td> <td><strong>Scores</strong></td></tr>	`);

	// add table contents
	for (let i in names) {
		table.insertAdjacentHTML('beforeend', `<tr> <td>${names[i]}</td> <td>${scores[i]}</td></tr>	`);
	}
}

window.onload = function () {
	$('name').focus()
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


