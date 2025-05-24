import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ expenses }) => {
    const data = {
        // labels: [...new Set(expenses.map(expense => expense.category))],
        datasets: [{
            data: expenses.map(expense => expense.amount),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6347', '#4BC0C0']
        }],
        labels: [...new Set(expenses.map(expense => expense.category))]
    };

        // <div className="expense-summary">
        //     <Pie data={data} />
        // </div>

    return (
        <Pie data={data} />
    );
};

export default ExpensePieChart;