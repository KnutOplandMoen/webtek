IT2805 – Web Technologies
HTML, Basics, Tables and Page Design Issues
Kshitij Sharma
Department of Computer Science
Faculty of Information Technology and Electrical Engineering
HTML example
• The first line is called
Document Type Definition
(DTD) – is a markup
declaration that defines the
type of the document,
practically, says to the
browser what syntax to use.
• An HTML file begins with the
<html> tag and ends with
</html>. All HTML code is
inserted between these
tags.
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> My first HTML document
</title>
</head>
<body>
<p>Hello world!</p>
</body>
</html>
An Analogy
Metadata
• <meta charset = “utf-8”>
• Specifies character encoding (code for mapping characters to binary
representations)
• Required in HTML5
• Example of metadata
<head>
<meta name="description" content="lecture 3, examples">
<meta name="keywords" content="HTML, meta information">
<meta name="author" content="mike">
<meta charset="UTF-8">
</head>
Marking elements with tags
• The core building block of HTML is the tag, which marks each element
in a document. Tags can be two-sided or one-sided
• A two-sided tag is a tag that contains some document content.
• General syntax for a two-sided tag:
<element> content </element>
• HTML allows you to enter element names in either uppercase or
lowercase letters, but it is good habit to use lowercase
Empty elements with One-sided tags
• A one-sided tag contains no content; general syntax for a
one-sided tag:
<element />
• Elements that employ one-sided tags are called empty
elements since they contain no content. An example is a line
break <br/> and a horizontal line <hr />
The comment tag
• A third type of tag is the comment tag, which you can use to add
notes to your HTML code
<!– comment -->
• Comments are useful in documenting your HTML code for yourself
and others
HTML white space sensitivity
• HTML treats each occurrence of white-space as a single blank space
• You can use white-space to make your HTML source code more
readable, but not for formatting because extra space will not be
displayed in the browser.
• With exception the preformatted <pre> tag.
<pre>This is
preformatted text.
It preserves both
spaces
and line breaks.</pre>
Elements are block or Inline
Most HTML elements are defined as block level
elements or as inline elements.
Inline elements
• Examples: <b>, <td>, <a>, <img>
• Inline elements are normally displayed without starting a new line.
Block elements
• Examples: <h1>, <p>, <ul>, <table>
• Block level elements start (and end) with a new line when displayed in a
browser.
HTML grouping Tags: <span> and <div>
Style Attributes
• Use the style attribute to control the appearance of an element
• Styles specified as tag attributes are referred to as inline styles
• Example: text-align style specifies horizontally alignment of element
contents
• Old HTML way:
<h1 align=“right”>A big, right aligned heading<h1>
• HTML5 compatible way:
<h1 style=“text-align: right”>A big, right aligned heading<h1>
Example Strong
<p><strong>Beware:</strong> Pickpockets operate in this area.</p>
<p>This toy has many small pieces and is <strong>not suitable for children
under five years old.</strong></p>
Semantic Markup (logical elements)
• <q>, for quotes (<blockquote>, for long quotes)
• <abbr>, for abbreviations or acronyms, eg. NTNU, NASA, Dr.
• <address>, address physical or digital
<abbr title="Norwegian University of Science and Technology">NTNU</abbr>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the nature. </blockquote>
<address>IDI, Sem Saelands vei 9, Gloshaugen, Trondheim, Norway </address>
Semantic Markup
• Semantic markup means using HTML elements that describe their
meaning (semantics) to both the browser and humans.
• It helps with:
• Accessibility (screen readers, assistive tech)
• SEO (search engines understand your content)
• Readability & maintainability of code
• Use semantic markup wherever possible — it makes your HTML more
meaningful, accessible, and search-friendly.
Lists
• HTML supports three kinds of lists:
• ordered <ol>,
• unordered <ul>, and
• definition <dl> (for items that describe a term)
• One list can contain another list; this is called a nested list (combination)
Unordered List
• The <ul> … </ul> element represents an unordered list. Items in the
list are marked with the <li> element. For example:
My shopping list:
<ul>
<li>Apples</li>
<li>Bananas</li>
</ul>
Ordered List
• The <ol> … </ol> element represents an ordered list. Items in the list
are marked with the <li> element. For example:
My shopping list:
<ol>
<li>Apples</li>
<li>Bananas</li>
</ol>
Styled List
• The <ol style="list-style-type:upper-roman"> … </ol> element
represents a list with with the upper-roman list-style-type. For
example:
My shopping list:
<ol style="list-styletype:upperroman">
<li>Apples</li>
<li>Bananas</li>
</ol>
My shopping list:
I. Apples
II. Bananas
Definition List
• The <dl> ...</dl> element represents a definition list. Items in the list
are marked with <dt> for the term and <dd> for the definition of the
term. For example:
<dl>
 <dt>Coffee</dt>
 <dd>Black hot drink</dd>
 <dt>Milk</dt>
 <dd>White cold drink</dd>
</dl>
Links
• Creating links to a specific section of the page
• Creating links to other pages on the same site
• Creating links to other sites
• Creating links to a specific section of another page
Linking to other sites
<p>Movie Reviews:
 <ul>
 <li><a href="http://www.empireonline.com">Empire</a></li>
<li><a href="http://www.metacritic.com">Metacritic</a></li>
<li><a href="http://www.rottentomatoes.com">Rotten Tomatoes</a></li>
<li><a href="http://www.variety.com">Variety</a></li>
 </ul>
</p>
Linking to other pages on the same site
<ul>
 <li><a href="index2.html">Home</a></li>
 <li><a href="about-us.html">About</a></li>
<li><a href="movies.html">Movies</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>
When you are linking to other pages within the same site you don’t need
to specify the domain name in the URL, you can use a shorthand named,
relative URL.
Linking to a specific part of the same page
<h1 id="top">Film-Making Terms</h1>
<a href="#arc_shot">Arc Shot</a><br />
<a href="#interlude">Interlude</a><br />
<a href="#prologue">Prologue</a><br /><br />
<h2 id="arc_shot">Arc Shot</h2>
<p>A shot in which the subject is photographed by an encircling …</p>
<h2 id="interlude">Interlude</h2>
<p>A brief, intervening film scene or sequence, not specifically tied …</p>
<h2 id="prologue">Prologue</h2>
<p>A speech, preface, introduction, or brief scene preceding …</p>
<p><a href="#top">Top</a></p>
Linking to a specific part of the same page
Linking to a specific part of another page
As long as the page you are linking to has id attributes that identify
specific parts of the page, you can simply add the same syntax to the end
of the link for that page e.g., http://www.sundance.org/#jumbotron
<h3>January</h3>
<p><a href="http://www.sundance.org/#jumbotron">Sundance Film
Festival</a><br /> Park City, Utah, USA<br />20 - 30 January 2011</p>
January
Sundance Film Festival
Park City, Utah, USA
20 - 30 January 2011
Exercise 1
• To start this exercise, go to https://jsfiddle.net/ JSFiddle is a popular
sandbox that allows you to play with HTML, CSS and JS right in your
browser.
• Copy/paste the following code into the HTML box of the JSFiddle.
• Then click the "Run" menu item to see the result.
<p>This is the text on my little page. </p>
<p>This is some additional, very boring, text on my page. </p>
• Then add an h1 header and an h2 header to the page.
• Then put in a link to your favourite website.
Links: example
https://folk.idi.ntnu.no/michailg/IT2805/examples/lecture3/linksexam
ple.html
Images
• Include an image in your web pages using HTML
• Pick which image format to use
• Show the image at the right size
• Optimize an image for use on the web to make pages load faster
Adding Images
• To add an image into the page you need to use an <img> element.
Image must carry the following attributes:
• src: this tells the browser where it can find the image file.
• alt: this provides a text description of the image, for accessibility and
indexing purposes.
<img src="images/dog.jpg" alt=“dog (Pomeranian)" />
Images: height and width
• You will often see an <img> element use two other attributes that
specify its size:
• height: this specifies the height of the image in pixels.
• width: this specifies the width of the image in pixels.
• Images take longer to load than text, it is therefore a good idea to
specify their size so the browser can render the rest of the page while
leaving the right amount of space for the image.
• CSS is also increasingly use today for specifying images’ size
Where to place your image – before a
paragraph
<img src="images/bird.gif" alt="Bird" width="100" height="100" />
<p>There are around 10,000 living species of birds that inhabit different
ecosystems from the Arctic to the Antarctic. Many species undertake long
distance annual migrations, and many more perform shorter irregular
journeys.</p>
Where to place your image – inside a
paragraph
<p><img src="images/bird.gif" alt="Bird" width="100" height="100" />
There are around 10,000 living species of birds that inhabit different
ecosystems from the Arctic to the Antarctic. Many species undertake long
distance annual migrations, and many more perform shorter irregular
journeys.</p>
Where to place your image – in the middle of
a paragraph
<p>There are around 10,000 living species of birds that inhabit different
ecosystems from the Arctic to the Antarctic. <img src="images/bird.gif"
alt="Bird" width="100" height="100" />
Many species undertake long distance annual migrations, and many more
perform shorter irregular journeys.</p>
Three rules for creating images
• Save images In the right format, o/w your site might not look as
sharp as you want or will load slow.
• Save images at the right size, faster website load and no need for
images stretching
• Measure images in pixels (not centimeters or inch), you will be
independent from screen resolutions.
Figure captions: example
<figure>
<img src="images/otters.jpg" alt="Photograph of two sea otters floating in water" />
<br />
<figcaption>Sea otters hold hands when they sleep so they don't drift away from each
other.</figcaption>
</figure>
Image: summary
• The <img> element is used to add images to a website
• You must always specify an src attribute to indicate the source of an
image and an alt attribute to describe the content of an image
• Photos are best saved as JPEGs; illustrations or logos that use flat
colours are better saved as GIFs
Exercise 2
• Modify the JSfiddle to display the image of the main building.
• (Of course, you could replace this image by any other image you'd
like!)
• Note: that you must use an absolute URL for the IMG, namely:
http://www.ccp2010.no/img/mainbuilding_ntnu.jpg
• → Add a caption “NTNU main Building" to the image.
The table element example
<table>
 <tr>
 <td>1</td>
 <td>1</td>
 </tr>
 <tr>
 <td>2</td>
 <td>2</td>
 </tr>
</table>
The table headings example
<table>
<tr>
<th></th>
<th scope="col">Saturday</th>
<th scope="col">Sunday</th>
</tr>
<tr>
<th scope="row">Tickets sold:</th>
<td>120</td>
<td>135</td>
</tr>
<tr>
<th scope="row">Total sales:</th>
<td>$600</td>
<td>$675</td>
</tr>
</table>
The table headings example
The spanning column example
<table border="1">
<tr>
<th></th>
<th>9am</th>
<th>10am</th>
<th>11am</th>
<th>12am</th>
</tr>
<tr>
<th>Monday</th>
…
…
<td colspan="2">Geography</td>
<td>Math</td>
<td>Art</td>
</tr>
<tr>
<th>Tuesday</th>
<td colspan="3">Gym</td>
<td>Home Ec</td>
</tr>
</table>
The spanning column example
The spanning row example
<table border="1">
<tr>
<th></th>
<th>ABC</th>
<th>BBC</th>
<th>CNN</th>
</tr>
<tr>
<th>6pm - 7pm</th>
…
…
<td rowspan="2">Movie</td>
<td>Comedy</td>
<td>News</td>
</tr>
<tr>
<th>7pm - 8pm</th>
<td>Sport</td>
<td>Current Affairs</td>
</tr>
</table>
The spanning row example
Long tables
• There are three elements that help distinguish between the main
content of the table and the first and the last row.
• <thead>: for the headings of the table
• <tbody>: for the main body of the table
• <tfoot>: for the footer of the table
• By default, browsers rarely treat the content of these elements in a
different way.
• However, we should use these elements to improve the accessibility,
indexing and design flexibility of our page.
Long tables: Example
<table><thead>
<tr>
<th>Date</th>
<th>Income</th>
<th>Expenditure</th>
</tr>
</thead> <tbody>
<tr>
<th>2nd January</th>
…
…
<td>285</td>
<td>48</td>
</tr>
</tbody><tfoot>
<tr>
<td></td>
<td>535</td>
<td>84</td>
</tr>
</tfoot></table>
Long tables: Example
Site maps
• We define a site map as a special page intended to act as a website
guide (Nielsen, 2008).
• The two main usability guidelines for site maps are:
• Call it "Site Map" and use this label to consistently link to the site map
throughout the site.
• Use a static design. Don't offer users interactive site map widgets.
• The site map should give users a quick visualization without requiring
further interaction (except scrolling, if necessary).
• A site map is, after all, a map; it should not be a navigational
challenge of its own.
You might need a site map
• Your site is really large. As a result, it's more likely Google web crawlers
might overlook crawling some of your new or recently updated pages.
• Your site has a large archive of content pages that are isolated or not well
linked to each other. If your site pages don't naturally reference each other,
you can list them in a sitemap to ensure that Google doesn't overlook some
of your pages.
• Your site is new and has few external links to it. Googlebot and other web
crawlers crawl the web by following links from one page to another. As a
result, Google might not discover your pages if no other sites link to them.
• Your site has a lot of rich media content (video, images) or is shown in
Google News. If provided, Google can take additional information from
sitemaps into account for search, where appropriate.
You might NOT need a site map
• Your site is "small". By small, we mean about 500 pages or fewer on
your site. (Only pages that you think need to be in search results count
toward this total.)
• Your site is comprehensively linked internally. This means that Google
can find all the important pages on your site by following links starting
from the homepage.
• You don't have many media files (video, image) or news pages that
you want to show in search results. Sitemaps can help Google find and
understand video and image files, or news articles, on your site. If you
don't need these results to appear in image, video, or news results,
you might not need a sitemap.
Site maps: examples
Examples for practice
http://www.idi.ntnu.no/~michailg/IT2805/examples/lecture3/
NTNU IN BRUSSELS
NTNU IN TOKYO
TRONDHEIM
Thank you!
ÅLESUND
GJOVIK NORWEGIAN UNIVERSITY OF SCIENCE AND TECHNOLOGY
KNOWLEDGE FOR
A ВЕТТER WORLD
TRONDHEIM | GJØVIK | ÅLESUND
BRUSSELS | TOKYO NTNU
URLs and Site Structures
What’s next?
• Understanding URLs
• Web pages, FTP servers, & e-mail addresses
• Absolute and relative URLs
• Web site’s structure
Why URLs?
• Link to another document or resource
• Link to an external style sheet or script
• Include an image, object or applets in a page
• Create an image map
• Submit a form
• Cite an external reference
URL Example
• Let's see the most important parts using the following URL:
http://www.example.com/path/to/myfile.html?key1=value1
&key2=value2#SomewhereInTheDocument
URL: Protocol
• http:// is the protocol part of a URL.
• It indicates which protocol the browser must use.
• Usually it is the “http” protocol or its secured version, “https”.
• The browser uses http by default.
http://www.example.com/....
URL: Domain Name
• www.example.com is the domain name of the URL.
• It indicates which Web server is being requested.
http://www.example.com/....
URL: path to file
• /path/to/myfile.html is the path to the resource on the Web server.
• In the early days of the Web, a path like this represented a physical
file location on the Web server (today it doesn’t have any physical
reality).
http://www.example.com/path/to/myfile.html
URL: parameters
• ?key1=value1&key2=value2 are extra parameters provided to the
Web server.
• Those parameters are a list of key/value pairs separated with the &
symbol.
• The Web server can use those parameters to do extra stuff before
returning the resource.
…/to/myfile.html?key1=value1&key2=value2…
Get parameter or method
• method – indicates how the data collected by the form should be
transmitted to the server using the HTTP
• GET – the form data is appended to the URL
Get parameter or method
Two HTTP request methods: GET and POST
• Two commonly used methods for a request-response between a
client and server are: GET and POST
• GET - Requests data from a specified resource
• POST - Submits data to be processed to a specified resource
The GET method
• Note that query strings (name/value pairs) is sent in the URL of a GET
request:
• /test/demo_form.asp?name1=value1&name2=value2
Form method: GET
• Form data appended to URL.
• URL is followed by “?” and then the name/value pairs.
http://www.google.com/search?hl=en&q=tourism
• GET requests can be cached
• GET requests can remain in browser history
• GET requests can be bookmarked
• GET requests can be distributed & shared
• GET requests have length restrictions (max URL length)
• GET requests can be hacked
• Don’t send password or sensitive data with GET.
Form method: POST
• POST requests sent as a separate message (not in url)
• POST requests are never cached, do not remain in the browser history
and cannot be bookmarked
• Use for sensitive data such as
• passwords
• credit card numbers
• bank account numbers
• There is a max length for get, e.g., IE has max url length of 2048
characters. So if lots of data, use POST instead of GET even if not
sensitive.
GET vs. POST
• Use GET if:
• Interaction is more like a question
• if is a safe operation such as a query, read operation, or lookup
• Use POST if:
• Interaction is more like an order, or
• Interaction changes state of the resource (e.g., payment transaction), or
• The user will be held accountable for the interaction.
URL: anchor
• #SomewhereInTheDocument is an anchor to another part of the
resource itself (on a paragraph, video, audio etc. document).
• An anchor represents a sort of "bookmark" inside the resource, giving
the browser the directions to show the content located at that
"bookmarked" spot.
…to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
Anatomy of a URL