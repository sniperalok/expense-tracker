import React from "react";
import "./XExpenseTracker.css";

const ExpenseSummaryDisplay = ({expenses}) => {
    const totalExpense = expenses.reduce((acc,expense) => {
        return acc+ parseFloat(expense.amount);
    },0);

    return(
        <>
            <span style={{ color: "white", fontSize: "28px" }}>
                Expenses: <span style={{color:"orange"}}> ₹{totalExpense} </span>
            </span>
        </>
    )
}

export default ExpenseSummaryDisplay;