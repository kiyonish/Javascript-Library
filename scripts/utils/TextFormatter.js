/* 
	Text formatter utility
	Contains some methods to convert strings to particular formats

	How to use
	==========
	
	getNumberAsCurrency		-		returns a string formatted with commas and dollar sign from a number parameter

									Example
									=======

									var amount = TextFormatter.getNumberAsCurrency( 10000000 );

									// returns $10,000,000
	

	
	getValueAsNumber		- 		returns a number taken from a string formatted currency
	
									Example
									=======

									var amount = TextFormatter.getValueAsNumber( "$50,000" );

									// returns 50000



	restrictCharsToDigits	-  		returns boolen to restrict the characters being typed into a form field to digits only.

									Example
									=======

									function onKeydownHandler ( event ){
										return TextFormatter.restrictCharsToDigits( event ) ;
									}



	spaceToDash				-	 	returns a string that has any spaces in it replaced with dashes

									Example
									=======

									TextFormatter.spaceToDash( "The guy fell off the balcony" ) ;
									
									// returns "The-guy-fell-off-the-balcony"
				
	

	dateFromISOString		- 		return a readable string that represents the date formatted from iso string formatted date from a server
					


*/

var TextFormatter = TextFormatter || {};
TextFormatter = {

	// Takes a number or string and returns it with a dollar sign and commas for thousands
	getNumberAsCurrency : function ( targetNum ){

		var number = String( targetNum );
		var digits = [];
		var tempNum = '';

		var i = number.length;
		var c = 0;
		while( i-- > 0){

			digits.push( number.charAt(i) );

			if( c % 3 === 2 && i !== 0){
				digits.push(',');
			}	
			c++
		}		

		var newNumber = '$';
		var j = digits.length;
		while( j-- > 0){

			newNumber = newNumber.concat( digits[j] );

		}

		return newNumber;
	},
	getValueAsNumber : function( string ){

		var val = string;
		
		if (/[a-z\s,$]/ig.test(val)) {
		  val = val.replace(/[a-z\s,$]/ig,'');
		}
		return val;

	},
	restrictCharsToDigits : function( e ){

		if( (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) ||  e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 16 )
			return true;
		else
			return false;
	},
	spaceToDash : function( string ){

		var words = string.split( " " );
		string = "";
		var i = -1;
		while( i++ < words.length-1 ){
			
			if (i === words.length-1 )
				string += words[i];
			else
				string += words[i] + "-";
		}

		return string;
	},
	dateFromISOString : function( isoString ) {

		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		var dateWithoutTime = isoString.split( "T" )[0];
		var dates = dateWithoutTime.split("-");

		var year = dates[0];
		var month = months[ Number(dates[1]) - 1 ];
		var day = dates[2];

		var dateString = day + " " + month + ", " + year;

		return dateString ;

	}

	
}

