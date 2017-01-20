$(document).ready(function(){

	$("#standard, #month").change(function() {
		if($('#standard').val()!="0" && $('#month').val()!="0"){
    	$('.aftersubmit').show();
    }
});
});
