let expenses = []
let totalAmount = 0;
const CategorySelect = document.getElementById('category_select')
const AmountInput = document.getElementById('amount_input')
const InfoInput = document.getElementById('info')
const DateInput = document.getElementById('date_input')
const Addbtn = document.getElementById('add_btn')
const ExpenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('Total-amount')

Addbtn.addEventListener('click', async function(){
    const category = CategorySelect.value;
    const info = InfoInput.value;
    const amount = Number(AmountInput.value);
    const date = DateInput.value;

    if(category === ''){
        alert('Please Select a Category');
        return;
    }
    if(isNaN(amount)|| amount<=0){
        alert('Please Enter valid Amount');
        return;
    }
    if(info === ''){
        alert('Please Give a valid Info');
        return;
    }
    if(date === ''){
        alert('Please Select a date');
        return;
    }
    expenses.push({category,amount,info,date})
    var data = {
        'category_select': category,
        'amount_input': amount,
        'info':info,
        'date_input': date
    }

    const response = await fetch ('/add',{method : "POST",headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)}).then(res=>res.json()).then(data=>{console.log(data)})
    

    if(category === 'Income'){
        totalAmount += amount;
    }
    if(category === 'Expense'){
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = ExpenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount -= amount;
        }
        if(category === 'Expense'){
            totalAmount += amount;
        }

        totalAmountCell.textContent = totalAmount;
        ExpenseTableBody.removeChild(newRow)
    })

    const expense = expenses[expenses.length-1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    infoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses){
    if(category === 'Income'){
        totalAmount += amount;
    }
    if(category === 'Expense'){
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = ExpenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount -= amount;
        }
        if(category === 'Expense'){
            totalAmount += amount;
        }

        totalAmountCell.textContent = totalAmount;
        ExpenseTableBody.removeChild(new Row)
    })

    const expense = expenses[expenses.length-1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    infoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

}