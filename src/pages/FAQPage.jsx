import React from "react";

const FAQPage = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">How do I place an order?</h2>
      <p>Browse our menu, add your favorite items to the cart, and proceed to checkout. Follow the instructions to complete your order.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">What payment methods are accepted?</h2>
      <p>We accept credit/debit cards, UPI, and popular wallets.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">How can I track my order?</h2>
      <p>After placing your order, you can track its status from your account dashboard or the order confirmation page.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Can I cancel or modify my order?</h2>
      <p>Orders can be cancelled or modified before they are prepared. Please contact our support team for assistance.</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Need more help?</h2>
      <p>Contact our <a href="/help-center" className="text-primary underline">Help Center</a>.</p>
    </div>
  </div>
);

export default FAQPage;
