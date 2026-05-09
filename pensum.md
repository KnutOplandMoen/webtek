1.1
1.1.1
1.1.2
1.2
1.3
1.4
1.4.1
1.4.2
1.4.3
1.4.4
1.4.5
1.4.6
1.4.7
1.4.8
1.4.9
1.5
1.6
1.6.1
1.6.2
1.6.3
1.6.4
1.6.5
1.6.6
1.6.7
1.6.8
1.6.9
1.6.10
1.6.11
1.6.12
1.7
Table of Contents
Introduction
Web architecture
The Internet
Developing for the web
Document Object Model
HTML
Document Structure
Attributes
Text
Lists
Links
Images
Tables
Comments
Semantic elements
Site structure
CSS intro
Understanding CSS
Syntax
Comments
Cascade
Inheritance
Selectors
Color
Margin and padding
Center elements
Borders
Text and fonts
Pseudo-classes
CSS continued
1
1.7.1
1.7.2
1.7.3
1.7.4
1.7.5
1.7.6
1.7.7
1.8
1.8.1
1.8.2
1.8.3
1.9
1.9.1
1.9.2
1.9.3
1.9.4
1.10
1.10.1
1.10.2
1.10.3
1.11
1.11.1
1.11.2
1.11.3
1.11.4
1.11.5
1.11.6
1.11.7
1.11.8
1.11.9
1.11.10
1.11.11
1.11.12
1.12
Styling lists
Change between inline and block elements
Hide boxes
Document flow
Inheritance
More pseudo-classes
Overflow
Web and multimedia
Images
Video
Audio
Forms and validation
The form element
Form structure
Form validation
How to design a form
Responsive web design
Media types
Media features
Logical operators
Introduction to JavaScript
How and where to write JavaScript
Comments
Data types
Logical operators
Variables and constants
When something doesn't exist
Control structures
Arrays
Objects
Loops
Functions
JSON
Dynamic websites
2
1.13
1.13.1
1.13.2
1.13.3
1.13.4
1.13.5
1.14
1.15
JavaScript continued
Arrays
Scope
Time
Document Object Model
Events
XML
Canvas
3
IT2805 Web technologies
In this book you will find a comprehensive overview over the IT2805 Web technologies'
curriculum.
Introduction
4
Web architecture
When you are visiting web sites, you do so using your web browser. Talking about web
architecture, we often talk about the client and the server, and subsequently the client-server
architecture. In that an architecture your browser is the client, and the server that provides
the files you see is the server.
Note that your browser is not your only connection to the Internet, as there are other ways of
sharing files than using the HTTP protocol.
Server
The server is software running on a computer, responding to requests from the client. The
web page and database exists on the server's local file system. The server retrieves and
transmits file to the client.
Client
Once connected, the user can access the web trough software, called browsers (e.g.
Firefox, Chrome, Safari). These browsers can locate and display information from the web.
Web architecture
5
Communication between the client and the server is done by an agreed transmission
language, or protocol, e.g. HyperText Transfer Protocol (HTTP).
The user requests a web page through the browser, which communicates this to the server.
The browser then waits for the web page to be delivered, which typically is a file containing
HTML. When the file is recieved, the browsers renders the page based on the files received.
Cloud
The cloud is a network of servers for the purpose of sharing resources.
Network
Computers, both servers and clients, that are connected together is a network. Each server
or client is a node in the network, and their connections can be illustrated using edges
between the nodes.
Computers that are close together (within a single department or building) make up a local
area network (LAN). A network of computers that covers a wide area, such as several
buildings, cities, or even larger areas, is called wide area network (WAN). The largest WAN
in existence is the Internet.
Web architecture
6
The Internet
The Internet was created by the Advanced Research Project Agency (ARPA) and the U.S.
Department of Defence for sientific and military communications, and was called ARPANET.
In 1969 it consisted of four network nodes, connected by a phone line.
The Internet is a "network of networks", and is made up of millions of computers, and other
hardware, such as smart phones, PDAs, TVs, Blu Ray players, gaming consoles, printers
and light bulbs.
The physical structure of the Internet uses fiberoptic cables, satellites, phone lines and other
telecommunications media.
TCP/IP
Every computer and network on the Internet uses the same protocols, the Transmission
Control Protocol/Internet Protocol, or TCP/IP. No matter what type of computer system you
connect to the Internet, if it uses TCP/IP, it can exchange data with any other type of
computer. TCP/IP was developed to tolerate unreliable sub-networks and the protocol
guarantees proper transmission of data, since the physical network can't.
There are four TCP/IP layers:
The application layer provides applications the ability to access the service of the other
layers and defines the protocols that applications use to exchange data.
The transport layer is responsible for making sure that complete messages are
delivered end to end.
The network/Internet layer is responsible for routing messages from one place to
another. All routers on the Internet run the IP protocol.
The bottom layer is the Physical Layer. This is responsible for actually translating the
software message into a physical representation and putting them on the wire (or
through the air in a wireless network or fiberoptic wire).
There are many different protocols at each lever, here are some representative protocols for
the Internet:
The Internet
7
Layer Protocol
Application layer HTTP, telnet, ftp, email, voip
Transport layer TCP, UDP
Network layer IP
Physical layer Ethernet, WiFi, ATM, X.25, Frame Relay
Domains and DNS
In addition to an IP address, most Internet hosts, or servers, have a domain name address.
A domain name identifies the type of institution that owns the computer. E.g. an Internet
server owned by NTNU might have the domain name ntnu.no. The domain name is itself
made up of name levels so that .no is Norway, and ntnu is NTNU's web site. Some
enterprises have multiple servers, and identify them with subdomains, such as idi.ntnu.no.
Top level
domain
Definition For use by
.com Commercial Businesses
.edu Education Universities
.gov Governments U.S. Federal government agencies
.int International
Organisations established by international
treaties
.no Norway Norwegian organisations
.mil Military U.S. military
.io
British Indian
Ocean Territory
British Indian Ocean Territory organisations and
modern web companies
.net Netwrok Network providers
.org Organisations Non-profit or miscellaneous organisations
As far as the Internet is concerned, the symbolic machine names are "eye candy" for human
consumption. IP addresses are necessary for computers communication. The IP addresses
are provided by Domain Name Server (DNS) computer's "phone lists" that map symbolic
names (ntnu.no) to their IP. DNS machines are responsible for providing the IP mapping and
for the upkeep of the database as new machines and IPs are added to the Internet.
DNS exists so that you don't have to remember the IP address, only the domain name
(which is easier for us humans to remember). When you write a domain name in your
address bar, your computer contacts a DNS server which returns the IP address to your
The Internet
8
computer. Then the computer accesses the server with that IP address.
Routing
When a computer connects to the Internet, it is connected to a smaller network that is
connected to the Internet's backbone, the tier 1 networks. Your request then travels trough,
potentially, several networks before reaching it's destination. When you use the Internet,
your client requests data from a host system. The request and data are broken into packets
and travel across multiple networks before being reassembled at their destination.
For robust networks, a transmission protocol must find new routes to a destination as
preferred routes don't work very well. This is achieved by dynamic routing, where the routes
are selected at the time of transmission, after considering current network conditions.
Dynamic routing requires a network architecture devoid of critical sites, whose failure will
bring down the entire network. That is, the network cannot be hierarchical.
The Internet was designed on a lattice or graph, where there are a large number of widely
distributed paths. The hosts performing routing duties are called routers, of which there are
thousands on the Internet.
World Wide Web
Many users confuse the Internet with applications that work over the Internet. There are
many such applications, but the five listed below are amongst the most popular:
Email
Telnet
File Transfer Protocol (ftp)
Internet Relay Chat (IRC)
The World Wide Web
Timothy Berners-Lee, and other researchers, at CERN nuclear research facility near
Geneva, Switzerland laid the foundation for the World Wide Web in 1989. They developed a
system of interconnected hypertext documents that allowed their users to easily navigate
from one topic to another. Hypertext is a method of organizing information that gives the
reader control over the order in which the information is presented.
The key to hypertext is the use of hyperlinks (or links) which are the elements in a hypertext
document that allows you to jump from one topic to another. A link may point to another
section of the same document, or to another document entirely. A link can open a document
on your computer, or through the Internet on a computer anywhere in the world. An entire
The Internet
9
collection of linked documents is referred to as a web site. The hypertext documents within a
web site are known as web pages. Individual pages can contain text, audio, video, and even
programs that can be run remotely.
The Internet
10
Development environment
There are several ways to write code for the great web. You can use IDEs (integrated
development environment), but since webpages live inside the browser I like to use the
browser to check that the webpage behaves as I want it to do.
This chapter might be a bit (very) biased by my preferences, but I will also include links to
other alternatives, for those of you who are curious. This chapter will mostly talk about things
you have not learned yet. I would recommend coming back to this chapter afterwards, when
you have read about HTML, CSS and JavaScript. You will most likely get more out of this
chapter then. Okay, let's go!
Text editors
In choosing a developing tool for the web, there are a lot of possibilities. In this course it is
recommended using a text editor that allow you to write your code yourself, and understand
it by highlighting keywords and give some help in autocompletion. The three editors listed
below does so. These are also extendable if you want to add to their functionality later on.
Atom
Sublime
Brackets
Browsers
Although it was a larger problem before, there is still differences between the different
browsers in how they interpret CSS, what standards are implemented and how they interpret
ambiguous code.
And as if that was not enough, there are also differences between different versions of the
same browsers. But these differences are mostly concerned with what standards are
implemented.
What do I mean with "implemented standards"? World Wide Web Consortium (W3C) is the
international standard organisation for the world wide web. They recommend how e.g. CSS
should behave, but it is up to the browser developers to implement them. After an standard
is adopted by the W3C, it might take some time before it is implemented in new browsers.
Developing for the web
11
Developer tools
JavaScript console
Resources
Developing for the web
12
W3schools' HTML, CSS and Javascript tutorials
https://www.w3schools.com/
Mozilla Developer Network: Documentation and tutorials on HTML, CSS and JavaScript
(the author's personal favourite)
https://developer.mozilla.org/en-US/
Superherojs: A collection of JavaScript resources
http://superherojs.com/
Codeacademy: A selection of tutorials where you write code in the browser
https://www.codecademy.com/
Eloquent JavaScript: An excellent introduction to JavaScript
http://eloquentjavascript.net/
Verify your code
As both HTML and CSS are quite forgiving, meaning that it might look right but not have
been done right, W3C have developed validators for both languages. By uploading or linking
to your files, the validator will go through your code and look for mistakes or errors that
doesn't follow their HTML and CSS specifications. You can find the HTML validator here,
and the CSS validator here.
Developing for the web
13
Document Object Model
The Document Object Model (DOM) is a programming interface for HTML and XML
document. It provides a structured representation of the document, and defines a way to
access the objects from programs or scripts so that they can change the document
structure, style and content.
The DOM provides a representation of the document as a structured group of nodes and
objects that have properties and methods. In short, the DOM connects web pages to scripts
(such as JavaScript) or other programming languages.
A web page is a document. It can either be displayed in the browser window, or as the HTML
source. Bot being the same document. It can also be viewed as a document tree, consisting
of nodes and objects. This HTML file:
<html>
<head>
...
</head>
<body>
<h1>Title</h1>
<p>
Some <a>linked</a> text.
</p>
<p>
And some unlinked text.
</p>
</body>
</html>
... would give this document tree:
Document Object Model
14
In chapter 13 you will learn how to manipulate the DOM. This chapter is meant as an short
introduction to the DOM concept, and make you think about the HTML document as a tree
structure. The content in this chapter is gathered from Mozilla Developer Network, there you
can read more about DOM.
Document Object Model
15
HTML
HTML describes the structure of a page.
HTML code are the characters that are inside the angled brackets, e.g. <body> . These are
called elements. Elements are usually made up by two tags, an opening and a closing tag.
The closing tag has an forward slash before the element name, e.g. </body> . Some
elements, such as <img> does not need a closing tag because it is not possible to have
content between the tags.
Each element acts as a container, telling you something about the information that lies in it.
Tags and elements might be a bit confusing to separate. In short elements represents some
structure in the document, and consists of an opening and closing tag. E.g. <body> is a tag
while <body></body> is an element, enclosed by two tags.
HTML
16
Document structure
An HTML document has some requirements in order to be rendered correctly. Most
browsers tries to guess the meaning of the document if it is not correctly set up. Thus you
might end up with the right result, but it can be implemented incorrectly. This may lead to
your page looking differently across browsers, because browsers guess differently. To
ensure that your page looks consistent across browsers should write HTML correctly.
The correct way to set up a HTML document is like this:
<!DOCTYPE html>
<html>
<head>
...
</head>
<body>
...
</body>
</html>
I'll now give an explanation of the elements present in the setup, namely <html> , <head> ,
<body> , and the document declaration <!DOCTYPE html> .
Document declaration
At the top of the document, you should have a document declaration, telling your browser
how to read the document. Writing <!DOCTYPE html> tells the browser to read the document
as a HTML5 page.
Html
The `<html>` element encloses everything on the page. All your code should be within those
opening and enclosing tags.
The child elements of `<html>` is the `<head>` and `<body>` elements.
Head
Document Structure
17
This element contains information about the document, and will not be rendered in the
browser. Examples are link to resources, metadata, and the title shown in browser tabs.
Below are some useful tags to know:
<meta charset="UTF-8"> tells the browser how to interpret characters. Using UTF-8 you can
display nordic characters correctly. There are also other uses for the meta element. Look
here for more information.
<title> is the title of the page and is usually shown on the tab for that page, and should
reflect both the title on your page and where on the site the user is.
<link href="style.css" rel="stylesheet"> includes a stylesheet for your document,
separating your style from the document. Link can also include other resources, look here
for more information.
Body
Everything inside the body is shown inside the browser window, and thus is the content of
your page.
The elements inside the <body> element are often either inline or block elements,
depending on their default display value.
Block level elements always start on a new line and takes up the full width available.
Examples of block level elements are:
div
h1 - h6
p
form
Inline elements does not start on a new line, and only takes up as much width as necessary.
Examples of inline level elements are:
span
a
img
It will become clear later on what these example elements are. Just remember that block
levels start on a new line, while inline elements stays on the same line.
You can read about all the different display values here, but note that display is a CSS
property, and block and inline are the two values you should know at this point.
Document Structure
18
Document Structure
19
Attributes
Attributes provide additional information about the content of an element. They appear inside
the opening tag and consists of a name (the attribute) and a value, separated by an equal
sign. The name part indicates what kind of extra information you are providing. The value
part is the setting of the attribute.
<p lang="no">Et element med norsk tekst</p>
In the example above the attribute *lang* indicates that you will give information about the
language of the element. The value for this attribute is "no", indicating that the paragraph is
in Norwegian.
Such attributes makes it easier for browsers to render the elements correctly, also it helps
screen readers and those trying to make sense of your markup, e.g. search engines.
Attributes
20
Text
In this section you will learn a lot about text, and how to best mark it up. In order to create a
orderly document, you should use the elements correctly.
Headings
A heading should briefly describe the section it introduces, and are written between the the
opening and closing tags `<h*></h*>` (the * is a number between 1 and 6). The tags thus
are:
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
These tags are ordered in a hierarchy. <h1> is the most important, and <h6> the least. You
should use <h1> on the most important heading on your page, e.g. the main title or page
title. Other than being readable by the user, headings can be used by agents to, for
example, automatically construct table of contents.
The heading elements has different visual style to differentiate the importance of the
heading. The heading level have a semantic meaning so you should not skip levels. In the
code example below you can see that the different heading levels are used. Two headings
also have the same content, but because one in on a lower level, we are fine (though you
should try to have different titles). The heading level tells us which heading it is a
subheading to.
Text
21
<h1>IT2805</h1>
...
<h2>Introduction</h2>
...
<h2>HTML</h2>
...
<h3>Document structure</h3>
...
<h4>Html</h4>
...
<h4>Head</h4>
...
<h3>Attributes</h3>
...
<h2>Site structure</h2>
...
The ... indicates that there should be some content there.
Only use one <h1> tag per page. By convention it is used to display the page title, and
other headings starting with <h2> . And don't use lower level headings to decrease font size,
use CSS' font-size property instead.
Paragraphs
A paragraph is a block of text, surrounded by the opening and closing tag <p></p> . <p> is
a block element, thus each element will be shown on a new line.
Special markup
We can change how our text looks with inline elements. E.g. making the text bold or italic.
Later we will learn to use CSS to style our text, but even then these elements are not
obsolete. The browser gives them default styling, and you could change this with CSS. Keep
in mind the function of e.g. bold text, it should really be bold.
Bold
You make the text bold by enclosing it in the tags <b></b> . These tags does not bear any
semantic meaning other than highlighting the text. It should not be used for continuous text
(body text), as it makes for worse readability, and looses it's function of highlighting
keywords.
Text
22
Italic
To make text italic, surround it with the tags <i></i> . As with bold, you should only use it to
make some words stand out, not on an entire text.
Superscript and subscript
When writing about math or chemistry, or any other topic in need of superscript and
subscript, you can use the tags <sup></sup> and </sub></sub> respectively.
White space
In HTML, we have white space collapsing. That means that you can write as many white
spaces after each other that you like, and they will be treated as one white space. The same
is true for line breaks. Coders can use this to organize their coding, making it easier to read.
E.g.
The whites doesn't scare me
will be rendered as:
The whites doesn't scare me
You can use this to indent your code, so that you will have a structure similar to this:
<body>
<header>
<h1>This is an header</h1>
</header>
<section>
<p>
This is a really short paragraph.
</p>
<p>
This is shorter.
</p>
</section>
</body>
This will make the code easier to read, and see the document structure, e.g. which elements
encloses other elements.
Line breaks
Text
23
The paragraph tag <p> will give you space between each paragraph. If you only want to
have a new line (a soft line break, if you want to sound like a pro) within the same
paragraph, you can use <br> . No closing tag is necessary.
Text
24
Lists
In HTML we have two kinds of lists, ordered and unordered. The difference being that the
ordered use numbers, while the unordered uses bullets. You create a list by writing the
opening and closing tags, and inside them you write your list elements <li>List
element</li> . The list element tag is common for ordered and unordered lists.
An ordered list is enclosed in the <ol></ol> element. You write an ordered list as such:
<ol>
<li>List element</li>
<li>List elementer</li>
<li>Even list elementer</li>
<li>List elementest</li>
</ol>
... which gives the following output:
1. List element
2. List elementer
3. Even list elementer
4. List elementest
The unordered list is enclosed in the <ul></ul> element. You write an unordered list as
such:
<ul>
<li>List element</li>
<li>List elementer</li>
<li>Even list elementer</li>
<li>List elementest</li>
</ul>
... which gives the following output:
List element
List elementer
Even list elementer
List elementest
Lists
25
You can also have a nested list, both in ordered and unordered lists. To do this you create
another list within a list element. E.g. for an ordered list you will write:
<ol>
<li>List element</li>
<li>List within a list
<ol>
<li>Look at this list</li>
<li>It is within another list</li>
</ol>
</li>
<li>I'm just a regular list element</li>
</ol>
This will give:
1. List element
2. List within a list
i. Look at this list
ii. It is within another list
3. I'm just a regular list element
Notice how "List within a list" have a opening tag in front of it, but not a closing tag after it.
That is because the list element is closed after the sublist is written.
You can change <ol> to <ul> to get an unordered list. You can also mix list types, just
remember to open and close with the same tags.
Lists
26
Links
Create a link using the `<a></a>` element. An user can click on anything between the
opening `<a>` and closing `</a>`, even images! Using the `href` attribute, you specify where
you want to link to. It looks like this:
<a href="http://it2805.github.com">IT2805</a>
The value of the `href` attribute is called an URL. URL is short for Uniform Resource Locator,
and says where the resource is located. You can read more about URLs, and their superset
URIs, in chapter 5.
Absolute URLs
When linking to other sites, you need to use the full web address, starting with http://. This is
known as an absolute URL. If you use the absolute URL, you will be taken to the same
page, no matter where you are linking from.
Relative URLs
When we are linking to pages within our own web site, you should use relative URLs.
Instead of describing the full URL, you use the shorthand notation to say where a resource
is, relative to where you are linking from. This has an advantage when you are developing a
site locally on your computer, as you do not need a domain name.
In the file hierarchy below we want to link from index.html to starblaster.html .
products
starbaster.html
index.html
We would then have to write:
<a href="products/starblaster.html">Starblaster</a>
If we want to link from starblaster.html to index.html, we would have to write:
<a href="../index.html">Home</a>
Links
27
Notice the ../ . This indicates that the path is one folder up. Should we need to go two
folders up in the hierarchy, we would write ../../ .
For both relative and absolute URLs, the URLs must be exact, or else the resource will not
be found.
Linking to a specific part of the same page
We have now talked about how to link to other pages or resources. What if we want to link to
something on the same page? Say you have a table of contents for a long page, and you
want to link to the corresponding sections.
You do this by linking to the `id` of those paragraphs. `id` is an attribute you can set on
opening tags. They do not magically appear though, you have to make them. In the case of
creating a table of content, a good practice would be to add the `id` attribute in your
headings, e.g. `<h2>`. The value of the `id` attribute should start with a letter or an
underscore (not a number or any other character) and, on a single page, no two `id`
attributes can have the same value.
To link to an element that uses an `id` attribute you use the <a></a> element, but the value
of the href attribute starts with the # symbol, followed by the value of the id attribute of
the element you want to link to. You can see the how it is done in the example below.
<a href="#summary">Summary</a>
<h2 id="summary">Summary</h2>
Clicking the first link would make the browser scroll down to where the title summary starts.
If you want to link to a specific part of another page, you add the id value, starting with the
# symbol, after the address. E.g.:
<a href="http://it2805.github.com/html#specificpart">Linking to a specific part of the
same page</a>
Opening links in a new tab
If you want to open a link in a new window, you can use the target attribute on the opening
<a> tag. The value should then be _blank . E.g.:
<a href="http://it2805.github.com" target="_blank">NTNU</a>
Links
28
One of the most common reasons a link would open in a new tab is if it points to another
website. In such cases, we hope the user will return to our site after finishing looking at the
other one.
As a good practice, only open links in a new tab when you have to, and when it is
meaningful to do so.
Email links
To create a link that starts up the user's email client, and addresses an email to a specified
email address, you use the <a> element and the href attribute. However, this time the
value of `href` starts with mailto: followed by the email address. E.g.
<a href="mailto:example@email.com">Email example</a>
Links
29
Images
Images in HTML is included using the <img> tag. You reference the image using the src
attribute, with the value being the path to you image. E.g. for this file hierarchy:
products
starblaster.html
images
starblaster.jpg
index.html
... you would write it like this, when referencing to the image from `starblaster.html`:
<img src="../images/starblaster.jpg">
This will render an image in the browser that has the same height and width as the image it
self. That might not always be desirable. To change this you can use the attributes height
and width to constrain your image size. E.g.:
<img src="../images/starblaster.jpg" width="500px" height="400px">
Images often take longer to load than other HTML code. Thus it is a good idea to specify the
size of the image so that the browser can render the rest of the text on the page while
leaving he right amount of space for the image that is still loading.
Be aware that even if you resize your image using the width and height attributes, the file will
have the same size measured in kilobytes and megabytes. Resize your image using a photo
software (e.g. Photoshop or any other tool, there are web pages that does this) to reduce the
file size.
There are a couple of other attributes you should know of alt provides a text description of
the image which describes the image if you cannot see it. The alt attribute should give an
accurate description of the image's content so it can be understood by screen readers and
search engines. You can also use the title attribute to provide additional information
about the image. Most browsers will display the content of this attribute in a tooltip when the
user hovers over the image.
As <img> is a inline element, it will be placed on the same line as where you declare it. That
is, if you declare it inside a paragraph, it will be inside the paragraph, and the height of that
line will be the same as the image's height. You can place it before the paragraph in order to
Images
30
place it outside of the text. You will learn how to use CSS later, but the best way to style an
image, e.g. aligning it, is best done using CSS.
When you are using images, think of these three guidelines (some will call them rules):
1. Save the image in the right format The file formats JPG, gif and png are the most
often used formats, and has the widest support among browsers. If you choose the
wrong image format your images might not look as sharp as they should, and the web
page might load slower.
2. Save the image at the right size You should save the image at the same width and
height as it will appear on the website (measured in pixels). If the image is smaller than
the width or height that you have specified, the image can be distorted and stretched,
and the pixels will be visible. If the image is larger than the width and height you have
specified, the image will take longer to load on the page.
3. Measure images in pixels As computer screens are made up of pixels, you should
also measure your images in pixels (not centimeters).
Images as links
You can use the image element as a link if you want. In stead of a text between the `<a>`
tags, put an image there.
<a href="products/starblaster.html"><img src="images/starblaster.jpg"></a>
Image formats
There are different image formats to choose from, and they all have their pros and cons. To
understand the differences, there are two terms you should know about compression:
Lossless: The image is made smaller, but this does not affect the quality
Lossy: The image is made (even) smaller, and it affects the quality. Saving the image
over and over again would make the image quality get progressively worse.
This information is gathered from stack overflow. Here you can read more about other
aspects of the formats.
Below are an explanation on the four most used image formats, their advantages and
disadvantages.
JPEG
Images
31
JPEG (or JPG) is the most common file format for showing images, and for photos and
images with much details. It removes details not visible for the human eye, and is a lossy
format, which means that each time you save it you will loose quality. The lossy compression
means that it is bad for logos and line drawings (images with large areas covered by one
color).
Good for photos and gradients, bad for logos illustrations.
PNG
PNG is a lossless format, meaning that it will not loose any details when being saved. Then
why not use PNGs on photos? That is because the images would be ridiculous large, and
are best used on graphics and logos.
Good for illustrations, logos and images where part of the image is transparent. Bad for
photos.
GIF
It does not matter if you pronounce it "jif" og "gif", the gif format behaves the same either
way. There is a limited number of colors available, so it is not suitable for showing photos
with high resolution. GIFs are today most suitable for animations, or showing video snippets,
without sound, in an image format. These files grow fast in size.
Good for animations, bad for anything else.
SVG
SVG is, unlike the previous formats, a vector format, rather than raster. That means that you
can scale the image indefinitely without loosing quality. This is suitable for simple images
such as logos and graphics, but not photos, as the lines are mathematically calculated,
rather than being described with pixels. SVG files can be written using XML, or with software
such as Adobe Illustrator.
Good for logos, graphics and animations. Bad for photos.
Images
32
Tables
Tables are used to represent information in a grid format. In HTML, a table is written row by
row. Each block in the grid is referred to as a table cell.
In order to make a table, you need rows and cells. To create the table, use the `<table>
</table>` element. Each row is encapsulated by the opening and closing tag <tr></tr> (tr
stands for table row). Inside a row, each cell is represented using <td></td> (td stands for
table data).
In order to create the table below:
Linjeforening Kontor
Abakus P15
Hybrida Gamle kjemi
Leonardo Produktdesign/IPD
Online P15
... you would write:
<table>
<tr>
<th>Linjeforening</th>
<th>Kontor</th>
</tr>
<tr>
<td>Abakus</td>
<td>P15</td>
</tr>
<tr>
<td>Hybrida</td>
<td>Gamle kjemi</td>
</tr>
<tr>
<td>Leonardo</td>
<td>Produktdesign/IPD</td>
</tr>
<tr>
<td>Online</td>
<td>P15</td>
</tr>
</table>
Tables
33
Even if a cell has no content, you should still use a <td> element to represent the empty
cell, otherwise the table will not render correctly.
Table headings
To represent the heading of a table, use the <th> tag. You use it as you would use the
<td> tag. E.g.:
<table>
<tr>
<th>Linjeforening</th>
<th>Kontor</th>
</tr>
<tr>
<td>Online</td>
<td>P15</td>
</tr>
</table>
Notice that the header is displayed as bold. This is the default style by most browsers. Using
<th> to define the header helps people using screen readers, improves the ability for
search engines index your page and gives you greater control over the table's appearance
using CSS.
If you want to have row headings, you can do that also. You should then use the scope
attribute with the value row . E.g.:
<table>
<tr>
<th scope="row" >Linjeforening</th>
<td>Online</td>
</tr>
<tr>
<th scope="row" >Kontor</th>
<td>P15</td>
</tr>
</table>
... would render:
Linjeforening Online
Kontor P15
Tables
34
Spanning columns and rows
Sometimes you might want to have columns or rows, or both, that stretch across more than
one row or column. This might e.g. be in cases where the entries are longer than the given
cell space.
On the <th> and <td> elements you would then use the colspan or rowspan attributes.
It might be hard to separate the two, so here are some examples. First out is colspan . The
following code would result in the cells containing IT2805 and MA0001 spanning two
columns. Due to limitations in gitbook (which is used to create this ebook) it is not possible to
create spanning columns or rows.
<table>
<tr>
<th></th>
<td>8 am</td>
<td>9 am</td>
<td>10 am</td>
<td>11 am</td>
</tr>
<tr>
<th>Monday</th>
<td colspan="2">IT2805</td>
<td colspan="2">MA0001</td>
</tr>
<tr>
<th>Tuesday</th>
<td></td>
<td></td>
<td colspan="2">MA0001</td>
</tr>
</table>
Note that the first cell is empty, but written, so that the table will be rendered correctly.
As mentioned, if you want to stretch down across more than one row you would use
rowspan . This code snippet:
Tables
35
<table>
<tr>
<th></th>
<th>Monday</th>
<th>Tuesday</th>
</tr>
<tr>
<th>8 am</th>
<td rowspan="2">IT2805</td>
<td></td>
</tr>
<tr>
<th>9 am</th>
<td></td>
</tr>
<tr>
<th>10 am</th>
<td rowspan="2">MA0001</td>
<td rowspan="2">MA0001</td>
</tr>
<tr>
<th>11 am</th>
</tr>
</table>
would result in the cells containing IT2805 and MA0001 to spann across two rows.
Long tables
There are three elements that help distinguish between the main content of the table and the
first and last rows. These elements help people who use screen readers, and also allow you
to style these sections in a different manner than the rest of your table.
These are the table header <thead> , table body <tbody> and the table footer <tfoot> .
The headings of the table should go in the <thead> element. The body should be in the
<tbody> , and the footer in the <tfoot> element.
You can see this used in the table below. The table isn't long in this example, that is just to
save space. The following code:
Tables
36
<table>
<thead>
<tr>
<th>Date</th>
<th>Income</th>
</tr>
</thead>
<tbody>
<tr>
<td>12th July</td>
<td>612</td>
</tr>
<tr>
<td>14th July</td>
<td>765</td>
</tr>
</tbody>
<tfoot>
<tr>
<td></td>
<td>1377</td>
</tr>
</tfoot>
</table>
... will render this table:
Date Income
12th July 612
14th July 765
1377
You don't see a difference, but that is just the lack of styling. We could use CSS to style only
the <thead> element, should we want to.
Part of the reason for having separate <thead> and <tfoot> elements is so that, if you
have a table that is taller than the screen (or, if printed, longer than one page) the browser
can keep the header and footer visible whilst the contents of the table scroll. This is intended
to make it easier for users to see which column the data is in.
Tables
37
Comments
Often, to make your code more readable, you would want to add comments to it, but not
have them render in the browser. This is done by enclosing a comment in <!-- and --> .
E.g., this code snipped:
<!-- Lenke til it2805.github.com -->
<a href="http://it2805.github.com">IT2805</a>
would render:
IT2805
This is often used when it is not clear from the code what is going on, or you want to make it
easy to see what opening and closing tags belong together. Speaking by experience, you
may get lost in the number of divs, and which closing tags belong to which opening tags.
E.g.:
<div id="content">
<div id="header">
</div> <!-- /header -->
<div id="body">
...
</div> <!-- /body -->
</div> <!-- /content -->
In this case /header means that this is the end of the header tag.
Comments are also useful to quickly make code not render, in cases you want to see the
difference without actually deleting the code.
Suddenly I introduced the div element. This is an element which does not represent
anything. It is used to group elements together, most often for styling purposes using CSS.
You will see a lot more of it in chapter 7. As the div element does not have any semantic
meaning it should only be used when no other semantic element (such as <article> or
<footer> ) is appropriate (more on these semantic elements two sections down).
Comments
38
Semantic elements
With HTML5, elements with a semantic meaning were introduced. This means that e.g.
search engines can reason about the content of an element. You should thus strive to use
these elements, rather than divs that bear no semantic meaning. Below are some of these
elements listed, with an explanation on how they should be used. A complete overview over
the HTML elements can be found at Mozilla Developer Network.
In order for these elements to have a semantic value, they have to be used correctly. That is
that there are rules for what elements can be their parent and child. You will find more
information about this in the link provided above.
Header
The <header> element holds a group of introductory or navigational aids, e.g. heading
elements, logo, search forms and navigation bar.
<header>
Logo
</header>
Do not confuse it with the <head> element, which contains metadata about the document.
The <header> element has to be a child of the <body> element, that is, it has to reside
within it.
Footer
The <footer> element represents a footer for its nearest section. That is, it can be at the
bottom of the <body> element, or at the bottom of a <section> element (more on that
later).
In the footer you often find a list of important sub pages on the website, contact information
and other useful information that should be easily available for the user.
<footer>
Contact us at some@email.com
</footer>
Semantic elements
39
Section
The <section> element is a generic section of the document, i.e. a thematic grouping of the
content, typically with a heading.
Be aware though, do not use the <section> element as a generic container, use the <div>
element instead. A rule of thumb is that the <section> element should logically appear in
the outline of a document.
<section>
<h2>Chapter 4: HTML</h2>
Bla bla
</section>
Article
The <article> element is a self-contained composition in a document, which is intended to
be independently distributable or reusable. This could be a forum post, a blog entry, or a
news site article. Each <article> should be identified, typically by including a heading
element as a child of the <article> element.
This element can be used by e.g. search engines to filter out unnecessary information on the
page, such as the navigation bar and adds.
<article>
<header>
<h2>– Webtech is such an awesome course<h2>
</header>
<section>
<p> A man said that during the lecture and everyone
agreed.
</p>
</section>
</article>
Nav
The <nav> element is a section of a page that links to other pages or to parts within the
page. It is a section with navigation links. This element is only intended for major blocks of
navigation, such as the navigation in the header. Links in the footer e.g. does not need to be
encapsulated in the <nav> element.
Semantic elements
40
<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="/about">About</a></li>
</ul>
</nav>
Input
The <input> element is used to create interactive controls for web-based forms in order to
accept data from the user. How the element works varies considerably depending on the
value of its type attribute.
In stead of copy/pasting that into this document, you can read about it at MDN.
It is important to set the type of input, using the type `attribute` and a matching value, such
as:
Button: A push button with no default behavior.
File: A control that lets the user select a file.
Password: A single-line text field whose value is obscured.
Submit: A button that submits the form.
Using the attribute placeholder you can have a placeholder text in your input field. If you
use the attribute autofocus , the input field will get the focus automatically when the user
opens the page.
If you have several input fields on the page and want the user to tab through them in a
specific order, use the tabindex attribute, and a number as the value. This is also useable
on other links and buttons.
<input type="text" placeholder="Your name">
In a form, as you will see later, it is good design to have a label, as the placeholder will
disappear once the user sets his/hers cursor in the input field.
Note that the input field is a self enclosing element.
Output
The <output> element represents the result of a calculation or user action. It should be
used within a form element, or as a general output element.
Semantic elements
41
<output name="result">60</output>
Figure
The <figure> element represents self-contained content, frequently with a caption (see
figcaption below), and is typically referenced as a single unit. While it is related to the main
flow, its position is independent of the main flow. Usually this is an image or an illustration.
<figure>
<img src="https://avatars2.githubusercontent.com/u/18331244" alt="IT2805 logo">
</figure>
Figure caption
The <figcaption> element represents a caption associated with a figure. <figure> is its
immediate ancestor which means <figcaption> can be the first or last element inside a
<figure> block. The figcaption element is optional, if it is not there the parent figure
element will have no caption.
<figure>
<img src="https://avatars2.githubusercontent.com/u/18331244" alt="IT2805 logo">
<figcaption>Fig. 1: Web technologies logo</figcaption>
</figure>
Strong
Using the <strong> element indicates that the content has a strong importance.
Browsers will by default show the content of a <strong> element as bold. As you might, and
should, remember, the <b> element renders the text as bold. Even though they look the
same, they have different usages as the <strong> element has a semantic meaning.
The code snippet:
<p>
<strong>Do not</strong> use the camera as a candle holder
</p>
... would render:
Semantic elements
42
Do not use the camera as a candle holder
Em
The <em> element indicates emphasis that subtly changes the meaning of a sentence.
Browsers will by default render the content in italic. The <i> element will also render the
text italic, but <em> holds a semantic meaning.
The code snippet:
<p>
I <em>think</em> I am the best person ever!
</p>
... would render:
I think I am the best person ever!
Quotes
There are two elements used for making quotations, <blockquote> and <q> .
The <blockquote> element is used for longer quotes, taking up an entire paragraph. Note
that browsers tend to indent the content of this element. You should not use this element to
indent text, rather use CSS. Remember that this element bears semantic meaning, that it is
a quote. Use the <p> element inside the <blockquote> element.
The code snippet:
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
">
<p>
The HTML blockquote Element (or HTML Block Quotation Element) indicates that the e
nclosed text is an extended quotation
</p>
</blockquote>
... would render:
The HTML blockquote Element (or HTML Block Quotation Element) indicates that the
enclosed text is an extended quotation
Semantic elements
43
For shorter quotes, that sits within a paragraph, use the <q> element.
The code snippet:
<p>
Eleanor Roosevelt said: <q cite="http://www.wiseoldsayings.com/anger-quotes/">Ange
r is one letter short of danger.</q>
</p>
... would render:
Eleanor Roosevelt said: "Anger is one letter short of danger"
Both elements may use the cite attribute to indicate where the quote is from. Its value should
be a URL that will have more information about the source of the quotation.
Address
The <address> element is used to contain contact details of the author. It can be a physical
address, but it can also be a name, phone number or email address.
You can use it together with the <article> element to describe the author of that article.
<address>
<a href="mailto:some@mail.com">some@email.com</a>
</address>
Semantic elements
44
Site structure
URL
Uniform Resource Locators (URL) are used to link to another document or resource. This
can be a link to another web site, an external style sheet, script, image, submit a form, or
any other resource. URLs can also be used to link to sections within the same document.
The URL specifies the precise location of a resource on the Internet. They follow a protocol,
a set of rules defining how information is exchanged between two resources, and web
browsers communicate using Hypertext Transfer Protocol(HTTP). URLs for all web pages
must start with the scheme "http" or "https" (secure HTTP). Other internet resources use
different protocols, and have different scheme names, such as ftp.
An URL may look like "http://developer.mozilla.org" and "http://developer.mozilla.org/enUS/docs/Learn/". Any of those URLs can be typed into our browser's address bar to tell it to
load the associated page.
An URL is composed of different parts, some mandatory and others optional. Let's dissect
the url "http://www.example.com:80/path/to/myfile.html?key1=valu
e1&key2=value2#SomewhereInTheDocument".
"http://" is the protocol part of the URL. It indicates which protocol the browser must use.
Usually it is the HTTP protocol, or its secured version HTTPS. Browsers use HTTP by
default. The web requires one of those two, but browsers also know how to handle other
protocols like:
mailto (opens a mail client)
ftp (handles file transfers)
"www.example.com" is the domain of the URL. It indicates which web server is being
requested. Alternatively it is possible to directly use an IP address, but because it is less
convenient, it is not often used on the web.
":80" is the port, and indicates the technical "gate" used to access the resources on the web
server. It is usually omitted if the web serves use the standard ports of the HTTP protocol
(80 for HTTP and 443 for HTTPS) to grant access to its resources.
"/path/to/myfile.html" is the path to the resource on the web server. In the early days of the
web, a path like this represented a physical file location on the web server. Now it is mostly
an abstraction handled by the web server without any physical reality.
Site structure
45
"?key1=value1&key2=value2" are extra parameters provided to the web server. Those
parameters are a list of key/value pairs separated by the & symbol. The web server can use
those parameters to do an operation before returning the resource. Each web server has its
own rules regarding parameters, and the only reliable way to know if a specific web server is
handling parameters is by asking the web server owner.
"#SomewhereInTheDocument" is an anchor to another part of the resource itself. An anchor
represents a sort of "bookmark" inside the resource, giving the browser the directions to
show the content located at that "bookmarked" spot. On an HTML document, for example,
the browser will scroll to the point where the anchor is defined. On a video or audio file, the
browser will try to go to the time the anchor represents.
GET and POST
Let's jump back to the parameters of the URL again, the "?key1=value1&key2=value2"
section.
These parameters are used with a method called GET. There are two main methods when
doing HTTP requests, GET and POST. There are others also, but they are not a part of this
course. When you want to request data from a specific resource, as we do in the example
above, use GET. If you want to submit data to be processed by a specific resource, use
POST.
When you do a GET request, you will not manipulate any data on the server side, so a GET
request should return the same result each time. POST will update data on the server side,
and will thus will change the state of the software.
Using GET, the query string is sent as a part of the URL, where the first key is preceded by a
? symbol. An example of a request is for a user management software and you want to see
information about user with id 5. You would then append "?userid=5" to your URL.
Some properties to be aware of with the GET method:
GET requests can be cached
GET requests can remain in the browser's history
GET requests can be distributed and shared
GET requests have length restrictions because the URL has a max length
GET requests can be hacked, so don't send sensitive data, e.g. passwords, with GET.
On the other hand, we have the POST method. POST requests are send as a separate
message, and not in the URL. POST requests are never cached, do not remain in the
browser's history and can not be bookmarked. POST should be used for sensitive data such
as passwords, credit card numbers and bank account numbers. There is no max length for
POST, so use that in stead of GET if you are sending lots of data.
Site structure
46
You use GET or POST as part of a e.g. form (which you will learn about later). To use either
GET or POST you specify the chosen method like this <form method="POST"
action="server_side_processing.php"> which will POST information to the program
server_side_processing.php in the same directory as the current form on the server.
Site map
When creating a web site, you should have an idea of how the site will look architecturally.
That is, how the pages are linked together, and how the pages are ordered in a hierarchy.
You have a landing page, which will be the first page the user sees, then you could have
some pages in an about category, and different products under a shop category. In order to
have an overview over the page, we should have a site map, or storyboard.
Storyboard
A storyboard is a diagram of a web site's structure, showing all the pages in the site and
indicating how they are linked together. You should storyboard your web site before you start
creating your pages in order to determine which structure works best for the type of
information your site contains. A well designed structure can ensure that users are able to
navigate the site without getting lost or missing important information.
Site structure
47
There are three ways of structuring your web pages, hierarchically, linear and a mix between
those two.
In a linear structure, each page is linked with the pages that follow and precede in in an
ordered chain. This works best for web pages with a clearly defined order, e.g. a galleries or
long articles that are divided over several pages.
In an augmented linear structure, each page contains an additional link back to an opening
page.
Site structure
48
In the hierarchical structure, the pages are linked from the most general page down to more
specific pages. Users easily move from general to specific and back again. If you have a
navigation bar on your page, the links would be organized in a list of hyperlinks, grouped
together in the same section of the page.
As websites become larger and more complex, you often need to use a combination of the
two structures. The overall form can be hierarchical, allowing the user to move from general
to specific, however the links also allow users to move through the site in a linear fashion.
Site structure
49
Being proactive will allow you to make a website that is easy to use with less effort. Each
page should contain, at a minimum, a link to the site's home page, or to the relevant main
topic page.
You may want to supply your users with a site index (site map) which is a page containing
an outline of the entire site and its contents with hyperlinks.
Site structure
50
CSS Introduction
CSS (Cascading Style Sheets) allows you to create rules that specify how an element, or the
content of an element, should look. These rules can be reused for elements that should look
the same.
CSS intro
51
Understanding CSS
To understand how CSS works, you can imagine that there is an invisible box around every
HTML element. CSS allows you to create rules that control the way that each individual box,
and the content of that box, is presented.
In the images below you can see a HTML page. On the left side, you see how it would have
been rendered in a browser. On the right side I have added outlines to each element so that
you can see how CSS will treat each element as if it lives inside its own box. The block level
elements are shown with an orange border, and inline elements have a blue border.
Understanding CSS
52
Syntax
Each block of code is called a rule, and defines some style for an element. Each rule
consists of a selector, choosing what element(s) to style, a property and a value. A rule looks
like this:
p {
color: #0060A3;
}
The selector, the name before the opening curly bracket ( { ), points to the element you want
to style. The property is, well, the property of the elements you want to affect, and the value
is the value of that property.
In this case we change the font color of p from the browser default to the blue color
#0060A3 . It is perhaps not intuitive that the color property affects the font color, but it
does. You will learn more about how to use colors and how to style text later on in this
chapter.
Each property-value pair is called an declaration. All declaration that makes up a rule, i.e. all
declarations between the opening and closing curly bracket, is called a declaration block.
In order for the browser to understand that you are done defining a declaration, you need to
end the line with a semicolon.
Syntax
53
Comments
As with HTML, you can make comments so that the content between the opening and
closing tag is not considered when the code is executed. This can be used to comment out
the code, or give explanations. In CSS, comments are written as such: /* Some comment */ .
If you want to exclude some CSS rules without deleting it, you would enclose it with the
comment tags, e.g.:
/*
.some-class{
color: #1d1d1d;
}
*/
Comments
54
Cascade
Cascade is the C in CSS (style sheets are the S and the S). This means that if there are two
or more rules that apply to the same element, there is an order of preference, specifying
which rule will be used.
This order of precedence is decided by:
The last rule: If two rules affect the same property of the same element, the latter of the
two will take precedence. That is, the last one written when you read from top to bottom.
Specificity: If one selector is more specific than another, the most specific rule will take
precedence. E.g. p is more specific than * (this selects all elements, more on that
later), and p b is more specific than p .
Important: Adding !important after any property value indicates that that declaration
should be considered more important than other rules that apply to the same element.
Use this with caution.
As for "the last rule", this precedence rule is further specified by the level at which you write
your CSS. There are five levels of styles: inline style, embedded styles, external style sheet,
user specified styles and browser default.
These are ordered in a hierarchy, where inline styles has the highest precedence, then
embedded styles, external style sheets, user specified, and lastly browser defaults. That
means that if some element has it's style specified several places, the specification with the
highest precedence win, thus affecting the element.
You will soon learn about classes and IDs. But already now you can learn that IDs have a
higher precedence than classes because they are more specific.
Inline styling
Inline styling is when you write your style directly on the element, e.g. in your HTML
document. For a given paragraph you would e.g. write:
<p style="color: orange;
font-family: arial, sans-serif;
font-size: 16px;">
This is some styled paragraph!
</p>
Cascade
55
There is a, perhaps obvious, drawback to this method. In the cases where you would want
the same style on several paragraphs you would have to copy the style. If you then later
would like to change the style, you would have to change it on all the places it was used.
Using classes you only have to write a set of rules once.
Embedded styles
One way to use class and ID references (you will learn about classes and IDs in the
following section), rather than writing inline CSS, is to write your style embedded. That is,
you write it in your HTML document, but on a designated place, encapsulated by the
<style></style> tags. You can write them wherever you want, but a good idea is to have
them in your <head> section.
For the same paragraph style as above, you would then write:
<head>
<style>
p{
color: orange;
font-family: arial, sans-serif;
font-size: 16px;
}
</style>
</head>
<body>
<p>
This is some styled paragraph!
</p>
<p>
This is another paragraph with the same styling!
</p>
</body>
This approach supports the Don't repeat yourself (DRY) principle, which says that you
should not write the same code twice, making the code easier to maintain later on.
External style sheets
External style sheets looks like embedded styles, but differs in that the style is included from
an external resource, meaning a different file than the HTML document. Using this approach,
several HTML files can share the same styles.
Cascade
56
I would recommend including the link to the style sheet in the <head> section of your
document. You do that by writing:
<link href="path/to/stylesheet.css" rel="stylesheet">
Should you include several style sheets, which is possible, and some of them define the
same property for the same class, the one included last will be used.
This is also true when you inside the same style sheet define the same property for the
same class, the last declaration will be used.
You may wonder "what is a style sheet and how do I write one?" I am not going to say that it
is easy, but it is quite easy. You do not have to do any document declaration or anything.
Just start writing your rules, e.g. the top of the document could look like this:
body{
font-family: Helvetica, Arial, sans-serif;
font-size: 16px;
}
... or any other rules you would like to have there. It is up to you!
User specified rules
A user can specify CSS rules in their browser. This can not be affected by your code, but the
style sheets you provide will take preference, should they affect the same element.
Browser defaults
Lastly we have the browser default styles. These are styles used by the browsers when your
style sheet has not defined any for an element. E.g. if you have not defined the font-family
property for a paragraph tag, the paragraph would be in the browser default font, which on
browsers on MacOS is usually Helvetica, and browsers on Windows it is usually Verdana.
These default may also vary across browsers on the same operating system.
If you want a consistent look across platforms you should define styles to override the
browser default.
Cascade
57
Inheritance
Some properties are inherited by their parent element, e.g. font-family and color . That
means that if you specify a font-family on the <body> element, all child elements (that is,
all elements inside the <body> tag) will also have that same font-family value, unless the
property is specified in the child element. E.g.:
div{
border-radius: 1px;
}
p{
border-radius: inherit;
}
Not all properties are inherited automatically, such as the border properties. If these
properties had been inherited, the page might have looked messy. But you can force
properties to inherit values from their parent elements using inherit as the value of that
property.
Inheritance saves you from having to apply some properties to as many elements, resulting
in a simpler style sheet. E.g., for the the code snipped below, all child elements will have the
same `font-family` because it is defined in the <body> element:
body{
font-family: Verdana, sans-serif;
}
p{
/* No need to define the font-family property,
but we can specify other properties. */
color: #1d1d1d;
}
Inheritance
58
Selectors
In order to apply CSS rules to an element, the style needs either to be applied inline, or
selected through a reference. In order to write maintainable code, it is recommended to
separate style and content. That is, separate HTML and CSS. This is done through using
classes or IDs.
On a page, you can only have one unique ID, while you can have several elements sharing
the same class. If you want to apply the same style on several elements, e.g. a button, you
would reference it using a class. If you instead only have one element of a kind on that page,
e.g. main title, you would is an ID.
The class attribute is written as <div class="class-name"> , and the ID attribute is written as
<div id="id-name"> .
In your style sheet, elements with an ID are referenced by:
#id-name {
...
}
and elements with classes are referenced by:
.class-name {
...
}
The difference being that IDs are referenced using the # in front of the name, and classes
using . in front of the name.
Elements defined by the HTML standard can be referenced using only the element name,
e.g. p , body and section . You would then write:
body {
...
}
Remember that there is a case of precedence with classes and IDs. As IDs are more
specific than classes, they only apply to one element, they have a higher precedence than
classes. That is, if a class and an ID describe the same property for the same element, the
ID will be the one that is used. E.g. in the case of:
Selectors
59
<style>
#id-name{
color: #000000; /* Font color: black */
}
.class-name{
color: #FFFFFF; /* Font color: white */
}
</style>
<div class="class-name" id="id-name">Some text</div>
the font color, described by the property color and the following value, would be black. It
does not matter if the ID rule is written before or after the class rule.
It might seem silly to have two ways of referencing an element. After all, classes can be
used to reference one element (but not vice versa). There are some advantages to using IDs
that should be noted. As it only references one element, they are more efficient to use,
compared to classes. This is because with classes the entire DOM has to be scanned for the
element, while when the ID is found, there is no longer necessary to look for it. When we will
learn about JavaScript, you will also see that IDs are necessary to reference the correct
element to manipulate (more on that later).
There is no problem, as seen above, to combine classes and IDs. You can then have some
style shared between elements, while some attributes are only for one element. You can
also combine classes. E.g.:
<style>
.image-container{
width: 300px;
height: 200px;
}
.margin-left{
margin-left: 30px;
}
</style>
<div class="image-container margin-left"></div>
Other selectors
You have now seen how we select classes and IDs, but it is possible to select several
element at once, or select child elements. Just watch!
Selectors
60
Universal selector
The * selector applies to all elements in the document.
* {
...
}
Type selector
Matches element names. In the example below the elements <h1> , <h2> and <h3> are
targeted.
h1, h2, h3 {
...
}
Child selector
Matches an element that is a direct child of another. In the example below the selector
targets any <a> element that are a children of an <li> element, that is all links within a list
element. This rule does not affect other <a> elements on the page.
li > a {
...
}
Descendant selector
Matches an element that is a descendent of another specified element, and not just a direct
child of that element. In the example below the selector targets any <a> element that is
inside a <p> element, even if there are other elements nested between them.
p a {
...
}
Adjacent sibling selector
Matches an element that is the next sibling of another. In the example below the selector
targets the first <p> element after any <h1> element, but not other <p> elements.
Selectors
61
h1+p {
...
}
General sibling selector
Matches an element that is a sibling of another, although it does not have to be the directly
preceding element. In the example below, if you had two <p> elements that are siblings of
an <h1> element, this rule would apply to both.
h1~p {
...
}
Selectors
62
Color
In the previous sections, when I have have used the property color as an example, you
see that I have written e.g #000000 . This value is one of three ways to specify color in CSS.
The color property specify the color of text inside an element.
The three ways are:
Hex codes
The example above is a hex code, a six-digit code that represents the amount of red, green
and blue in a color, preceded by the # symbol. In the example above (#000000) the red,
green and blue values are set to 0, and the color is thus complete black.
To get a black color, you would write:
color: #000000;
On the other side of the scale we find #FFFFFF, which is white. #FF0000 will give 100% red.
You can probably guess which colors #00FF00 and #0000FF will give (that is correct, green
and blue respectively).
If all two-digit pair has the same value, e.g. #1D1D1D, you will have some shade of grey.
With the hex codes you can create 256 shades of grey, what a story that would make!
Color names
Alternatively you can use color names as the value. There are 147 predefined color names
that are recognized by browsers. E.g. blue , cyan and lightgoldenrodyellow . You would
then write:
color: cyan;
You can find the complete list here.
RGB values
Color
63
RGB values express colors in terms of how much red, green and blue are used to make it.
The values are an integer from 0 to 255. You do that in the following way:
color: rgb(0, 96, 163);
... which would give the same blue color as #0060A3.
If you want the opacity to be anything but 100%, you can use rgba . The r, g and b are red,
green and blue, and the a is short for alpha, and controls the alpha channel. Alpha channel
is the opacity, described by a number between 0 and 1. If the opacity is at 1, you can not see
trough the color. If it is a 0, you can not see the color, and then there is everything in
between. You would write it:
color: rgba(0, 96, 163, 0.5);
to have a opacity at 50%.
Finding colors to use
There is an ocean of possibilities when choosing a color. You will find colors that goes well
together, and those that doesn't. I will not talk about color theory, but would recommend
checking out Adobe Color when you want to choose colors that go well together, creating a
fine color profile for your website.
Color
64
Margin and padding
All HTML elements can be considered a box, and each box (HTML element) has the
properties margin, border, padding and content. Together these properties is called the box
model.
The box model
The content area is the area that contains the content of the element, e.g. text or image. It
can have a background color or an image (an image will hide the background color). Text
and images are located inside the content edge. If the CSS box-sizing property is set to
default, the properties width, min-width, max-width, height, min-height and max-height
control the content size. If you do not specify at least one pair of these properties, the
content's size will determine the size.
The padding area extends to the border surrounding the padding. When the content area
has a background, color, or image set on it, will be extended into the padding. Text will not
be extended. The padding is located inside the padding edge.
Margin and padding
65
The space between the padding and the content edge can be controlled using the paddingtop, padding-right, padding-bottom, padding-left and the shorthand padding CSS properties.
The border area extends the padding area to the area containing the borders. It is the area
inside the border edge, and its dimensions are defined by the border-width property, or the
shorthand border .
The margin area extends the border area with an empty area used to separate the element
from its neighbors. It is the area inside the margin edge, and its dimensions are the marginbox width and the margin-box height.
The size of the margin area is controlled using the CSS properties margin-top , marginright , margin-bottom , margin-left , or the shorthand margin .
Margin and padding
66
Centering elements
If you want to center your content in the browser window, that is center your outer element,
you can use margin-left:auto and margin-right:auto to do so. Your element needs then
to be less than 100% of the browser window.
Center elements
67
Borders
Borders can be styled using the border-style , border-color and border-width .
Border-style can be amongst other be:
none
hidden
dotted
dashed
solid
double
See more styles with examples at MDN. The border-color property's value is set using any
way of representing color, e.g. hex or rgb. Border-width defines the width of the border, and
the value is described using a measure of size, e.g. px. The following code snipped would
make a 4px wide dashed and blue border:
border-width: 4px;
border-style: dashed;
border-color: #0060A3;
In stead of defining each property on a separate line, you can use the border shorthand, e.g.
for the example above you would write:
border: 4px dashed #0060A3;
In addition, you can have different styles for the different sides by adding -top , -bottom ,
-left or -right . E.g. if you want to have dashed borders on the side, while the top and
bottom is solid, you would write:
border-top-style: solid;
border-bottom-style: solid;
border-left-style: dashed;
border-right-style: dashed;
border-width: 2px;
Using the side name (e.g. -top ) can also be used for colors and widths.
Borders
68
Borders
69
### Text and fonts
When designing a web site, it is important to consider the text, as it can have a significant
effect on how readable your pages are. There are many different options and combinations
possible, so I will not go into great detail on the typography (that could be a book in it self,
and indeed it is. Actually there are several. If you only want to read one of them, I would
recommend Thinking With Type by Ellen Lupton). Rather you will learn the tools so that you
know what properties you can change to create a web site that is easily readable and good
looking.
First we need to talk a bit about typeface terminology:
#### Terminology
Firstly, there are three typeface classifications you should know about (even though there
are several more), namely serif, sans-serif and monospace.
Serif fonts have extra detail on the ends of the main strokes of the letteres. These details are
known as serifs. In print, serif fonts were traditionally used for long texts because they where
considered easier to read.
Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design.
Screens have a lower resolution than print. So, if the text is small, sans-serif fonts can be
clearer to read.
Every letter in a monospaced (or fixed width) font is the same width (non-monospace fonts
have different widths). Monospace fonts are commonly used for code because they align
nicely, making the text easier to follow.
Secondly, font families can have different weights and styles. The weights are light, medium,
regular, bold and black, which describes the thickness of the font. The style of the font can
be normal, italic or oblique. We also have size, how large each letter is.
Thirdly we need to talk about font families. Within each classification we have different font
families. A font is one specific combination of the mentioned attributes within a font family.
That is, Arial 12px regular is another font than Arial 14px regular.
Setting the font
Text and fonts
70
Now that we know some words, we can put them to use. The CSS properties that affects
your font that you definitely need to know are:
font-family
font-weight
font-size
line-height
text-align
color
font-family is used to define the font family used. If none is defined, the browser's default
will be used. When defining font family, you should define fallback families, in case the first
one is not present on the client. It is possible to add fonts from e.g. Google fonts, the chosen
font then doesn't have to be present on the client. Most often locally stored fonts are used,
e.g. Arial and Georgia (which are considered web safe fonts because they are installed on
all clients).
The font-family property is written like this:
font-family: Georgia, Times New Roman, serif;
Notice the serif value at the end. This says that "if any of the preceding fonts are not
available, choose the browser's default serif font."
font-weight are written like this:
font-weight: bold;
font-size takes a size as a value. It is easiest to start out with px.
font-size: 22px;
Line height defines how high a line of text is. When the line height increases, the text does
not increase in size, only the line, so the text will have more air above and below it.
Increased line height can increase the readability of the text. A rule of thumb is to have 1.2x
to 1.5x line height. The line height property can take a percentage (%), a length (px) or
number (will be multiplied with the current font size) as a value.
line-height: 2; /* will multiply the line height with 2 */
line-height: 150%; /* will make the line height 150% of the original */
line-height: 20px; /* will make the line height 20px high */
Text and fonts
71
If you want to vertically align text in a box you know the height of, you can use line height to
do so by setting the value equal to the box' height.
Should you want to horizontally align the text, you should use the text-align property,
which takes one of four values: left, right, center and justify. Justify stretches the lines so that
each line has equal width, like in newspapers. Be aware of using justify, as the readability
will suffer because of it, but it might used for design purposes.
Use the color property to set the color of the font. How to do this is described under the
color chapter. In short, your write:
color: darkgrey;
You can choose between hex codes, color names and RGB values as your prefered value.
A word to the wise
This section is only concerned with styling fonts, though there is more to web design than
that. If you want to learn how to design your text so that it is readable and legible, you should
read articles on typography, readability and legibility. A good starting point, should you want
to read more, is to check out Smashing Magazine's "Size Matters: Balancing Line Length
And Font Size In Responsive Web Design" and fonts.com's "It’s About Legibility". You can
also read my article in Offline 2016-2 on page 22 "font-family: sans-serif, serif, wtf;"
(shameless self promotion).
If you want to use other fonts than the standard font families available, you can check out
Google Fonts.
Background color
Even though I have only talked about text color in this section, you should be aware that you
also can set the background color of an element using the background-color property.
Contrast
Choosing the correct foreground (text) color and background color is important for legibility.
When the contrast between the foreground and background is low, the text is harder to read.
This is particularly a problem for those with visual impairments and color blindness, and it
affects those with poor monitors and sunlight on their screens.
Text and fonts
72
Text with a high contrast is easier to read. However, if the text is long, then too much
contrast can make it harder to read too.
For long spans of text, reducing the contrast a little bit improves readability. Also note that it
is better to read dark text on a white background than white text on a black background. I
often choose a off-white background and a dark grey text.
If you want to have a dark background and light text, you can increase the weight of the font
and the line height to make reading easier.
Text and fonts
73
Pseudo-classes
A pseudo classes (pseudo selector) is a keyword added to the selector specifying a special
state of the element to be selected. For example :hover will apply a style when the user
hovers over the element specified by the selector. As I am sure you remember, the selector
is the word before the opening curly bracket ({) in a CSS rule. The pseudo-class follows the
selector, with this syntax:
selector:pseudo-class{
property: value;
}
Pseudo-classes, together with pseudo-elements (which you will learn in the next chapter), let
you apply a style to an element not only in relation to the content of the document tree, but
also in relation to external factors like the history of the navigator ( :visited , for example),
the status of its content (like :checked on some form elements), or the position of the
mouse (like :hover which lets you know if the mouse is over an element or not).
Pseudo-classes is probably most used to style links in their different states (link, visited,
hover, active). If you want the color to change e.g. on hover, you would write:
a:hover{
color: green;
}
When you are styling links, a:hover must come after a:link and a:visited in the CSS
rule in order for it to take effect. a:active must come after a:hover . If you have trouble
with your style not working, this might be it.
Pseudo-classes are not case sensitive. You can use pseudo-classes on all elements. Over
at MDN you can find a complete list of the pseudo-classes.
Pseudo-classes
74
CSS continued
In this chapter, you will learn more about CSS.
CSS continued
75
Styling lists
It is possible to change how the default list looks, both ordered and unordered lists. You can
do this by changing the bullet point, and where the bullet should be located.
The list-style-type property allows you to control the shape or style of a bullet point. It
can be used on rules that apply to the <ol> , <ul> and <li> elements.
For an unordered list you can use the following values:
<ul>
<li style="list-style-type: none;">none</li>
<li style="list-style-type: disc;">disc</li>
<li style="list-style-type: circle;">circle</li>
<li style="list-style-type: square;">square</li>
</ul>
For an ordered (numbered) list you can use the following values:
<ol>
<li style="list-style-type: decimal;">decimal</li>
<li style="list-style-type: decimal-leading-zero;">decimal-leading-zero</li>
<li style="list-style-type: lower-alpha;">lower-alpha</li>
<li style="list-style-type: upper-alpha;">upper-alpha</li>
<li style="list-style-type: lower-roman;">lower-roman</li>
<li style="list-style-type: upper-roman;">upper-roman</li>
</ol>
You can also replace the bullet with an image, using the list-style-image property. The
value for this property starts with the letters url, and is followed by a pair of parentheses.
Inside the parentheses, the path to the image is given inside double quotes. This rule can be
used on rules that apply to the <ul> and <li> elements.
Lists are indented into the page by default and the list-style-position property indicates
whether the marker should appear on the inside or the outside of the box containing the
main points. This property can take one of two values:
outside: The marker sits to the left of the block of text (this is the default behaviour if
this property is not used)
inside: The marker sits inside the box of text (which is indented).
Styling lists
76
Styling lists
77
Change between inline and block elements
The display property allows you to turn an inline element into a block-level element or vice
versa, and can also be used to hide an element from the page. The values this property can
take are:
inline: This causes a block-level element to act like an inline element
block: This causes an inline element to act like a block-level element
inline-block: This causes a block-level element to flow like an inline element, while
retaining other features of a block-level element.
none: This hides an element from the page. In the example below, the element acts as
though it is not on the page at all (although a user could still see the content of the box
by viewing the source in their browser).
If you use this property, it is important to note that inline elements are not supposed to create
block-level elements.
In the example below you can see a list. Each item in the list is usually treated as a blocklevel element, but the rule for the <li> elements indicates that they should be treated as
inline elements, which means they will sit alongside each other rather then appearing on
new lines.
This technique is often used to create navigation for a site, and in this example a margin has
been added to the right of each of the items to separate them out. The rule that applies to
the <li> element whose class is coming-soon has been hidden as if it were not in the page
at all.
HTML
<ul>
<li>Home</li>
<li>Products</li>
<li class="coming-soon">Services</li>
<li>About</li>
<li>Contact</li>
</ul>
CSS
Change between inline and block elements
78
li {
display: inline;
margin-right: 10px;
}
li.coming-soon {
display: none;
}
You can see the results here:
Change between inline and block elements
79
Hide boxes
The visibility property allows you to hide boxes from users but it leaves a space where
the element would have been. The property can take two values:
hidden: This hides the element
visible: This shows the element
If the visibility of an element is set to hidden , a blank space will appear in its place. If
you do not want a blank space to appear, then you should use the display property with a
value of none instead.
Do note that anyone can view the contents of any elements whose visibility property has
been set to hidden by viewing the source in their browser.
HTML
<ul>
<li>Home</li>
<li>Products</li>
<li class="coming-soon">Services</li>
<li>About</li>
<li>Contact</li>
</ul>
CSS
li {
display: inline;
margin-right: 10px;
}
li.coming-soon {
visibility: hidden;
}
Hide boxes
80
You can see the results here:
Hide boxes
81
Document flow
In addition to styling elements, CSS can manipulate how the elements flow. The flow refers
to how the element follow each other in the document, and how they behave next to each
other. Each element has a default rule, e.g. block elements will start on a new line, while the
inline elements will continue on the same line. This behaviour can be changed using the
CSS properties float , position and z-index .
If one block element sits inside another block element, then the outer element is know as the
containing or parent element. It is common to group a number of elements together inside a
<div> (or other block-level) element. E.g., you might group together all of the elements that
form the header of a site (such as the logo and the main navigation). The <div> element
that contains this group of elements is then referred to as the containing (or parent) element.
An element may be nested inside several other block-level elements. The containing
element is always the direct parent of that element.
CSS has the following position schemes that allow you to control the layout of a page:
normal flow, relative positioning, and absolute positioning. You specify the positioning
scheme using the position property. You can also float elements using the float
property.
Document flow
82
Normal flow
Every block element appears on a new line, causing each item to appear lower down on the
page than the previous one. Even if you specify the width of the boxes and there is space for
two elements to sit side-by-side, they will not appear next to each other. This is the default
behaviour (unless you tell the browser to do something else).
In normal flow, each block-level element sits on top of the next one. Since this is the default
way in which browsers treat HTML elements, you do not need a CSS property to indicate
that elements should appear in normal flow, but the syntax would be position: static; .
In the example below, the width property for the heading has not been specified, so you can
see how it stretches the width of the entire browser window by default. The paragraphs are
restricted to 450 pixels wide. This shows how the elements in normal flow start on a new line
even if they do not take up the full width of the browser window. All of the examples
demonstrated in this section, and the rest about document flow, will use a similar HTML
structure.
HTML
Document flow
83
<body>
<h1>Normal flow</h1>
<p>
Every block element (...) do something else).
</p>
<p>
In normal flow, (...) be position: static;.
</p>
</body>
CSS
body {
width: 750px;
font-family: Arial, Verdana, sans-serif;
color: #040404;
background-color: #FCFCFC;
}
h1 {
background-color: #EFEFEF;
padding: 10px;
}
p {
width: 450px;
}
Relative positioning
This moves an element from the position it will be in normal flow, shifting it to the top, right,
bottom, or left of where it would have been placed. This does not affect the position of
surrounding elements; they stay in the position they would be in in normal flow.
Document flow
84
The second paragraph has been pushed down and right from where it would otherwise have
been in a normal flow.
Relative positioning moves an element in relation to where it would have been in normal
flow. E.g., you can move it 10 pixels lower than it would have been in normal flow, or 20% to
the right. You can indicate that an element should be relatively positioned using the
position property with the value relative .
You then use the offset properties ( top , bottom , left or right ) to indicate how far to
move the element from where it would have been in normal flow. To move the box up or
down, you can use either the top or bottom properties. To move the box horizontally you
can use either the left or right properties. The values of the box offset properties are
usually given in pixels, percentages or ems.
The following code is for the example given above:
HTML
Document flow
85
<body>
<h1>Relative positioning</h1>
<p class="relative">
Relative positioning moves \(...\) the value relative.
</p>
<p>
You then use the offset \(...\), percentages or ems.
</p>
</body>
CSS
.relative{
position: relative;
left: 100px;
}
Absolute positioning
This positions the element in relation to its containing element. It is taken out of normal flow,
meaning that it does not affect the position of any surrounding elements (as they simply
ignore the space it would have taken up). Absolutely positioned elements move as users
scroll up and down the page.
![Relative positioning](images/absolute_positioning.png)
In this example, the heading has been positioned at the top of the page and 500 pixels from
its left edge. The width of the heading is set to be 250 pixels wide. The `width` property has
also been applied to the `<p>` elements in this example to prevent the text from overlapping
and becoming unreadable.
The following code is for the example given above:
HTML
<body>
<h1>Absolute positioning</h1>
<p>
In this example, the heading \(...\) and becoming unreadable.
</p>
</body>
CSS
Document flow
86
h1 {
position: absolute;
top: 0px;
left: 500px;
width: 250px;
}
p {
width: 450px;
}
When the position property is given a value of absolute . the box is taken out of normal
flow and no longer affects the position of other elements on the page (they act like it is not
there). The box offset properties ( top , bottom , left or right ) specify where the
element should appear in relation to its containing element.
Fixed positioning
This is a form of absolute positioning that positions the element in relation to the browser
window, as opposed to the containing element. Elements with fixed positioning do not affect
the position of surrounding elements and they do not move when the user scrolls up or down
the page.
Document flow
87
The heading has been placed in the center of the page and 100px from the top of the screen
(the rest appears in normal flow).
In the example below, the heading has been positioned to the top left hand corner of the
browser window. When the user scrolls down the page, the paragraphs disappear behind
the heading. The <p> elements are in normal flow and ignore the space that the <h1>
element would have taken up. Therefore, the margin-top property has been used to push
the first <p> element below where the fixed position <h1> element is sitting.
HTML
<body>
<h1>Fixed positioning</h1>
<p class="top">
This is a form \(...\) down the page.
</p>
<p>
In the example \(...\) sitting.
</p>
</body>
CSS
h1 {
position: fixed;
top: 0px;
left: 0px;
padding: 10px;
margin: 0px;
width: 100%;
background-color: #efefef;
}
.top{
margin-top: 100px;
}
Document flow
88
Floating elements
Floating an element allows you to take that element out of the normal flow and position it to
the far left or right of a containing box. The floated element becomes a block-level element
around which other content can flow.
Document flow
89
The heading has been floated to the left, allowing the paragraph of text to flow around it.
When you use the float property, you should also use the width property to indicate how
wide the floated element should be. If you do not, results can be inconsistent but the box is
likely to take up the full width of the containing element (just like it would in normal flow).
In the example below, a <blockquote> element is used to hold a quotation. It's containing
element is the <body> element. The <blockquote> element is floated to the right, and the
paragraphs that follow the quote flow around the floated element.
HTML
Document flow
90
<body>
<h1>Floating elements</h1>
<blockquote>
I'm the quotest of them all
</blockquote>
<p>
Floating an \(...\) content can flow.
</p>
<p>
When you use \(...\) normal flow\).
</p>
</body>
CSS
blockquote {
float: left;
width: 250px;
font-size: 130%;
font-style: italic;
font-family: Georgia, Times, serif;
margin: 10px 10px 10px 10px;
padding: 10px;
border-top: 1px solid #665544;
border-bottom: 1px solid #665544;
}
Document flow
91
You can use float to place elements side-by-side, if you e.g. would like a design with boxes
next to each other.
When elements are floated, the height of the boxes can affect where the following elements
sit. In the example below, you can see six paragraphs, each of which has a width and a
float property set. The fourth paragraph does not go across to the left hand edge of the
page as one might expect. Rather it sits right under the third paragraph. The reason for this
is that the fourth paragraph has space to start under the third paragraph, but it cannot go
any further to the left because the second paragraph is in the way.
HTML
<body>
<h1>Positioning</h1>
<p>
...
</p>
</body>
CSS
body {
width: 750px;
font-family: Arial, Verdana, sans-serif;
color: #665544;
}
p {
width: 230px;
float: left;
margin: 5px;
padding: 5px;
background-color: #efefef;
}
Document flow
92
Setting the height of the paragraphs to be the same height as the tallest paragraph would
solve this issue, but it is rarely suited to real world designs where the amount of text in a
paragraph or column may vary. It is more common to use the clear property (discussed
further down) to solve this.
Clearing floats
The clear property allows you to say that no element (within the same containing element)
should touch the left or right-hand side of a box. It can take the following values:
left: The left-hand side of the box should not touch any other elements appearing in the
same containing element.
right: The right-hand side of the box will not touch elements appearing in the same
containing element.
both: Neither the left nor right-hand sides of the box will touch elements appearing in
the same containing element.
none: Elements can touch either side.
Document flow
93
In the example below, the fourth paragraph has a class called clear . The CSS rule for this
class uses the clear property to indicate that nothing should touch the left-hand side of it.
The fourth paragraph is therefore moved further down the page so no other element touches
its left-hand side.
HTML
<p class="clear">
</p>
CSS
body {
width: 750px;
font-family: Arial, Verdana, sans-serif;
color: #665544;
}
p {
width: 230px;
float: left;
margin: 5px;
padding: 5px;
background-color: #efefef;
}
.clear {
clear: left;
}
Z-index
When you use relative, fixed or absolute positioning, boxes can overlap. If boxes do overlap,
the elements that appear later in the HTML code sit on top of those that are earlier in the
page.
If you want to control which elements sits on top, you can use the z-index property. Its
value is a number, and the higher the number the closer that element is to the front. E.g., an
element with a z-index of 10 will appear over the top of one with a z-index of 5.
Document flow
94
Inheritance
In CSS, child elements inherit from their parent element, even when the parent element is
not the containing block. An element only inherits properties if the element itself does not
define that property.
In the example below, you can see that the <body> element has the font property set. All
elements within the body will now use the font Georgia, unless something else is specified.
And guess what! <h1> has something else specified, so within the <h1> element,
Helvetica will be the chosen font.
What will the color of the intro element be?
HTML
<body>
<h1>Hello inheritance</h1>
<p class="intro">
Let me introduce you to the world of inheritance. It's important to learn.
</p>
<p>
If a child element has not defined a property, it will take that property from
it's parent.
</p>
</body>
CSS
body{
font-family: Georgia, serif;
color: black;
}
h1{
font-family: Helvetica, sans-serif;
}
.intro{
color: #FAA21B;
}
That is correct, as intro has specified it's own color property, that rule will be chosen
(because it's more specific).
Inheritance
95
Inheritance
96
### More pseudo classes
In the previous chapter you learned the pseudo classes to style something on hover. In this
chapter you will learn some more. We start with refreshing the syntax:
selector:pseudo-class {
property: value;
:nth-child()
With this pseudo class you can style the nth child of a parent element, or any child element
whose numeric position in the series of children matches the pattern an+b. The formula
an+b is placed inside the parentheses, e.g.: nth-child(1n+0) would match every child
element.
The values a and b must both be integers, and the index of an element's first child is 1. A
common use case is to match every other row in a table.
In a list with list elements, the following code would affect every odd numbered list element:
HTML
<ul>
<li>li:nth-child(2n+1)</li>
<li>li:nth-child(odd)</li>
<li>li:nth-child(2n)</li>
<li>li:nth-child(even)</li>
<li>li:nth-child(0n+1)</li>
<li>li:nth-child(1)</li>
<li>li:nth-child(-n+3)</li>
</ul>
CSS
li:nth-child(2n+1){
color: blue;
}
tr:nth-child(2n+1) Represents the odd rows of an HTML table.
r:nth-child(odd) Represents the odd rows of an HTML table.
tr:nth-child(2n) Represents the even rows of an HTML table.
More pseudo-classes
97
tr:nth-child(even) Represents the even rows of an HTML table.
span:nth-child(0n+1) Represents a span element which is the first child of its parent;
this is the same as the :first-child selector.
span:nth-child(1) Equivalent to the above.
span:nth-child(-n+3) Matches if the element is one of the first three children of its
parent and also a span.
:last-child
The :last-child pseudo class represents any element that is the last child element of its
parent.
li:last-child {
color: blue;
}
:required
The :required pseudo class represents any <input> element that has the required
attribute set on it. This allows forms to easily indicate which fields must have valid data
before the form can be submitted.
input:required {
property: value;
}
:focus
The :focus pseudo class is applied when an element has received focus, either from the
user selecting it with the use of a keyboard or by activating with the mouse (e.g. a form
input).
input:focus {
property: value;
}
:checked
More pseudo-classes
98
The :checked pseudo class selector represents any radio ( <input type="radio"> ), checkbox
( <input type="checkbox"> ) or option ( <option> in a <select> ) element that is checked or
toggled to an on state. The user can change this state by clicking on the element, or
selecting a different value, in which case the :checked pseudo class no longer applies to this
element, but will to the relevant one.
/* any "checkable" element */
:checked {
color: green;
}
/* only radio elements */
input[type="radio"]:checked {
color: green;
}
/* only checkbox elements */
input[type="checkbox"]:checked {
color: green;
}
/* only option elements */
option:checked {
color: green;
}
:disabled and :enabled
The :enabled pseudo class represents any enabled element. An element is enabled if it can
be activated (e.g. selected, clicked on or accept text input) or accept focus. The element
also has an disabled state, in which it can't be activated or accept focus.
input:enabled {
color: #green;
}
The :disabled pseudo class represents any disabled element. An element is disabled if it
can't be activated (e.g. selected, clicked on or accept text input) or accept focus. The
element also has an enabled state, in which it can be activated or accept focus.
input[type="text"]:disabled { background: #ccc; }
:valid and :invalid
More pseudo-classes
99
The :valid pseudo class represents any <input> or <form> element whose content
validates correctly according to the input's type setting. This allows to easily make valid
fields adopt an appearance that helps the user confirm that their data is formatted properly.
The :invalid pseudo class represents any <input> or <form> element whose content fails
to validate according to the input's type setting. This allows you to easily have invalid fields
adopt an appearance that helps the user identify and correct errors.
HTML
<form>
<label>Enter a URL:</label>
<input type="url" />
</form>
CSS
input:invalid {
background-color: #ffdddd;
}
input:valid {
background-color: #ddffdd;
}
:lang()
The :lang pseudo class matches elements based on the language the element is determined
to be in. In HTML, the language is determined by a combination of the lang attribute, the
<meta> element, and possibly by information from the protocol (such as HTTP headers).
HTML
<div lang="en"><q>This English quote has a <q>nested</q> quote.</q></div>
<div lang="fr"><q>This French quote has a <q>nested</q> quote.</q></div>
<div lang="de"><q>This German quote has a <q>nested</q> quote.</q></div>
CSS
:lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
:lang(fr) > q { quotes: '« ' ' »'; }
:lang(de) > q { quotes: '»' '«' '\2039' '\203A'; }
More pseudo-classes
100
More pseudo-classes
101
Overflow
The overflow property specifies whether to clip content, render scrollbars or just display
content when it overflows its block level container.
Using the overflow property with a value different to visible (its default) will create a new
block formatting context. This is technically necessary — if a float intersected with the
scrolling element it would forcibly rewrap the content. The rewrap would happen after each
scroll step, leading to a slow scrolling experience.
In order for the overflow property to have an effect, the block level container must either
have a bounding height (height or max-height) or have white-space set to nowrap.
The overflow property can have four values:
visible: Default value. Content is not clipped, it may be rendered outside the content
box.
hidden: The content is clipped and no scrollbars are provided.
scroll: The content is clipped and desktop browsers use scrollbars, whether or not any
content is clipped. This avoids any problem with scrollbars appearing and disappearing
in a dynamic environment. Printers may print overflowing content.
auto: Depends on the user agent. Desktop browsers like Firefox provide scrollbars if
content overflows.
You write it as follows, inside a rule:
/* Content is not clipped */
overflow: visible;
/* Content is clipped, with no scrollbars */
overflow: hidden;
/* Content is clipped, with scrollbars */
overflow: scroll;
/* Let the browser decide */
overflow: auto;
Overflow
102
Web and multimedia
Webpages can be enriched by using some multimedia content. With multimedia, we mean
images, video and audio. These can create a better user experience, and enhance the
content. HTML and CSS files are usually not that large, only taking up some kilobytes of
space. With multimedia content, the file sizes increase drastically. To ensure the best
possible user experience, the content should be scaled for the use, e.g. there is no need to
load a 3000x2000 pixel image on a 1080x1920 pixel screen. Media files should not be larger
than necessary, as users have different Internet speeds, and some are even using the
cellular network, potentially making large files expensive to download.
Web and multimedia
103
Images
Images can enhance the user experience of a webpage, explain a text or tell a story of it's
own. But there are many things you need to think about when choosing an image. For one, it
should be fitting to the context, and you need to have the right permissions to use it. There
are several free stock photo websites, or you can find images that are royalty free (creative
commons license). Below is an introduction to the <img> element, and some important
image formats.
The image element
In order to display an image on the web, you need to use the <img> element (this element
should not be closed). Inside the element, you need at least the src and alt attributes.
The src attribute tells the browser where to find the image file, which usually is a relative
URL. The alt attribute provides a text description of the image. This text will be displayed
when you can't see it, or read by screen readers and search engines. If the image is purely
decorative, the alt attribute should still be present, but the quotes should be be left empty.
Images should be stored in a images subfolder, helping you organise your site structure.
When your site grows, it might be necessary to add subfolders inside the images folder, e.g.
products and icons.
<img src="images/coffeetable.jpg" alt="A cup of coffee resides on a coffee table">
There are three other attributes you should know about, these are the title , height and
width attributes. title provides additional information about the image. Most browsers
will display the content of this attribute in a tooltip when the user hovers over the image.
height and width specify the size of the image. They can be pixels or percentage (or
other units of measurement). Images often take longer than HTML code to load, it would
hence be a good idea to specify the size of the image so that the browser can render the
rest of the content and leave space for the image. Doing this will ensure that the text doesn't
"jump" when the image is finally loaded.
<img> is a inline element, thus it will not be placed on a new line. Where you locate the
<img> element will affect how the image is displayed. If the element is followed by a block
element, e.g. <p> or <h1> , then the block element will be placed on a new line after the
image. If the <img> element sits inside a block element, text and other inline elements will
flow around the image.
Images
104
To control the alignment of an image, you should CSS, and not the old align attribute,
which is not a part of the HTML5 specification.
Image file formats
When you are using images on the web, you should save the image in the right format and
the right size. Not all image formats are relevant for the web. In the follow section, you will
be presented with those that are relevant.
JPEG
If you have images with many different colors, e.g. photographs, you should JPEG. It is a
lossy file format, meaning that you will have a loss in quality when compressing it. This is
often not a problem with photographs, are there are many details. It is, however, a problem
with stylized images, e.g. graphs, illustrations and logos, who have few colors. Saving such
images in JPEG often leads to artifacts, which doesn't look good.
It should also be noted that when opening a JPEG and saving it, e.g. in Adobe Photoshop,
the image will loose quality each time it is saved. JPEG does not support transparency.
PNG
PNG is a lossless format, meaning that the quality of the isn't reduced even though the file is
compressed (saved) again. This works well for images with few colors, e.g. illustrations,
graphs and logos, but not photographs. Using PNG on photographs will result in a large file
size.
PNGs can have a transparency between 100% and 0%, making it a good choice for
displaying logos.
GIF
You may know GIF from sites like imgur.com and reddit.com. It is also a lossless format, but
mostly it can only use a maximum of 256 different colors. This makes GIF also a format for
displaying logos. GIFs can also have animations.
SVG
SVG is, unlike the other formats, a vector format. That means that the images are not stored
as pixels, so they can be resized indefinitely without quality loss. This is ideal for logos,
illustrations and diagrams. You can't store a photograph in a SVG as there are too many
Images
105
details in a photograph.
Figure and figure caption
In HTML5, the <figure> element was introduced. This contains an image element and the
associated caption. You can have more than one image inside the <figure> element, as
long as they share the same caption. The caption is enclosed with the <figcaption>
element. E.g.:
<figure>
<img src="images/it2805.png" alt ="The IT2805 logo">
<br>
<figcaption>
This is the IT2805 logo
</figcaption>
</figure>
If you want to read more about image file types, I recommend reading the answer on this
Stack Overflow question.
Images
106
Video
The <video> element lets you embed a video on your site. You do so by writing:
<video src="path/to/videofile.mp4" controls>
<p>Your browser doesn't support HTML5 video.</p>
</video>
As you see, the <video> element have two attributes, src and controls . The src , as
with images, is the path to the video file. The controls attribute is a boolean attribute,
meaning that when present the video controls are accessible (usually by hovering over the
video element with your mouse). If you remove the controls attribute, users will not be able
to play or pause the video.
The paragraph within the element is the fallback content, which will be displayed if the
browser doesn't support the <video> element.
Not at browsers support all video formats. Thus you may need a fallback video. This is done
by referencing several files, e.g.:
<video controls>
<source src="path/to/videofile.mp4" type="video/mp4">
<source src="path/to/videofile.ogg" type="video/ogg">
<p>Your browser doesn't support HTML5 video.</p>
</video>
As you can see, instead of using the src attribute, the <source> element is used instead.
As of February 2016, the following browser support these video formats:
Browser MP4 WebM Ogg
Internet explorer Yes No No
Chrome Yes Yes Yes
Firefox Yes Yes Yes
Safari Yes No No
Opera Yes Yes Yes
Microsoft Edge Yes Yes No
Why some formats are supported and others aren't is outside the scope of this course. You
can read more about supported video formats here.
Video
107
You already know about src and controls . Some other attributes you should know about
are autoplay , height , width , loop , muted and poster .
autoplay is a boolean attribute, and if present the video automatically starts to play as soon
as it can, without stopping to finish loading the data.
height and width behaves like with the <img> element. The height and width should be
the same dimensions as the video file.
loop is a boolean attribute that will seek back to start when the video reaches the end.
muted is a boolean attribute which sets the default setting of the audio to silenced.
poster takes a URL to an image as a value. This image is displayed as a poster frame until
the user plays or seeks. If this attribute is not present, the first frame of the video will be
displayed. This attribute is used as shown:
<video controls poster="images/videofileposter.jpg">
<source src="path/to/videofile.mp4" type="video/mp4">
<source src="path/to/videofile.ogg" type="video/ogg">
<p>Your browser doesn't support HTML5 video.</p>
</video>
Video
108
Audio
The <audio> element lets you play sound on your site. You do so by writing:
<audio src="path/to/audio.mp3" controls>
<p>Your browser doesn't support the HTML5 audio element.</p>
</audio>
As with the <video> element, the <audio> element also takes the attributes src and
controls , and they behave exactly the same. The src is the path to the file, and
controls display the controls, allowing the user to play and pause the audio, and control
the audio.
If you need a fallback audio, you can use the `<source>` element. You would then write:
<audio controls>
<source src="path/to/audio.mp3" type="audio/mp3">
<source src="path/to/audio.oog" type="audio/oog">
<p>Your browser doesn't support the HTML5 audio element.</p>
</audio>
As of February 2016, the following browser support these video formats:
Browser MP3 Wav Ogg
Internet explorer Yes No No
Chrome Yes Yes Yes
Firefox Yes Yes Yes
Safari Yes Yes No
Opera Yes Yes Yes
Microsoft Edge Yes Yes No
Other notable attributes are autoplay , loop and muted . These are all the same as with
their video counterpart. autoplay starts the audio automatically, loop seeks back to the
start of the audio when it reaches the end, and muted sets the default volume to silenced.
You can read more about the audio element here.
Audio
109
Forms
Forms allow users to send data to a server through a web site, e.g. sign up for a news letter,
register an appointment at the doctors office or signing up for an account. The data doesn't
have to be sent to the server, it can also be used by the web site on the client, as we will do
in this course.
The form consist of one or more input fields (text fields, dropdown menus, checkboxes or
radio buttons) called widgets. These are often paired with a label. At the end of the form you
usually find a submit button, making it possible for the user to submit the provided data.
Forms and validation
110
The form element
All HTML forms is encapsulated in the `<form>` element.
<form action="index.html" method="post">
</form>
It is a block element, and a container like a <div> . As you can see, it has two attributes.
The action defines the location (URL) where the form's data should be sent. The method
defines which HTTP method to send the data with (GET or POST). The action and method
attributes will not be used in this course, but you can read more about sending data to the
server here here.
The form element
111
Form structure
Form elements can be used outside the form element, but they will not do anything on their
own, and the behaviour must be customised with JavaScript. I.e. you need to add an event
listener that triggers on changes in the element (more on that in later chapters). In this
chapter we will only concern ourselves with the <form> element and elements inside it.
Presented here are the elements <fieldset> , <legend> , <label> , <output> and
<input> .
Grouping and labeling
The element <fieldset> is used to create groups of elements within a form that share the
same purpose. This can be to group radio buttons together, or several input fields that
belong together, e.g. all the fields that make up the address (name, street address, city, zip
code, country). A <fieldset> can be labeled with a <legend> element. This element
describes the purpose of the <fieldset> . Assistive technologies, such as screen readers,
use <legend> to label widgets inside the <fieldset> element.
The <label> element is used to label a widget, describing what the content for the form
element should be, e.g. name or e-mail. The <label> can have a attribute for , which links
the label to the widget with the same id . Using the for attribute lets assistive
technologies read your page. That is not the only reason for using the for attribute though.
With it, users can click the label to active the corresponding widget. This is especially useful
for radio buttons and checkboxes.
You can see <fieldset> , <legend> and <label> used below, together with the <input>
element. If you want the label to be placed after the <input> element, you should move it
below the element, but within the <label> element. <br> is used to place the next
<label> on a new line, rather than on the same line. This is not done for the widgets city
and zip, thus they will be on the same line.
Form structure
112
<form>
<fieldset>
<legend>What is your address?</legend>
<label for="fullname">
Full name:
<input type="text" id="fullname" name="address">
</label>
<br>
<label for="street">
Street:
<input type="text" id="street" name="address">
</label>
<br>
<label for="city">
City:
<input type="text" id="city" name="address">
</label>
<label for="zip">
Zip:
<input type="number" id="zip" name="address">
</label>
</fieldset>
</form>
Output
The <output> is used to store the result from a calculation, e.g. from several other <input>
elements. You can use the for attribute to list the IDs of other elements that contribute
input values to the calculation. These IDs must be divided by a space
<output for="income tax"></output>
Input
The <input> element is the most essential element in the form, as it is the source of
information from the user. This element can change radically, dependent on what value the
type attribute is given. In the example below, the attribute text is given the value text ,
which will give a text field the user can fill out.
<input type="text" name="street" id="street">
Form structure
113
The value for the type attribute can be categorised into four categories: single line text
fields, controls without text input, time and date controls, and buttons. The <input> element
supports many attributes, but not all are relevant for all type values. Below is a table
summarising the relevant attributes.
<table>
<tr>
<th>Type</th>
<th>Description</th>
<th>Relevant attributes</th>
</tr>
<tr>
<td colspan="3" style="text-align: center;">Single line text fields</td>
</tr>
<tr>
<td>text</td>
<td>A basic text field</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#maxlength">maxlength</a>,
<a href="#pattern">pattern</a>, <a href="#list">list</a>, <a href="#placeholder">place
holder</a>, <a href="#">required</a></td>
</tr>
<tr>
<td>email</td>
<td>A field for one or more e-mail addresses</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
maxlength">maxlength</a>, <a href="#multiple">multiple</a>, <a href="#pattern">pattern
</a>, <a href="#placeholder">placeholder</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>password</td>
<td>This value makes the text field obscured</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
maxlength">maxlength</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>search</td>
<td>Creates a field for entering search strings</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
maxlength">maxlength</a>, <a href="#pattern">pattern</a>, <a href="#placeholder">place
holder</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>tel</td>
<td>Creates a field for entering telephone numbers</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
maxlength">maxlength</a>, <a href="#pattern">pattern</a>, <a href="#placeholder">place
holder</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>url</td>
<td>Creates a field for editing an absolute URL</td>
Form structure
114
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
maxlength">maxlength</a>, <a href="#pattern">pattern</a>, <a href="#placeholder">place
holder</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">Controls without text input</td>
</tr>
<tr>
<td>checkbox</td>
<td>A checbox</td>
<td><a href="#checked">checked</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>file</td>
<td>A control that lets the user select a local file</td>
<td><a href="#accept">accept</a>, <a href="#multiple">multiple</a>, <a href="#requ
ired">required</a></td>
</tr>
<tr>
<td>number</td>
<td>A control for entering a number</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
max">max</a>, <a href="#min">min</a>, <a href="#required">required</a>, <a href="#step
">step</a></td>
</tr>
<tr>
<td>radio</td>
<td>Only one radio button in a group can be selected at any given time</td>
<td><a href="#checked">checked</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>range</td>
<td>A control for entering a number whose exact value is not important</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
max">max</a>, <a href="#min">min</a>, <a href="#required">required</a>, <a href="#step
">step</a></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">Time and date controls</td>
</tr>
<tr>
<td>date</td>
<td>A control for entering the date (year, month, day)</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
max">max</a>, <a href="#min">min</a>, <a href="#required">required</a></td>
</tr>
<tr>
<td>time</td>
<td>A control for entering a time</td>
<td><a href="#autocomplete">autocomplete</a>, <a href="#list">list</a>, <a href="#
max">max</a>, <a href="#min">min</a>, <a href="#required">required</a></td>
</tr>
<tr>
Form structure
115
<td colspan="3" style="text-align: center;">Buttons</td>
</tr>
<tr>
<td>button</td>
<td>A push button with no default behavior</td>
<td>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormaction">formaction</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormenctype">formenctype</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormmethod">formmethod</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormnovalidate">formnovalidate</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormtarget">formtarget</a>
</td>
</tr>
<tr>
<td>reset</td>
<td>A button that resets the contents of the form to default values</td>
<td>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormaction">formaction</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormenctype">formenctype</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormmethod">formmethod</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormnovalidate">formnovalidate</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormtarget">formtarget</a>
</td>
</tr>
<tr>
<td>submit</td>
<td>A button that submits the form</td>
<td>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormaction">formaction</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormenctype">formenctype</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormmethod">formmethod</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormnovalidate">formnovalidate</a>,
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-f
ormtarget">formtarget</a>
</td>
</tr>
</table>
Form structure
116
The table above is a subset of the table found at [How to structure an HTML form, from
Mozilla Developer Network
If the browser doesn't support the value in the type attribute, the input field will be rendered
as a text input.
Below is an explanation for the attributes with examples. The attributes for the buttons are
linked to an external resource, as they are out of scope for this course.
<span id="accept">accept</span>
If the value of the type attribute is file, then this attribute will indicate the types of files that
the server accepts, otherwise it will be ignored. The value must be a comma-separated list
of unique content type specifiers:
A file extension starting with the STOP character (e.g. .jpg, .mp4, .wav)
audio: representing audio files
video: representing video files
image: representing image files
<label for="file">Choose a file to upload:
<input type="file" name="file" id="file" accept="image/*">
</label>
<label for="file">Choose a file to upload:
<input type="file" name="file" id="file" accept=".jpg, .png">
</label>
<span id="autocomplete">autocomplete</span>
This attribute indicates whether the value of the control can be automatically completed by
the browser.
<label for="e-mail"> E-mail:
<input type="email" name="e-mail" id="e-mail" autocomplete>
</label>
<span id="checked">checked</span>
When the value of the type attribute is radio or checkbox, the presence of this Boolean
attribute indicates that the control is selected by default, otherwise it is ignored.
Form structure
117
<label for="alligator"> Are you an alligator?
<input type="checkbox" name="alligator" id="alligator" checked>
</label>
<span id="list">list</span>
Identifies a list of pre-defined options to suggest to the user. The value must be the id of a
<datalist> element in the same document. The browser displays only options that are valid
values for this input element.
<label for="language">Select your preferred programming language:
<input type="text" name="language" list="prog-lang">
</label>
<datalist id="prog-lang">
<option value="Python"></option>
<option value="JavaScript"></option>
<option value="Java"></option>
<option value="Elm"></option>
<option value="Haskell"></option>
</datalist>
The most known use case for this is an autocompletion list for text fields. The values
available are set with <option> elements within the <datalist> element.
<span id="max">max</span>
The maximum (numeric or date-time) value for this item, which must not be less than its
minimum (min attribute) value.
<label for="class"> What class are you in?
<input type="number" name="class" id="class" max="5">
</label>
<span id="maxlength">maxlength</span>
If the value of the type attribute is text , email , search , password , tel , or url , this
attribute specifies the maximum number of characters that the user can enter.
<label for="e-mail">What is your e-mail?
<input type="email" name="email" id="email" maxlength="40">
</label>
Form structure
118
<span id="min">min</span>
The minimum (numeric or date-time) value for this item, which must not be greater than its
maximum (max attribute) value.
<label for="class"> What class are you in?
<input type="number" name="class" id="class" min="1">
</label>
##### <span id="multiple">multiple</span>
This Boolean attribute indicates whether the user can enter more than one value. This
attribute applies when the type attribute is set to email or file , otherwise it is ignored.
<label for="file">Choose a file:
<input type="file" name="file" id="file" multiple>
</label>
<span id="pattern">pattern</span>
A regular expression (RegEx) that the control's value is checked against. The regular
expression language is the same as JavaScript RegExp algorithm, with the 'u' parameter
that makes it treat the pattern as a sequence of unicode code points. The pattern is not
surrounded by forward slashes. In the example below (borrowed from w3schools.com), the
input can only be three letter long, no numbers or special characters.
<label for="iata">Airport code:
<input type="text" name="iata-code" id="iata"
pattern="[A-Za-z]{3}" title="Three letter IATA airport code">
</label>
<span id="placeholder">placeholder</span>
A hint to the user of what can be entered in the control . The placeholder text must not
contain carriage returns or line-feeds.
<label for="email">What is your e-mail?
<input type="email" name="email" id="email" placeholder="your@domain.com">
</label>
Form structure
119
Note: Do not use the placeholder attribute instead of a <label> element. The <label> is
used to describe the role of the form element, and the placeholder attribute is a hint about
the format that the value should be. There are cases in which the placeholder attribute is
never displayed to the user.
<span id="required">required</span>
This attribute specifies that the user must fill in a value before submitting a form.
<label for="password">What is your e-mail?
<input type="password" name="password" id="password" required>
</label>
<span id="step">step</span>
Works with the min and max attributes to limit the increments at which a numeric or datetime value can be set. It can be the string any or a positive floating point number. If this
attribute is not set to any, the control accepts only values at multiples of the step value
greater than the minimum.
<label for="income">
<input type="range" name="income" id="income" step="1000" min="0" max="100000">
</label>
name
In addition to the above mentioned attributes, all input elements can, and should, take the
attribute name . This attribute is used when sending data with GET or POST, as the name for
that input element. E.g.: You will see that radio buttons in the same group will share the
same name . Thus, the data that is sent to the server will be labeled with that name, followed
by the value provided by the different radio buttons.
Textarea
The <textarea> element is a multiline text field. It works like a single line text field, except it
allows line break in the typed text by the user. It also accepts three extra attributes to control
the rendering across several lines:
Form structure
120
Attribute
Default
value
Description
cols 20
The visible width of the textarea, in average character
widths
rows The number of visible text lines in the textarea
wrap soft
Indicates how the texarea wraps text, either hard or
soft .
Unlike the <input> element (which is a self closing element) the <textarea> is a regular
element that can contain text content child elements (e.g. <code> ). The <textarea>
element only accepts text as content. Any code or markup (HTML) will be rendered as plain
text.
<form>
<label for="text">Write your story:</label>
<textarea name="text" rows="8" cols="80" wrap="soft">
This is my story, and it's about web technologies!
</textarea>
</form>
Note that since the <textarea> element is an element with opening and closing tags, the
value is written inside the element, and not as the value to the value attribute.
Select, option and optgroup
The <select> element lets you build select boxes (sometimes also known as combo
boxes). A select box is a widget that lets a user choose one or more predefined values. Each
value inside the select box is defined with an <option> element and those elements can be
grouped inside <optgroup> elements.
<form>
<label for="language">Choose a programming language</label>
<select id="language" name="language">
<option value="python">Python</option>
<option>JavaScript</option>
<optgroup label="functional">
<option>Haskell</option>
<option>Elm</option>
</optgroup>
</select>
</form>
Form structure
121
If an <option> element is set with a value attribute, that attribute's value is sent when the
form is submitted. If the value attribute is omitted, the content of the <option> element is
used as the select box's value.
On the <optgroup> element, the label attribute is displayed before the values, but even if it
looks somewhat like an option, it is not selectable.
Form structure
122
Form validation
You should always validate data on your server. But validating the data before the user gets
to send it ensures that the data sent is what you're asking for, and can handle. Also, it gives
the user feedback earlier that they need to fix something with their input.
By using the correct type attribute, the form will not be validated before the user have
fulfilled the requirement for that attribute (e.g. the value of an input element with the type
attribute set to the value email must be a legal e-mail address).
To help the user see where the error have been made, you can use the CSS pseudo-classes
:invalid and :valid .
HTML
<form>
<label for="email">E-mail:</label>
<input type="email" id="email" name="email" required>
<button>Submit</button>
</form>
CSS
input:invalid{
border: 1px solid red;
}
input:valid{
border: 1px solid green;
}
In the above example you can see that the required attribute is present. This ensures that
the form can't be submitted until that input element have a value. If the input element have
no value, the user will be prompted by a message stating that it needs a value. pattern ,
maxlength , min and max can also be used to validate the content of an input element.
Form validation
123
How to design a form
When designing a form, you should have one goal in mind: The user should be able to
complete the form quickly and without confusion. This saves the user's time, and it limits the
amount of data submitted in a "wrong" (from the developer's view) way.
Inside the <form> element you can use the full power of the HTML markup language,
meaning you can use <h1> , <h2> , ..., <h6> to create headlines, <p> and <br> to break
the lines, and <b> , <i> and <u> , to mention some examples.
<form>
<h1>Register user</h1>
<p>Fill out this form to register your user.</p>
<h2>Personalia</h2>
<p>
<label for="name"><b>Your name:</b></label><br>
<input type="text" name="name" id="name" autofocus>
</p>
<p>
<label for="email"><b>Your e-mail</b></label><br>
<input type="email" name="email" id="email">
</p>
<h2>About you</h2>
<p>
<label for="name"><b>Write about you</b></label><br>
<textarea name="name" rows="8" cols="80">
</textarea>
</p>
</form>
At this point I would recommend reading Nick Babich's Medium post "Designing More
Efficient Forms: Structure, Inputs, Labels and Actions". He talks about how to design a form
so that user's have an easier time completing it. In the paragraphs below I will further talk
about useful attributes you can use to enhance the user experience.
If your form is the main focus on your page, you could use the attribute `autofocus` in the
first input element, so that the users can start adding information as soon as they enter the
page. E.g. at google.com, the most important feature is the search form. It then makes
sense to add the `autofocus`, allowing users to start searching at once. If your form is a nonimportant part of the page, e.g. it's a contact form on the bottom of an article, you should not
use the `autofocus` attribute.
How to design a form
124
<form>
<label for="search">Search:
<input type="text" name="query" id="search" autofocus>
</label>
</form>
If you have some input elements that the users shouldn't add information to until they have
completed some other input elements, you could use the attribute `disabled` on those
elements. If you later want to remove the attribute, you need to use JavaScript.
<form>
<label for="length">Length:
<input type="number" name="length" id="length">
</label>
<label for="width">Width:
<input type="number" name="width" id="width">
</label>
<label for="area">Area:
<input name="area" disabled></input>
</label>
</form>
You can give an element a default value using the value attribute. You should use this with
caution as users can skip pre-entered values. But it could help the user if you e.g. fill out the
location based on geolocation.
<form>
<label for="city">City:
<input type="text" name="city" value="Trondheim">
</label>
</form>
Lastly, if you want to have control over how the user navigate a form using the tab button,
you can use the global attribute tabindex . Some users will want to move trough the form
more quickly, thus using their tab button. Browsers will navigate trough the form in the order
they are listed in the HTML document. If you for some reason don't want this, the tabindex
will let you decide the order.
The attribute can take three different values:
A negative value means that the element should focusable, but shouldn't be reachable via
sequential keyboard navigation (tab button).
0 means that the element should be focusable and reachable via sequential keyboard
navigation, but its relative order is defined by the platform convention.
How to design a form
125
A positive value means that the element should be focusable and reachable via
sequential keyboard navigation. Its order is defined by the value of the attribute: the
sequential follow the increasing number of the tabindex . If several elements share the
same tabindex , the order follows their position in the document.
An element with a 0 value, an invalid value, or no tabindex value should be placed after
elements with a positive tabindex .
<form>
<label for="name">Full name
<input type="text" name="name" id="name" tabindex="1">
</label>
<label for="email">Full name
<input type="email" name="email" id="email" tabindex="2">
</label>
</form>
How to design a form
126
Responsive web design
An important principle of software development is <i>don't repeat yourself</i>, that means
that the code that can be shared should be shared (this is not true for all instances, but that's
a discussion for another time). In our age of laptops, tablets, phones and phablets, our
webpages should behave different on each device in order to create an optimal user
experience. E.g. should you use a desktop layout on your phone, the font size could be too
small or large to give an optimal reading experience. Previously this was fixed using different
stylesheets or different versions of the webpage for smaller screens. This obviously defy the
DRY principle. With CSS3 we got a feature called media queries. With media queries, we
can introduce breakpoints in our design, and share the code that are used in both mobile
and desktop design.
Why not just use percentage when defining sizes? Well, using percentage instead of
You write a media query as such, in your CSS document:
p{
font-size: 22px;
}
@media (max-width: 600px){
p{
font-size: 14px;
}
}
The media query starts with @media , followed by an expression that resolves to either
true or false . There can be zero or more expressions in the media query. For the media
query to be applied, all expressions must resolve to true. When the media query is applied, it
follows the rules for normal cascading. In the example above the expression is max-width:
600px , meaning that the style within this media query will be applied when the browser
window width is max 600px (600px and less).
Media queries are case insensitive. Media queries involving unknown media types are
always false.
max-width is not the only expression there is. Below you will find an overview over the most
important expressions. These are divided into media types and media features. The maxwidth seen in the example is a media feature.
Responsive web design
127
Responsive web design
128
Media types
You have perhaps seen in a HTML document, when you include a CSS document, there is a
media attribute in the link tag. This media attribute is the same as the media types you can
use with media queries.
<link rel="stylesheet" media="screen" href="/css/master.css">
There are three media types you should know about in this course.
all: Suitable for all devices.
screen: Intended for computer screens.
print: Intended for paged material and for documents viewed on screen in print preview
mode.
If you want a style only to be applied on a screen (e.g. laptop, phone, tablet) you should use
the `screen` media type. An example could be:
@media screen {
body{
background-color: \#FFFFFF;
}
}
As most websites are viewed on a screen, it's perhaps not necessary to add the screen
media type. But there are other types, i.e. print , and there might be some styles that
would make the printed page harder to read, thus it's a good idea to use the screen type.
The use case for the `print` type would be when you're going to print a webpage, e.g. an
article. Then you don't want the navbar to take up any space, and perhaps other features
on the site as well. You can solve this by writing:
@media print {
#nav-area {display: none;}
}
Media queries with the media type `all` will be applied for both screen and print.
Media types
129
@media all {
body{
font-size: 22px;
}
}
Media types
130
Media features
Most media features can be prefixed with min- or -max to express minimum and
maximum constraints. With the features below height , width and resolution can be
used with the min- and max- prefixes.
height: Viewport height
width: Viewport width
resolution: Pixel density of the output device
orientation: Orientation of the viewport
width is used to style conditionally based on the width of the viewport (browser window).
This must be specified with a number and a measurement for length (px, em).
/* Exact width */
@media (width: 300px) {
...
}
/* Viewport width at least */
@media (min-width: 600px) {
...
}
/* Viewport width at most */
@media (max-width: 1200px) {
...
}
height is used to style conditionally based on the height of the viewport (browser window).
This must be specified with a number and a measurement for length (px, em).
Media features
131
/* Exact width */
@media (height: 300px) {
...
}
/* Viewport width at least */
@media (min-height: 600px) {
...
}
/* Viewport width at most */
@media (max-height: 800px) {
...
}
resolution is used to style conditionally based on the pixel density of the output device.
@media print and (min-resolution: 300dpi) {
...
}
portrait is used to style conditionally based on the orientation of the viewport. It can either
be portrait or landscape .
@media (orientation: portrait) {
...
}
There is also a lot of other media features, but they are less important and used. You can
read about them at Mozilla Developer Network.
Media features
132
Logical operators
You can create complex media queries using the logical operators and , not , and only .
The and operator is used to combine multiple media features together into a single media
query. Each expression must resolve to true for the query to be true.
@media (max-width: 600px) and (orientation: landscape){
...
}
The not keyword applies to the whole media query and returns true if the media query
would otherwise return false (such as monochrome on a color display or a screen width of
600px with a min-width: 700px feature query). A not will only negate the media query it is
applied to and not to every media query if present in a comma-separated list of media
queries. The not keyword cannot be used to negate an individual feature query, only an
entire media query. For example, the not is evaluated last in the following query:
@media not all and (monochrome) {
...
}
This means that the query is evaluated like this:
@media not (all and (monochrome)) {
...
}
... rather than like this:
@media (not all) and (monochrome) {
...
}
The only keyword prevents older browsers that do not support media queries with media
features from applying the given styles
@media only screen {
...
}
Logical operators
133
If you want to read more about responsive webdesign, I would recommend the two articles
from Smashing Magazine and Responsive design.is.
Logical operators
134
JavaScript introduction
We will now enter into a new region of web development, programming. What we have done
so far is markup and styling, but with the programming language JavaScript we can create
dynamic web applications that react on user interaction in a far more flexible way.
JavaScript was created in 10 days in May 1995 by Brendan Eich. The name JavaScript have
nothing to do with Java, but was chosen as a marketing move, to ride on Java's fame wave.
JavaScript is the language of the web, implemented in all major browsers. And as history
progresses, the implementations also converge on one standard.
In the following sections I will write examples with code. In some instances, these code
blocks will be followed by the characters ">>" on a new line. This means that the output from
the code is whatever follows the ">>" characters.
I would also recommend that you pick up the book Eloquent JavaScript by Marijn
Haverbeke. You can find the ebook for free here, or by it from Amazon, Bookdepository, or
wherever you by your books. Reading the book is time well spent when you try to learn
JavaScript, either for the first time, or the nth time. The book was consulted while writing this
curriculum.
Introduction to JavaScript
135
How and where to write JavaScript
JavaScript, when using it with web pages as we are in this course, can either be written
inside the HTML document, i.e. embedded, or written in a different file, i.e. external. It
doesn't really matter if you have embedded or external code, other than what's easy to read
and maintain. JavaScript code is written inside the <script> elements, which can be placed
in the <head> element or the <body> element.
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
console.log('The code can be here')
</script>
</head>
<body>
...
<script type="text/javascript">
console.log('Or the code can be here')
</script>
</body>
</html>
When the browser is rendering a HTML document, it will start at the top and read trough it.
So in the example above the first console.log() function will be run first. Where you place
the code in the HTML document though have an importance. In JavaScript, you can
reference and manipulate HTML elements. But that element must be rendered before
JavaScript can access it.
I.e. if we in the first script tag reference an element that occurs later in the document, the
reference fails because the element doesn't exist yet. As I said in my first lecture in 2015:
You can't yell at a baby before it is born
On the other hand, if we reference the element after it has been rendered, we won't get
those problems, i.e. in the second script tag.
We can overcome the problem of the script being executed before the DOM is rendered by
encapsulating the code in window.onload = function(){ console.log(You code goes here) } .
In a HTML document, this would look like:
How and where to write JavaScript
136
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
window.onload = function(){
console.log("I'm waiting for the document to load")
}
</script>
</head>
<body>
...
</body>
</html>
If you want to separate your HTML and JavaScript, as I would most often recommend, you
use the script tag's src attribute to reference the script. The JavaScript file must end
with ".js".
<!DOCTYPE html>
<html>
<head>
</head>
<body>
...
<script type="text/javascript" src="path/to/script.js"></script>
</body>
</html>
Inside the file, in this case script.js, you can write JavaScript as you would inside the
script element. There's no need for special markup or declaring the JavaScript version. A
simple script could then look like:
console.log("I'm all that's left in this world.")
In the examples above I've used the JavaScript function console.log() . This is similar to
Python's print function. You can use console.log() to print data to the developer console
in your browser. This comes in handy when you want to see what's happening different
places in your code. In chapter 13 you will learn how to manipulate the DOM, to display your
data to the user. As of now we will concern ourself with learning JavaScript, and all it's
wonders. There's a lot to cover, so hang tight!
How and where to write JavaScript
137
Comments
Similar to HTML's comment <!-- Comment --> , you can write comments in JavaScript that
the interpreter will ignore when executing the code. Comments are create when you want to
explain other humans what's going on in your very complex code. In JavaScript we have two
options for writing comments.
You can use two slash characters ( // ). This comment will only go to the end of the line.
Useful for one-line comments.
// This comment only goes to the end of the line
If you want to comment out a section of your code or text, you can use /* and */ .
Everything between these two will be commented out.
/*
Let's just ignore
this block of text
and this console.log() statement
console.log('I will not be printed')
*/
Your comments should explain what's going on in the code, making it easier for others to
understand and maintain your code.
Comments
138
Data types
JavaScript has three basic data types that are the building blocks of the language. These
are:
Strings
Numbers
Boolean
Strings
Strings are any grouping of characters that are surrounded by single (' ... ') or double (" ... ")
quotes. A string must start and end with the same kind of quotes. E.g. 'This is not a valid
string" is not a valid string. "This is a valid string though" on the other hand is a valid
string.
Sometimes you need to use the ' character inside the string, e.g. if you need to write
"she's a strong girl" . Since the only quote type that can end a string started with a double
quote, you can use as many single quotes inside the string as you like, and vice versa.
Sometimes you want to combine two strings, this can be achieved using the operator +
between the two strings. This operation is called concatenation. It's most useful together
with a variable, as you'll see later.
"This is a " + "string"
>> This is a string
Note the space at the end of the first string. Using the + operator will concatenate the
strings as they are, not adding any characters between the two strings.
Numbers
Numbers in JavaScript are all numeric values, both integers and decimals. They are written
e.g. 42 , without any quotes. Decimal numbers are written with a punctuation mark (.), e.g.
42.4 .
Data types
139
You can also write very big or small numbers, using the scientific notation by adding an "e"
(exponent), followed by the exponent of the number. E.g. 2.998e8 , which is equal to 2.988 *
10^8 = 299 800 000.
There are three special numbers in JavaScript that don't behave as numbers. They are:
Infinity
-Infinity
NaN
Infinity and -Infinity (minus infinity) represents the positive and negative infinities. Infinity + 1
is still infinity, and so on. Using Infinity isn't mathematically solid, and will quickly lead to
NaN .
NaN stands for "not a number", even though it has the type of value. You'll get this result
when you try to calculate 0 / 0 (zero divided by zero), or any other numeric operation that
don't yield a meaningful result.
JavaScript uses 64 bits to store numbers in the memory. Some of this bits goes to telling if
the number is negative or positive, and the location of the decimal point. If you try to get a
number that's larger than JavaScript's maximum number, it will overflow. This is seldom a
problem though, as the largest number is around 9 quadrillion (15 zeroes).
You can do arithmetic with numbers. The operators are:
(addition)
(subtraction)
* (multiplication)
/ (division)
% (modulo)
The arithmetic rules in JavaScript follows normal rules, i.e. that multiplication and division is
done before addition and subtraction, and that the calculations are done from left to right in
cases where the operations have the same precedence.
100 + 4 * 11
>> 144
Note that the addition operator is the same as the concatenation operator ( + ). If one of the
two values on either side of this operator is a string, the result will be a concatenated string
of the two values. This is called automatic type conversion, and is used in JavaScript
Data types
140
because you don't declare the data types (this means that JavaScript is classified as a
untyped/weakly typed language).
You can change the order of calculation by wrapping expressions in parentheses.
(100 + 4) * 11
>> 1144
You might not recognise the modulo ( % ) operator. This finds the remainder after a division.
7%5
>> 2
The remainder's precedence is the same as that of multiplication and division.
Boolean
Boolean values can be on of the values. true or false . This can represent answers like
"yes" and "no", or "on" and "off". These are useful when you want to see if some condition is
fulfilled or not, e.g. if a user's age is above a certain level. They are written with all lower
case, and no quotes.
One way to produce a boolean value is using logical operators.
4 > 3
>> true
The logical operator ">" means "is greater than". You'll learn more about these operators
soon.
3 > 4
>> false
Data types
141
Logical operators
In the previous section we got introduced to the logical operator ">", which means "greater
than". This is used between two values (meaning it is a binary operator, as are the arithmetic
operators) to find if the one to the left is greater than the one on the right.
We use logical operators to find if something is true of false . This is, amongst others,
useful together with control structures (as you will learn later on). JavaScript's logical
operators are:
< (less than)
<= (less than or equal)
> (greater than)
>= (greater than or equal)
== (equal)
=== (precise equal)
!= (not equal)
!== (not precisely equal)
&& (and)
|| (or)
All of the operators above will yield a result of true or false . Below are a number of
examples where you can see these operators in use. The operators and (`&&`) and or (||)
are used in combining other boolean expressions. E.g. if you need to know if a user is
signed in and if the user have access to the page it's trying to view.
The or operator can be used if it's enough with at least one of two (or more) expressions are
true. E.g. if it's sunny outside or you have an umbrella, you can walk outside (though not in
Trondheim... The umbrella will be destroyed by the wind so buy a good all weather jacket).
In the example directly below we check if 4 is less than 4, which it is not. In the second
example we check if 4 is less than or equal to 4, which it is.
4 < 4
>> false
4 <= 4
>> true
Logical operators
142
In the example directly below we check if 10 is greater than 8, which it is. As 10 is also
greater than or equal to 5, true is also returned for the second example.
10 > 8
>> true
10 >= 5
>> true
In the first example directly below we check if the string "Humbug" is equal to the string
"humbug". Since each character is represented by a ASCII number, it is possible to compare
two strings, and see who is greater. Upper case letters have a lower ASCII number than
lower case, so if we were to check if "Humbug" < "humbug", we would get true in return.
In the second example directly below we check if an empty string is equal to zero. As an
empty string evaluates to false, and the number 0 also does so, the result is `true` (false ==
false). On the other hand, in the next example we check if the empty string is strictly equal to
0. That is, if it has the same value and is of the same data type. As an empty string is a
string and the number 0 is a number, they are not the same.
To avoid unexpected evaluations and type conversion I recommend using the === operator,
unless you want type conversion or you are sure that both values are of the same type (but
then again it doesn't harm to use the three-character comparison operator).
"Humbug" == "humbug"
>> false
"" == 0
>> true
"" === 0
>> false
Below are two examples, where one of them are using the not (!) operator. The first example
use two exclamation marks before the string. This will convert the following data type into a
boolean value. If we where to only type "JavaScript" the result would have been
"JavaScript". By adding !! we get the boolean value. An string with content is evaluated to
true . An empty string is evaluated to false .
Logical operators
143
In the second example we add just one exclamation mark in front of the string. This is notoperator. Whatever the following data type's boolean evaluated value would have been, the
not-operator negates it. A string with content will evaluate to true, but by negating it (the
opposite value), you get false. If you had added one more exclamation mark in the first
example ( !!!"JavaScript" ) the result would have been false, as you negate the boolean
value. You can also negate the negation, thus getting the original boolean value.
!!"JavaScript"
>> true
!"Python"
>> false
In the next example we check if two strings are not similar ( != ). As they have different
content, they are not similar and the result is thus true. In the second example though we
use the "not strictly similar". An empty string have the same value as false, when we use two
equal symbols ( == ), but they are not of the same type. In this case, they are not strictly
equal, so the result is true.
"JavaScript" != "Java"
>> true
"" !== false
>> true
The following example use the operators && and || . For the and operator to return true,
both values on either side must evaluate to true . If the first value is false, the second is
never checked, as the result will be false anyway.
For the or operator, only one of the values have to evaluate to true. If the first one evaluates
to true, the second isn't checked, as it's not necessary.
true && false
>> false
true || false
>> true
Logical operators
144
As with arithmetic you can use parentheses to control how the expression is evaluated. The
expressions inside the parentheses will first be evaluated as either true or false, and then
the entire expression is evaluated.
(true && false) || (false || true)
>> true
(true || false) && (true && false)
>> false
That the expression on the right with && and || are only evaluated when necessary is
called short-circuit functions.
Logical operators
145
Variables and constants
We have talked a lot about types and how we can use them logically. Now we will talk about
storing this data, so that we can use them later on, and using them again and again.
In JavaScript previous to EcmaScript 6 (also called JavaScript 2015), we had the variable
var . var is a JavaScript keyword, so that when you write var , JavaScript knows that
this is an variable. There are a lot of other keywords also, which are reserved, meaning that
you can't name a variable or function with that keyword.
A variable can store a string, number or boolean. Later we'll explore arrays and objects,
which can also be stored in a variable. Store is not quite right though. A variable only
references a value.
When declaring a new variable, you start with the keyword var followed by the variable's
name and it's value.
var age = 21;
It is possible to declare a variable without using the var keyword if the variable name
haven't been declared previously. This is not good practice. To avoid such errors, write "use
strict"; at the top of the script.
"use strict";
var age = 22;
The equal symbol says that the variable name on the left side should be equal to the value
on the right. Variable names can be any word that isn't a reserved keyword and they can't
include spaces. Digits can be part of the variable name, but they can't be the first character.
Variable names also can't have a punctuation marks in it, except $ and _ .
A variable that references a value is not tied to that value forever. You can reassign a value
by typing the variable's name, followed by a new value:
Variables and constants
146
var age = 21
console.log(age)
>> 21
age = 22
console.log(age)
>> 22
With EcmaScript 6, we were introduced to the variable let and the constant const . let
works similar to var in that it can be reassigned, but let is scoped differently that var .
What does this mean?
Scoping is the code which a variable lives inside. Don't worry if that wasn't clear, I have an
example! But first the difference between those two in words. var is scoped to the nearest
function block, while let is scoped to the nearest enclosing block. Both variable types are
global (visible from wherever in the code) if they are declared outside any block.
Okay, so the example:
function whatever(){
// bip is not visible here
for (let bip = 0; i < 10; i++) {
// bip is only visible in here
// there is a separate bip variable for each interaction
// of the loop (you'll learn about loops later)
}
// bip is not visible here
}
function whatever2(){
// bop is visible here
for (var bop = 0; i < 10; i++) {
// bop is visible to the whole function
}
// bop is visible here
}
If you're writing in "strict mode, i.e. that you've written "use strict"; at the top of the
document, var will let you re-declare the same variable within the scope. let will not let
you do this.
Variables and constants
147
"use strict";
let animal = "cat";
let animal = "dog";
>> SyntaxError: Identifier one has already been declared
"use strict";
var animal = "cat";
var animal = "dog";
>> // no problem
And then we have const , which is a constant. That means that the value can't be changed.
How is this useful, you may ask? Let me explain. First, you declare a constant this way:
const bestMovie = "Star Wars";
If you try to reassign the constant's value, you will get an error.
const bestMovie = "Star Wars";
bestMovie = "Star Trek";
>> Uncaught TypeError: Assignment to constant variable
To avoid errors and to get better performance, you should use `const` whenever possible.
But sometimes, e.g. in a for loop, you need to use let or var . You can set the constant's
value to an array, and still change the content of the array, but not reassign the constant to
another value:
const myList = [];
myList
>> []
myList.push("First element");
myList
>> ["First element"]
You might have noticed that my one-word variables are in all lower case, and that the ones
with more than one word have the first word written with lower case and that the following
words start with an upper case letter. This is called camel casing, and is the naming
convention in JavaScript, e.g. "myAge".
Variables and constants
148
There are no rules for naming, other than the ones mentioned earlier, but it makes naming
easier if everyone follows the same convention. Remember to give your variables and
constants a meaningful name, so that it's easy to understand what their value mean.
To summarise, we have two variables and one constant: var , let and const . var is
function scoped, let and const are block scoped. const can't be reassigned, var and
let can.
Safari versions below version 9 does not support JavaScript ES6 fully, thus let and
const would not work. You can see the compatibility table for ES6 here.
Variables and constants
149
When something doesn't exist
In JavaScript, we have two ways to say that something doesn't exist. These are the
keywords null and undefined . These keywords are a nightmare for some, but if you
master them, you'll be fine.
Both means that there is no value there, and if you try to see if they are equal... Well, here's
an example:
undefined == null
>> true
So that's fine, they both represent "nothing". But are they of the same data type?
undefined === null
>> false
They are not. We can use the unary operator `typeof` to find out what they really are.
typeof undefined
>> "undefined"
typeof null
>> "object"
undefined means a variable has been declared but has not yet been assigned a value.
null is an assignment value, and can be assigned to a variable. More often than not they
can be used interchangeable. If you try to print the value of a variable that doesn't have a
value, you will get undefined in return. You can also declare a variable with the value of
undefined or null if you need to assign it a value later. This can often lead to errors
though, i.e. if you think it has a value and it doesn't, so use it with care.
If you need to use a variable that at some point have been undefined or null , it might be
a good idea to check for it. Check for it how? Well, that's a perfect segue to the next section!
When something doesn't exist
150
When something doesn't exist
151
Control structures
In our program, we can control the flow, i.e. what happens, based on conditions. This is
done using if statements and loops.
What if?
Let's imagine that we want to print a value to the console, but only if it is not undefined. We
can use the "is not equal" operator (!=) as part of an expression in an if statement:
if(variableName != 'undefined'){
console.log(variableName)
}
The expression variableName != 'undefined' will return either true or false , and if it is
true , the code inside the block will be executed. Should the expression evaluate to false,
the block will be skipped.
Inside the parentheses you can use all the logical operators previously defined, and create
complex expressions. Sometimes we need to see if a variable have a certain value:
if(weather == "sun"){
console.log("You can safely walk outside")
}
Sometimes though, it's not enough with just one case, e.g. weather == "sun" , so we need to
ask ourselves, what else if ? This statement also takes an expression that will be
evaluated to true or false .
if(weather == "sun"){
console.log("You can safely walk outside")
} else if (weather == "rain"){
console.log("Bring an umbrella")
}
The if statement is the first to be evaluated, and if it is false , the program will evaluate
the next one, and the next one, and the next one, until it finds one that evaluates to true .
After that, it will not evaluate any more expressions in that block. If you need one "catch all"
case, that should be executed should all else fail, well, JavaScript got that.
Control structures
152
if(weather == "sun"){
console.log("You can safely walk outside")
} else if (weather == "rain"){
console.log("Bring an umbrella")
} else {
console.log("Look outside and decide for yourself")
}
The else block doesn't need to evaluate an expression. If no other expressions evaluate to
true , the else block will be executed.
Using these statements will let you run different blocks of code based on the program's
state, or the user's actions.
Control structures
153
Arrays
Arrays are a list of elements, and is denoted by two square brackets: [] . Within these two
square brackets, you can have any number of values, and they can be strings, numbers and
booleans.
It is often a good idea to only use one data type in one array, because you often do the
same operations on all elements.
[42, 643, 23, 546, 753, 23]
["This is", "an array", "with", "strings"]
[true, false, false, true]
As can be seen, each element in the array is divided by a comma.
An Array can be assigned to a variable or constant, similar to other data types.
var emptyArray = []
emptyArray
>> []
var arrayWithElements = ["just", "another", "element"]
arrayWithElements
>> ["just", "another", "element"]
Arrays has one property and a number of methods available to help us read information and
manipulate them, e.g. add or update elements.
The first thing we should know is how to read an element from the Array. So far we have
seen how to get the entire array, but that is not practical if we want to do something with the
data, e.g. add two numbers. To get the element at index n, we write the name of the array,
followed by the wanted index inside square brackets. Indexing starts at zero, meaning that
the first element have index 0.
var arrayWithElements = ["just", "another", "element"]
arrayWithElements[1]
>> "another"
Arrays
154
If you try to get an element that is not in the array, e.g. the fourth element (index 3), you
would get an error.
Arrays have a property called `.length`, which returns the number of elements in the array.
var arrayWithElements = ["just", "another", "element"]
arrayWithElements.length
>> 3
Notice here that the returned value is the number of elements in the array, and that zeroindexing does not affect this. Using the length property, we can get the last element of any
array, without knowing the total number of elements. Since arrays are zero-indexed
however, we need to subtract one (1) to get the last element.
var arrayWithElements = ["just", "another", "element"]
arrayWithElements[arrayWithElements.length-1]
>> "element"
It is also possible to add elements to the array after its declaration. To do this, we use the
method push() . Inside the parentheses we would put whatever value we would like to
append to the array. By using this method, the element inside the parentheses will be placed
last in the array.
const someArray = []
someArray
>> []
someArray.push("This string")
someArray
>> ["This string"]
In order to remove the last element, we can use the method pop() :
Arrays
155
const someOtherArray = ["This string", "is my string"]
someOtherArray
>> ["This string", "is my string"]
someOtherArray.pop()
>> "is my string"
someOtherArray
>> ["This string"]
Notice that when the method pop() is called upon, the last element is returned and
removed.
Arrays
156
Objects
Objects are a data structure that can contain any number of properties, that can be of any
data type, also arrays and other objects. Unlike arrays, the values aren't accessed by an
index, but by using the property name. Properties can be read, added and removed as we
please.
A property is a key-value pair. The key is used to retrieve or update the data in the value. An
object to represent a person could look like this:
const myPersonObject = {
name: "Guy Nameson",
age : 22,
gender : "male"
}
As arrays are encapsulated by square brackets, objects are encapsulated by curly brackets.
Each key-value pair are separated by a comma (there is no comma behind the last keyvalue pair). The key (property name) does not need any quotes around it. The values are
denoted as regular data types, e.g. strings require quotes, boolean and numbers doesn't,
arrays require square brackets, and objects require curly brackets.
In the object above, we can access the properties in two ways, and which one you choose is
entirely up to you.
console.log(myPersonObject["name"])
>> "Guy Nameson"
console.log(myPersonObject.name)
>> "Guy Nameson"
If you later want to add a property, you can do that by assigning the property name to a
value. In the example above we have three properties (name, age, gender). When we want
to add a fourth property height , we do that by typing:
Objects
157
console.log(myPersonObject.height)
>> undefined
myPersonObject.height = 176
console.log(myPersonObject.height)
>> 176
As you can see in the example above, if you try to print a property that doesn't exist, you will
get undefined in return.
Should you want to update a property, you would reference the property and assign it a new
value, just like you would any variable.
console.log(myPersonObject.name)
>> "Guy Nameson"
myPersonObjct.name = "Name Guyson"
console.log(myPersonObject.name)
>> "Name Guyson"
Properties in objects are stored by their key, not by index (as in lists). Thus when printing the
entire object ( console.log(myPersonObject) ) the order of the properties could be in any
order, defined by the environment in which you print it (terminal, browser, etc).
Objects
158
Loops
If we were to write a program that printed the integers 1 through 10, we could do so by
writing 10 `console.log()` statements. This is doable, but we would write more code than
what is needed. This would become apperant, and a lot of repetetive work, if we were to
print every number from 1 through 100. If we have any task that needs to be done more than
once, we should do the task in a loop. A loop is a control structure that allow us to do
repetitive tasks, but only writing the code once (ish).
There are two kind of loops, `for loops` and `while loops`.
For loop
The for loop is written as such:
for (let i = 0; i < 10; i++) {
console.log\(i\)
}
This loop would print every number from 0 through 9. The loop is written using the for
keyword, followed by an opening and closing parentheses. Inside the parentheses there are
three arguments that needs to be present (you'll learn about arguments later on). The first
one let i = 0 is the variable that states what index the loop should start at. Remember
that a list's first element is the 0th element, and if you want to do something with every
element in a list, you need to start at the beginning. However, if we were to print every
number from 1 through 10, we could instead have set i to be 1. let in this case can be
replaced by var , but not const .
The second argument indicates when the loop should continue to be executed. In this case
the loop should be executed as long as the variable i is less than 10. Should we want to
print every number 1 through 10, this argument should be changed to either i <= 10 or i
< 11 . But how is the variable updated so that it can go from 0 to 10? We find the answer in
the third argument. This argument decides how the variable i is updated for each iteration,
that is each time the code is executed. In this case we have written the code shorthand for
i = i+1 , which updates the variable with 1. If we would like to update the variable with 2 for
each iteration, we would could write i+=2 (which is another way of saying that the current
variable is equal to itself plus 2).
Loops
159
Inside the code block (between the curly brackets {}) we can write what code we like. If we
have a list of superheroes that we like, and want to print all of them, we could to it like this:
const superheroes = ["Spider-Man", "Iron Man", "Batman", "Green Lantern"]
for (let i = 0; i < superheroes.length; i++)
console.log(superheroes[i])
}
>> "Spider-Man"
>> "Iron Man"
>> "Batman"
>> "Green Lantern"
While loop
While loops, unlike for loops, have no variable that's being updated. Similar to for loops,
however, is that it does have a conditional for when to run. As long as the condition holds
true, the while loop will continue to run the code block. A while loop is written as:
let i = 0
while (i < 10) {
i+=1
}
In the example above, we have a variable i that have 1 added to it's value for each
iteration. This will happen as long as i is less than 10. As can be seen, this is equal to the
for loop written in the previous section. If we don't update the variable, i.e. making sure that
the variable will be 10 or greater at some point, the loop will never end.
The while loop is useful when we want to do some operation until something happens, i.e.
ask a user for his/hers name until it is provided.
Break and continue
While iterating (using a for or while loop) it could be necessary to quit the loop, e.g. i we
have found something we were looking for in a list. To do this, we use the keyword break .
Loops
160
let superheroes = ["Spider-Man", "Iron Man", "Batman", "Green Lantern"]
for (let i = 0; i < superheroes.length; i++){
if (superheroes[i] == "Batman"){
console.log\("I found Batman!"\)
break
}
console.log("Not Batman")
}
In the example above we want to find Batman, and when we have found him, there isn't
really any need to continue searching. Using the keyword break will then quit the loop. If
there is any code after the loop, the program will continue to run from there.
The keyword continue will break one iteration in the loop and continue with the next one.
let superheroes = ["Spider-Man", "Iron Man", "Batman", "Green Lantern"]
for (let i = 0; i < superheroes.length; i++){
if (superheroes[i] == "Batman"){
continue
}
console.log(superheroes[i])
}
In the example above, we want to print every superhero, except Batman. Using the keyword
continue allow us to do so. When the string "Batman" is found, it will break that iteration,
and continue with the next.
Loops
161
Functions
In stead of writing code that does the same thing several places in our code, or for that
matter, as a way to write code that is easily maintainable, we should have a look at
functions.
Functions are pieces of code wrapped inside a variable, it can do a certain task and be
called multiple times from several places in the program. In JavaScript functions are
variables that happen to have a function, rather than being one specific value. Functions can
be written in two equal ways. Which one you choose is purely a personal preference.
var square = function(x){
return x * x
}
function square(x){
return x * x
}
You call (or invoke) the function by writing it's name, followed by parentheses (unlike
variables, where you do not use parentheses), and, if required by the function, the
arguments.
When talking about functions, two words are easy to confuse: parameters and arguments. In
the example above, the x within the parentheses is called a parameter. Parameters are
variables that the function require. When calling upon a function that have parameters in it's
function declaration (as in the example above), you pass along an argument, that is the
variable that you send to the function.
// x is the parameter
function square(x){
return x * x
}
// 5 is the argument
console.log(square(5))
>> 25
In the example above, the argument is passed to the function, then the result is returned.
The keyword return tells the function to return following value. In this case we call the
function square from within a console.log() function. It is possible to also have the print
Functions
162
function within our square function, which would yield a similar result. However, by using the
return statement, we can later use the result, rather than just print it.
A function doesn't need parameters, but it can take any number of parameters if needed. A
good practice is to create functions that only return a value, and does not change anything
outside it's scope. That way your code is easier to read, maintain and debug.
var five = 5
function changeAVariable(){
five = 6
}
console.log(five)
>> 5
changeAVariable()
console.log(five)
>> 6
If your functions grow into large blocks of code, or you find yourself writing the same code
over and over again, structuring your code into several functions is a good idea.
Functions
163
JavaScript Object Notation (JSON)
JSON (pronounced "Jason") is a widely used data storage and communication format for the
web, and can be used to share data between applications, or the server and the client. It
resembles how we write objects, but with a few restrictions. All property names must be
surrounded by double quotes, and only simple data expressions are allowed (no functions
calls, variables, or anything involving actual computation, like JavaScript objects can
contain). Comments are also not allowed.
A JSON can be written as:
[
,
{
"name" : "Bruce Wayne",
"superhero" : "Batman",
"year_borne" : 1939,
"hobby" : "Being rich"
}
]
Note the comma between each key-value pair, and that there is no comma following the last
such pair. In the example, there are two objects, stored in a list, which is normal when
storing several objects in a JSON file.
JSON files have the ".json" extension.
Included in JavaScript are the two functions JSON.stringify() and JSON.parse() that
convert data from and to JSON. The first one takes a JavaScript value and returns a JSONencoded string. The other takes such a string and converts it to the value it encodes.
JSON
164
const spiderman = {
"name" : "Peter Parker",
"superhero" : "Spider-Man",
"year\_borne" : 1962,
"hobby" : "Photography"
}
JSON.stringify(spiderman)
>> "{"name":"Peter Parker","superhero":"Spider-Man","year_borne":1962,"hobby":"Photogr
aphy"}"
// Store the Spider-Man object as JSON
const spiderJSON = JSON.stringify(spiderman)
// Print out Spider-Man's hobby by converting the JSON to a JavaScript Object
console.log(JSON.parse(spiderJSON).hobby)
>> "Photography"
JSON
165
XMLHttpRequest
This chapter is a short introduction to XMLHttpRequest, also called Ajax requests. Such
requests lets you dynamically change the content of your page, not solely relying on having
to load the entire page again.
The moment you click a link on a web page your browser immediately fires of an HTTP
request. While its waiting for the HTML from the server you might be presented with a blank
screen. Nowadays, this blank screen is only visible for a couple of milliseconds.
Ajax
However, not all websites require the user to load the entire page when a link is clicked. In
fact, you could argue that the most popular websites today are loaded dynamically with
XMLHttpRequests . This means that the content you see in your browser is loaded after the
initial payload. You have probably noticed this behaviour while scrolling down your Facebook
feed, or clicked on an e-mail in Gmail, where the content is loaded when you need it.
Example
XMLHttpRequest is an API that enables JavaScript to send `HTTP` requests. Here is an
example of how a web page would load a "newsfeed":
const request = new XMLHttpRequest();
request.open('GET', '/newsfeed', true);
request.onload = function() {
if (request.status === 200) {
console.log\(request.responseText\);
} else {
console.log\(request.status\)
}
};
request.send();
On the first line we instantiate a new XMLHttpRequest and assign it to the constant request .
We proceed by instructing the request to use the HTTP method GET to fetch from the
service's `/newsfeed` path. The last argument is a flag that determines if the request should
Dynamic websites
166
be handled asynchronously or not. If this flag is set to true, as it is in this case, a notification
of a completed transaction is provided using event listeners. If it is false, the send()
function does not return until the response is received.
The onload function is only executed when the server has responded to the request. In the
example above we log the response text to the console, but we could have manipulated the
document to update the page dynamically, e.g. updating an element's innerHTML property.
The else block will log the request's status to the console. This could be replaced with if
else ` statements, handling different status codes.
Finally we fire the request by calling send() on it. But what is it we're receiving from the
server? More on that in the next section.
As this course only concern itself with the client side, we won't use the HTTP method POST .
But you should know about GET , POST , PUT and DELETE .
GET Used to get data from a service (server), without changing the state of the data.
POST Used to post data to the service, i.e. storing new data in a database.
PUT Used to update data, i.e. updating a user's profile in a database.
DELETE Used to delete data, i.e. delete a user from the database.
Request properties
When you receive a response from the server, you need to access the data somehow. In the
the example the content, once received, is stored in the constant request. Here you see that
we check if the `request.status` is equal to 200. status is one property, containing the
HTTP response code. responseText is the property containing the actual data that the
server returned. The responseText is a string that you can do something with. If the string
contains JSON, you can use JSON.parse(string) to parse the string into a JavaScript
object.
You can see all the properties at MDN.
HTTP responses
When you're requesting data from a server over HTTP there are some response codes
defined with the HTTP standard. These codes says something about what happened. The
codes are sent from the server to the client.
Dynamic websites
167
In the previous example, where the `if` statement checks if `request.status == 200`, i.e. the
response was successful, the successful response is handled. The request.status could be
another code. The most important are:
200 OK The request was successful.
400 Bad request This response means that the server could not understand the
request due to invalid syntax.
401 Unauthorized Authentication is needed to get requested response. This is similar
to 403, but in this case authentication is possible.
403 Forbidden The client does not have access rights to the content, so the server is
rejecting to give a proper response.
404 Not found The server could not find the requested resource.
500 Internal Server Error This means that the server has encountered a situation it
doesn't know how to handle.
502 Bad Gateway This error response means that the server, while working as a
gateway to get a response needed to handle the request, got an invalid response.
503 Service Unavailable The server is not ready to handle the request. This could
mean that the server is down or overloaded.
You can see all the HTTP codes and their definition at Mozilla Developer Network.
JSONP
Up until now we have only been concerned with loading content dynamically from the same
server as the initial page load. However, sometimes you will want to load content from a
completely different server. An example could be loading cute pictures of cats from Flickr on
your blog.
Unfortunately for you, there's a restriction called Same-origin policy in the web development
world. Due to security reasons, a page on one server can not simply load content of another.
This means that your blog on "cute-kittens.wordpress.com" can not load content with an
XMLHttpRequest from flickr.com.
To circumvent this restriction you can use a technique called JSONP . In short, JSONP
exploits the lack of Same-origin policy when loading JavaScript from one server of another.
This technique requires however that the other server provides a so called callback
parameter.
Dynamic websites
168
JavaScript continued
This chapter will cover the more advanced parts of the curriculum on JavaScript. It is
strongly advised that you use the references (see footnotes) to get a thorough grasp on the
concepts presented in this chapter.
JavaScript continued
169
Araays
Array is a convenient data structure that helps us group objects together. For instance, an
Array could be holding on to names of countries.
['Norway', 'Sweden', 'Denmark']
More often than not you will probably want to do something with the elements in Arrays. In
the case above we could imagine that we wanted to find all the countries that start with the
capital letter N, or transform all countries to upper-case. JavaScript provides us with a
powerful tool to accomplish these feats, namely methods.
This section will cover some of the methods we can call on an Array.
Filter
The filter method enables us to retain elements that fulfill some condition.
Let's say we wanted to create some sweet lemon juice. To ensure that pulp and seed do not
end up in the pitcher we need to filter it out.
By appending a .filter to the Array we can specify the criterion that must be fulfilled for
the element to be retained. Just like we use a strainer to when squeezing a lemon, we use
`.filter` on the elements in an Array.
Arrays
170
['juice', 'seed', 'pulp'].filter(ingredient => ingredient === 'juice');
The resulting Array would only contain juice .
Map
Another useful method is map. It allows us to transform the elements of an Array.
Consider an Array of countries. If we wanted to make all of them upper-case we could use
`.map`.
['Norway', 'Sweden', 'Denmark'].map(country => country.toUpperCase());
This would result in the following Array.
['NORWAY', 'SWEDEN', 'DENMARK']
Some
Whenever we have a collection of something it can often be useful to determine if it contains
a single element that fulfills some condition. This method differs from the previous ones in its
return value.
Imagine an Array of integers. To determine if the Array contains any even numbers we could
use .some .
[1, 3, 5, 7].some(integer => integer % 2 === 0)
This would return false , as we do not have any integer that is even. Conversely, the
following Array would return true .
[1, 3, 5, 4].some(integer => integer % 2 === 0)
Every
It can be just as useful to determine if all the elements of an Array fulfill some criterion.
Arrays
171
Building on the previous example of integers, imagine we wanted to determine if all the
integers of an Array are even.
[2, 4, 6, 8].every(integer => integer % 2 === 0)
This would return true , as all the integers are even. Conversely, the following Array would
return false .
[2, 4, 6, 7].every(integer => integer % 2 === 0)
forEach
Sometimes you may not want not want to retain, transform or determine anything on an
Array — but rather call something different for each element.
Let's say we wanted to console.log each country name. Although we could accomplish this
using .map or .filter , it would not make a lot of sense considering that they are intended
for transforming and retaining elements. Instead we use .forEach .
['Norway', 'Sweden', 'Denmark'].forEach(country => console.log('Country: ' + country))
;
This code would not return an Array nor a boolean, instead it would log the following.
Country: Norway
Country: Sweden
Country: Denmark
Arrays
172
Scope
The scope determines the accessibility to variables and functions. If something is "outside of
scope" it means we can not access it.
Global
The global scope is the scope that is accessible from anywhere. Anything that is defined
outside of a function is a part of the global scope.
Consider this very simple program. It only contains a single variable called planet . The
variable is a part of the global scope because it is defined outside any function.
var planet = 'earth';
Local
However, if the variable had been defined inside a function instead it would no longer belong
to the global scope.
Scope
173
function universe() {
var planet = 'earth';
}
planet is no longer in the global scope, but instead constrained to the scope of the
universe function.
function universe() {
var planet = 'earth';
}
console.log(planet);
In other words, it is inaccessible from the global scope. Which in turn means that the code
above would throw a ReferenceError stating that planet is not defined .
Lexical
Another useful (but perhaps counterintuitive) scope is the lexical one. It provides a function
within another function access to the scope of the outer function.
function universe() {
var planet = 'earth';
function milkyWay() {
console.log\(planet\);
}
}
Calling the milkyWay function would log out earth in the case above.
Scope
174
Time
Usually we think about programs as something recipes that execute sequentially. However,
sometimes we wish to wait or repeat something at different times.
Timeout
The setTimeout function lets us schedule something to be executed at a later time.
Imagine you were responsible for the launch of SpaceX Falcon 9 rocket. Your program has
to call the liftOff function exactly on the 1 minute mark.
setTimeout(() => {
liftOff();
}, 60000);
The first argument to setTimeout is the function that is to be executed, the second
argument is when that function should be executed. Notice that the last argument is
provided as milliseconds.
Interval
Time
175
The setInterval function allows you to do something at a repeated interval.
Note that the function you schedule is not executed immediately, but executed at the first
interval.
setInterval(() => {
measureTemperature();
}, 60000);
Time
176
Document Object Model
The Document Object Model (DOM) bridges the gap between HTML elements and
JavaScript. It allows us to, among other things, dynamically change a website. The DOM is
structured like a tree, with the global `document` variable functioning as its root.
Selecting
Selecting elements that exist in the DOM is a common use case. You can think of selecting
as finding one or more elements that match some query.
Imagine that we have to find a list of groceries in a website.
<html>
<p>Groceries:</p>
<ul>
<li>Milk</li>
<li>Bread</li>
<li>Cheese</li>
</ul>
</html>
Document Object Model
177
Conveniently the website has a `li` element for each grocery. To extract the groceries (in this
case Milk , Bread and Cheese ) we would need to query the DOM to find the element in
question.
const groceries = document.getElementsByTagName('li');
The groceries variable now references all the li elements. To access the text within the
elements, as we originally set out to do, we can simply retrieve the innerText property.
console.log(groceries[0].innerText);
console.log(groceries[1].innerText);
console.log(groceries[2].innerText);
There are many more ways of selecting elements. To mention a few useful ones:
document.querySelector , document.getElementById and document.getElementsByClassName .
Modifying
Changing an element in the DOM is also a common use case.
Building on our previous example, imagine that we wanted to change the Milk grocery to
Juice .
const groceries = document.getElementsByTagName('li');
groceries[0].innerText = 'Juice';
First we would have to select the element using what we learned from the previous section.
And then we change the text by simply assigning a new string to the innerText property.
Adding
Up until now we have only looked at selecting and changing elements that already exist. But
adding new elements can also be very useful.
Let's add another grocery to the list: Soap .
When adding new elements to the DOM we add child elements to parent elements. In order
to add another grocery to the list we first need to find the parent element. In our example the
parent element of the groceries is the ul (unordered list) element.
Document Object Model
178
const groceryList = document.getElementsByTagName('ul')[0];
Next we need to construct the li element for Soap and append it as a child to the
groceryList .
const soapItem = document.createElement('li');
soapItem.innerText = 'Soap';
groceryList.appendChild(soapItem);
Removing
Finally we may want to remove elements from the DOM.
Let's remove Milk from the list of groceries. To do so we need to select the element we
want to remove and its parent element.
const groceryList = document.getElementsByTagName('ul')[0];
const milkItem = groceryList.firstChild;
groceryList.removeChild(milkItem);
Conveniently we can retrieve the li element for Milk by referencing the firstChild
property of the ul element. We then proceed to call removeChild providing the item we
want to purge from the list.
Document Object Model
179
Events
Events are used to signal that something in the DOM has happened. Some events are usergenerated, such as mouse or keyboard events, while others are generated by side effects
such as videos being paused or an animation that has finished running.
Click
The most intuitive event is perhaps the click event. It is fired when a user clicks on an
element inside the DOM. Events are passed as arguments to the click handler.
Let's alert a string when a user presses the Howdy button.
<html>
<button id="greeting">Howdy</button>
</html>
To receive the click event when the user press Howdy we need to register an event
listener. Listeners are functions that are scheduled to run when an event is fired. Just like
setTimeout and setInterval .
const greetingButton = document.getElementById('greeting');
Events
180
First we select the element that we want to listen for the event on.
greetingButton.addEventListener('click', (event) => {
alert('... partner!');
});
Next we add an event listener that alerts our greeting when the event is fired.
Keypress
Another class of events that are typically fired are the ones associated with keypresses. A
keypress usually fires the following events:
1. When the key is first depressed, the keydown event is sent.
2. If the key is not a modifier key (Shift etc.), the keypress event is sent.
3. When the user releases the key, the keyup event is sent.
Each key has a unique keyCode property that represents it. We use the keyCode to
determine which key was pressed.
Key Code
a 65
b 66
c 67
... ...
← 37
.→ 38
.↑ 39
.↓ 40
... ...
F1 112
F2 113
F3 114
Imagine that we want to alert when one of the arrow keys ( ↑ , ↓ , ← , → ) are pressed
down ( keydown ) anywhere within the DOM.
Events
181
document.addEventListener('keydown', (event) => {
if (event.keyCode > 36 && event.keyCode < 41) {
alert\('You pressed an arrow key.'\);
}
});
We register an event handler that can distinguish between arrow keys from all the other
keys. To do so we check if the keyCode on the event lies between 36 and 41.
Events
182
Extensible Markup Language (XML)
XML a markup language similar to HTML. Unlike HTML though, XML is a general purpose
markup language, meaning that you have to define your own tags. XML's primary purpose is
to share data across different systems, similar to JSON (see chapter 11).
XML declaration
Similar to HTML, where you start a document with <!DOCTYPE html> , you can to the same in
XML. The prolog is optional, but if it exists, it must come first in the document.
In the prolog you declare what version of XML you're using, the encoding (UTF-8 is the
default and most often used), and if the document relies on information from external
sources (if it does, the value should be "no"). E.g.:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
It is good practice to specify the encoding used to avoid errors.
Syntax
As HTML, XML consist of opening and closing tags. Each tag is a attribute. Inside the tags
are data values. If the XML document lacks closing tags, it is not well-formed, and thus not
correct.
You decide for yourself what attributes and values should be present in the document, but
the document needs to conform to some semantic rules. These are usually defined by the
Document Type Definition (DTD) or XML Schema Definition (XSD). DTD and XSD will be
presented later on. A document that contains an undefined tag is invalid.
An XML body could look like:
<person>
<name>Name Nameson</name>
<height>173</height>
<age>23</age>
</person>
XML
183
Nesting
XML documents must contain one root element, that is the parent of all other elements. In
the example below, <person> is the root element.
<person>
<name>Name Nameson</name>
<height>173</height>
<age>23</age>
</person>
In cases where we want to define several persons in the same document, we could create a
new root element and name it <persons> :
<persons>
<person>
<name>Name Nameson</name>
<height>173</height>
<age>23</age>
</person>
<person>
<name>Another Nameson</name>
<height>181</height>
<age>25</age>
</person>
</persons>
Elements in XML must be properly nested, meaning that you can't write:
<person> <name> Name Nameson </person> </name>
The name closing tag must come before the parent element's closing tag.
Case sensitivity
Tags in XML are case sensitive, meaning that the tag <Name> is different from the tag
<name> . Opening and closing tags must be written with the same case.
Entity references
XML
184
Some characters in XML have a special meaning.
Placing a character like "<" inside an XML element will generate an error because the parser
interprets it as the start of a new element. To avoid this error, replace the "<" character with
an entity reference:
There are 5 pre-defined entity references in XML:
Code Character Meaning
< < Less than
> > Grater than
& & Ampersand
' ' Apostrophe
" " Quotation mark
Comments
Similar to HTML, comments in XML are written:
<!-- Comment -->
Comments can be used when you want to give additional information to humans that are
reading the document and need to understand the content.
How a JSON might look like as XML
The following JSON:
{
"person" : {
"name" : "Name Nameson",
"height" : 173,
"age" : 23
}
}
Would in XML be translated as:
XML
185
<person>
<name>Name Nameson</name>
<height>173</height>
<age>23</age>
</person>
Document Type Definition
Document Type Definition (DTD) and XML Schema Definition (XSD) is used to describe the
XML language precisely. This means that the XML document must follow the defined
grammatical rules.
The DTD is defined in the prolog, after the XML header (xml version and encoding) and
before the body (the elements with values).
The syntax for DTD is:
<!DOCTYPE element[
declaration1
declaration2
]>
The element tells the parser to parse the document from the specified root element.
The square brackets [ ] enclose an optional list of entity declarations called internal
subset.
For the example:
<persons>
<person>
<name>Name Nameson</name>
<height>173</height>
<age>23</age>
</person>
</persons>
The element in <!DOCTYPE element []> is persons .
XML
186
The declarations, like declaration1, are written as: <!ELEMENT element-name (#PCDATA)> .
Before declaring the elements, you should declare all elements in the parent element
( <person> in this case) as such: <!ELEMENT person (name, height, age)> . For the XML
example above, we will get:
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE person [
<!ELEMENT person (name, height, age)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT height (#PCDATA)>
<!ELEMENT age (#PCDATA)>
]>
<persons>
<person>
<name>Name Nameson</name>
<height>173</height>
<age>23</age>
</person>
</persons>
PCDATA means "parsed character data", meaning that the value should be parsed by the
XML parser. The alternative is CDATA , meaning there are no markup, and the parser should
treat the section as regular text.
XML Schema Definition
Instead of using DTD, you can use XML Schema Definition (XSD). As DTD it is used to
describe and validate the structure and content of a XML document.
To use XSD, you first need to declare a schema in your XML document:
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
XSD consists of three types: Simple, complex and global types.
Simple type is used only in the context of text. Some predefined simple types are: xs:int ,
xs:boolean , xs:string and xs:date .
XML
187
<xs:element name="company" type="xs:string" />
Complex type is a container for other element definitions. This allows you to specify which
child elements an element can contain and to provide some structure within your XML
document. E.g.:
<xs:element name="Address">
<xs:complexType>
<xs:sequence>
<xs:element name="name" type="xs:string" />
<xs:element name="company" type="xs:string" />
<xs:element name="phone" type="xs:int" />
</xs:sequence>
</xs:complexType>
</xs:element>
Here, Address element consists of child elements. This is a container for other
<xs:element> definitions, that allows to build a simple hierarchy of elements in the XML
document.
Global types define a single type in the document, which can be used by all other
references. E.g. if you want to generalise a person and company with different addresses of
the company. Is such case, you can defined a general type as below:
<xs:element name="AddressType">
<xs:complexType>
<xs:sequence>
<xs:element name="name" type="xs:string" />
<xs:element name="company" type="xs:string" />
</xs:sequence>
</xs:complexType>
</xs:element>
When in use, it would look like:
XML
188
<xs:element name="Address1">
<xs:complexType>
<xs:sequence>
<xs:element name="address" type="AddressType" />
<xs:element name="phone1" type="xs:int" />
</xs:sequence>
</xs:complexType>
</xs:element>
<xs:element name="Address2">
<xs:complexType>
<xs:sequence>
<xs:element name="address" type="AddressType" />
<xs:element name="phone2" type="xs:int" />
</xs:sequence>
</xs:complexType>
</xs:element>
Here, instead of having to define the name and the company twice (once for Address1 and
once for Address2), we now have a single definition. This makes maintenance simpler, i.e. if
you want to add "Postcode" elements to the address, you only have to add them in one
place.
Displaying XML documents
XML are usually used to store and transport data, but you can display XML data. If you don't
define how, the raw XML is displayed in the browser. But you could style the shown data
using CSS. You do this by writing:
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
You can then use regular CSS, as you would with HTML.
XML
189
HTML5 Canvas
The <canvas> element was introduced with HTML5, and are supported by all major
browser. It is used to draw 2D and 3D graphics. The element required an opening and
closing tag.
You use the canvas element in it's simplest form by writing:
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Canvas</title>
</head>
<body>
<canvas id="canvas"></canvas>
</body>
</html>
The element is placed inside the body tag in the HTML document.
This will then create an element you can fill with graphics using JavaScript. The id
attribute is used to reference the element with JavaScript and CSS, just like how other
element are referenced. Usually you will also set the height and width of the canvas. This
can be done inline or with CSS.
Note that if you make the canvas smaller than the content, the content outside the element
will not be shown. If you don't set a height or width, the canvas will use it's default values of
300px wide and 150px high.
The background color of your canvas can also be set using the CSS property backgroundcolor , equal to all other HTML elements. Other CSS properties used on the canvas element
will only affect the element, e.g. border and shadow, and not the shapes drawn inside the
canvas.
The content of this chapter is based on Mozilla Developer Network's presentation on
Canvas.
Drawing a rectangle
Canvas
190
If you want to create a red rectangle inside the canvas element, you would write:
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d')
context.fillStyle = 'red';
context.fillRect(10, 20, 100, 150);
The first thing that's happening in the example above is that we reference the element in the
document, which we gave the id "canvas". On the second line we use the method
getContext() which returns a drawing context, i.e. the type of canvas. The different types of
canvases are:
"2d" creates a two-dimensional rendering context.
"webgl" creates a three-dimensional rendering context. This context is only available on
browsers that implements WebGL version 1.
"webgl2" creates a three-dimensional rendering context. This context is only available
on browsers that implements WebGL version 2.
"bitmaprenderer" will create a context which only provides functionality to replace the
content of the canvas with a given ImageBitmap.
Note that the argument is a string, and may only be one of those four. If you give an invalid
argument, you will get null in return.
The two following lines of code will draw a red rectangle that has it's first pixel drawn at the
browser's coordinates 10, 20. That is 10 pixels from the left on the x-axis and 20 pixels from
the top on the y-axis.
When deciding where to start drawing your shape, remember that the coordinates 0, 0 is in
the top left corner. The x-axis goes from left to right and the y-axis goes from the top and
down.
Canvas
191
The next two parameters are the width and length of the rectangle. In this example our red
rectangle will have an width of 100 pixels, and a height of 150 pixels.
You should know that the getContext method takes another argument in the shape of a
JavaScript object, after the context type. This is the context attributes. For the 2d context
type, which is the one relevant for this course, the only available context attribute is alpha .
If alpha is set to true, the canvas element contains alpha channels (opacity). If this is set to
false, the browser know that the backdrop always will be opaque, which can speed up
drawing of transparent content and images.
If you want to set the context attribute, you would write:
canvas.getContext('2d', {alpha : false})
Okay, so that's a thorough introduction. Now let's learn how to draw stuff!
Drawing on a 2D canvas
When you're drawing on a canvas, the order of drawing is important. The latter drawings,
e.g. if you create two rectangles, the latter will be on top of the first one, should they overlap.
In the example below we draw two rectangles that will overlap, because the one starts within
the drawn area of the first one.
Canvas
192
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d')
context.fillStyle = 'red';
context.fillRect(10, 10, 100, 100);
context.fillStyle = 'blue';
context.fillRect(30, 30, 100, 100);
The result will thus look like this:
In the following sections, we will look a bit more at rectangles, then we will draw lines,
circles, polygons and text. We will also look at gradients and shadows, clipping paths, video
and images.
Actually, <canvas> only support one primitive shape: rectangles. All other shapes must be
created by combining one or more paths, a list of points connected by lines. More on that
later!
Rectangles
Earlier you saw that we wrote context.fillRect(x, y, width, height) . The fillRect() function
is used to fill the rectangle with color. We don't have do use it. There are two other functions
you should know, strokeRect(x, y, width, height) and clearRect(x, y, width, height) .
strokeRect draws the outline of a rectangle. clearRect() clears the specified rectangle,
making it fully transparent. The parameters are all the same for these three functions.
In the example below, we utilise these three functions.
context.fillRect(25, 25, 100, 100);
context.clearRect(45, 45, 60, 60);
context.strokeRect(50, 50, 50, 50);
Canvas
193
Which give us the canvas:
Lines and triangles
The other primitive shape in canvas are paths. This is a list of points, connected by lines that
can be curved or not, and be of different widths and colors.
When drawing shapes with paths, you have to:
1. Create the path
2. Use drawing functions to draw into the path
3. Close the path
4. Stroke or fill the path to render it
The functions you use to do this are in order:
beginPath() - creates a new path. Once it is created, future drawing commands are
directed into the path and used to build the path
Path methods (this can be used as necessary)
moveTo\(\) - moves the starting point of a new sub-path to the \(x,y\) coordinates
lineTo\(\) - connects the last point in the subpath to the \(x,y\) coordinates with a
straight line
arc\(\) - Adds an arc to the path which is centered at \(x, y\) position with radius r
starting at startAngle and ending at endAngle going in the given direction by
anticlockwise
arcTo\(\) - Adds an arc to the path with the given control points and radius,
connected to the previous point by a straight line.
rect\(\) - Creates a path for a rectangle at position \(x, y\) with a size that is
determined by width and height
closePath() - closes the path so that future drawing commands are directed to the
context
stroke() - Draws the shape by stroking the outline
fill() Draws a solid shape by filling the path's content area
Canvas
194
Now we're going to put all this information to life by drawing a triangle.
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.beginPath();
context.moveTo(75, 50);
context.lineTo(100, 70);
context.lineTo(100, 25);
context.fill();
The first thing, after referencing the element and setting the context, is to call the
beginPath() function. Internally, paths are stored as a list of sub-paths (lines, arcs, etc)
which together form a shape. Every time this method is called, the list is reset and we can
start drawing a new shape.
The function moveTo() specify where the coordinates where the first pixel should be drawn.
This can be viewed as lifting the pen from one spot to another. moveTo() can be used to
draw unconnected paths.
lineTo() specifies the paths do be drawn. Lastly fill() fills the shape with a solid color.
If you change fill() with stroke() you'll see that only two lines are drawn. Should you
want a third line to complete the triangle, e.g. if it only should have a stroke, you would add
context.closePath() before stroke() or fill() . This function tries to draw a straight line
from the current coordinates (100, 25) to the starting coordinates (75, 50).
Circles
To draw arcs and circles, we use the arc() function.
arc(x, y, radius, startAngle, endAngle, anticlockwise)
Draws an arc which is centred at the coordinates (x, y) with radius r starting at startAngle
and ending at endAngle, going in the given direction indicated by the boolean value
anticlockwise (defaulting to clockwise).
The example below will give a complete circle:
Canvas
195
context.beginPath();
context.arc(100, 100, 40, 0, 2*Math.PI, true)
context.stroke();
You won't see the difference between using true or false in the anticlockwise argument when
doing a full circle. Drawing a half circle on the other hand will reveal the effect.
context.beginPath();
context.arc(100, 100, 40, 0, Math.PI, true)
context.stroke();
context.beginPath();
context.arc(100, 100, 40, 0, Math.PI, false)
context.stroke();
bezierCurveTo() and quadraticCurveTo() is also worth to read about if you want to create
complex shapes. You can do that at Mozilla Developer Network's canvas tutorial.
Text
With canvas you have two functions to render text:
Canvas
196
fillText(text, x, y) Fills a given text at the coordinates (x, y).
strokeText(text, x, y) Strokes a given text at the coordinates (x, y).
An example of fillText() could be:
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.fillText('Hello Canvas!', 10, 10);
An example of strokeText() could be:
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.font = '48px serif';
context.strokeText('Hello Canvas!', 10, 48);
There are four properties you can use to style the text.
font Takes a value which is the font size e.g. 48px and font-family e.g. arial or font type
e.g. 'serif'. context.font = '48px serif';
textAlign This is the text alignment setting, which takes one of the values start ,
end , left , right or center . context.textAlign = 'left';
textBaseline This is the baseline alignment setting, which takes on of the values top ,
hanging , middle , alphabetic , ideographic or bottom . The default value is
alphabetic . context.textBaseline = 'top';
direction This is the text's direction setting, which takes one of the values ltr , rtl
or inherit . The default value is inherit . context.direction = 'ltr';
These four properties are similar to their CSS counterparts.
Canvas
197
Styling the canvas
We have already mentioned the property fillStyle , which applies a color to your shape.
You can also apply a style to your strokes using the property strokeStyle . The color can,
similar to CSS, be expressed with a keyword (e.g. red, blue, green) or as a hex value (e.g.
FF0000, 00FF00, 0000FF). You can also use rgb and rgba, should you want the alpha
channel also.
With lines, you have the properties:
lineWidth Sets the width of lines drawn in the future. The value can be any integer.
context.lineWidth = 15;
lineCap Sets the appearance of the ends of lines. The types can be butt , round or
square . context.lineCap = 'square';
lineJoin Sets the appearance of the corners where lines meet. The types can be
round , bevel or miter . context.lineJoin = 'round';
lineDashOffset Specifies where to start a dash array on a line. The value can be any
integer. context.lineDashOffset = 2;
And the function:
setLineDash(segment) Sets the line dash pattern. The argument is an array of
numbers that specifies the distances to alternately draw a line and a gap. If the number
of elements in the array is odd, the elements of the array get copied and concatenated.
E.g. [5, 15, 25] will become [5, 15, 25, 5, 15, 25]. context.setLineDash([5, 15]);
Placing images in your canvas
Importing images into a canvas is basically a two step process:
1. Get a reference to an image
2. Draw the image on the canvas using the drawImage() function
To do this, you first need to create a new image object using the Image() constructor:
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = new Image();
img.src = 'path/to/image.png';
In this case the image is stored locally in your folder structure. You can also use an url, if the
image is publicly available.
Canvas
198
We have now taken care of step 1. In step 2 we use the function drawImage(img, x, y) . The
following code build upon the previous example:
context.drawImage(img, 10, 10);
It can happen that the image is loaded after the code is executed, which happens because
the image must be loaded from the server. To handle this you can use the image's onload
property:
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = new Image();
img.onload = function() {
context.drawImage(img, 10, 10)
}
img.src = 'path/to/image.png';
In some cases you need to scale the image. To lower the file's size, this should be done
beforehand. But you can use the function drawImage(image, x, y, width, height) to
accomplish this:
drawImage(img, 10, 10, 150, 200);
You can also crop an image. This is done using the function drawImage(image, sx, sy,
sWidth, sHeight, dx, dy, dWidth, dHeight) . The parameters sx , sy , sWidth and
sHeight represents the image's x and y coordinates, and the image's width and height. The
parameters dx , dy , dWidth and dHeight represents the rectangle into which to draw the
image on the destination canvas.
Canvas
199
Animate on a 2D canvas
Now let's dive into animations. One limitation of canvas is that once a shape is drawn, it
stays that way. If you want to move it, you have to redraw the shape. This can take a lot of
time, and the performance depends on the speed of the speed of the computer that is
running the animation.
If you want to animate a canvas, that is to redraw it, there are some steps you need to
follow:
1. Clear the canvas Unless the shapes you will be drawing fills the complete canvas (e.g.
background image), you need to clear any shapes that have been drawn previously.
This can be done using the function clearRect() . context.clearRect(x, y, width,
height);
2. Save the canvas' state If you're changing any settings (e.g. styles, transformations)
which affect the canvas' state and you want to make sure the original state is used each
time a frame is drawn, you need to save that original state. context.save();
3. Draw animated shapes This is where you're actually rendering the new frame.
4. Restore the canvas' state If you saved the state, restore it before you drawing a new
frame. context.restore();
Canvas
200
Shapes are drawn to the canvas using the canvas' functions directly, or by calling custom
functions. We only see these results appear on the canvas when the script finishes
executing. Thus, it is not possible to do an animation from within a for loop. This means that
you have to execute the drawing functions over a period of time. This can be done using the
functions:
setInterval(function, delay) Starts repeatedly executing the function specified every
*delay* milliseconds.
setTimeout(function, delay) Executes the function specified in *delay* milliseconds.
If you don't want any user interaction you can use the setInterval() function. On the other
hand, should you want to create e.g. a game with user interaction, you can use
setTimeout() . By setting EventListeners, you can listen for the user's interaction and
execute animations based on them.
The following example is taken from Mozilla Developer Network's canvas basic animation
tutorial.
Canvas
201
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
window.requestAnimationFrame(draw);
}
function draw() {
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d');
context.globalCompositeOperation = 'destination-over';
context.clearRect(0, 0, 300, 300); // clear canvas
context.fillStyle = 'rgba(0, 0, 0, 0.4)';
context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
context.save();
context.translate(150, 150);
// Earth
var time = new Date();
context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) *
time.getMilliseconds());
context.translate(105, 0);
context.fillRect(0, -12, 35, 24); // Shadow
context.drawImage(earth, -12, -12);
// Moon
context.save();
context.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * ti
me.getMilliseconds());
context.translate(0, 28.5);
context.drawImage(moon, -3.5, -3.5);
context.restore();
context.restore();
context.beginPath();
context.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
context.stroke();
context.drawImage(sun, 0, 0, 300, 300);
window.requestAnimationFrame(draw);
}
init();
Canvas
202
Note that most tutorials use the constant or variable name ctx instead of context . I use
context to make it clear what this constant represent. This could would give the animation
of the earth circling the sun, with the moon orbiting around the earth. I recommend that you
try implementing this yourself, and play with the arguments to see how it affects the final
result.
In this example, you also see some new properties and functions.
context.globalCompositeOperation
This sets the type of compositing operation to apply when drawing new shapes. This
property takes a type that can be one of source-over , source-in , source-out ,
source-atop , destination-over , destination-in , destination-out , destinationatop , lighter , copy , xor , multiply , screen , overlay , darken , lighten ,
color-dodge , color-burn , hard-light , soft-light , difference , exclusion , hue ,
saturation , color and luminosity . Don't worry though, you don't need to remember
any of these. You can see their effect at MDN's globalCompositeOperation.
context.translate(x, y)
This functions takes an x and an y coordinate as parameters. When called, the canvas'
(0, 0) coordinates are set to the translate function's coordinates.
context.rotate(degree)
This functions rotates a shape or image with the degree specified as the parameter.
window.requestAnimationFrame(callback)
This tells the browser that you wish to perform an animation, and requests that the
browser call a specified function to update an animation before the next repaint. The
parameter callback should be the function you want to call.
You can see all the functions and properties available for the canvas' context at w3school.
Canvas
203