const cal_btn = document.getElementById('calcu');
const expense_btn = document.getElementById('expense_btn');

const income = document.getElementById('input_income');
const input_expenses = document.getElementById('input_expenses');
const expenses_list = document.getElementById('expenses_list');

const totalExpensesDisplay = document.querySelector("p span"); // first <span> inside <p>
const savingDisplay = document.querySelectorAll("p span")[1]; // second <span>

let totalExpenses = 0;

// Add expenses to total
expense_btn.addEventListener('click', () => {
    if (input_expenses.value.trim() === '' || isNaN(input_expenses.value)) {
        alert("Please enter a valid expense amount");
        return;
    }

    if (expenses_list.value.trim() === '' || expenses_list.value === "Select the Expenses") {
        alert("Please select an expense category");
        return;
    }

    totalExpenses += Number(input_expenses.value);
    totalExpensesDisplay.textContent = `Total Expenses: ${totalExpenses} (Latest: ${expenses_list.value})`;

    input_expenses.value = ""; // clear input after adding
    expenses_list.value = "Select the Expenses"; // reset dropdown
});

// Calculate Saving
cal_btn.addEventListener('click', () => {
    if (income.value.trim() === '' || isNaN(income.value)) {
        alert("Enter a valid Income");
        return;
    }

    const saving = Number(income.value) - totalExpenses;
    savingDisplay.textContent = `Saving: ${saving}`;
});
