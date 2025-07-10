import React from "react";

const CookiesPage = () => (
  <div className="container" style={{padding: '2rem'}}>
    <h1 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow-lg tracking-wide border-b-4 border-blue-300 pb-2">Cookies Policy</h1>
    <p>We use cookies to enhance your experience on our food ordering app. Cookies help us remember your preferences and improve site functionality.</p>
    <h2>What Are Cookies?</h2>
    <p>Cookies are small text files stored on your device when you visit our site. They help us recognize you and keep your session active.</p>
    <h2>How We Use Cookies</h2>
    <ul>
      <li>To keep you logged in</li>
      <li>To remember your cart and preferences</li>
      <li>To analyze site usage and improve performance</li>
    </ul>
    <h2>Your Choices</h2>
    <p>You can manage or disable cookies in your browser settings. However, some features may not work properly without cookies.</p>
    <h2>Contact Us</h2>
    <p>For questions about our cookies policy, email <a href="mailto:sakshi63944@gmail.com" className="text-blue-600 hover:underline">sakshi63944@gmail.com</a> or call <a href="tel:+917982487375" className="text-blue-600 hover:underline">+91 7982487375</a>.</p>
  </div>
);

export default CookiesPage;
