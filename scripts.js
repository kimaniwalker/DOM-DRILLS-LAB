document.addEventListener("DOMContentLoaded", function () {

// In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
let div = document.createElement('header-container');
// Create a h1 element
let h1 = document.createElement('h1');
// Create a text node with the text "This is an h1".
let h1Text = document.createTextNode("This is an h1");
// Append the text to the h1 then append the h1 to the div
h1Text.appendChild(h1);
h1.appendChild('header-container');
//append the div to the body
document.body.appendChild('header-container');

})
