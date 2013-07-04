/* 
	Cookie utility
	Gets / Sets / Lears cookies

	How to use
	==========
	
	- Set a cookie:
		
		CookieUtil.setCookie( "someCookie", value, lifespan );
		
		someCookie		-	the name of the cookie
		value			-	the value of the cookie
		lifespan		-	how many days the cookie will last for. Set to 0 and it will clear when browser is closed.


	- Get a cookie

		var cookieValue = CookieUtil.getCookie( "someCookie" );
	

	- Clear a cookie
		
		CookieUtil.eraseCookie( "someCookie" );
	
*/

var CookieUtil = CookieUtil || {};
CookieUtil = {

	setCookie : function (c_name,value,exdays)
	{
		var exdate = new Date();
		exdate.setDate( exdate.getDate() + exdays );
		var c_value = escape( value ) + ( ( exdays == null ) ? "" : "; expires=" + exdate.toUTCString() );
		document.cookie = c_name + "=" + c_value;
	},
	getCookie : function (c_name)
	{
		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1)
		{
			c_start = c_value.indexOf(c_name + "=");
		}
		if (c_start == -1)
		{
			c_value = null;
		}
		else
		{
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1)
		{
			c_end = c_value.length;
		}
			c_value = unescape(c_value.substring(c_start,c_end));
		}
		return c_value;
	},
	eraseCookie : function( c_name ){

		this.setCookie(c_name,"",-1);
	}


};