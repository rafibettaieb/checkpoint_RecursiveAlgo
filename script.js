
//leap Year Checker

function isLeapYear(year){
    if(year%400 == 0 || (year%4 == 0 && year%100 != 0)) console.log(`${year} is a leap year`)
    else console.log(`${year} is not a leap year`)
}

isLeapYear(2024)
isLeapYear(2018)

//Ticket Pricing

function price(age){
    switch(true){
        case (age<=12) : return 10;
        case (age<=17) : return 15;
        default : return 20;
    }
}
var age = 15;
console.log(price(age)) 


//Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not.Based on this information, advise the user on what clothing to wear.

function weatherAdviser(temp){
    if (temp < 15) console.log("it is raining. you should wear a coat")
    else console.log("it is not raining. you should wear a jacket")
}

var temp = 20;
weatherAdviser(temp);

//Recursion

//Fibonacci Sequence

function fib(n){
    if(n <= 1) return n;
    else return fib(n-1) + fib(n-2);
}

var n = 6;
console.log(fib(n));

//Palindrome Checker

function checkPalindrome(s, i, n) {
    if (i >= n) {
        return true;
    }
    if (s[i] !== s[n]) {
        return false;
    }
    return checkPalindrome(s,i+1,n-1);
}

var s = "radar";
console.log(checkPalindrome(s,0,s.length-1))

//Power Function

function pow(a,b){
    if(b === 0) return 1;
    else if(b > 0) return a * pow(a,b-1);
    else return 1 / pow(a,-b);
}

var a = 2;
var b = -1;
console.log(pow(a,b))