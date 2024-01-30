// Sample expenses array
let expenses = [];

// Function to add a new expense
function addExpense() {
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    // Validate input
    if (isNaN(amount) || amount <= 0 || !category || !date) {
        alert('Please enter valid information.');
        return;
    }

    // Create a new expense object
    const newExpense = {
        amount,
        category,
        date
    };

    // Add the new expense to the expenses array
    expenses.push(newExpense);

    // Update the display
    displayExpenses();

    // Clear the form
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    document.getElementById('date').value = '';
}

// Function to display expenses
function displayExpenses() {
    const expenseList = document.getElementById('expense-list');

    // Clear previous content
    expenseList.innerHTML = '';

    // Display each expense in the list
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <span>${expense.date}</span>
            <span>${expense.category}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(expenseItem);
    });
}

// Function to delete an expense
function deleteExpense(index) {
    // Remove the expense from the array
    expenses.splice(index, 1);

    // Update the display
    displayExpenses();
}
