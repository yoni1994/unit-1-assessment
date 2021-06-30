const colorScheme = {
    light: '',
    change: function() {
        colorScheme.light = colorScheme.light ? '' : 'light'
        document.querySelector('body').setAttribute('class', colorScheme.light)
    }
}



const mathResult = document.getElementById("math-result")
const input = document.getElementById("math-input")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")
const fizzbuzz = document.getElementById("fizzbuzz")
const lightDarkBtn = document.querySelector('#light-dark-button')


plus.addEventListener("click", handlePlus)
minus.addEventListener("click", handleMinus)
plus.addEventListener('mouseover', handleHover)
minus.addEventListener('mouseover', handleHover)
plus.addEventListener('mouseout', handleHoverEnd)
minus.addEventListener('mouseout', handleHoverEnd)
reset.addEventListener('click', resetNumbers)
lightDarkBtn.addEventListener('click', colorScheme.change)


function handlePlus() {
    mathResult.innerText = parseInt(mathResult.innerText) + parseInt(input.value)
    if (mathResult.innerText >=0) mathResult.style.color = 'black'
    handleFizzBuzz()
}

function handleMinus() {
    mathResult.innerText = parseInt(mathResult.innerText) - parseInt(input.value)
    if (mathResult.innerText < 0) mathResult.style.color = 'red'
    handleFizzBuzz()
}

function handleHover(evt) {
    evt.target.style.backgroundColor = '#282828'
    evt.target.style.color = 'white'
}

function handleHoverEnd(evt) {
    evt.target.style.backgroundColor = 'white'
    evt.target.style.color = '#282828'
}

function resetNumbers() {
    mathResult.innerText = 0
    mathResult.style.color = 'black'
    input.value = 1
    fizzbuzz.innerText = ''
}

function handleFizzBuzz() {
    if (mathResult.innerText % 3 === 0 && mathResult.innerText % 5 === 0) {
        fizzbuzz.innerText = 'FizzBuzz'
    }
    else if (mathResult.innerText % 3 === 0) {
        fizzbuzz.innerText = 'Fizz'
    }
    else if (mathResult.innerText % 5 === 0) {
        fizzbuzz.innerText = 'Buzz'
    }
    else {
        fizzbuzz.innerText = ''
    }
}