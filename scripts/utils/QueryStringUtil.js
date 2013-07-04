/* 
	Query string reader utility
	Returns an oject that has all the variable key/value pairs pulled out of a url query string

	How to use
	==========
	
	url = http://somedomain.com/?firstname=Gary&lastname=Leeman

	var vars = QueryStringUtil.getUrlVars();

	returns :
	{ 
		firstname : "Gary",
		lastname : "Leeman"
	 }

*/

var QueryStringUtil = QueryStringUtil || {};
QueryStringUtil = {


	getUrlVars: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];

		}
		return vars;
	}


};