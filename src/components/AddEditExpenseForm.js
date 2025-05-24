import React, { useState } from 'react';
// import Modal from './Modal';
import ReactModal from 'react-modal';
import "./XExpenseTracker.css";

const AddEditExpenseForm = ({ addExpense, editExpense, currentExpense, showModal, closeModal }) => {
    const [formData, setFormData] = useState(currentExpense || { title: '', amount: '', category: '', date: '' });

    const categories = ["Food","Entertainment","Travel", "Shopping","Utilities"];

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
        setFormData({ title: '', amount: '', category: '', date: '' });
        closeModal();
    };

    return (
        <ReactModal className="custom-modal" isOpen={showModal} onRequestClose={closeModal}>
            <h3>Add Expenses</h3>
            <form className="formComponent" onSubmit={handleSubmit}>
                <label className="sr-only">Title:</label>
                <input className="input-txt" type="text" name="title" placeholder="  Title" value={formData.title} onChange={handleChange} required />
                <label className="sr-only">Amount:</label>
                <input className="input-txt" type="number" name="amount" placeholder="  Amount" value={formData.amount} onChange={handleChange} required />
                <label className="sr-only">Category:</label>
                {/*<input className="input-txt" type="text" name="category" placeholder="  Select Category" value={formData.category} onChange={handleChange} required />*/}
                <select className="input-txt" name="category" value={formData.category} onChange={handleChange} required> 
                    <option value="" disabled>Select Category</option> 
                    {categories.map((category, index) => ( 
                        <option key={index} value={category}>{category}</option> 
                    ))}
                </select>
                <label className="sr-only">Date:</label>
                <input className="input-txt" type="date" name="date" value={formData.date} onChange={handleChange} required />
                <button style={{
                    backgroundColor:"orange",
                    width:"40%",
                    height:"30px",
                    margin: "5px 20px",
                    borderRadius:"10px",
                    border:"none",
                    }} 
                type="submit">
                    {currentExpense ? 'Edit Expense' : 'Add Expense'}
                </button>

                <button style={{
                        backgroundColor:"grey",
                        width:"25%",
                        height:"30px",
                        margin: "5px 20px",
                        borderRadius:"10px",
                        border:"none",
                        }} 
                onClick={closeModal}>
                    Cancel
                </button>
            </form>
        </ReactModal>
    );
};

export default AddEditExpenseForm;