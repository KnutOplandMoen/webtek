IT2805 Assignment 2: CSS
Passing marks 75%
Task 1: Smart search bar (30%)
1. Create a basic search bar that takes up 1/3 of the width of its container
2. Add some padding so that the container is not sticking to the top left corner.
3. Add some background colour.
4. Add some styles now:
a. Make sure the width is 1/3 when the bar is not in focus
b. Give it some height
c. Add border and border radius to make it look nice
d. Add some colour to border as well
5. When the user clicks in the search bar (hint: you have to use a pseudo class)
a. Input grows to the entire width of its parent container
b. Shrinks back to original size when user clicks away
c. Blue border
Here is your basic HTML code that you will use for the search bar
<body>
 <div class="container">
 <input type="search"
 class="search-bar"
 id="search-field"
 placeholder="Search..."/>
 </div>
 </body>
Task 2: Target (10%)
(Hint: you will need to use box-radius, flex, justify and align)
Make the following with CSS only (the colours and their order are not important, you can choose
your colours):
Task 3: Progress bar (20%)
Build a progress bar that you can change by changing the classes. Style a class for each of the
following stages:
1. Stage 1: 33% finished
2. Stage 2: 67% finished
3. Stage 3: 100% finished
Hint: think of the progress bar as three bars on top of one another and how you can use the width
property.
Default progress bar:
Stage 1
Stage 2
Stage 3
Once again colours do not matter, also they do not have to be animated.
Task 4: Playing cards (40%)
Hint: you have to use flex and grid for this task. Also think of transformations in CSS.
Keep the width of the cards 2/3 of their heights
Create the following cards try to match the design as closely as possible:
Here are the HTML that you will need
Ace of Spades
<body>
 <div class="container">
 <div class="card">
 <div class="top">
 <div>A</div>
 <div>&spades;</div>
 </div>
 <div class="center">&spades;</div>
 <div class="bottom">
 <div>A</div>
 <div>&spades;</div>
 </div>
 </div>
 </div>
 </body>
6 of Clubs
<body>
 <div class="container">
 <div class="card">
 <div class="left">
 <div>6</div>
 <div>&clubs;</div>
 </div>
 <div class="middle">
 <div>&clubs;</div>
 <div>&clubs;</div>
 <div>&clubs;</div>
 <div>&clubs;</div>
 <div>&clubs;</div>
 <div>&clubs;</div>
 </div>
 <div class="right">
 <div>6</div>
 <div>&clubs;</div>
 </div>
 </div>
 </div>
</body>
Submission
Make the following HTML files, zip them and upload them on BlackBoard
1. searchbar.html
2. target.html
3. progressbar.html
4. sixofclubs.html
5. aceofspades.html