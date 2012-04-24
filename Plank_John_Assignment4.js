//Plank John
//Assignment 4
//Functions



/*var myString = "717-870-0093";
var end = myString.indexOf ("-");
var start = myString.indexOf ("-")+1;

console.log(myString.substring(start,end)); //to and from

console.log(myString.charAt(5));       //pull out specific part of indexx

console.log(myString.indexOf("7"));    //find the position of the character in the indexx

console.log(myString.lastIndexOf("7"));// return the last position of that character




function getSomething () {
		var myString = "717-870-0093";
		var start = myString.indexOf("-")+1;
		var end = myString.lastIndexOf("-");
	    return  myString.substring(start, end);
};

console.log(getSomething(""));*/
var johnLib = function () {

// 4th function
var toTitleCase =function (x)
{
    return x.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

/*console.log(toTitleCase("john loves mandy"));*/


///////////////////

/*var x = [15,45,81,64,25,72,320,7349,16,31,630];

  Array.prototype.minGreaterThan = function (numValue) {

  var num=Number.POSITIVE_INFINITY, i;
  
    for (i=0;i<this.length;i++) if (numValue<this[i] && this[i]<num) num=this[i];
    return num;
};*/
///////////////////


// 11th function 
var getValue = function  (x) {
	return x.length;
};

/*console.log(getValue([1, 2, 3, 4, 5, 6, "john", 7, 8, 9]));*/


var formatDollar = function (num) {
    var p = num.toFixed(2).split(".");
    return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
};

/*console.log(formatDollar(2345))*/


var  echeck = function(str) {

        var at="@"
        var dot="."
        var lat=str.indexOf(at)
        var lstr=str.length
        var ldot=str.indexOf(dot)
        if (str.indexOf(at)==-1){
           console.log("Invalid E-mail ID")
           return false
        }

        if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
           console.log("Invalid E-mail ID")
           return false
        }

        if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
            console.log("Invalid E-mail ID")
            return false
        }

         if (str.indexOf(at,(lat+1))!=-1){
            console.log("Invalid E-mail ID")
            return false
         }

         if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
            console.log("Invalid E-mail ID")
            return false
         }

         if (str.indexOf(dot,(lat+2))==-1){
            console.log("Invalid E-mail ID")
            return false
         }
        
         if (str.indexOf(" ")!=-1){
            console.log("Invalid E-mail ID")
            return false
         }

         return true                    
    };










return {
    "formatDollar"   :formatDollar,
    "getValue"       :getValue,
    "Array.prototype.minGreaterThan" :Array.prototype.minGreaterThan,
    "toTitleCase"   :toTitleCase,
    "echeck"        :echeck
};


};

var jl = johnLib();
console.log(jl.echeck("johnplank211@gmail.com"));





















