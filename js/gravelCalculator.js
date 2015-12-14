// 1: get length and width from user in feet
// 2: convert length and width to yards
// 3: multiply length and width to get area
// 4: take area and multiply by coverage
// 5: output cubic yards

function calculateGravel(){  //define function

// 1: get length and width from user in feet
var lengthFeet = document.getElementById('lengthFeet').value;
var widthFeet = document.getElementById('widthFeet').value;
var depthInches = document.getElementById('depthInches').value;

  
// 2: convert length and width to yards
var lengthYards = lengthFeet * 0.3333333;
var widthYards = widthFeet * 0.3333333;
var depthYards = depthInches * 0.0277778;

  
// 3: multiply length and width to get area
var cubicYards = lengthYards * widthYards * depthYards;
  

  
// 4: output cubic yards
var requiredTons = cubicYards * 2;

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('coverage');
// Write the sting of variables
el.innerHTML = '<h3>' + cubicYards + '</h3>';
  
};