import React from 'react';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
    return (
        <div className="expense-list">
            <h2>Expense List</h2>
            {expenses.map((expense) => (
                <div key={expense.id} className="expense-item">
                    <span>{expense.title}</span>
                    <span>₹{expense.amount}</span>
                    <span>{expense.category}</span>
                    <span>{expense.date}</span>
                    <button onClick={() => editExpense(expense)}>Edit</button>
                    <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;