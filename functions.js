// P2 req. 2-A

var isArmstrong = function(tnum) {
	"use strict";
	// declare local variables
	var sum = 0, digit;
	// convert tnum to a string
	var num = String(tnum);
	// traverse string and process digits
	for(var i = 0; i < num.length; ++i) {
		digit = Math.pow(parseInt(num[i]), num.length);
		sum += digit;
	};
	if(tnum == sum) {
		return true;
	} else {
		return false;
	};
};

// P2 req. 2-B
var allArmstrongs = function() {
	"use strict"
	var holder = "";
	for(var n = 0; n < 100000; n++) {
		var sum = 0, digit;
		var num = String(n);
		for(var i = 0; i < num.length; ++i) {
			digit = Math.pow(parseInt(num[i]), num.length);
			sum += digit;
		};
		if(num == sum) {
			holder += num + ', ';
		};
	};
	return holder;
};

// P2 req. 2-C
var allSubStrings1 = function(str) {
	"use strict"
	var holder = '';
	var string = String(str);
	for(var i = 0; i < string.length; i++) {
		for(var n = 1; n <= string.length - i; n++) {
			var subString = string.substring(i, i+n);
			holder += subString + ',';
		};
	};
	return holder;
};

// P2 req. 2-D
var allSubstrings2 = function(str) {
	"use strict"
	var holder = [];
	var string = String(str);
	for(var i = 0; i < string.length; i++) {
		for(var n = 1; n <= string.length - i; n++) {
			var subString = string.substring(i, i+n);
			holder.push(subString);
		};
	};
	return holder;
};

// P2 req. 2-E
var maxWord = function(str) {
	"use strict"
	var str = str.split(" ");
	var longest = 0;
	var word;
	for(var i = 0; i < str.length; i++) {
		if(longest < str[i].length) {
			longest = str[i].length;
			word = str[i];
		};
	};
	return word;
};