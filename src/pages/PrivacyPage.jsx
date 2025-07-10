import React from "react";

const PrivacyPage = () => (
  <div className="container" style={{padding: '2rem'}}>
    <h1 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow-lg tracking-wide border-b-4 border-blue-300 pb-2">Privacy Policy</h1>
    <p>Your privacy is important to us. This page explains how we collect, use, and protect your personal information when you use our food ordering app.</p>
    <h2>Information We Collect</h2>
    <ul>
      <li>Personal details (name, email, address) for order processing</li>
      <li>Order history and preferences</li>
      <li>Device and usage information</li>
    </ul>
    <h2>How We Use Your Information</h2>
    <ul>
      <li>To process orders and payments</li>
      <li>To improve our services and personalize your experience</li>
      <li>To send updates and offers (with your consent)</li>
    </ul>
    <h2>Data Protection</h2>
    <p>We use industry-standard security measures to protect your data. Your information is never sold to third parties.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions about our privacy policy, please contact us at <a href="mailto:sakshi63944@gmail.com" className="text-blue-600 hover:underline">sakshi63944@gmail.com</a> or call <a href="tel:+917982487375" className="text-blue-600 hover:underline">+91 7982487375</a>.</p>
  </div>
);

export default PrivacyPage;
