/* 
	Random array utility
	Pass this method an array and it returns a random ordered instance of the array
	
	How to use
	==========
	
	var arr = [ 1, 2, 3 ];

	var randomArray = RandomArrayUtil.randomize( arr );
	
	
*/


var RandomArrayUtil = RandomArrayUtil || {};
RandomArrayUtil = {

	randomize : function( array ){

		return fisherYatesAlgorithm( array );		

		function fisherYatesAlgorithm ( myArray ) {
			var i = myArray.length, j, tempi, tempj;
			if ( i == 0 ) return false;
			while ( --i ) {
				j = Math.floor( Math.random() * ( i + 1 ) );
				tempi = myArray[i];
				tempj = myArray[j];
				myArray[i] = tempj;
				myArray[j] = tempi;
			}

			return myArray;
		}
	}

};