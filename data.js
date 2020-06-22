$(document).ready(function() {
	var counter = 1;
	var $container = $(".tileContainer")
	$tile = $('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front"></div><div class="back"></div></div></div>');
	$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
	$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
	$container.append($tile);
	$(".card-no").text("Card # " + counter);

	$(".previous").click(function(){
		if(counter > 1) {
			counter --; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
			console.log("counter is" + counter)
			$(".card-no").text("Card # " + counter);
		}
	})
	$(".next").click(function(){
		if(counter < 2) {
			counter ++; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
			console.log("counter is" + counter)
			$(".card-no").text("Card # " + counter);
		}
	})

});



// $(document).ready(function() {
// 	var counter = 1;
// 	var $container = $(".tileContainer")
// 	var toggle = true;

// 	$tile = $('<div class="flip-container"><div class="flipper"><div class="front"></div></div></div>');

// 	$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
// 	$container.append($tile);
// 	$(".card-no").text("Card # " + counter);

// 	$(".flip-container").click(function(){
// 		toggle ^= true;
// 		if(toggle) {
// 			console.log("showing front")
// 			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
// 		}
// 		else {
// 			console.log("showing back")
// 			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Back.PNG')");	
// 		}
// 	})

// 	$(".previous").click(function(){
// 		if(counter > 1) {
// 			counter --; 
// 			toggle = true;
// 			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
// 			$(".card-no").text("Card # " + counter);
// 		}
// 	})
// 	$(".next").click(function(){
// 		if(counter < 2) {
// 			counter ++; 
// 			toggle = true;
// 			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
// 			console.log("counter is" + counter)
// 			$(".card-no").text("Card # " + counter);
// 		}
// 	})

// });