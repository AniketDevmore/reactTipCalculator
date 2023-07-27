import React from "react";
import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [name, setName] = useState("");
  const [tip, setTip] = useState("");
  const [bill, setBill] = useState("");
  const [state, setState] = useState([]);
  const [totalTip, setTotalTip] = useState(0);
  const [customer, setCustomer] = useState(0);

  const billHandler = (event) => {
    let bill = Number(event.target.value);
    // console.log(bill);
    setBill(bill);
  };

  const tipHandler = (event) => {
    // console.log(event.target.value, bill, tip);
    if (event.target.value == 20) {
      setTip(bill * 0.2);
    } else if (event.target.value == 10) {
      setTip(bill * 0.1);
    } else if (event.target.value == 5) {
      setTip(bill * 0.05);
    }
  };

  const nameHandler = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const clickHandler = () => {
    // adding data tp array
    let newCustomer = {
      customer: name,
      billAmount: bill,
      tipAmount: tip,
    };
    setState([...state, newCustomer]);
    // console.log(state, bill, tip, totalTip);
    // two way binding to empty input field
    setBill("");
    setName("");
    setTip("");
  };

  const calculatHandler = () => {
    let addition = 0;
    let a = state.map((ele) => addition + ele.tipAmount);
    let b = a.reduce((sum, ele) => sum + ele);
    setTotalTip(b);

    let c = state.length;
    setCustomer(c);
  };

  return (
    <div>
      <p id="inputTitle">Enter your bill amount</p>
      <input
        type="number"
        id="inputAmount"
        onChange={billHandler}
        value={bill}
      />
      <hr />
      <div>
        <span id="rateService">How was the service</span>
        <select id="select" onChange={tipHandler} value={tip}>
          <option id="disabledValue" value="">
            Choose...
          </option>
          <option value="20" className="opt">
            Excellent
          </option>
          <option value="10" className="opt">
            Moderate
          </option>
          <option value="5" className="opt">
            Bad
          </option>
        </select>
        <br id="break" />
        <input type="text" id="inputName" onChange={nameHandler} value={name} />
        <button className="btn btn-primary" onClick={clickHandler}>
          Add Customer
        </button>
      </div>
      {/* Output section */}
      <div>
        <div>
          <hr />
          <h6 id="outputTitle">Customer List</h6>
          <ul>
            {state.map((ele, i) => (
              <li key={i}>
                {ele.customer} offering a tip of {ele.tipAmount} rupee.
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* <h6 id="tipCustomer">Calculate Tip & Customer</h6> */}
          <button
            onClick={calculatHandler}
            id="tipCustomer"
            className="btn btn-success"
          >
            Calculate Tip & Customer
          </button>
          <table>
            <thead>
              <tr>
                <td>Total Customer</td>
                <td>Tip</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{customer}</td>
                <td>{totalTip}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Input;
