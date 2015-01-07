var destinations = ["The Chest", "The Dark Room"];
var challenges = [];

function getChallenges(){
	$.getJSON('challenges.json', function(data){
		challenges = [];
		$.each(data, function(key, val){
			for(var i = 0; i < val.length; i++){
				challenges.push(val[i]);
			}
		})
	});

	console.log(challenges);
}

function getRun(){
	getChallenges();
	var active_chars = $('#characters :input:checkbox:checked').serializeArray();

	var chars = [];

	for(var i = 0; i < active_chars.length; i++){
		chars.push(active_chars[i].value);
	}
	
	var character = chars[Math.floor(Math.random() * chars.length)];
	var destination = destinations[Math.floor(Math.random() * destinations.length)];
	var hardmode = (Math.floor((Math.random() * 2)) == 0) ? true : false;

	var run_text = "You will be playing as <b>" + character + "</b>, going to <b>" + destination + (hardmode ? "</b> on <b>normal</b>" : "</b> on <b>hard</b>") + ".";

	console.log(run_text);
	$('#run-text').replaceWith('<div id="run-text">' + run_text + '</div>');
	
}
