import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import "./XExpenseTracker.css";

const AddEditExpenseForm = ({ addExpense, editExpense, currentExpense, showModal, closeModal }) => {
    const [formData, setFormData] = useState({ title: '', amount: '', category: '', date: '' });

    const categories = ["Food", "Entertainment", "Travel", "Shopping", "Utilities"];

    useEffect(() => {
        setFormData(currentExpense || { title: '', amount: '', category: '', date: '' });
    }, [currentExpense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            ...formData,
            amount: parseFloat(formData.amount)
        };

        if (isNaN(expenseData.amount) || expenseData.amount <= 0) {
            alert("Please enter a valid positive amount.");
            return;
        }

        currentExpense ? editExpense(expenseData) : addExpense(expenseData);

        setFormData({ title: '', amount: '', category: '', date: '' });
        closeModal();
    };

    return (
        <ReactModal className="custom-modal" isOpen={showModal} onRequestClose={closeModal} ariaHideApp={false}>
            <h3>{currentExpense ? "Edit Expense" : "Add Expenses"}</h3>
            <form className="formComponent" onSubmit={handleSubmit}>
                <label className="sr-only">Title:</label>
                <input
                    className="input-txt"
                    type="text"
                    name="title"
                    placeholder="  Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label className="sr-only">Amount:</label>
                <input
                    className="input-txt"
                    type="number"
                    name="amount"
                    placeholder="  Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="0.01"
                    step="0.01"
                />

                <label className="sr-only">Category:</label>
                <select
                    className="input-txt"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>

                <label className="sr-only">Date:</label>
                <input
                    className="input-txt"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <button
                    style={{
                        backgroundColor: "orange",
                        width: "40%",
                        height: "30px",
                        margin: "5px 20px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                    }}
                    type="submit"
                >
                    {currentExpense ? 'Edit Expense' : 'Add Expense'}
                </button>

                <button
                    type="button"
                    style={{
                        backgroundColor: "grey",
                        width: "25%",
                        height: "30px",
                        margin: "5px 20px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                    }}
                    onClick={closeModal}
                >
                    Cancel
                </button>
            </form>
        </ReactModal>
    );
};

export default AddEditExpenseForm;
