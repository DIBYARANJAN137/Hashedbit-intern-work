//QUESTION-1

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

//QUESTION-2

function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
        default: return 'Invalid operator';
    }
}

console.log(calculate(3,4,'+'));

//QUESTION-3

function findTax(salary) {
    switch (true) {
        case salary > 1500000: return salary * 0.30;
        case salary > 1000000: return salary * 0.20;
        case salary > 500000: return salary * 0.10;
        default: return 0;
    }
}

console.log(findTax(750000));

//QUESTION-4


function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let d1 = parseInt(str1[i] || 0);
        let d2 = parseInt(str2[i] || 0);
        sum += d1 * d2;
    }

    return sum;
}

console.log(sumOfProducts(1,2));