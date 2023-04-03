import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/shared_css/navbar.css";
import "../css/shared_css/footer.css";
import "../css/shared_css/inputform.css";
import "../css/shared_css/table.css";
import "../css/shared_css/herobutton.css";
import "../css/live.css";

/*eslint-disable jsx-a11y/anchor-is-valid*/

function Live() {
  var navLinks = document.getElementById("navLinks");

        function showMenu() {
            navLinks.style.right = "0";
        }

        function hideMenu() {
            navLinks.style.right = "-200px";
        }
  
        const [rows, setRows] = useState([]);

        const onAddWebsite = (e) => {
          e.preventDefault();
          const cate = e.target.elements.Category.value;
          const prdr = e.target.elements.Purchase.value;
          const date = e.target.elements.Date.value;
          const amnt = e.target.elements.Amount.value;
      
          setRows([...rows, { cate, prdr, date, amnt }]);
        };
      
        const onDeleteRow = (index) => {
          setRows(rows.filter((_, i) => i !== index));
        };
      

  // the is the functionalites for the social media icons
  const showFBpage = () => {
    window.location.href =
      "https://www.facebook.com/groups/LibertyCFL/?_ga=2.101789572.488967955.1669654119-816072560.1565226602";
  };

  const showTWpage = () => {
    window.location.href =
      "https://twitter.com/LibertyU_Busi?_ga=2.101985156.488967955.1669654119-816072560.1565226602";
  };

  const showIGpage = () => {
    window.location.href =
      "https://www.instagram.com/lucenterforfinancialliteracy/?_ga=2.268035211.488967955.1669654119-816072560.1565226602";
  };

  const showLIpage = () => {
    window.location.href =
      "https://www.linkedin.com/company/center-for-financial-literacy-liberty-university/?viewAsMember=true";
  };

  return (
    <>
        
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Live</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <section className="header">
                    <nav>
                        <a href="./index.js">
                        <img src="" alt="" />
                        </a>
                        <div className={showMenu ? 'nav-links show-nav' : 'nav-links'}>
                        <i className="fa-solid fa-square-xmark" onClick={hideMenu}></i>
                        <ul>
                            <li>
                            <NavLink to="/index.js" id="homeNav">SUMMARY</NavLink>
                            </li>
                            <li>
                            <NavLink to="/live.js" id="liveNav">LIVE</NavLink>
                            </li>
                            <li>
                            <NavLink to="/give.js" id="giveNav">GIVE</NavLink>
                            </li>
                            <li>
                            <NavLink to="/grow.js" id="growNav">GROW</NavLink>
                            </li>
                            <li>
                            <NavLink to="/owe.js" id="oweNav">OWE</NavLink>
                            </li>
                            <li>
                            <NavLink to="/about.js" id="aboutNav">ABOUT</NavLink>
                            </li>
                        </ul>
                        </div>
                        <i className="fa-solid fa-bars" onClick={showMenu}></i>
                    </nav>
                    <div className="text-box">
                        <h1>Live</h1>
                        <hr />
                        <p>What is Your Cost of Living?</p>
                        <a href="#form-header" className="hero-btn" id="libertyBtn"
                        >Click here to enter your expenses</a>
                    </div>
            </section>

            <section>
                <h1 id="form-header" className="form-header">Enter your Expenses</h1>
                <div className="container1" id='container1'>
                    <form action="#" method="POST" onSubmit={onAddWebsite}>
                    <div className="user-details">
                        <div className="input-box">
                        <span className="details">Category</span>
                        <select className="input-box" name="Category" id="CategoryInput" required>
                            <option disabled value selected>Select the category</option>
                            <option value="Food">Food</option>
                            <option value="Housing">Housing</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Personal">Personal Spending</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                        </div>
        
                        <div className="input-box">
                            <span className="details">Description</span>
                            <input
                            type="text"
                            id="PurchaseInput"
                            className="purchaseInput"
                            placeholder="Enter the type of purchase"
                            name="Purchase"
                            required/>
                        </div>
                    
                        <div className="input-box" id="dateBox">
                            <span className="details">Date</span>
                            <input
                            type="date"
                            id="DateInput"
                            className="dateInput"
                            placeholder="11/14/2022"
                            name="Date"
                            required/>
                        </div>
                    
                        <div className="input-box">
                            <span className="details">Amount</span>
                            <input
                            type="text"
                            id="AmountInput"
                            className="amountInput"
                            data-type="currency"
                            placeholder="Enter the amount"
                            name="Amount"
                            required />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" id="button" />
                    </div>
                    </form>
                </div>
            </section>

            <section>
                <table id="tbl" className="table">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                        <td>{row.cate}</td>
                        <td>{row.prdr}</td>
                        <td>{row.date}</td>
                        <td>{row.amnt}</td>
                        <td><button onClick={() => onDeleteRow(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </section>
            
            <section className="summary-link">
              <NavLink className="hero-btn gold-btn" id="LibertyBtn">
                Back to Summary
              </NavLink>
            </section>

            <section className="footer">
                <h4>About the Team</h4>
                <p>
                    In 2022 the CFL team built the web app to facilitate business students
                    with their finances. The team is comprised of <br />
                    five members: Andrés Choque, Jonathan Wilson, Bailey Warren, Noha
                    Ngassaki, and William Donoho.
                </p>
                <div className="icons">
                    <i className="fa-brands fa-facebook" onClick={showFBpage}></i>
                    <i className="fa-brands fa-twitter" onClick={showTWpage}></i>
                    <i className="fa-brands fa-instagram" onClick={showIGpage}></i>
                    <i className="fa-brands fa-linkedin" onClick={showLIpage}></i>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by CFL Team</p>
            </section>
    </>
    );
}
        
export default Live;