// @ts-nocheck
function changeBackgroundColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightyellow' ? '#f0f8ff' : 'lightyellow';
}

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('You must type something');
    } else {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTask.textContent = taskInput;
        newTask.onclick = () => newTask.remove();
        taskList.appendChild(newTask);
    }
    document.getElementById('taskInput').value = '';
}

function sortNumbers(ascending) {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(Number);
    if (numbersArray.some(isNaN)) {
        alert('Please enter valid numbers');
        return;
    }
    numbersArray.sort((a, b) => ascending ? a - b : b - a);
    document.getElementById('sortedNumbers').textContent = `Sorted Numbers: ${numbersArray.join(', ')}`;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '': result = num1 ** num2; break;
    }
    document.getElementById('calcResult').textContent = `Result: ${result}`;
}

function calculateTax() {
    const taxRate = 20.0;
    const income = parseFloat(document.getElementById('incomeInput').value);
    if (isNaN(income) || income < 0) {
        alert('Please enter a valid income.');
        return;
    }
    const taxAmount = (income * (taxRate / 100)).toFixed(2);
    document.getElementById('taxResult').textContent = `Your tax amount on an income of $${income.toFixed(2)} at a tax rate of ${taxRate}% is: $${taxAmount}`;
}

function calculateTotal() {
    const amount = parseFloat(document.getElementById('amount').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    
    if (isNaN(amount) || isNaN(taxRate) || amount < 0 || taxRate < 0) {
        document.getElementById('result').innerText = "Please enter valid positive numbers.";
        return;
    }
    
    const tax = (taxRate / 100) * amount;
    const total = amount + tax;
    
    document.getElementById('result').innerText = "Total Amount after tax: $" + total.toFixed(2);
}
