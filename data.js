$(document).ready(function() {
	var counter = 1;
	$tile = $("#card");
	$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.jpg')");
	$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.jpg')");
	$("#card").flip();
	
	$(".card-no").text("Card # " + counter);
	$('.prev').prop('disabled', true);

	$(".prev").click(function(){
		if(counter > 1) {
			counter --; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.jpg')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.jpg')");
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
		$("#card_number").val("");
	})
	$(".next").click(function(){
		if(counter < 435) {
			counter ++; 
			$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.jpg')");
			$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.jpg')");
			$("#card").flip(false);
			$(".card-no").text("Card # " + counter);
		}
		if (counter == 435) {
			$('.next').prop('disabled', true);
			$('.prev').prop('disabled', false);	
		}
		else {
			$('.prev').prop('disabled', false);	
			$('.next').prop('disabled', false);	
		}
		$("#card_number").val("");
	})

	$("#card_number").change(function(){
	  data_counter = parseInt($("#card_number").val());
	  if(data_counter > 0 && data_counter < 436) {
	  	counter = data_counter;
		$tile.find(".front").css("background-image", "url('assets/Card " + counter + " Front.jpg')");
		$tile.find(".back").css("background-image", "url('assets/Card " + counter + " Back.jpg')");
		$("#card").flip(false);
		$(".card-no").text("Card # " + counter);
		if (counter == 1) {
			$('.prev').prop('disabled', true);
			$('.next').prop('disabled', false);	
		}
		else if (counter == 435) {
			$('.next').prop('disabled', true);
			$('.prev').prop('disabled', false);	
		}
		else {
			$('.prev').prop('disabled', false);	
			$('.next').prop('disabled', false);	
		}
	  }
	  else {
	  	$("#card_number").val(counter);
	  }
	});

});

