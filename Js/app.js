// // console.log("salut salut");


$('.button1').click(function(){
	var tab = {
	input1 : $('#input1').val(),
	input2 : $('#input2').val(),
	input3 : $('#input3').val()
	}

	$('#text').html("bonjour " + " " + tab.input1 + " " + tab.input2 + " "+ " tu as " + tab.input3 + " ans? " )


});






// var input1 = "";
// var input2 = "";
// var input3 = "";

// $(".ecouteInput").change(function(){
// 	input1 = $('#input1').val();
// 	input2 = $('#input2').val();
// 	input3 = $('#input3').val();
	
// 	if (input1 == 0){
// 		$('#text').html("il te manque le " + "prénom");
// 	} else if (input2 == 0) {
// 		$('#text').html("bonjour " + " " + input1 + " il te manque le " + "nom");
// 	} else if (input3 == 0) {
// 		$('#text').html("salut " + input1 + " " + input2 + " il te manque " + "l'age");
// 	} else {
// 		$('#text').html("bonjour " +  input1 + " " + input2 + " tu a " + input3 + " ans " )
// 	}

// 	});



