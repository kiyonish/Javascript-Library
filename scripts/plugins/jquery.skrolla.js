/* 
	Skrolla
	jQuery Plugin to listen for the amount the user has scrolled down a page,
	in both pixels and percentage.

	How to use
	==========
	
	$.skrolla( speed, callback( values ) ):
	
	speed 		- 	The delay between each callback function call in milliseconds
	callback 	- 	The method called with each time the timer is run. Only run if the scroll position has changed.
					Acceps an object parameter that contains the values calculated:

					percent		-	a deceimal percent ( 0 - 1) representing percentage of the page scrolled 
					fromTop		-	amount in pixels from the top of the document
					fromBottom	-	amount in pixels from the bottom of the document

	Example:
					
					$.skrolla( 100, function( scroll ){

				 		$('#mDiv').html( "Percent scrolled: " + scroll.percent );


					});

	© Kiyo Nishimura - 2013 
*/

$.skrolla = function( speed, callback ) {
    
	// To store the positon of the amount scrolled
    var pos;    
	// To store the old position in the previous call to detect value change
	var oldPos;
    // To store the document height
    var docHeight;
    // To store the window height
    var winHeight;
    // Call the the method to start the timer
	getScrollValues();

	function getScrollValues() {

		// Get the values of the window, document and current postion scrolled
		pos = $(window).scrollTop();
	    docHeight = $(document).height();
	    winHeight = $(window).height();
	    
	    // Look for if theres a change from the previous position
	    if( oldPos !== pos ){

	    	// Call the callbacl function and pass back an object with the calculated values
	    	callback( {
	    		percent : ( pos / (docHeight-winHeight)),
	    		fromTop : pos,
	    		fromBottom : docHeight - winHeight - pos
	    	} );

	    }

	    // Store the positin in a var so we can compare current/previous position values
	    oldPos = pos;

	    // Call the function to get the values again after a specified amount of time
	    setTimeout( getScrollValues, speed);
	}
};