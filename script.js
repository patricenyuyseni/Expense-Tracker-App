const balanceEl = document.getElementById("balance");
const expenseNameEl = document.getElementById("expense-name");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseAmountEl = document.getElementById("expense-amount");
const expenseListEl = document.getElementById("expense-list");

let balance = 0;
addExpenseBtn.addEventListener("click", () =>{
    const name = addexpenseNameEl.value.trim();
    const amount = parseFloat(expenseAmountEl.value);

    if(name ==="" || isNaN(amount) ||amount <= 0){
        alert("please enter a valid expense name and amount");
        return;
    }
    balance -= amount 
    balanceEl.textContent = balance.toFixed(2);

    const li = document.createElement('li');
    li.innerHTML = ${name} - $${amount.toFixed(2)}
    <button class= "delete-btn">x</button>
    expenseListEl.appendChild(li);

    li.querySelector("delete-btn").addEventListener("click", () =>{
        balance += amount;
        balanceEl.textContent= balance.toFixed(2);
        li.remove();
    })
    expenseNameEl.value= "";
    expenseAmountEl.value= "";

} 

)