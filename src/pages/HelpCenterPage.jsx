import React from "react";


import HelpChatbot from '../components/common/HelpChatbot';

const HelpCenterPage = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 relative">
    <h1 className="text-3xl font-bold mb-4">Help Center</h1>
    <p className="mb-4 text-lg">Need assistance? Our support team is here to help you with any questions or issues regarding your orders, payments, or account.</p>
    <ul className="list-disc pl-6 mb-4">
      <li>Email: <a href="mailto:support@khanakhazana.com" className="text-primary underline">support@khanakhazana.com</a></li>
      <li>Phone: <a href="tel:+911234567890" className="text-primary underline">+91 12345 67890</a></li>
    </ul>
    <p>For quick answers, check our <a href="/faq" className="text-primary underline">FAQ</a> page.</p>
    <HelpChatbot />
  </div>
);

export default HelpCenterPage;
