$(document).ready(function() {
	var $container = $(".tileContainer")
	for(var i = 1; i < 10; i++) {
		$tile = $('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front"></div><div class="back"></div></div></div>');
		$tile.find(".front").css("background-image", "url('assets/Card " + 1 + " Front.PNG')");
		$tile.find(".back").css("background-image", "url('assets/Card " + 1 + " Back.PNG')");
		$container.append($tile);
		
	}

});