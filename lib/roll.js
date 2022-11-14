export function roll(sides, dice, rolls) {
	const results = [];
	for (var i = 0; i < rolls; i++) {
		var score = 0;
		for (var j = 0; j < dice; j++) {
			score = score + (Math.floor(Math.random() * this.sides) + 1);
		}
		results[i] = score;
	}
	const theOutput = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	}
	return JSON.stringify(theOutput);
}
