IT2805 Assignment 3: Forms and
responsiveness
Passing marks: 75%
Task 1: Form (60%)
You are required to create a complete HTML5 form for an imaginary website. The form will be used
to collect user data for a specific purpose (e.g., registration, contact, survey, booking). The form
should include the following:
1. Form Title
a. Include a suitable heading for your form (e.g., "User Registration", "Contact Us",
etc.).
2. Form Elements: Include the following types of input elements:
a. Text Input: User’s first name and last name (required fields).
b. Email Input: User’s email address (with HTML5 email validation).
c. Password Input: User’s password (with a minimum character requirement of 8).
d. Phone Number Input: A phone number (with a pattern to allow phone number
formats like (123) 456-7890).
e. Date Input: User’s birthdate (must be at least 18 years old).
f. Dropdown List (Select Element): A list of countries.
g. Radio Buttons: Choose a gender (male, female, other).
h. Checkboxes: Select interests (e.g., Sports, Reading, Traveling, etc.).
i. Textarea: A field for users to write additional comments (optional).
j. Range Slider: For selecting satisfaction levels (from 1 to 10).
k. File Upload: Allow the user to upload a profile picture.
3. Submit and Reset Buttons:
a. Add a “Submit” button to submit the form.
b. Add a “Reset” button to clear the form data.
4. HTML5 Validation
a. Ensure that appropriate fields (name, email, password, phone number) are marked
as required using the required attribute.
b. Input Validation:
i. Use HTML5 input attributes and pattern to enforce correct formatting for
email and phone number inputs.
ii. Add minlength and maxlength attributes where necessary (e.g., password
length).
iii. Use the min and max attributes to ensure that the birthdate makes the user
at least 18 years old.
iv. For checkboxes and radio buttons ensure at least one option is selected.
5. Form Styling
a. Apply basic CSS styles to make your form look visually appealing. Consider layout,
spacing, font sizes, colors, and alignment.
b. Ensure the form is responsive and looks good on various screen sizes (desktop,
tablet, and mobile).
Task 2: Responsiveness (40%)
There is an template.html file. It shows the basic layout of a webpage. Consider this as a template
for a webpage for selling kitchens. Add images and text for Features and their descriptions (you can
use online resources). Once you are done with making the basic HTML and CSS work. Now here
comes the real task.
1. Add the media queries to ensure that the website adjusts properly for smaller (than
desktop) screen sizes. Pick five small screen sizes and make sure the website is properly
adjusted.
2. Ensure the image scales properly.
3. Use Flexbox to manage the layout of the feature items in the “.features” section and ensure
they stack vertically on smaller screens.
Submission
Create two HTML files, use embedded CSS
1. form.html
2. responsive.html
Zip them with all the images that you used for the Task 2 and submit on Blackboard.