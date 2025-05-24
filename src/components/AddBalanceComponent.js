import React, { useState } from 'react';
import ReactModal from 'react-modal';

const AddBalanceComponent = ({ addBalance, walletBalance, showBalanceModal, closeBalanceModal }) => {
    const [newIncome, setNewIncome] = useState("");

    const handleChange = (e) => {
        setNewIncome(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const incomeValue = parseFloat(newIncome);
        if (isNaN(incomeValue) || incomeValue <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }

        addBalance(incomeValue);
        localStorage.setItem("walletBalance", incomeValue.toString());
        closeBalanceModal();
        setNewIncome(""); // Reset input
    };

    return (
        <ReactModal 
            className="custom-modal" 
            isOpen={showBalanceModal} 
            onRequestClose={closeBalanceModal}
            ariaHideApp={false}
        >
            <h3 style={{ paddingTop: "15px", marginLeft: "20px" }}>Add Balance</h3>
            <form className="formComponent addBalance_form" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="income">Income:</label>
                <input
                    className="input-txt"
                    id="income"
                    type="number"
                    name="income"
                    placeholder="Income Amount"
                    value={newIncome}
                    onChange={handleChange}
                    required
                    min="0.01"
                    step="0.01"
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
                    Add Balance
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
                    onClick={closeBalanceModal}
                >
                    Cancel
                </button>
            </form>
        </ReactModal>
    );
};

export default AddBalanceComponent;
