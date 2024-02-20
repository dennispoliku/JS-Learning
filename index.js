let num1 = 0
let num2 = 0
let cleared = "Clear"
let cleared2 = "Clear"

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
document.getElementById("clear-el").textContent = cleared
document.getElementById("clear-el2").textContent = cleared2

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

function add1() {
  let result = num1 + 1
  num1El.textContent = result   
  num1 = result
}
function add2() {
  let result = num1 + 2
  num1El.textContent = result   
  num1 = result
}

function add3() {
  let result = num1 + 3
  num1El.textContent = result
  num1 = result
}

function clear1() {
  num1 = 0
  num1El.textContent = num1
}

function add1a(){
  let result = num2 + 1
  num2El.textContent = result
  num2 = result
}

function add2a() {
  let result = num2 + 2
  num2El.textContent = result
  num2 = result
}

function add3a() {
  let result = num2 + 3
  num2El.textContent = result
  num2 = result
}

function clear2() {
  num2 = 0
  num2El.textContent = num2
}