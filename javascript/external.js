
// document.write("Where is my JS code?");
// window.alert(5+6);
// window.alert('5+6');
// document.write('<h1>A heading</h1>');
// document.write('<p>A sentence.</p>');

// const x = "web";
// const y = "mapping";
// const out = x + y;
// document.write(out);

// A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name","Type your name here");
// document.write(user_name);

/*
arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
  document.writeln(arr[i],"<br>");
}
*/
/*
user_name = window.prompt("Enter your Name");
if(user_name) {
  document.getElementById("namechange").innerText = "Hello, " + "Welcome " + user_name + "!";
}
*/

var webmaps =
[
  ["Mapbox", "https://www.mapbox.com/navigation",
   "Mapbox creates and combines data.<br>Mapbox allows customization of the interface.<br>It supports navigation, routing, and data visualization.<br>The user interface is moderately intuitive."],
  ["OpenStreetMap", "https://www.openstreetmap.org/#map=9/43.646/-92.966&layers=C",
   "OpenStreetMap is an open, free data source.<br>It allows for geocoding, routing, and editing.<br>The user interface is easy to use with quick zoom in and out."]
];



function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
//A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());

//table
function webmap_table()
{
  document.write("<table width=100%>");

  for (var row = 0; row < webmaps.length; row++) {


    document.write("<tr>");
    document.write("<td>" + webmaps[row][0] + "</td>");
    document.write("<td>" + webmaps[row][1] + "</td>");
    document.write("</tr>");


    document.write("<tr>");
    document.write("<td colspan='2'>" + webmaps[row][2] + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
