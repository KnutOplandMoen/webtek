IT2805: Exam Information
Kshitij (K) Sharma
Department of Computer Science Faculty of Information Technology
and Electrical Engineering
Exam Date and Room
• Date: 09.01.2026
• Time: 09h00 – 13h00
• Language: Bokmål, Nynorsk and English (feel free to navigate
between languages, Inpsera allows that)
• Room: will be announced three days before the exams.
https://www.ntnu.no/studier/emner/IT2805#tab=omEksamen
• You will find your room on Studentweb
Digital Exams
• You can find all the information wrt the preparations you need to
do: https://innsida.ntnu.no/eksamen
• https://www.youtube.com/watch?v=PkXRgP8_2W8&t=1s
Exam Format
• Four sections
• Section A: Multiple Choice Questions (20-30%)
• Section B: Find the result of the code (15-20%)
• Section C: respond to short questions (15-20%)
• Section D: Coding Questions (30-45%)
Help allowed
• Two regular A4 pages, both sides, printed/handwritten.
• Magnifying glasses are NOT allowed.
Multiple Choice Questions
• One out of a few
• Matching questions
Multiple Choice Examples: Matching
• Match the description of the "overflow" property to the correct
value.
Multiple Choice Examples: Matching
• Match each of the TCP/IP layers with the correct functions
Find the result of the code
// 3 points
//(1 for correct answer and 2 for correct explanation)
for (var i = 0; i < 5; i++)
{
var btn = document.createElement('button’);
btn.appendChild(document.createTextNode('Button ' + i));
btn.addEventListener('click', function(){
console.log(i);
});
document.body.appendChild(btn);
}
What gets logged to the console when the user clicks on “Button 4” and why?
Find the result of the code
// 3 points
//(1 for correct answer and 2 for correct
explanation)
let x = "hello";
let y = new String("hello");
console.log(x == y);
console.log(x === y);
Find the result of the code
// 3 points
//(1 for correct answer and 2 for correct
explanation)
let x = str.toLowerCase() ===
str.toLowerCase().split(”).reverse().join(”);
console.log(x)
Find the result of the code
// 3 points
//(1 for correct answer and 2 for correct
explanation)
<div onclick="console.log('div')">
<p onclick="console.log('p')">
Click here!
</p>
</div>
Short Answer Questions
• Difference between GET and POST
• Difference between the difference methods of adding CSS to
HTML elements
• Explain DNS (Domain Name Server)
Coding questions (4-5 marks)
• Write a JavaScript function that calculates the number of days left till the Christmas
Date.
const today = new Date(); // Get today's date
const year = today.getFullYear(); // Get the year to calculate Christmas date for
const christmasDate = new Date(year, 11, 25); // Set Christmas date (December 25 of the current year) Month is 0-
indexed, so 11 = December
if (today > christmasDate) // Check if Christmas has already passed this year
{
christmasDate.setFullYear(year + 1); // If so, set Christmas date to next year
}
const msPerDay = 24 * 60 * 60 * 1000; // Calculate the difference in milliseconds
daysLeft = Math.ceil((christmasDate - today) / msPerDay);
alert(daysLeft + “ days left till the next christmas”)
Coding questions (10 marks)
Coding Questions (9 marks)
• Write an HTML form and a JavaScript program that calculates the
following mathematical functions using two numbers (user input)
when the user clicks the submit button. Also validate the form to
use only positive numbers as input. The results will look like this
What to study?
• Lecture notes and Exercise notes: slides are purposely very
informative
• Basic readings (Chapters of the Ebook)
• Being comfortable with the assignments
• Code Snippets files have some very useful examples
• Older exams
The Way Ahead (IT2810)
• Frameworks (e.g., jQuery, Ruby on Rails)
• Server-side Programming
• PHP
• SQL (Structured Query Language)
• Ajax (Asynchronous JavaScript & XML)
• High Performance Websites
• Web Security
• Web Technologies for Mobile devices
• Responsive Website Design
• Cloud Computing
• SVG
