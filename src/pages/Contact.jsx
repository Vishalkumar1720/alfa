import React from "react";
// import "./Contact.css"; // Make sure to create a CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h3>Make an Enquiry</h3>
                <p>Submit your details and someone from our team will contact you shortly.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID*</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile No.*</label>
                        <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company*</label>
                        <input type="text" id="company" name="company" placeholder="Enter your company name" required />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
