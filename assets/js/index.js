const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const submitBtn = document.querySelector('.submitBtn')
const resultEl = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultEl.style.color = 'red'
    } else {
        resultEl.style.color = 'green'
    }

    resultEl.textContent = result
}

submitBtn.onclick = function () {
    if (action === '+') {
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    } else if (action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    }
    
}
