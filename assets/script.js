
let yourName = "Nathan Kreger" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb


const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const qtyGb = document.querySelector('#qty-gb')
const qtysugar = document.querySelector('#qty-sugar')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const qtyCc = document.querySelector('#qty-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

const qtyttl = document.querySelector('#qty-total')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(){
    qtyGb.textContent -=-1
    qtyttl.textContent -=-1
// HINT: You can delete this console.log after you no longer need it!

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
gbMinusBtn.addEventListener('click', function(){
    qtyGb.textContent -=1
    qtyttl.textContent -=1
})
ccPlusBtn.addEventListener('click', function(){
    qtyCc.textContent -=-1
    qtyttl.textContent -=-1
})
ccMinusBtn.addEventListener('click', function(){
    qtyCc.textContent -=1
    qtyttl.textContent -=1
})
sugarPlusBtn.addEventListener('click', function(){
    qtysugar.textContent -=-1
    qtyttl.textContent -=-1
})
sugarMinusBtn.addEventListener('click', function(){
    qtysugar.textContent -=1
    qtyttl.textContent -=1
})
// TODO: Hook up event listeners for the rest of the buttons
