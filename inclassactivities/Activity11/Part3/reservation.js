$(document).ready(function() {
	
	$("#tabs").tabs();
	$("#arrival_date").datepicker(
		{
			maxDate: 90,
			minDate: 0
		}
	);

	$("#policies").click(() => {
		$("#dialog").css('display', 'block');
		$("#dialog").dialog();
	})

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// move the focus to the first text box
	$("#arrival_date").focus();
	
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the requested arrival date
			var arrivalDate = $("#arrival_date").val().trim();
			if (arrivalDate == "") {
				$("#arrival_date").next().text("This field is required.");
				isValid = false;
			} else {
				$("#arrival_date").next().text("");				
			}
			$("#arrival_date").val(arrivalDate);
			
			// validate the number of nights
			var nights = $("#nights").val().trim();
			if (nights == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			} else if (isNaN($("#nights").val())) {
				$("#nights").next().text("This field must be numeric.");
				isValid = false;
			} else {
				$("#nights").next().text("");
			}
			$("#nights").val(nights);		

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			// validate the email entry with a regular expression
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email); 
			
			// validate the phone number
			var phone = $("#phone").val().trim();
			if (phone == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);
			
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submit
}); // end ready