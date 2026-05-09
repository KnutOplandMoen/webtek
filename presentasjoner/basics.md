IT2805 - Web Technologies History,
development and the architecture of the
Web, Client, Server and the Internet
Kshitij Sharma (aka “K”)
Department of Computer Science
Faculty of Information Technology and Electrical Engineering
Main Components
What is Internet?
How the Internet works?
• Transmission Control
Protocol/Internet Protocol
(TCP/IP) (Common
language between
machines)
• Addressing Schemes
(Where to go)
• Domain names (for human
to understand)
• Routing Traffic Across the
Internet (How to go)
TCP/IP
• Every computer and network on the Internet uses the same
protocols -the Transmission Control Protocol/Internet Protocol,
or TCP/IP
• No matter what type of computer system you connect to the
Internet, if it uses TCP/IP, it can exchange data with any other
type of computer.
• TCP/IP was developed to tolerate unreliable sub-networks and
the protocol guarantees proper transmission of data, since the
physical network can’t.
TCP/IP Layers
Application
Physical
Internet
Transport
The Application layer provides applications the ability to access the services of the
other layers and defines the protocols that applications use to exchange data.
The Transport Layer is responsible for making sure that complete messages are
delivered end to end.
The Network/Internet Layer is responsible for routing messages from one place to
another. All routers on the Internet run the IP protocol.
The bottom layer is the Physical Layer. This is responsible for actually translating the
software message into a physical representation and putting them on the wire (or
through the air in a wireless network or fiber-optic wire).
Example Protocols
Layer Example Protocols
Application HTTP, telnet, ftp, email, VoIP
Transport TCP, UDP
Network/Internet IP
Physical Ethernet, WiFi, ATM, X.25,
Frame Relay
There are many different protocols at each level.
Here are some representative protocols for the Internet.
NTNU Norwegian University of
Science and TechnologyThe application prepares a message in its protocol (HTTP for example).
HTTP message
It passes this to the Transport layer, (e.g TCP) which attaches a transport layer header
to the front.
ТСР Hdr HTTP message
This is passed to the Network layer, which attaches an IP header onto the front.
IP Hdr TCP Hdr HTTP message
This is passed to the Physical layer (e.g. Ethernet) which attaches its own header to
the front, and a checksum at the end.
Ethernet Hdr IP Hdr TCP Hdr HTTP me ssage Checksum
When the node at the other end receives this, it strips off the Ethernet Header and
the checksum and passes the packet up to the Network Layer. This layer reads the IP
Header and decides where to send the packet.
When the packet reaches its final destination, the IP layer strips off the IP Header
and passes the remaining packet up to the TCP layer, which strips off the TCP header,
processes it, and passes the HTTP message to the application layer at the receiving
end.
Data transmission over the internet through
TCP/IP
How the Internet works - Addressing
• To communicate across the Internet, a computer must have a unique
address.
• Every computer on the Internet has a unique numeric identifier, called an
Internet Protocol (IP) address.
• Each IP address has four parts – each part a number between 0 and 255.
An IP address can have up to 12 digits and might look like:
205.46.117.104.
• Our institutional web site has the IP address, 129.241.160.102, and no
other machine in the world has this IP number. Otherwise you wouldn’t
be able to find the right website.
DNS: The phonebook of the internet
DNS: Example
Popular applications of the Internet
• Many users confuse the Internet (network) with the
applications that work over the Internet.
• E-mail
• Telnet
• File Transfer Protocol – FTP
• Internet Relay Chat – IRC
• The World Wide Web
The World Wide Web (WWW) or the Web
The World Wide Web (WWW) or the Web
• Tim Berners-Lee et al. at the CERN nuclear research facility
near Geneva, Switzerland laid the foundations for the World
Wide Web, or the Web, in 1989
• They developed a system of interconnected hypertext
documents that allowed their users to easily navigate from one
topic to another
• Hypertext is a method of organizing information that gives the
reader control over the order in which the information is
presented
Linear Text and Hyper Text
The WWW is…
• A distributed hypertext system
•Defined by a set of common communication protocols
• Accessible from a variety of platforms
• Resources on the Web about WWW and its protocols:
• http://www.w3.org/History.html
• http://www.rfc-editor.org/rfc.html
HTML
• Markup: annotation. In this case, we mean annotation to describe
document structure and formatting
• Publishing language of the World Wide Web
• Standardized by the World Wide Web Consortium (W3C)
• HTML 5 - Newest HTML specification, being released in sections
Tag-Elements
The characters in the brackets
indicate the tag's purpose.
The closing tag has a forward slash
after the less than (<) symbol
For example, p stands for paragraph.
An element comprises the opening
tag and the closing tag and any
content that lies between them.
Body, Head, and Title
• <body> Everything inside this element is shown inside the main browser
window.
• <head> Before the <body> element you will often see a <head> element.
This contains information about the page (rather than information that is
shown within the main part of the browser window that is highlighted in
blue on the opposite page). You will usually find a <title> element inside
the <head> element.
• <title> The contents of the <title> element are either shown in the top of
the browser, above where you usually type in the URL of the page you
want to visit, or on the tab for that page (if your browser uses tabs to
allow you to view multiple pages at the same time).
Page Structure
<html>
<body>
<h1>This is the Main Heading</h1>
<p>This text might be an introduction to the rest of
the page. And if the
page is a long one it might be split up into several
sub-headings.</p>
<h2>This is a Sub-Heading</h2>
<p>Many long articles have sub-headings to help you
follow the structure of what is being written. There
may even be sub-sub- headings (or lower-level
headings).</p>
<h2>Another Sub-Heading</h2>
<p>Here you can see another sub-heading.</p>
</body>
</html>
The HTML code (in blue) is made up of characters
that live inside angled brackets — these are called
HTML elements. Elements are usually made up of
two tags: an opening tag and a closing tag. (The
closing tag has an extra forward slash in it.) Each
HTML element tells the browser something about
the information that sits between its opening and
closing tags.
Your First HTML code
<html>
<body>
<h1>This is the Main Heading</h1>
<p>This text might be an introduction to
the rest of the page. And if the
page is a long one it might be split up into
several sub-headings.</p>
<h2>This is a Sub-Heading</h2>
<p>Many long articles have sub-headings to
help you follow the structure of what is
being written. There may even be sub-subheadings (or lower-level headings).</p>
<h2>Another Sub-Heading</h2>
<p>Here you can see another subheading.</p>
</body>
</html>
Attributes
• Attributes provide additional information about the contents of an
element. They appear on the opening tag of the element and are
made up of two parts: a name & a value, separated by an equals sign
HTML Summary
• HTML pages are text documents.
• HTML uses tags, tags are often referred to as elements.
• Tags usually come in pairs. The opening tag denotes the start of
a piece of content; the closing tag denotes the end.
• Attributes require a name and a value.
• To learn HTML you need to know what tags are available for you
to use, what they do, and where they can go.
HTML
• Save your web pages as plain text with .htm or .html
filename extensions.
• If possible, save your files in a location that does not contain
any spaces in the path.
• Do not put spaces in your filenames under any circumstances
• Avoid capitalizing any letter in an html file name
Pre-recorded Videos