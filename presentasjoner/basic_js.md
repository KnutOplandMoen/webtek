// variables, keywords, 


let num1 = 4
let username = "kshitij"




// redefinition --> with let it will not work
// remove let and show them the ouput
// then remove the second definition

let num = 0
console.log(num)


// let num = 5
// console.log(num)


// constants
const PI = 3.14
let radius = 5
let area = PI * radius * radius

console.log("Area = " + area)

// now try changing the value of PI and show the error

// data types --> primitive and object

let data  = 8  //number --> maximum value possible 9007199254740991
let user  = "Kshitij" //string
let data1 = 8.9 // floating point


console.log(typeof user)

// concept of infinity and -infinity
let a1 = 5/0
console.log(a1)

// loosing precision --> BigInt --> add n in the end
let a2 = 123456789123456789123456780n
console.log(a2)


// strings
let str1 = "alice"
let str2 = "bob"

console.log(str1.length)
console.log(str1.charAt(3))
console.log(str1.charCodeAt(3))
console.log(str1.at(3))

// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) 
// instead of charAt(myString.length-2).

console.log(str1.charAt(str1.length-3))
console.log(str1.at(-3))

console.log(str1[3]) // minus sign does not work here
// there is one difference between charAt and []
// If no character is found, [ ] returns undefined, 
// while charAt() returns an empty string.



// substrings

let text = "i am teaching it2805"
console.log(text.slice(7,13))
console.log(text.slice(7))
console.log(text.slice(-12))
console.log(text.slice(-12,-6))


//start and end values less than 0 are treated as 0
console.log(text.substring(7,13))
console.log(text.substring(7))
console.log(text.substring(-12))
console.log(text.substring(-12,-6))


let text1 = text.toUpperCase()
let text2 = text1.toLowerCase()

console.log(text1)
console.log(text2)


text1 = "alice"
text2 = "bob"

console.log(text1.concat(text2))
console.log(text1+text2)


text = "        i am teaching it2805     "
console.log(text)
console.log(text.trim())
console.log(text.trimEnd())
console.log(text.trimStart())


// It pads a string with another string (multiple times)
// until it reaches a given length.
text1 = "alice"
console.log(text1.padStart(9,"x"))
console.log(text1.padEnd(9,"x"))


console.log(text1.repeat(2))
console.log(text1.repeat(4))



text = "i am teaching it2805"
console.log(text.replace("it2805","it3212")) //this is case sensitive
text = "i am teaching it2805 it2805"
console.log(text.replace("it2805","it3212")) //this is case sensitive
console.log(text.replaceAll("it2805","it3212")) //this is case sensitive



console.log(text.indexOf("a"))
console.log(text.indexOf("am"))

console.log(text.lastIndexOf("a"))
console.log(text.search("a"))

console.log(text.indexOf("a",5)) //  second parameter is the starting position for the search
// search can not take a second parameter
// indexOf can not take regular expressions




console.log(text.includes("a"))
console.log(text.startsWith("a"))
console.log(text.startsWith("a",7))

console.log(text.endsWith("5"))
console.log(text.endsWith("5",7))



//Arrays

let array1 = ["a","b","c","d","e"]
console.log(array1)

array1[3] = "f"
console.log(array1)

console.log(array1.toString())
console.log(array1.length)
console.log(array1.sort())



console.log(array1)


let array2 = new Array()
array2 = [20,50,1,5,75,10]
console.log(array2)

array3 = new Array(20,50,1,5,75,10)
console.log(array3)


for(let i =0; i<array1.length; i++)
    {
        array1[i] = array1[i].toUpperCase()
    }
    console.log(array1)


array1.push("g")
console.log(array1)
console.log(array1.pop())
console.log(array1)
console.log(array1.shift())
console.log(array1)
array1.unshift("X")
console.log(array1)


console.log(array1.at(3)) //this is the same as array1[3]
// it is not possible to have array1[-2]
// this is why we have at()

console.log(array1.join())
console.log(array1.join("--"))

console.log(array1.concat(array2))
console.log(array1.concat(array2,array3))

array2.splice(2,0,30,40) // first parameter is where should we add
// second parameter is how many elements should be removed
console.log(array2)
console.log(array2.splice(0,1)) // remove elements without leaving holes
console.log(array2)
console.log(array2.slice(2))
console.log(array2.slice(1,4))
console.log(array2)


console.log(array2.indexOf(30))
console.log(array2.indexOf(35))
array2.push(10,30,20,40,50)
console.log(array2.lastIndexOf(30))
console.log(array2.includes(30))
console.log(array2.includes(35))
// Array.includes() allows to check for NaN values. Unlike Array.indexOf().


console.log(array1.sort())
console.log(array2.sort())

console.log(array1.reverse())
console.log(array2.reverse())



//objects
let teacher1 = {
    firstName: "Kshitij",
    lastName: "Sharma",
    course: "IT2805",
    numYear: 2024
}

let teacher2 = {}
teacher2.firstName= "Kshitij"
teacher2.lastName= "Sharma"
teacher2.course= "IT2805"
teacher2.numYear= 2024

let teacher3 = new Object();
teacher3.firstName= "Kshitij"
teacher3.lastName= "Sharma"
teacher3.course= "IT2805"
teacher3.numYear= 2024


console.log(teacher1.course)
console.log(teacher1["course"])

delete teacher1.numYear
teacher1.city = "trondheim"

// functions
function f1(p1,p2){
    return p1+p2;
}

let p3 = f1(2,3)
console.log(f1(2,3))

let teacher4 = {
    firstName: "Kshitij",
    lastName: "Sharma",
    course: "IT2805",
    numYear: 2024,
    nickName: function () {
        return this.firstName.charAt(0)+ this.firstName.charAt(1)
    }
}
console.log(teacher1)
console.log(teacher4.nickName())

// Object constructors
function Teacher (first, last, course, numYear){
    this.firstName = first
    this.lastName = last
    this.course = course
    this.numYear = numYear
}



let teacher5 = new Teacher("K", "S", "ML", "2023")
console.log(teacher5)



//dates

let date1 = new Date()
console.log(date1)

let date2 = new Date("2024-10-10")
console.log(date2)


// Dates are objects and they have constructors

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


// new Date (string)

let date3 = new Date("October 13, 2024 11:13:00");
console.log(date3)

// date format -- YYYY-MM-DDTHH:MM:SSZ
// UTC time is defined with a capital letter Z.
// If you want to modify the time relative to UTC, 
// remove the Z and add +HH:MM or -HH:MM instead:

// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)

// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)



//Math

// constants
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.sign(x) returns if x is negative, null or positive

// pow, sqrt, abs, min, max,
// sin, cos, log, log2, log10



// comparisons ==, ===, !=, !== rest are the same

// conditional if, else 

//switch
switch (new Date().getMonth()) {
    case 0:
      day = "Jan";
      break;
    case 1:
      day = "Feb";
      break;
    case 2:
       day = "Mar";
      break;
    case 3:
      day = "Apr";
      break;
    case 4:
      day = "May";
      break;
    case 5:
      day = "June";
      break
      
  }


  // for loop
  for (let i = 0; i < 3; i++) {
    console.log("Hello, world!")
  }

  for (let i = 1; i < 6; i++) {
    console.log(i)
  }

  let sum = 0
  const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i  // sum = sum + i
}

console.log("sum: " + sum);

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i])
}

  // for in loop

  let txtPrint = "";
for (let x in teacher1) {
  txtPrint += teacher1[x] + " "
}
console.log(txtPrint)


txtPrint = ""
for (let x in array1) {
  txtPrint += array1[x] + " "
}
console.log(txtPrint)

  // while
 i = 0;
  while(i < 3){
    
    console.log("Hello, world!");
    i++
  }


  i = 0;
  while(i < 6){
    
    console.log(i);
    i++
  }

  i = 0
  sum=0
  while(i <= n){
    sum += i
    i++
  }
  console.log("sum: " + sum);




