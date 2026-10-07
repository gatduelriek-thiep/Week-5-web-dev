// JavaScript variable
// Budget and expenses
let totalBudget = 0;
let expenses = {
  food: 0,
  transport: 0,
  rent: 0,
  entertainment: 0,
  savings: 0,
  utilities: 0
};

// Collect budget
totalBudget = parseFloat(prompt("Enter your total budget:"));

// Collect expenses
expenses.food = parseFloat(prompt("Enter your Food expense:"));
expenses.transport = parseFloat(prompt("Enter your Transport expense:"));
expenses.rent = parseFloat(prompt("Enter your Rent expense:"));
expenses.entertainment = parseFloat(prompt("Enter your Entertainment expense:"));
expenses.savings = parseFloat(prompt("Enter your Savings amount:"));
expenses.utilities = parseFloat(prompt("Enter your Utilities expense:"));

function calculateTotalExpenses(expenses) {
  let sum = 0;
  for (let category in expenses) {
    sum += expenses[category];
  }
  return sum;
}

function calculateRemainingBudget(budget, expenses) {
  return budget - calculateTotalExpenses(expenses);
}

let totalExpenses = calculateTotalExpenses(expenses);
let remainingBudget = calculateRemainingBudget(totalBudget, expenses);

console.log("SpendWise Results");
console.log("Total Budget: $" + totalBudget);
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + remainingBudget);
