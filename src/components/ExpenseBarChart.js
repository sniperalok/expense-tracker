import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseTrends = ({ expenses }) => {
    const data = {
        labels: [...new Set(expenses.map(expense => expense.category))],
        datasets: [{
            data: expenses.map(expense => expense.amount),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6347', '#4BC0C0']
        }]
    };

    return (
        <div className="expense-trends">
            <h2>Expense Trends</h2>
            <Bar data={data} />
        </div>
    );
};

export default ExpenseTrends;