var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


