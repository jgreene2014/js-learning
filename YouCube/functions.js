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
var blog = [ new Blog("Got the new cube I ordered. It's a real pearl.", new Date("08/14/2008")),
    new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.", new Date("08/19/2008")),
    new Blog("Managed to get a headache toiling over the new cube. Gotta nap.", new Date("08/16/2008")),
    new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.", new Date("08/21/2008")),
    new Blog("Met up with some fellow cubers to discuss the prospect of a 7x7x7 cube. Mixed feelings.", new Date("08/29/2008")),
    new Blog("Wow, it took me a couple of weeks, but the new cube is finally solved.", new Date("09/19/2008"), "cube777.png") ];

// Show the list of blog entries
function showBlog(numEntries) {
    // First sort the blog in reverse chronological order (most recent first)
    blog.sort(function(blog1, blog2) { return blog2.date - blog1.date; });

    // Adjust the number of entries to show the full blog, if necessary
    if (!numEntries)
        numEntries = blog.length;

    // Show the blog entries
    var i = 0;
    var blogListHTML = "";

    while (i < blog.length && i < numEntries) {
        blogListHTML += blog[i].toHTML(i % 2 == 0);
        i++;
    }

    // Set the blog HTML code on the page
    document.getElementById("blog").innerHTML = blogListHTML;
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

*/
