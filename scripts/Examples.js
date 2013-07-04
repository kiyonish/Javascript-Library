$(document).ready( function(){


	// Usage examples of files in this library.....


	// Skrolla ----------------------------------------------------------------------------


		$.skrolla( 10, function( scroll ){

	 		$('#percent').html( scroll.percent );
	 		$('#top').html( scroll.fromTop );
	 		$('#bottom').html( scroll.fromBottom );

		});



	// Cookie Util -------------------------------------------------------------------------


		$( "#getCookie" ).html( CookieUtil.getCookie( "myCookie" ) );
		
		$("#setCookie").click( function( event ) {

			CookieUtil.setCookie( "myCookie", $("#cookieVal").val(), 1 );

			$( "#getCookie" ).html( CookieUtil.getCookie( "myCookie" ) );
			return false;
		});

		$("#eraseCookie").click( function( event ) {

			CookieUtil.eraseCookie( "myCookie" );
			$( "#getCookie" ).html( CookieUtil.getCookie( "myCookie" ) );
			return false;
		});
	

	// Email validator Util -------------------------------------------------------------------------



		$("#emailText").keyup( function(){

			var valid = EmailValidator.validate( $(this).val() );
			$("#valid").html( String(valid)  );
		});



	// Query String Util -------------------------------------------------------------------------


	$("#getVars").click( function(){

		$("#querystingValues").empty();

		var vars = QueryStringUtil.getUrlVars();
		
		var i = -1;
		while( i++ < vars.length-1 ) {
			
			$("#querystingValues").append( "<p>" + vars[i] + " : <span>" + vars[ vars[i] ] + "</span></p>" )

		}
		return false;

	});


	// Random Array Util -------------------------------------------------------------------------

	var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	showArr();
	function showArr(){
		$("#array").empty();
		var i = -1;
		while( i++ < arr.length - 1 ){
			$("#array").append( "<span>" + arr[i] + "</span>, " );
		}
	}

	$("#randomize").click( function(){

		arr = RandomArrayUtil.randomize( arr );
		showArr();
		return false;
	});


	// Text formatter Util -------------------------------------------------------------------------


	$("#getNumberAsCurrency").html(TextFormatter.getNumberAsCurrency( $("#tf1").html() ) );	

	$("#getValueAsNumber").html(TextFormatter.getValueAsNumber( $("#tf2").html() ) );	

	$("#spaceToDash").html(TextFormatter.spaceToDash( $("#tf3").html() ) );	

	$("#restrictCharsToDigits").keydown( function  ( event ){
		return TextFormatter.restrictCharsToDigits( event ) ;
	} );


	





	
















	
















	




















});