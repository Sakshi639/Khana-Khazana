import React from "react";

const TermsPage = () => (
  <div className="container" style={{padding: '2rem'}}>
    <h1 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow-lg tracking-wide border-b-4 border-blue-300 pb-2">Terms & Conditions</h1>
    <p>Welcome to our food ordering app. By using our service, you agree to the following terms and conditions:</p>
    <h2>Use of Service</h2>
    <ul>
      <li>You must provide accurate information for orders</li>
      <li>Orders are subject to availability and confirmation</li>
      <li>Payment must be completed before delivery</li>
    </ul>
    <h2>Account</h2>
    <ul>
      <li>Keep your account details secure</li>
      <li>Notify us of any unauthorized use</li>
    </ul>
    <h2>Limitation of Liability</h2>
    <p>We are not liable for delays or issues beyond our control. Our maximum liability is limited to the value of your order.</p>
    <h2>Contact Us</h2>
    <p>For any questions about these terms, contact <a href="mailto:sakshi63944@gmail.com" className="text-blue-600 hover:underline">sakshi63944@gmail.com</a> or call <a href="tel:+917982487375" className="text-blue-600 hover:underline">+91 7982487375</a>.</p>
  </div>
);

export default TermsPage;
