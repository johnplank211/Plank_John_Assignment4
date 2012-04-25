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

//title-case

var toTitleCase =function (x)
{
    return x.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

/*console.log(toTitleCase("john loves mandy"));*/


///////////////////

var x = [15,45,81,64,25,72,320,7349,16,31,630];
 Array.prototype.minGreaterThan = function (numValue) {
          var num=Number.POSITIVE_INFINITY, i;
            for (i=0;i<this.length;i++) if (numValue<this[i] && this[i]<num) num=this[i];
                return num;
};
///////////////////

//totalvalue array

var getArrayValue = function (x) {
        console.log(x.reduce(function(a, b) {
                return a + b;
}))
};


//currency 

var formatDollar = function (num) {
    var p = num.toFixed(2).split(".");
    return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
};

//phone

var validatePhone = function validatePhone(areaCode,prefix,extension) {
    var phoneNum = new String(areaCode + "-" + prefix + "-" + extension);
    var regExpObj = /(\d\d\d)-\d\d\d-\d\d\d\d/;
   
    if(regExpObj.exec(phoneNum) == null) {
        console.log(phoneNum + " does not contain a valid code!");
    } else  {
            console.log("Phone excepted");
    }
};

//url

var urlValidate = function (value) {
  var urlregex = new RegExp(
        "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
  if(urlregex.test(value))
  {
    return(true);
  }
  return(false);
};

//email 

var emailValidate = function (str) {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
};

var getNumber = function (x) {
    return parseInt(x);
};




return {
    "formatDollar"                   :formatDollar,
    /*"getValue"                       :getValue,*/
    "x.minGreaterThan"               :x.minGreaterThan,
    "toTitleCase"                    :toTitleCase,
    "validatePhone"                  :validatePhone,
    "urlValidate"                    :urlValidate,
    "emailValidate"                  :emailValidate,
    "getNumber"                      :getNumber,
    "getArrayValue"                  :getArrayValue
};

};

var jl = johnLib();
console.log(jl.getArrayValue([3,45,6,7]));






/*var x = [15,45,81,64,25,72,320,7349,16,31,630];
 Array.prototype.minGreaterThan = function (numValue) {
    
  var num=Number.POSITIVE_INFINITY, i;
  
    for (i=0;i<this.length;i++) if (numValue<this[i] && this[i]<num) num=this[i];
    return num;
};

console.log(x.minGreaterThan(26));*/











