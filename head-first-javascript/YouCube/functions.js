/**
 * Created by jsg665 on 10/27/2014.
 */

//Custom date function that displays a date in MM/DD/YYYY format
Date.prototype.shortFormat = function(){
    //return shortdate
    return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear();
}//end date format short format override

//Instantiate the Blog class variables
Blog.prototype.signature = "Puzzler Ruby";

// Blog object constructor
function Blog(body, date, image) {
    // Assign the properties
    this.body = body;
    this.date = date;
    this.image = image;
}//end constructor

//Assign methods to the Blog object using the prototype method

    // Return a string representation of the blog entry
    Blog.prototype.toString = function() {
        return "[" + this.date.shortFormat() + "]" + this.body;
    };
//end toString

    // Return a formatted HTML representation of the blog entry
    Blog.prototype.toHTML = function(highlight) {
        return "[" + this.date.shortFormat() + "] " + this.body;
    };

// Return a formatted HTML representation of the blog entry
Blog.prototype.toHTML = function(highlight) {
    // Use a gray background as a highlight, if specified
    var blogHTML = "";
    blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";

    // Generate the formatted blog HTML code
    if (this.image) {
        blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br /><table><tr><td><img src='" +
        this.image + "'/></td><td style='vertical-align:top'>" + this.body + "</td></tr></table><em>" +
        this.signature + "</em></p>";
    }
    else {
        blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br />" + this.body +
        "<br /><em>" + this.signature + "</em></p>";
    }
    return blogHTML;
};//end toHTML

    // See if the blog body contains a string of text
    Blog.prototype.containsText = function(text) {
        return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
    };
//end containsText

// Global array of blog entries
var blog = new Array();

//Global Ajax Request
var ajaxReq = new AjaxRequest();

//Load the blog from an XML doc on the server using Ajax
function loadBlog(){
    document.getElementById("blog").innerHTML = "<img src='wait.gif' alt='Loading...' />";
    ajaxReq.send("GET", "blog.xml", handleRequest);
}//end loadBlog

//Handle the Ajax Request
function handleRequest(){
    if (ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
        // Store the XML response data
        var xmlData = ajaxReq.getResponseXML().getElementsByTagName("blog")[0];

        // Set the blog-wide signature
        Blog.prototype.signature = "by " + getText(xmlData.getElementsByTagName("author")[0]);

        // Create the array of Blog entry objects
        var entries = xmlData.getElementsByTagName("entry");
        for (var i = 0; i < entries.length; i++) {
            // Create the blog entry
            blog.push(new Blog(getText(entries[i].getElementsByTagName("body")[0]),
                new Date(getText(entries[i].getElementsByTagName("date")[0])),
                getText(entries[i].getElementsByTagName("image")[0])));
        }

        // Enable the blog buttons
        document.getElementById("search").disabled = false;
        document.getElementById("showall").disabled = false;
        document.getElementById("viewrandom").disabled = false;

        // Show the blog
        showBlog(5);
    }
}//end HandleRequest

// Show the list of blog entries
function showBlog(numEntries) {
    // First sort the blog in reverse chronological order (most recent first)
    blog.sort(function(blog1, blog2) { return blog2.date - blog1.date; });

    // Adjust the number of entries to show the full blog, if necessary
    if (!numEntries)
        numEntries = blog.length;

    // Show the blog entries
    var i = 0, blogListHTML = "";
    while (i < blog.length && i < numEntries) {
        blogListHTML += blog[i].toHTML(i % 2 == 0);
        i++;
    }

    // Set the blog HTML code on the page
    document.getElementById("blog").innerHTML = decodeURIComponent(blogListHTML);
}//end showBlog

// Search the list of blog entries for a piece of text
function searchBlog() {
    var searchText = document.getElementById("searchtext").value;
    for (var i = 0; i < blog.length; i++) {
        // See if the blog entry contains the search text
        if (blog[i].containsText(searchText)) {
            alert(blog[i]);
            break;
        }
    }

    // If the search text wasn't found, display a message
    if (i == blog.length)
        alert("Sorry, there are no blog entries containing the search text.");
}//end searchBlog

// Display a randomly chosen blog entry
function randomBlog() {
    // Pick a random number between 0 and blog.length - 1
    var i = Math.floor(Math.random() * blog.length);
    alert(blog[i]);
}//end randomBlog

//get the text content of an HTML element
function getText(elem){
    var text = "";
    if (elem) {
        if (elem.childNodes) {
            for (var i = 0; i < elem.childNodes.length; i++) {
                var child = elem.childNodes[i];
                if (child.nodeValue)
                    text += child.nodeValue;
                else {
                    if (child.childNodes[0])
                        if (child.childNodes[0].nodeValue)
                            text += child.childNodes[0].nodeValue;
                }
            }
        }
    }
    return text;
}//getText

// AjaxRequest object constructor
function AjaxRequest() {
    // Try the XMLHttpRequest object first
    if (window.XMLHttpRequest) {
        try {
            this.request = new XMLHttpRequest();
        } catch(e) {
            this.request = null;
        }
        // Now try the ActiveX (IE) version
    } else if (window.ActiveXObject) {
        try {
            this.request = new ActiveXObject("Msxml2.XMLHTTP");
            // Try the older ActiveX object for older versions of IE
        } catch(e) {
            try {
                this.request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                this.request = null;
            }
        }
    }

    // If the request creation failed, notify the user
    if (this.request == null)
        alert("Ajax error creating the request.\n" + "Details: " + e);
}

// Send an Ajax request to the server
AjaxRequest.prototype.send = function(type, url, handler, postDataType, postData) {
    if (this.request != null) {
        // Kill the previous request
        this.request.abort();

        // Tack on a dummy parameter to override browser caching
        url += "?dummy=" + new Date().getTime();

        try {
            this.request.onreadystatechange = handler;
            this.request.open(type, url, true); // always asynchronous (true)
            if (type.toLowerCase() == "get") {
                // Send a GET request; no data involved
                this.request.send(null);
            } else {
                // Send a POST request; the last argument is data
                this.request.setRequestHeader("Content-Type", postDataType);
                this.request.send(postData);
            }
        } catch(e) {
            alert("Ajax error communicating with the server.\n" + "Details: " + e);
        }
    }
}

AjaxRequest.prototype.getReadyState = function() {
    return this.request.readyState;
}

AjaxRequest.prototype.getStatus = function() {
    return this.request.status;
}

AjaxRequest.prototype.getResponseText = function() {
    return this.request.responseText;
}

AjaxRequest.prototype.getResponseXML = function() {
    return this.request.responseXML;
}

// Custom Date function to display a date in MM/DD/YYYY format
Date.prototype.shortFormat = function() {
    return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear();
}

/*

//show the list of blog entries
function showBlog(numEntries){

    //first sort the blog in reverse chronological order (most recent)
    blog.sort(function(blog1, blog2) {return blog2.date - blog1.date;});

//adjust the number of entries to show the full blog, if necessary
    if (!numEntries)
    numEntries = blog.length;

    //show the blog entries
    var i = 0;
    blogText = "";

    while (i < blog.length && i < numEntries){
    //use a grey background for every other blog entry
        if (i % 2 == 0)
        blogText += "<p style='background-color:#EEEEEE'>";
        else
        blogText += "<p>";

        //generate the formatted blog HTML code
        //blogText += "<strong>" + blog[i].date + "</strong><br />" + blog[i].body + "</p>";
        blogText += "<strong>" + (blog[i].date.getMonth() +1) + "/" + blog[i].date.getDate() + "/" + blog[i].date.getFullYear()
        + "</strong><br />" + blog[i].body + "</p>";
        i++;
    }//end while

    //set the blog HTML code on the page
    document.getElementById("blog").innerHTML = blogText;

}//end showBlog

function searchBlog(){
    var searchText = document.getElementById("searchtext").value;
    for (var i = 0; i < blog.length; i++){
        //see if the blog entry contains the search text
        if (blog[i].body.toLowerCase().indexOf(searchText.toLowerCase()) != -1){
            alert("[" + (blog[i].date.getMonth() + 1) + "/" + + blog[i].date.getDate() + "/" + blog[i].date.getFullYear()
            + "]" + blog[i].body);
            break;
        }//end if
    }//end for

    //If the search text was not found, display a message
    if (i == blog.length)
    alert("Sorry, there are no blog entries containing the search text.")
}//end searchBlog


function randomBlog(){
    //pick a random number between 0 and blog.length -1
    var i = Math.floor(Math.random() * blog.length);
    alert("[" + (blog[i].date.getMonth() + 1) + "/" + + blog[i].date.getDate() + "/" + blog[i].date.getFullYear()
    + "]" + blog[i].body);
}//end randomBlog

 // Global array of blog entries
 var blog = [ new Blog("Got the new cube I ordered. It's a real pearl.", new Date("08/14/2008")),
 new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.", new Date("08/19/2008")),
 new Blog("Managed to get a headache toiling over the new cube. Gotta nap.", new Date("08/16/2008")),
 new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.", new Date("08/21/2008")),
 new Blog("Met up with some fellow cubers to discuss the prospect of a 7x7x7 cube. Mixed feelings.", new Date("08/29/2008")),
 new Blog("Wow, it took me a couple of weeks, but the new cube is finally solved.", new Date("09/19/2008"), "cube777.png") ];

*/
