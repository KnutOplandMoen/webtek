IT2805 – HTML Forms
Kshitij Sharma
Department of Computer Science
Faculty of Information Technology and Electrical Engineering
Introducing Web Forms
• Web forms collect information from users
• Web forms include different control elements
including:
– Input boxes
– Selection lists
– Drop-down lists boxes
– Option buttons or radio buttons
– Check boxes
– Group boxes
– Text areas
– Form buttons
How Forms Work
• A user fills in a form and then presses a button to submit
the information to the server.
• The name of each form control is sent to the server along
with the value the user enters or selects.
How Forms Work
• The server processes the information using a programming
language such as PHP, C#, Java, JavaScript, python and
many more. It may also store the information in a database.
• The server creates a new page to send back to the browser
based on the information received.
How Forms Works
• A form may have several form controls, each gathering
different information. The server needs to know which piece
of inputted data corresponds with which form element.
• To differentiate between various piece of inputted data,
information is sent from the browser to the server using
name/value pairs.
username = evan
value
name
Form Attributes – method and action
• Form data is sent as name/value pairs:
name1=value1 & name2=value2 & …
– method – indicates how the data collected by the form should be
transmitted to the server using the HTTP
• GET – the form data is appended to the URL
• POST – the form data is sent as a separate message
Forms: GET or POST?
• Use GET if:
– Interaction is more like a question
– if is a safe operation such as a query, read operation, or lookup
• Use POST if:
– Interaction is more like an order, or
– Interaction changes state of the resource (e.g., payment transaction), or
– The user will be held accountable for the interaction.
Form Method: GET
• Form data appended to URL.
• URL is followed by “?” and then the name/value pairs.
http://www.google.com/search?hl=en&q=tourism
• GET requests can be cached
Form Method: GET
• GET requests can remain in browser history
• GET requests can be bookmarked
• GET requests can be distributed & shared
• GET requests can be hacked
– Don’t send password or sensitive data with GET.
Form Method: POST
• Form data sent as a separate message
• Use for sensitive data such as
– passwords
– credit card numbers
– bank account numbers
• IE has max url length of 2048 characters. So if lots of data,
use POST instead of GET even if not sensitive.
Form Controls
• There are several types of form controls that you can use to
collect information from the visitors of your site.
– Adding Text
– Making Choices
– Submitting Forms
–Uploading Files
Adding Text
• Text Input, single line text for uses like email etc.
• Password Input, like a single line but masks the character
• Text Area, is multiline for longer areas of text
Making Choices
• Radio Buttons, for use when a user must select
one of a number of options.
• Checkboxes, when a user can select and unselect
one or more options.
• Drop-down boxes, when a user must pick one of
a number of options from a list.
Uploading Files
• Submit Buttons, to submit data from your form to
another web-page.
• Image Buttons, Similar to submit buttons but they
allow you to use an image.
Submitting Forms
• File upload, allow users to upload files (eg. images)
to a website.
Form Structure - Syntax
• <form> controls live inside a <form> element.
• This element should always carry the action attribute and will usually
have a method and id attribute too.
• Every form element requires an action attribute. Its value is the URL
for the page on the server that will receive the information.
Form Structure - Syntax
• Forms can be sent using GET or POST methods .
<form action="http://www.example.com/subscribe.php"
method="get">
<p>This is where the form controls will appear.</p></form>
What are the differences of POST and GET?
Text Input
• The <input> element is used to create several different form
controls. The value of the type attribute determines what kind of
input they will be creating.
• When users enter information into a form, the server needs to
know the name of this information.
• You can use maxlength attribute to limit the number of
characters a user may enter into the text field.
Text Input
<form action="http://www.example.com/login.php">
<p>Username: <input type="text" name="username" size="15"
maxlength="30" /></p></form>
Password Input
When type attribute has a value of password (type=“password”)
it creates a text-box that acts just like a single line input, except
that the characters are hidden in the way that someone sees only
dots.
<form action="http://www.example.com/login.php">
<p>Username:
<input type="text" name="username" size="15" maxlength="30" />
</p><p>Password:
<input type="password" name="password" size="15" maxlength="30"
/></p></form>
Text Area
• The <textarea> element is used to create a multi-line text
input.
• This is not an empty element, it should therefore have an
opening and closing tag.
Text Area
<form action="http://www.example.com/comments.php">
<p>What did you think of this gig?</p>
<textarea name="comments" cols="20" rows="4">Enter
your comments...</textarea> </form>
Radio Button
Type=“radio”, Radio button allow users to pick just one of the options.
<form action="http://www.example.com/profile.php">
<p>Please select your favorite genre:
<br />
<input type="radio" name="genre" value="rock" checked="checked" />
Rock
<input type="radio" name="genre" value="pop" /> Pop
<input type="radio" name="genre" value="jazz" /> Jazz
</p></form>
Checkbox
type=“checkbox”, checkboxes allow users to select (and
deselect) one of more.
<form action="http://www.example.com/profile.php"> <p>Please
select your favorite music service(s): <br />
<input type="checkbox" name="service" value="itunes"
checked="checked" /> iTunes
<input type="checkbox" name="service" value="lastfm" /> Last.fm
<input type="checkbox" name="service" value="spotify" /> Spotify
</p> </form>
Dropdown list box
• A dropdown list-box allows users to select one option from a dropdown list.
• The <select> element is used to create a dropdown list box. It
contains two or more options.
Dropdown list box
<form action="http://www.example.com/profile.php">
<p>What device do you listen to music on?</p>
<select name="devices">
<option value="ipod">iPod</option>
<option value="radio">Radio</option>
<option value="computer">Computer</option>
</select></form>
Creating Input Boxes
• Input types:
type=“image”
Displays an input image that can be clicked to perform an action from a
script
type=“password”
Displays an input box that hides text entered by the use
type=“button”
Displays a button that can be clicked to perform an action from a script
type=“file”
Displays a browse button to locate and select a file
type=“hidden”
Creates a hidden field, not viewable on the form
Multiple Select Box
• You can select more than one option by holding down control
on a PC or command key on a Mac while selecting different
options.
<form action="http://www.example.com/profile.php">
<p>Do you play any of the following instruments? </p>
<select name="instruments" multiple="multiple">
<option value="guitar" selected="selected">Guitar</option>
<option value="drums">Drums</option>
<option value="keyboard" selected="selected">Keyboard</option>
<option value="bass">Bass</option>
</select></form>
Not very good support
from the browsers
Option Groups: Example
<html> <body>
<select>
<optgroup label="Fruit">
<option value="apple">Apple</option>
<option value="pear">Pear</option>
</optgroup>
<optgroup label="Vegetable">
<option value="carrot">Carrot</option>
<option value="turnip">Turnip</option>
</optgroup>
</select>
</body> </html>
File Input Box
• If you want to allow users to upload a file (eg. image,
video, PDF) you will need to use a file input.
• Type=“file” you can use only post method.
<form action="http://www.example.com/upload.php" method="post">
<p>Upload your song in MP3 format:</p>
<input type="file" name="user-song" /><br />
<input type="submit" value="Upload" /> </form>
Submit Button
Type=“submit”, the submit button is used to send form to the
server.
<form action="http://www.example.com/subscribe.php">
<p>Subscribe to our email list:</p>
<input type="text" name="email" />
<input type="submit" name="subscribe" value="Subscribe" />
</form>
Image Button
type=“image”, If you want to use an image for the submit
button, you just need to work like in an <img> element.
<form action="http://www.example.org/subscribe.php">
<p>Subscribe to our email list:</p>
<input type="text" name="email" />
<input type="image" src="image/sub.jpg" width="100" height="20" />
</form>
Button and Hidden Controls
• The <button> element was introduced to allow users more
control over how their buttons appear.
• You can combine text and images.
<form action="http://www.example.com/add.php">
<button><img src="images/add.gif" alt="add" width=“5" height=“5" /> Add</button>
<input type="hidden" name="bookmark" value="lyrics" />
</form>
Labelling Form Controls
• Each form control should have its own <label> element as
this makes the form accessible to vision-impaired users.
<label> element can be used to:
– Wrap around both text description and the form input
– To indicate which control it is a label for
<label>Age: <input type="text" name="age" /></label> <br/ >
Gender:
<input id="female" type="radio" name="gender" value="f">
<label for="female">Female</label>
<input id="male" type="radio" name="gender" value="m">
<label for="male">Male</label>
Grouping From Elements
• You can group related form controls together inside the
<fieldset> element.
• The <legend> element can come directly after the opening
<fieldset> tag and contains a caption.
<fieldset>
<legend>Contact details</legend>
<label>Email:<br /><input type="text" name="email" /></label><br />
<label>Mobile:<br /><input type="text" name="mobile" /></label><br />
<label>Telephone:<br /><input type="text" name="telephone" /></label>
</fieldset>
Field Set: Example
<html> <body>
<form>
<fieldset>
<legend>Contact 1:</legend>
Name: <input type="text" size="30" /><br />
Email: <input type="text" size="30" /><br />
</fieldset>
<fieldset>
<legend>Contact 2:</legend>
Name: <input type="text" size="30" /><br />
Email: <input type="text" size="30" /><br />
</fieldset>
</form>
</body> </html>
HTML5: Form Validation
• Validation ensures that user enters information that server will be
able to understand
• Validation has been performed using JS.
<form action="http://www.example.com/login/" method="post">
<label for="username">Username:</label>
<input type="text" name="username" required="required" /></title><br />
<label for="password">Password:</label>
<input type="password" name="password" required="required" />
<input type="submit" value="Submit" />
</form>
HTML5: Date Input
• If you are asking the user for a date, you can use an <input>
element and give type=“date”
<form action="http://www.example.com/bookings/" method="post">
<label for="username">Departure date:</label>
<input type="date" name="depart" />
<input type="submit" value="Submit" />
</form>
HTML5: Email and URL input
• HTML5 has also introduced inputs that allow visitors to
ender email addresses (type=“email”) & URLs (type=“url”)
<p>Please enter your website address:</p>
<input type="url" name="website" />
<input type="submit" value="Submit" />
</form>
HTML5: Email and URL input
<p>Please enter your email address:</p>
<input type="email" name="email" />
<input type="submit" value="Submit" />
</form>
HTML5: Search Input
• To create the HTML5 search box the <input> element
should have a type attribute whose values is search.
• On any text input, you can also use an attribute called
placeholder, whose value will be shown in the text box
until the user clicks in that area.
<p>Search:</p> <input type="search" name="search" />
<input type="submit" value="Search" /> </form>
<p>Search:<p/>
<input type="search" name="search" placeholder="Enter keyword" />
<input type="submit" value="Search" /> </form>
Forms Example 1
<fieldset>
<legend>Your Details:</legend>
<label>Name:
<input type="text" name="name" size="30" maxlength="100"></label><br />
<label>Email:
<input type="email" name="email" size="30" maxlength="100"></label><br />
</fieldset>
Forms Example 2
<fieldset>
<legend>Your Review:</legend>
<label for="hear-about">How …. about us?</label>
<select name="referrer" id="hear-about">
<option value="google">Google</option>
<option value="friend">Friend</option>
<option value="advert">Advert</option>
<option value="other">Other</option>
</select>
</p>
<p>
Would you visit again?<br />
<label><input type="radio" name="rating" value="yes" /> Yes</label>
<label><input type="radio" name="rating" value="no" /> No</label>
<label><input type="radio" name="rating" value="maybe" /> Maybe</label>
</p><p>
<label for="comments">Comments:</label><br />
<textarea rows="4" cols="40" id="comments"></textarea>
</p>
<label><input type="checkbox" name="subscribe" checked="checked" /> Sign me for email updates</label><br />
<input type="submit" value="Submit review" />
</fieldset>
</form>
Example 1 & 2
Tips for Creating Effective Forms
• Label all control elements clearly and concisely
• Use horizontal lines, tables, and line breaks to separate topical groups
from one another
• Use field sets to organize common groups of fields, especially radio
buttons
• Use radio buttons, check boxes, and selection lists whenever possible
to limit a user’s choice of entries, thus reducing the chance of an
erroneous data value.
Tips for Creating Effective Forms
• Use input boxes only when the field has no predefined list of values.
• Use selection lists for items with several possible options.
• Use radio buttons for items with few options.
• Use a check box for each item with only two possible values
Tips for Creating Effective Forms
• Let users know the correct format for input box text by inserting default
text in the appropriate format (for example, insert the text string,
“mm/dd/yyyy” in a Date input box to indicate the format for inserting
date values
• Form elements differ between browsers (especially HTML5, view your
form on different browsers and different browser versions to ensure
that the form displays correctly in all situations, use CSS to style your
forms.
• http://www.456bereastreet.com/archive/200701/styling_form_control
s_with_css_revisited/
Summary
• Whenever you want to collect information from visitors you will need a
form, which lives inside a <form> element
• Information from a form is sent in name/value pairs
• Each form control is given a name, and the text the user types-in or the
values of the options they select are sent to the server
• HTML5 introduces new form elements which make easier for visitors to
fill in forms
Questions?