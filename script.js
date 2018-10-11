//1. Sleep In
function sleep_in(weekday, vacation){
    if (!weekday || vacation){
        return (true);
    }else {
        return (false);
    }
}


//2. Monkey Trouble
function monkey_trouble(a_smile, b_smile) {
    if (a_smile == b_smile){
        return (true);
    }else{
        return(false);
    }
}

//3. String Times
function string_times(str, n){
    var newString = "";
    for (var i = 0; i < n; i++){
        newString = newString + str;
    }
    return(newString);
}

//4. Front Times
function front_times(str, n){
    var subString = str.substring(0,3);
    var newString = "";
    for (var i = 0; i < n; i++){
        newString = newString + subString;
    }
    return(newString);
}

//5. String Bits
function string_bits(str){
    var string = ""
    for(var i = 0; i < str.length; i = i + 2){
    string = string + str[i];
     }
    return string;
}

//6. Caught Speeding
function caughtSpeeding(speed, birthday) {
    if (birthday) {
        speed = speed - 5;
    }
    if (speed <= 60){
        return ("0");
    }
    if (60 < speed && speed <= 80){
        return ("1");
    }
    if (80 < speed){
        return ("2");
    }
}

//7. FizzBuzz
function fizz_buzz(num){
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            return ("FizzBuzz");
        }else{
        return ("Fizz");
        }
    }
    if (num % 5 == 0){
        return ("Buzz");
    }
    if (num % 3 != 0 && num % 5 != 0){
        return (num + "!");
    }
}

//8. Tea Party
function teaParty (tea, candy){
    if (tea < 5 || candy < 5){
        return ("0");
    }
    if (tea >= 2 * candy || candy >= 2 * tea){
        return ("2");
    }
    if (tea >= 5 && candy >= 5){
        return ("1");
    }
}

//9. BlackJack
function blackjack(numOne, numTwo){
    if (numOne <= 21 && numTwo > 21){
        return numOne;
    }
    if (numTwo <= 21 && numOne > 21){
        return numTwo;
    }
    if (numOne <= 21 && numTwo <= 21 && 21 - numOne < 21 - numTwo){
        return numOne;
    }
    if (numTwo <= 21 && numOne <= 21 && 21 - numTwo < 21 - numOne){
        return numTwo;
    }
    if (numOne > 21 && numTwo > 21){
    return ("0");
    }
}

//10. LoneSum
function loneSum(a, b, c){
    var sum = a + b + c;
    if (a == b){
        sum = sum - a - b;
    }
    if (a == c){
        sum = sum - a - c;
    }
    if (b == c){
        sum = sum - b - c;
    }
    if (a == b && a == c){
        sum = 0
    }
    return sum;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_In(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times('Hi', 2);
    document.getElementById("output").innerHTML += front_times('Chocolate', 2);
    document.getElementById("output").innerHTML += string_bits('Hello');
    document.getElementById("output").innerHTML += caughtSpeeding(60, false);
    document.getElementById("output").innerHTML += fizz_buzz(1);
    document.getElementById("output").innerHTML += teaParty(6, 8);
    document.getElementById("output").innerHTML += blackjack(19, 21);
    document.getElementById("output").innerHTML += loneSum(1, 2, 3);
}