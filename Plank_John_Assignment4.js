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
            return x.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    /*console.log(toTitleCase("john loves mandy"));*/


    ///////////////////

     var minGreaterThan = function (numValue) {
        var x = [15,45,81,64,25,72,320,7349,16,31,630];
        var num = Number.POSITIVE_INFINITY, i;
        for (i = 0; i < x.length; i++) if (numValue < x[i] && x[i] < num) num = x[i];
        return num;
    };
    ///////////////////

    //totalvalue array

    var getArrayValue = function (x) {
            return x.reduce(function(a, b) a + b);
    };


    //currency 

    var formatDollar = function (num) {
        var p = num.toFixed(2).split(".");
        return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
            return  num + (i && !(i % 3) ? "," : "") + acc;
        }, "") + "." + p[1];
    };

    //phone

    var validatePhone = function (areaCode,prefix,extension) {
        var phoneNum = new String(areaCode + "-" + prefix + "-" + extension);
        var regExpObj = /(\d\d\d)-\d\d\d-\d\d\d\d/;
       
            if(regExpObj.exec(phoneNum) == null) {
            return phoneNum + " does not contain a valid code!";
                } else  {
                    return "Phone excepted";
                }
    };

    //url

    var urlValidate = function (value) {
      var urlregex = new RegExp(
            "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
      return urlregex.test(value);
    };

    //email 

    var emailValidate = function (str) {
        var lastAtPos = str.lastIndexOf('@');
        var lastDotPos = str.lastIndexOf('.');
            return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
    };

    var stringToNumber = function (x) {
            return parseInt(x);
    };

    var changeReplace = function (x) {
            return x.replace(",", "/", "gi");
    };
     
    var fuzzy = function (x) {
            return Math.round(x);
    };

    var getDiffdates = function (x,y) {
        var one_day=1000*60*60*24
            var dayOne = x;
            var dayTwo = y;
            var d1 = new Date(dayOne);
            var d2 = new Date(dayTwo);

        return (Math.ceil((d1.getTime() - d2.getTime())/(one_day)))
    };

    var sortByKey = function (array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }


    return {
        "formatDollar"                  :formatDollar,
        "minGreaterThan"                :minGreaterThan,
        "toTitleCase"                   :toTitleCase,
        "validatePhone"                 :validatePhone,
        "urlValidate"                   :urlValidate,
        "emailValidate"                 :emailValidate,
        "stringToNumber"                :stringToNumber,
        "getArrayValue"                 :getArrayValue,
        "changeReplace"                 :changeReplace,
        "fuzzy"                         :fuzzy,
        "getDiffdates"                  :getDiffdates,
        "sortByKey"                    :sortByKey

    };

};

var jl = johnLib();
console.log(jl.minGreaterThan(7348));

var gamers =[ {name:"Brandon", age:100, motto:"Faggy Bear"},
              {name:"Nate", age:36, motto:"I love men"},
              {name:"John", age:24, motto:"I love shitty music"}
            ];

console.log(jl.sortByKey(gamers,"name"));