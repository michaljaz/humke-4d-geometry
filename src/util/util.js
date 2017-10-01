/*
This class is for misc. functions that don't fit anywhere else.
*/
var Util = (function (scope) {
	function Util(){
		
	}
	Util.prototype.ParseConvexPoints = function(string){
		/* 
			Takes in a string a points, and returns an array of points. 
			Turns "(1,1),(2,2),(3,3)" 			  -> [{x:1,y:1},{x:2,y:2},{x:3,y:3}]
			and	  "(1,1,1),(2,2,2),(3,3,3)" 	  -> [{x:1,y:1,z:1},{x:2,y:2,z:2},{x:3,y:3,z:3}]
			and	  "(1,1,1,1),(2,2,2,2),(3,3,3,3)" -> [{x:1,y:1,z:1,w:1},{x:2,y:2,z:2,w:2},{x:3,y:3,z:3,w:3}]
				Input:
					A string formatted as "(Number,Number)" | "(Number,Number,Number)" | "(Number,Number,Number,Number)"
				Output:
					[{x:Number,y:Number}] including z and w for up to 4 numbers.
		*/

		// Remove whitespace
		var points_str = string.replace(/\s+/g, '');
		// Split based on the pattern (digits,digits)
		var points_split = points_str.match(/\(-*[.\d]+,-*[.\d]+,-*[.\d]+\)/g);
		var pointsArray = [];

		for(var i=0;i<points_split.length;i++){
			var p = points_split[i];
			// Remove parenthesis
			p = p.replace(/[\(\)]/g,'');
			// Split by comma
			var comma_split = p.split(",")
			var point = {};
			var map = ['x','y','z','w'];
			for(var j=0;j<comma_split.length;j++){
				point[map[j]] = Number(comma_split[j]);
			}
			pointsArray.push(point)
		}

		return pointsArray;
	}

	scope.Util = Util;
	return Util;
})(typeof exports === 'undefined' ? {} : exports);