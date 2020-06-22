$(document).ready(function() {
	var counter = 1;
	var $container = $(".tileContainer")
	$tile = $('<div id="card"><div class="front"></div><div class="back"></div></div>');
	$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
	$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
	$container.append($tile);
	$("#card").flip();
	
	$(".card-no").text("Card # " + counter);

	$(".previous").click(function(){
		if(counter > 1) {
			counter --; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
			$("#card").flip(false);
			console.log("counter is" + counter)
			$(".card-no").text("Card # " + counter);
		}
	})
	$(".next").click(function(){
		if(counter < 2) {
			counter ++; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
			$("#card").flip(false);
			console.log("counter is" + counter)
			$(".card-no").text("Card # " + counter);
		}
	})

});

