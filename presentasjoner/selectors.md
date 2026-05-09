IT2805 - Web Technologies
Cascading Style Sheets: Properties
Kshitij Sharma
Department of Computer and Information Science
Faculty of Information Technology and Electrical Engineering
Lets go to Properties now ☺
{color:blue; font-size:12px;}
Declaration Declaration
Property:Value Property:Value
Properties: Colors
• CSS properties allow authors to specify the foreground color and
background of an element. Backgrounds may be colors or images.
• Background properties allow authors to position a background image,
repeat it, and declare whether it should be fixed or scroll along with the
document.
– color (a colour)
em {color:red}
– background-color (a colour, or “transparent”)
h1 {background-color:white}
– background-image (a URI)
body {background-image:URL(“stripe.gif”)}
CSS2 Properties: Color Values
CSS colors can either be a named color or follow a numerical RGB
specification:
– HTML 4.0 Color names are used in CSS2 as well.
• Aqua, black, blue, fuchsia, gray, green, lime, maroon,
 navy, olive, purple, red, sliver, teal, white and yellow.
– Colors in numerical RGB specification
em {color: rgb(255,0,0)} /* 0-255 (red) */
em {color: rgb(100%, 0%, 0%) /* 0.0% - 100.0% (red) */
– Colors in hexadecimal RGB specification
em {color: #ff0000} /* #rrggbb (red) */
CSS3 Properties: Color Values
• CSS3 has introduced an extra value for RGB colors to indicate opacity.
It is known as RGBA
background-color: rgba(0, 255, 255, 0.5);
• CSS3 also allows you to specify colors as HSL values, with an optional
opacity value. It is known as HSLA
background-color: hsla(0, 100%, 100%, 0.5);
CSS Properties: Fonts
• font family (can specify order of preference)
body {font-family: “Book Antiqua”, “Times New
Roman”, serif}
• font style (normal, italic or oblique)
h1,h2,h3 {font-style:italic}
• font variant (normal, small-caps)
h3 {font-variant: small-caps}
• font weight (normal, bold, bolder, lighter)
strong {font-weight: normal}
CSS Properties: Font Size
• Absolute font sizes used to fix sizes to specific values.
• Five standard units (mm, cm, in, pt, pc):
p {font-size: 0.5in}
p {font-size: 1cm}
p {font-size: 5mm}
p {font-size: 12pt}
p {font-size: 3pc}
• 1 inch (in) = 72 points (pt) = 6 picas (pc)
CSS Properties: Font Size
• Relative font size can make web page scalable-adapts
automatically to font that reader uses.
• Examples of relative units: percentage and em unit
p {font-size: 150%}
em {font-size: 1.5em}
• Don’t confuse em selector from em unit.
• 100% or 1em is equal to font size of the parent
element.
CSS Properties: Font Size
<html>
<head>
<style type="text/css">
 h1 {font-size: 2em}
 em {font-size: 1.5em}
</style>
</head>
<body>
Normal body text.
<em> em text nested in body element</em>
<h1> h1 text nested in body element.
<em> em text nested in h1 element</em>
</h1>
</body>
</html>
Normal body text = 100%
First em text = 150%
h1 text = 200%
Second em text = 300%
CSS Properties: Font Size
Normal body text = 100%
First em text = 150%
h1 text = 200%
Second em text = 300%
CSS Properties: Font Size in Pixels
Using Pixels:
– 1 pixel = 1 dot on output device
– Different devices have different resolutions
– 600 dpi printer has more pixels per inch than PC monitor
h1 { font-size:20px }
Using keywords:
– xx-small, x-small, small, medium, large, x-large, xx-large
– smaller, larger (relative: 1 size smaller or larger)
h1 { font-size:xx-small }
h1 { font-size:larger }
CSS Properties: Text
The presentation of text can be adjusted by:
– text-indent (the amount of indentation using absolute
length or percentage)
p {text-indent:3em}
– text-align (left, center, right, justify)
div.center {text-align:center}
– text-decoration (none, underline, overline, line-through)
a[href] {text-decoration: underline}
– Other properties are also available.
Properties: Boxes
• CSS treats each HTML element as if it lives in its own box.
• We can set several properties that affect appearance of
these boxes
• Control the dimensions of the boxes
• Create borders around boxes
• Set margins and padding for boxes
• Show and hide boxes
Working with the Box Model
• The CSS Box Model is essentially a box that wraps around
HTML elements. The box model is an element composed
of four parts:
• Margin
• Border
• Padding
• Content
Explanation of the different parts:
• Margin - Clears an area around the border. The margin does not have a
background color, it is completely transparent
• Border - A border that goes around the padding and content. The border
is inherited from the color property of the box
• Padding - Clears an area around the
content. The padding is affected by
the background color of the box
• Content - The content of the box,
where text and images appear
Properties: Boxes
• Every displayable element considered to fall inside a rectangular box.
• Each box has an external margin, a border, internal padding and content (e.g.
text or images, etc.)
– margin (a length or a percentage)
body {margin:2em}
– padding (a length or a percentage)
td {padding: 5pt}
– border-width (thin, medium, thick or a length)
colgroup {border-width: 5pt}
– border-color (a colour)
p {border-color:red}
– border-style (solid, double, dashed, …)
h2 {border-style:double}
– Individual box sides can also be targeted:
div {border-style-left:dashed}
Box Dimensions
<div> <p>The Moog company pioneered the commercial manufacture of
modular voltage-controlled analog synthesizer systems in the early
1950s.</p> </div>
div { width: 400px;
height: 300px;
background-color: #ee3e80;}
p { height: 75%;
width: 75%;
background-color: #e1ddda;}
min/max-width property
<td><img src="images/rhodes.jpg" width="200" height="150" alt="Fender Rhodes" /></td>
<td class="description">The Rhodes piano is an electro-mechanical piano, invented by Harold
Rhodes during the fifties and later manufactured in a number of models, first in collaboration
with Fender and after 1965 by CBS. It employs a piano-like keyboard with hammers that hit
small metal tines, amplified by electromagnetic pickups.</td><td>$1400</td></tr>
td.description {
min-width: 450px;
max-width: 650px;
text-align: left;
padding: 5px;
margin: 0px;
}
Overflowing Content
• The overflow property tells the browser what to do if the content
is larger than the box itself
p.one {overflow: hidden;}
p.two {overflow: scroll;}
<h2>Fender Stratocaster</h2>
<p class="one">The Fender Stratocaster or "Strat" is
one of the most popular electric guitars of …..</p>
<h2>Gibson Les Paul</h2>
<p class="two">The Gibson Les Paul is a solid body
electric guitar that was first sold in 1952….</p>
hidden simply hides any extra text
scroll, adds a scrollbar to the box
Border Width border-width
The border-width property is used to control the width
of borders in pixels on using the thin, medium or thick
value.
<p class="one">Hohner's "Clavinet" is essentially an
electric clavichord.</p>
<p class="two">Hohner's "Clavinet" is essentially an
electric clavichord.
</p> <p class="three">Hohner's "Clavinet" is essentially
an electric clavichord.</p>
p.one { border-width: 2px;}
p.two {border-width: thick;}
p.three {border-width: 1px 4px 12px 4px;} clockwise starting from the top
Border Style border-style
<p class="one">Wurlitzer Electric Piano</p>
<p class="two">Wurlitzer Electric Piano</p>
<p class="three">Wurlitzer Electric Piano</p>
<p class="four">Wurlitzer Electric Piano</p>
<p class="five">Wurlitzer Electric Piano</p>
<p class="six">Wurlitzer Electric Piano</p>
<p class="seven">Wurlitzer Electric Piano</p>
<p class="eight">Wurlitzer Electric Piano</p>
p.one {border-style: solid;}
p.two {border-style: dotted;}
p.three {border-style: dashed;}
p.four {border-style: double;}
p.five {border-style: groove;}
p.six {border-style: ridge;}
p.seven {border-style: inset;}
p.eight {border-style: outset;}
Border Style Types
The border-style property can have from one
to four values
• border-style: dotted;
• all four borders are dotted
• border-style: dotted solid;
• top and bottom borders are dotted
• right and left borders are solid
• border-style: dotted solid double;
• top border is dotted
• right and left borders are solid
• bottom border is double
• border-style: dotted solid double dashed;
• top border is dotted
• right border is solid
• bottom border is double
• left border is dashed
Border Color border-color Shorthand
<p class="one">The ARP Odyssey was introduced in 1972.</p>
<p class="two">The ARP Odyssey was introduced in 1972.</p>
p.one {
border-color: #0088dd;}
p.two {
border-color: #bbbbaa #111111 #ee3e80 #0088dd;}
<p>Here is a simple chord sequence played on a Hammond organ
through a Leslie speaker.</p>
p {
width: 250px;
border: 3px dotted #0088dd;}
CSS Border
Style
Padding Example
• Padding property allows you to specify how much space should appear
between the content of an element and its border
<p>Analog synths produce a wave sound,
whereas the sounds stored on a digital
synth have been …</p>
<p class="example">Analog synths produce
a wave sound, whereas the sounds stored
on a digital synth have been …</p>
p { width: 275px;
border: 2px solid #0088dd;}
p.example { padding: 10px;}
Margin Example
• The margin property controls the gap between boxes.
<p>Analog synthesizers are often said to have a "warmer" sound than their digital
counterparts.</p>
<p class="example">Analog synthesizers are often said to have a "warmer" sound
than their digital counterparts.</p>
p {
width: 200px;
border: 2px solid #0088dd;
padding: 10px;}
p.example {margin: 20px;}
Change inline/block
• The display property allows you to turn an inline element into
a block-level or vice versa.
<ul>
<li>Home</li>
<li>Products</li>
<li class="coming-soon">Services</li>
<li>About</li>
<li>Contact</li>
</ul>
li {display: inline;
 margin-right: 10px;}
li.coming-soon {display: none;}
Hiding
• Visibility property allows you to hide boxes from users but it leaves a space
where the element would have been.
<ul>
<li>Home</li>
<li>Products</li>
<li class="coming-soon">Services</li>
<li>About</li>
<li>Contact</li>
</ul>
li {
display: inline;
margin-right: 10px;}
li.coming-soon {
visibility: hidden;}
Border Images
The border-image property applies an image to the border of any box.
The property requires three pieces of information:
1. The url of the image
2. Where to slice the image
3. What to do with the straight edges
1. Stretch, stretches the image
2. Round, repeats the image
<p class="one"></p>
<p class="two"></p>
p.one {
border-image: url("images/dots.gif") 11 11 11 11 stretch;}
p.two {
border-image: url("images/dots.gif") 11 11 11 11 round;}
Box Shadows
The box-shadow property allows you to add a drop shadow
around a box. You must use at least the first two of the next
values:
Horizontal offset
Vertical offset
Blur distance
Spread of shadow
p.one { box-shadow: -5px -5px #777777;}
p.two {box-shadow: 5px 5px 5px #777777;}
p.three {box-shadow: 5px 5px 5px 5px #777777;}
p.four {box-shadow: 0 0 10px #777777;}
p.five {box-shadow: inset 0 0 10px #777777;}
Rounded Corners border-radius
CSS3 introduces the ability to create rounded corners on
any box, using a property called border-radius.
<p>Pet Sounds featured a number of unconventional
instruments such as bicycle bells, …</p>
p {
border: 5px solid #ee3e80;
padding: 20px;
width: 275px;
border-radius: 10px;}
Elliptical Shapes
To create more complex shapes, you can specify different distances
for the horizontal and the vertical parts of the rounded corners.
You can target all corners or just an individual and define the size of
radius.
p.one {border-top-left-radius: 80px 50px;
p.two {border-radius: 1em 4em 1em 4em / 2em 1em 2em 1em; horiz values / vertic.
p.three {padding: 0px; border-radius: 100px;}
<p class="one"></p>
<p class="two"></p>
<p class="three"></p>
Position: static
• In normal flow, each block-level element sits on top of the next one.
This is the default way in which browsers treat HTML, you don’t
need CSS for that, however this would be:
position: static
Position: relative
• Relative positioning moves an element in relation to where it would
have been in normal flow.
• You can move it top or bottom and left or right using pixels or
presentences.
p.example {
position: relative;
top: 10px;
left: 100px;}
Position: absolute
• When the position property is given a value of absolute, the
box is taken out of normal flow and no longer affects the
position of the other elements.
h1 {
position: absolute;
top: 0px;
left: 500px;
width: 250px;}
p {
width: 450px;}
Position: fixed
• Fixed positioning is a type of absolute positioning that requires the
position property to have a value of fixed.
• The position is specified in relation to the browser window, as such the
user scrolls down, but the element stays on the same place.
h1 {
position: fixed;
top: 0px;
left: 0px;
padding: 10px;
margin: 0px;
width: 100%;
background-color: #efefef;}
p.example {
margin-top: 100px;}
Position
These used in conjunction with the top, right, bottom, left offset properties.
Overlapping Elements
• If you use relative, fixed, or absolute positioning, boxes can overlap. If
boxes do overlap, the elements that appear later sit one on the top of
the other.
• If you want to control which element sits on the top you use the zindex property. The higher value z-index property has the closer that
element is to the front.
Overlapping Elements
h1 {
position: fixed;
top: 0px;
left: 0px;
margin: 0px;
padding: 10px;
width: 100%;
background-color: #efefef;
z-index: 10;}
p {
position: relative;
top: 70px;
left: 70px;}
Stacking Elements
• Specify stacking order with:
– z-index: value
z-index: 1
z-index: 2
z-index: 3
Floating Elements
• The float property allows you to take an element in normal flow and place it as
far to the left right.
blockquote {
float: right;
width: 275px;
font-size: 130%;
font-style: italic;
font-family: Georgia, Times, serif;
margin: 0px 0px 10px 10px;
padding: 10px;
border-top: 1px solid #665544;
border-bottom: 1px solid #665544;}
You can use float to place
elements side-by-side
Table Properties
• We have already talked several properties that can be used
with tables. Here we will put together some of the most
commonly used ones, in a single example.
• Width, set width
• Padding, set the space between the border of each cell
• Letter-spacing, font-size, set additional styles
• Border-top/bottom, set borders above and below the headers
• :hover, to highlight a table row when a user’s mouse goes over
it
Table Properties
body {
font-family: Arial, Verdana, sans-serif;
color: #111111;}
table { width: 600px;}
th, td { padding: 7px 10px 10px 10px;}
th {
text-transform: uppercase;
letter-spacing: 0.1em;
font-size: 90%;
border-bottom: 2px solid #111111;
border-top: 1px solid #999;
text-align: left;}
tr.even { background-color: #efefef;}
r:hover { background-color: #c3e6e5;}
.money { text-align: right;}
<table><tr>
<th>Author</th>
<th>Title</th>
<th class="money">Reserve Price</th>
<th class="money">Current Bid</th>
</tr><tr>
<td>E.E. Cummings</td>
<td>Tulips & Chimneys</td>
<td class="money">$2,000.00</td>
<td class="money">$2,642.50</td>
</table>
Tips for tables
• Give cells padding
• Distinguish headings
• Shade alternate rows
• Align numerals
Controlling Size of Images using CSS
• Control the size of an image using width and height properties.
<img src="images/magnolia-large.jpg" class="large" alt="Magnolia" />
<img src="images/magnolia-medium.jpg" class="medium" alt="Magnolia" />
<img src="images/magnolia-small.jpg" class="small" alt="Magnolia" />
img.large {
width: 500px;
height: 500px;}
img.medium {
width: 250px;
height: 250px;}
img.small {
width: 100px;
height: 100px;}
Align Images with CSS
• Use float to align images
<p><img src="images/magnolia-medium.jpg" alt="Magnolia" class="align-left medium" /><b><i>Magnolia is …</p>
<p><img src="images/magnolia-medium.jpg" alt="Magnolia" class="align-right medium" />Some magnolias…</p>
img.align-left {
float: left;
margin-right: 10px;}
img.align-right {
float: right;
margin-left: 10px;}
img.medium {
width: 250px;
height: 250px;}
Display style
selector {display:Value}
Display style cont.
Summary
• How to create style sheets to control the style and layout
of web sites.
• How to use CSS to add backgrounds, format text, add
and format borders, and specify padding and margins of
elements.
• How to position an element, control the visibility and
size of an element, set the shape of an element, place an
element behind another, and to add special effects to
some selectors, like links.
• How many of the new features in CSS3: rounded
borders, box and text shadows, gradient backgrounds
and more.
Questions?