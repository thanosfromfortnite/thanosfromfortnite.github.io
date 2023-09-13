card = {}; card.rank = []; card.suit = []; card.img = [];

for (var i = 0; i < 13; i ++) {
	
	for (var x = 0; x < 4; x ++) {
		card.rank.push(i + 1);
		card.suit.push(x);
		card.img.push("cardimages/" + (i + 1) + "-" + x + ".png");
	}
	
}