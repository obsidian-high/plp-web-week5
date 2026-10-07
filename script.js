// SpendWise JavaScript Foundation


// ========================================
// 1. APPLICATION VARIABLES
// ========================================

// Default budgeting information
let monthlyBudget = 100000;
let totalExpenses = 55700;
let savings = 18500;


// ========================================
// 2. BUDGET CALCULATION FUNCTION
// ========================================

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// ========================================
// 3. SAVINGS CALCULATION FUNCTION
// ========================================

function calculateSavings(balance, amountSaved) {
    return balance - amountSaved;
}


// ========================================
// 4. USER INPUT
// ========================================

function startBudgetCalculator() {

    // Ask the user for their monthly budget
    let userBudget = prompt(
        "Enter your monthly budget in KSh:"
    );

    // Ask the user for their total expenses
    let userExpenses = prompt(
        "Enter your total expenses in KSh:"
    );


    // Convert input from strings to numbers
    userBudget = Number(userBudget);
    userExpenses = Number(userExpenses);


    // ========================================
    // 5. CALCULATIONS
    // ========================================

    let remainingBalance =
        calculateRemainingBalance(
            userBudget,
            userExpenses
        );


    // ========================================
    // 6. DISPLAY RESULTS
    // ========================================

    console.log("===== SpendWise Budget Report =====");

    console.log("Monthly Budget: KSh " + userBudget);

    console.log("Total Expenses: KSh " + userExpenses);

    console.log(
        "Remaining Balance: KSh " + remainingBalance
    );

    console.log("===================================");


    // Display a message depending on the balance
    if (remainingBalance > 0) {

        console.log(
            "Status: You still have money remaining."
        );

    } else if (remainingBalance === 0) {

        console.log(
            "Status: You have used your entire budget."
        );

    } else {

        console.log(
            "Status: You have exceeded your budget."
        );
    }
}


// ========================================
// 7. DEFAULT CALCULATION
// ========================================

let defaultRemainingBalance =
    calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );


console.log("===== SpendWise Default Data =====");

console.log(
    "Monthly Budget: KSh " + monthlyBudget
);

console.log(
    "Total Expenses: KSh " + totalExpenses
);

console.log(
    "Remaining Balance: KSh " +
    defaultRemainingBalance
);

console.log(
    "Savings: KSh " + savings
);

console.log("===================================");