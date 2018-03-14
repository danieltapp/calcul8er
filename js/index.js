//DOM Elements for the Calculator

var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var equals = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var input = document.querySelector("#userInput");

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var zero = document.querySelector('#ten');


function focus() {
  input.focus();
}

add.addEventListener("click", function() {
  number = input.value.toString();
  if (number.match(/[a-z]/i)) {
    alert("You can only use numbers dude!");
  } else {
    plus = " + ";
    equation = number + plus;
    input.value = equation;
    focus();
  }
});



subtract.addEventListener("click", function() {
  number = input.value.toString();
  if (number.match(/[a-z]/i)) {
    alert("You can only use numbers dude!");
  } else {
    minus = " - ";
    equation = number + minus;
    input.value = equation;
    focus();
  }
});

multiply.addEventListener("click", function() {
  number = input.value.toString();
  if (number.match(/[a-z]/i)) {
    alert("You can only use numbers dude!");
  } else {
    times = " * ";
    equation = number + times;
    input.value = equation;
    focus();
  }
});

divide.addEventListener("click", function() {
  number = input.value.toString();
  if (number.match(/[a-z]/i)) {
    alert("You can only use numbers dude!");
  } else {
    by = " / ";
    equation = number + by;
    input.value = equation;
    focus();
  }
});

equals.addEventListener("click", function() {
  equation = input.value;
  if (equation.match(/[a-z]/i)) {
    alert("You can only use numbers dude!");
  } else {
    input.value = eval(equation);
  }
});

clear.addEventListener("click", function() {
  input.value = "";
});

//number buttons

one.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "1";
});
two.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "2";
});
three.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "3";
});
four.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "4";
});
five.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "5";
});
six.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "6";
});
seven.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "7";
});
eight.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "8";
});
nine.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "9";
});
zero.addEventListener('click', function(){
  number = input.value.toString();
  input.value = number + "0";
});