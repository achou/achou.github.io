$(document).ready(function() {
	var counter = 1;
	$tile = $("#card");
	$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
	$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
	$("#card").flip();
	
	$(".card-no").text("Card # " + counter);
	$('.prev').prop('disabled', true);

	$(".prev").click(function(){
		if(counter > 1) {
			counter --; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.PNG')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.PNG')");
			$("#card").flip(false);
			console.log("counter is" + counter)
			$(".card-no").text("Card # " + counter);
		}
		if (counter == 1) {
			$('.prev').prop('disabled', true);
			$('.next').prop('disabled', false);	
		}
		else {
			$('.prev').prop('disabled', false);	
			$('.next').prop('disabled', false);	
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
		if (counter == 2) {
			$('.next').prop('disabled', true);
			$('.prev').prop('disabled', false);	
		}
		else {
			$('.prev').prop('disabled', false);	
			$('.next').prop('disabled', false);	
		}
	})

});

