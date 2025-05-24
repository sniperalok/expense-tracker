import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import "./XExpenseTracker.css";

const AddEditExpenseForm = ({ addExpense, editExpense, currentExpense, showModal, closeModal }) => {
    const [formData, setFormData] = useState({ title: '', price: '', category: '', date: '' });

    const categories = ["Food", "Entertainment", "Travel", "Shopping", "Utilities"];

    // Sync form data when editing
    useEffect(() => {
        if (currentExpense) {
            setFormData(currentExpense);
        } else {
            setFormData({ title: '', price: '', category: '', date: '' });
        }
    }, [currentExpense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentExpense) {
            editExpense(formData);
        } else {
            addExpense(formData);
        }
        setFormData({ title: '', price: '', category: '', date: '' });
        closeModal();
    };

    return (
        <ReactModal
            className="custom-modal"
            isOpen={showModal}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            <h3>Add Expenses</h3>
            <form className="formComponent" onSubmit={handleSubmit}>
                <label className="sr-only">Title:</label>
                <input
                    className="input-txt"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                
                <label className="sr-only">Price:</label>
                <input
                    className="input-txt"
                    type="number"
                    name="price"
                    placeholder="Amount"
                    value={formData.price}
                    onChange={handleChange}
                    required
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
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
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
                    type="submit"
                    style={{
                        backgroundColor: "orange",
                        width: "40%",
                        height: "30px",
                        margin: "5px 20px",
                        borderRadius: "10px",
                        border: "none"
                    }}
                >
                    {currentExpense ? 'Edit Expense' : 'Add Expense'}
                </button>

                <button
                    type="button"
                    onClick={closeModal}
                    style={{
                        backgroundColor: "grey",
                        width: "25%",
                        height: "30px",
                        margin: "5px 20px",
                        borderRadius: "10px",
                        border: "none"
                    }}
                >
                    Cancel
                </button>
            </form>
        </ReactModal>
    );
};

export default AddEditExpenseForm;
