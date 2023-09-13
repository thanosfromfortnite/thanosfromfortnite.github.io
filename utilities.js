function generateRandomInteger(min,max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}
	
function getOrdinalSuffix(num) {
	num10 = Math.abs(num % 10);
	
	if (num10 == 1 && num != 11) {
		return "st";
	}
	if (num10 == 2 && num != 12) {
		return "nd";
	}
	if (num10 == 3 && num != 13) {
		return "rd";
	}
	else {
		return "th";
	}
}
