/* 
	Email addredd validation utility
	Regular expression that evaluates if an email address is valid. 
	Returns boolean.

	How to use
	==========
	
	var isValid = EmailValidator.validate( "wendel.clark@gmail" )			// false
	
	var isValid = EmailValidator.validate( "wendel.clark@gmail.com" )		// true
	
*/

var EmailValidator = EmailValidator || {};
EmailValidator = {

	// Return true if the email addeess is valid, false if invalid
	validate : function ( email ) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	    

		return re.test(email);
	}
};