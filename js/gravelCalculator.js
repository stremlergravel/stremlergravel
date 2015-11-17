// 1: get length and width from user in feet
// 2: convert length and width to yards
// 3: multiply length and width to get area
// 4: take area and multiply by coverage
// 5: output cubic yards

function calculateGravel(){  //define function

// 1: get length and width from user in feet
var lengthFeet = document.getElementById('lengthFeet').value;
var widthFeet = document.getElementById('widthFeet').value;

  
// 2: convert length and width to yards
var lengthYards = lengthFeet * 0.3333333;
var widthYards = widthFeet * 0.3333333;

  
// 3: multiply length and width to get area
var areaYards = lengthYards * widthYards;

// 4a: radio button variables
var depth;
if (document.getElementById('radio-1').checked) {
  depth = 0.0833333;
}else if (document.getElementById('radio-2').checked) {
  depth = 0.0555556;
}else if (document.getElementById('radio-3').checked) {
  depth = 0.0277778;
}
  
// 4b: take area and multiply by coverage
var cubicYards = areaYards * depth;
  

  
// 5: output cubic yards

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('coverage');
// Write the sting of variables
el.innerHTML = '<h3>' + cubicYards + '</h3>';
  
};