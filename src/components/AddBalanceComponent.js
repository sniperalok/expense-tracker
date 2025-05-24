import React, { useState } from 'react';
import ReactModal from 'react-modal';

const AddBalanceComponent = ({addBalance,walletBalance,showBalanceModal,closeBalanceModal}) => {
    const [newIncome,setNewIncome] = useState("");

    const handleChange = (e) => {
        setNewIncome(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBalance(parseInt(newIncome));
        localStorage.setItem("walletBalance",newIncome);
        closeBalanceModal();
    }

    return(
        <>
            <ReactModal className="custom-modal" isOpen={showBalanceModal} onRequestClose={closeBalanceModal}>
                    <h3 style={{paddingTop: "15px" ,marginLeft: "20px"}}>Add Balance</h3>
                    <form className="formComponent addBalance_form" onSubmit={handleSubmit}>
                        <label className="sr-only">Income:</label>
                        <input className="input-txt" type="number" name="income" 
                            placeholder="Income Amount" value={newIncome} onChange={handleChange} required 
                        />

                        <button style={{
                            backgroundColor:"orange",
                            width:"40%",
                            height:"30px",
                            margin: "5px 20px",
                            borderRadius:"10px",
                            border:"none",
                            }} 
                        type="submit">
                            Add Balance
                        </button>
        
                        <button style={{
                                backgroundColor:"grey",
                                width:"25%",
                                height:"30px",
                                margin: "5px 20px",
                                borderRadius:"10px",
                                border:"none",
                                }} 
                        onClick={closeBalanceModal}>
                            Cancel
                        </button>    
                    </form>
            </ReactModal>
        </>
    )

}

export default AddBalanceComponent;