//==============================================================
// Part 1: Variables — var, let, const (6 Questions)
//==============================================================

//1.Declare a variable using var, assign it the value 10, reassign it to 20, and print the result.
var p = 10
    p = 20
    console.log(p); //output=20

//2.Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.
var q = 30
var q = 50
console.log(q); //output=50

//3.Declare a variable using let with the value 100. Reassign it to 200 and print the result.
let r = 100
    r = 200
console.log(r); //output=200

//4.Declare a variable using const to store your age. Print the value.
const age = 22
console.log(age); //output=22

//5.Identify which variable declarations are valid and which are invalid: var, let, and const.
var a1 = 12 // valid declaration and initialization
a1 = 24     // valid  reuse and reassign or reinitialization
var a1 = 26  // valid redeclaration

let a2 = 12 // valid declaration and initialization
a2 = 24     // valid  reuse and reassign or reinitialization
//let a2 = 26  // invalid redeclaration

const a3 = 12 // valid declaration and initialization
//a3 = 24 // invalid  reuse and reassign or reinitialization
//const a3 = 26 // invalid redeclaration

//6.Create three variables using var, let, and const to store your name, age, and city. Print all three.
var name = "Pavani"
let age1 = 22
const city = "Tirupati"
console.log(name,age1,city);//output=Pavani 22 Tirupati

// ===================================================================
// Part 2: Printing Statements and Data Types (6 Questions)
//=====================================================================

//7.Use prompt() to get the user's name and display it using alert().
let nameOf = prompt("What is your name?");
alert(nameOf);// output= in alert you can what user entered name

//8.Use prompt() to get the user's age and print it using console.log().
let ageOf = prompt("what is your age?");
console.log(ageOf);// output=in console you can what user entered age

//9.Use confirm() to ask the user whether they know JavaScript. Print the returned value.
let knowleg = confirm("do you know javaScript?");
console.log(knowleg); // when the user type ok then its true will be displayed in console and when cancel it display false

//10.Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.

const ab = "Pavani"
console.log(ab);//output=Pavani
console.log(typeof(ab));//output=string
var num = 1234
console.log(num);//output=1234
console.log(typeof(num));//output=number
let boo = true
console.log(boo);//output=true
console.log(typeof(boo));//output=boolean
let a;
console.log(a);// output=undefined
console.log(typeof(a));// output=undefined

//11.Create an array containing five fruits. Print the entire array, the first element, and the last element.
let fruit = ["Apple","Banana","Mango","Orange","Watermelon"]
console.log(fruit);//output=(5) ['Apple', 'Banana', 'Mango', 'Orange', 'Watermelon']
console.log(fruit[0]);//output=Apple
console.log(fruit[fruit.length-1]);//output=Watermelon

//12.Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.
let content = {
    fruits : ["Apple","Banana","Mango","Grapes"],
    electronic : ["Buds","Laptop","Modile"],
    vegetables : ["Tomato","Carrot","Cabbage"],
}
console.log(content);//output={fruits: Array(4), electronic: Array(3), vegetables: Array(3)}
console.log(content.fruits);//output=(4) ['Apple', 'Banana', 'Mango', 'Grapes']
console.log(content.electronic);//output=(3) ['Buds', 'Laptop', 'Modile']
console.log(content.vegetables);//output=(3) ['Tomato', 'Carrot', 'Cabbage']

//==================================================================
// Part 3: Arithmetic Operators (6 Questions)
//===================================================================

//13.Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division.

let num1 = 15
let num2 = 4
console.log(num1+num2);//output=19
console.log(num1-num2);//output=11
console.log(num1*num2);//output=60
console.log(num1/num2);//output=3.75

//14.Find the remainder when 27 is divided by 5 using the modulus operator.
let no1 = 27
let no2 = 5
console.log(no1%no2);//output=2

//15.Calculate \(3^4\) using the exponentiation operator.
console.log(3**4);// output=81

//16.Declare a variable with the value 10. Apply the pre-increment operator and print the result.
let num3 = 10
++num3
console.log(num3);//output=11

//17.Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
let num4 = 10
--num4
console.log(num4);//output=9

//18.Predict the output:
let x = 5;
let y = x++;
console.log(x);//output=6
console.log(y);//output=5

//=============================================================
// Part 4: Pre/Post Increment and Decrement (12 Questions)
//=============================================================

// 19. Predict the output:
let b = 4;
console.log(b++);//output=4
console.log(b);//output=5

// 20. Predict the output:
let b1 = 4;
console.log(++b1);//output=5
console.log(b1);//output=5

// 21. Predict the output:
let b2 = 8;
let b3 = b2++;
console.log(b2);//output=9
console.log(b3);//output=8

// 22. Predict the output:
let b4 = 8;
let b5 = ++b4;
console.log(b4);//output=9
console.log(b5);//output=9

// 23. Predict the output:
let b6 = 6;
let b7 = b6--;
console.log(b6);//output=5
console.log(b7);//output=6

// 24. Predict the output:
let c = 6;
let d = --c;
console.log(c);//output=5
console.log(d);//output=5

//25. Predict the output:
let c1 = 2;
c1++;
c1++;
console.log(c1);//output=4

// 26. Predict the output:
let c2 = 10;
--c2;
--c2;
console.log(c2);//output=8

// 27. Predict the output:
let c3 = 3;
c3 = c3++;
console.log(c3);//output=3

// 28. Predict the output:
let c4 = 4;
let d2 = c4++;
console.log("c4:", c4);//output=5
console.log("d2:", d2);//output=4

// 29. Predict the output:
let e = 5;
let f = --e;
console.log("e:", e);//output=4
console.log("f:", f);//output=4

// 30. Predict the final values of a, b, and c:
let a9 = 5;
let b9 = a9++;
let c9 = ++a9;
console.log(a9);//output=7
console.log(b9);//output=5
console.log(c9);//output=7



