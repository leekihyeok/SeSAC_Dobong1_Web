// App.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { depositAmount, withdrawAmount } from "./Store";

function Bank() {
  const [amount, setAmount] = useState("");
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    const depositAmountValue = parseFloat(amount);
    if (!isNaN(depositAmountValue)) {
      dispatch(depositAmount(depositAmountValue));
      setAmount("");
    }
  };

  const handleWithdraw = () => {
    const withdrawAmountValue = parseFloat(amount);
    if (!isNaN(withdrawAmountValue)) {
      dispatch(withdrawAmount(withdrawAmountValue));
      setAmount("");
    }
  };

  return (
    <div>
      <h1>Bank Account</h1>
      <p>Balance: {balance}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default Bank;
