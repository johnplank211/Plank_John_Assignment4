//Plank John
//Assignment 4
//Functions

//starting library function 
var johnLib = function () {

//title-case


    // Accepts a string argument, uses regular expression to replace character after
    // "word character" (/w is a shortcut for A-Za-z0-9_ and a space character with 
    // an uppercase character
    var toTitleCase =function (x)
    {
            return x.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

//find min val greater than number inserted in the array 

     // Accepts an integer argument, sets default return value to "infinity"
     // Loops through array to find the smallest integer greater than argument passed
     var minGreaterThan = function (numValue) {
        var x = [15,45,81,64,25,72,320,7349,16,31,630];
        var num = Number.POSITIVE_INFINITY, i;
        for (i = 0; i < x.length; i++) if (numValue < x[i] && x[i] < num) num = x[i];
        return num;
    };

//totalvalue array

    // Accepts an array argument
    // uses an override on the "reduce" function to add all values in array
    var getArrayValue = function (x) {
            return x.reduce(function(a, b) a + b);
    };


//currency exchange 

    // Accepts a decimal
    // Rounds to 2 decimal places and then splits it into an array containing
    // 1. Whole number portion and 2. decimal portion
    // Adds dollar sign at beginning

    // oh fuck it, I copied it from Google
    // I have no clue what black magic is being done here, but it fucking works!!

    // Uses buit in function to convert number to 2 digit decimal

    var formatDollar = function (num) {
        return num.toFixed(2);
       };

//phone Validate

    // Accepts 3 args and combines them separated by hyphens
    // Uses regular expressions to confirm and reformat, confirms that all 3 arguments
    // contain valid digits and returns exception if invalid entry

    var validatePhone = function (areaCode,prefix,extension) {
        var phoneNum = new String(areaCode + "-" + prefix + "-" + extension);
        var regExpObj = /(\d\d\d)-\d\d\d-\d\d\d\d/;
       
            if(regExpObj.exec(phoneNum) == null) {
            return phoneNum + " does not contain a valid code!";
                } else  {
                    return "Phone excepted";
                }
    };

//url Validate
    // Accepts string argument
    // Uses regular expressions to validate that url begins with 1 of 4 different url formats:
    //  http://www., https://www., fpt://www. or www.
    // And then numeric and character digis (no special chars), followed by a "."
    var urlValidate = function (value) {
      var urlregex = new RegExp(
            "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
      return urlregex.test(value);
    };

//email Validate

    // Accepts string argument
    // validates that string contains only 1 @ symbol, that must occur prior to a "."
    // Also validates that more than just a "@"" and "." exist
    var emailValidate = function (str) {
        var lastAtPos = str.lastIndexOf('@');
        var lastDotPos = str.lastIndexOf('.');
            return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
    };

//take a string number and return a number

    // Converts string argument to a number
    var stringToNumber = function (x) {
            return parseInt(x);
    };

//replace characters with others 

    // Accepts string argument - replaces comma with slashes
    var changeReplace = function (x) {
            return x.replace(",", "/", "gi");
    };

//number between percentage
    // Accepts number argument
    // Rounds number to nearest integer
    var fuzzy = function (x) {
            return Math.round(x);
    };

//difference between dates by day 
    // Accepts 2 string arguments
    // Converts to Dates, runs date diff and converts the millisecond response back into days
    var getDiffdates = function (x,y) {
        var one_day=1000*60*60*24
            var dayOne = x;
            var dayTwo = y;
            var d1 = new Date(dayOne);
            var d2 = new Date(dayTwo);

        return (Math.ceil((d1.getTime() - d2.getTime())/(one_day)))
    };

//sort array by numerical or aplh

    // Accepts 1 array argument and a sort key
    // Overloads the sort function to accept a key argument
    // Resorts the array using bubble sort logic
    var sortByKey = function (array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
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
        "sortByKey"                     :sortByKey
    };

};

var jl = johnLib();


//this is for the sort array
var gamers =[ {name:"Brandon", age:100, motto:"Faggy Bear"},
              {name:"Nate", age:36, motto:"I love men"},
              {name:"John", age:24, motto:"I love even more shitty music"},
              {name:"John", age:26, motto:"I love shitty music"}
            ];

console.log(jl.sortByKey(gamers,"age"));



//console.log(p.split("").reverse());

