import React from "react";
import "./XExpenseTracker.css";

const WalletBalanceDisplay = ({walletBalance}) => {

    // const walletBalanceFromLS = localStorage.getItem("walletBalance");

    return(
        <>
            <span style={{ color: "white", fontSize: "28px" }}>
                Wallet Balance: <span style={{color:"#adf802"}}>₹{walletBalance}</span>
            </span>
            {/*<button className="button income_btn">+Add Income</button>*/}
        </>
    )
}

export default WalletBalanceDisplay;