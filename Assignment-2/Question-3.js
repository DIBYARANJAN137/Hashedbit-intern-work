//QUESTION-3

function findTax(salary) {
    switch (true) {
        case salary > 1500000: return salary * 0.30;
        case salary > 1000000: return salary * 0.20;
        case salary > 500000: return salary * 0.10;
        default: return 0;
    }
}