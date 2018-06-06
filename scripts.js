document.body.onload = addElement;

function addElement () { 
  // In the scripts.js file, using DOM manipulation, create a div with a class named "header-container". 
  let newDiv = document.createElement("div"); 
  // Create a h1 element
  let h1 = document.createElement('h1');
  // then create a text node with the text "This is an h1
  let h1Text = document.createTextNode(" This is a h1 text");
  // Append the text to the h1
  h1Text.appendChild(h1);
  // append the h1 to the div
  newDiv.appendChild(h1);
  // then append the div to the body.
  document.body.appendChild(newDiv);


  // and give it some content 
  let newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  let currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 

}

//Working Code
document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}