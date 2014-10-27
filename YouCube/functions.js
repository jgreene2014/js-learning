/**
 * Created by jsg665 on 10/27/2014.
 */

//Blog object constructor
function Blog(body, date){
    this.body = body;
    this.date = date;
}//end constructor

//Global array of blog entries
var blog = [ new Blog("Got the new cube I ordered. It's a real pearl.", "08/14/2008"),
    new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.", "08/19/2008"),
    new Blog("Managed to get a headache toiling over the new cube. Gotta nap.", "08/16/2008"),
    new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.", "08/21/2008") ];

//show the list of blog entries
function showBlog(numEntries){
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
        blogText += "<strong>" + blog[i].date + "</strong><br />" + blog[i].body + "</p>";
        i++;
    }//end while

    //set the blog HTML code on the page
    document.getElementById("blog").innerHTML = blogText;

}//end show blog
