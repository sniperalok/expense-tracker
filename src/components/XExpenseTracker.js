import React, { useState, useEffect } from "react";
import "./XExpenseTracker.css";
import { Button, TextField, Typography } from '@mui/material'

import WalletBalanceDisplay from "./WalletBalanceDisplay.js";
import ExpenseSummaryDisplay from "./ExpenseSummaryDisplay.js";
import AddEditExpenseForm from "./AddEditExpenseForm.js";
import AddBalanceComponent from "./AddBalanceComponent.js";  
import ExpensePieChart from "./ExpensePieChart.js";

const XExpenseTracker = () => {
    const [walletBalance,setWalletBalance] = useState(5000);
    const [expenses, setExpenses] = useState([]);    
    const [showBalanceModal, setShowBalanceModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentExpense, setCurrentExpense] = useState(null);
    const [form, setForm] = useState({ 
        title: '', 
        amount: '', 
        category: '', 
        date: '' 
    }); 
    const [editId, setEditId] = useState(null);

    useEffect(()=>{
        const savedBalance = localStorage.getItem("walletBalance");
        const savedExpense = localStorage.getItem("expenses");
        // const savedTotalExpense = localStorage.getItem("totalExpense");

        //display the saved income and expense if present, else display the default values
        if (savedBalance){
            setWalletBalance(JSON.parse(savedBalance));
        }
        if(savedExpense){
            setExpenses(JSON.parse(savedExpense));
        }
    },[]);

    //whenever the wallet balance or the expenses change, it should be updated in the local storage.

    useEffect(()=>{
        localStorage.setItem("walletBalance",JSON.stringify(walletBalance));
        localStorage.setItem("expenses",JSON.stringify(expenses));
    },[walletBalance,expenses]);

    const addBalance = (income) => {
        setWalletBalance(walletBalance + parseInt(income));
    };

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
        setWalletBalance(walletBalance - expense.amount);
    };

    const editExpense = (updatedExpense) => {
        const updatedExpenses = expenses.map(expense => expense.id === updatedExpense.id ? updatedExpense : expense);
        setExpenses(updatedExpenses);
    };

    const deleteExpense = (id) => {
        const filteredExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(filteredExpenses);
    };

    const openBalanceModal = () => {
        setShowBalanceModal(true);
    }

    const closeBalanceModal = () => {
        setShowBalanceModal(false);
        // setCurrentExpense(null);
    };

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setCurrentExpense(null);
    };

    return (
        <div className="container-div">
        <h6 className="heading-title">Expense Tracker</h6>

        <div className="main-div">
            <div
            style={{
                width: "100%",
                height: "45%",
                margin: "10px auto",
                backgroundColor: "#555555",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "8px",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
                marginTop: "-50px",
            }}
            >
            <div className="flex-container">
                <div className="flex-item">
                    <WalletBalanceDisplay walletBalance={walletBalance}/>
                    <button className="button income_btn" onClick={openBalanceModal}>+Add Income</button>
                    {showBalanceModal?
                        (<AddBalanceComponent 
                            addBalance={addBalance}
                            walletBalance={walletBalance}
                            showBalanceModal={showBalanceModal}
                            closeBalanceModal={closeBalanceModal}
                        />):null}
                </div>
                <div className="flex-item">
                    <ExpenseSummaryDisplay expenses={expenses}/>
                    <button className="button expense_btn" onClick={openModal}> +Add Expense</button>               
                    {showModal?
                        (<AddEditExpenseForm
                            addExpense={addExpense}
                            editExpense={editExpense}
                            currentExpense={currentExpense}
                            showModal={showModal}
                            closeModal={closeModal}
                        />)
                        :null}
                </div>
                <div className="flex-item pieChart-container">
                            <ExpensePieChart expenses={expenses}/>
                </div>
            </div>
            </div>
            <div className="summary-container">
            <div className="recent-txn">
                <h4>Recent Transactions</h4>
                <div
                style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginTop: "-20px",
                }}
                >
                No Transactions yet
                </div>
            </div>
            <div className="top-expense">
                <h4>Top Expenses</h4>
                <div
                className="expense-categories"
                style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginTop: "-20px",
                }}
                >
                <div>Food-</div>
                <div>Entertainment-</div>
                <div>Travel-</div>
                </div>
            </div>
            </div>
         </div>
        </div>
    );
};

export default XExpenseTracker;