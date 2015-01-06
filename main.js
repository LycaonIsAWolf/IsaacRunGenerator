var destinations = ["The Chest", "The Dark Room"];

function getRun(){
	var active_chars = $('#characters :input:checkbox:checked').serializeArray();

	var chars = [];

	for(var i = 0; i < active_chars.length; i++){
		chars.push(active_chars[i].value);
	}
	
	var character = chars[Math.floor(Math.random() * chars.length)];
	var destination = destinations[Math.floor(Math.random() * destinations.length)];
	var hardmode = (Math.floor((Math.random() * 2)) == 0) ? true : false;

	var run_text = "You will be playing as " + character + ", going to " + destination + (hardmode ? " on normal mode" : " on hardmode") + ".";

	console.log(run_text);
	$('#run-text').replaceWith('<div id="run-text">' + run_text + '</div>');
	
}
