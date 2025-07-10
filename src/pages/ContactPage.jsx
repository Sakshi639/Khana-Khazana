import React from "react";

const ContactPage = () => (
  <div className="flex justify-center items-center min-h-[60vh] px-4 bg-gray-100">
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 max-w-2xl w-full p-8 mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow-lg tracking-wide border-b-4 border-blue-300 pb-2">Contact Us</h1>
      <p className="mb-4 text-gray-700">
        Have questions, feedback, or need help? Reach out to us and our team will get back to you as soon as possible.
      </p>
      <ul className="mb-4 list-none pl-0 text-gray-900 space-y-2">
        <li><span className="font-semibold">Email:</span> <a href="mailto:sakshi63944@gmail.com" className="text-blue-600 hover:underline">sakshi63944@gmail.com</a></li>
        <li><span className="font-semibold">Phone:</span> <a href="tel:+917982487375" className="text-blue-600 hover:underline">+91 7982487375</a></li>
        <li><span className="font-semibold">Address:</span> 123 Food Street, City, State 12345</li>
        <li><span className="font-semibold">Support Hours:</span> 24/7</li>
      </ul>
      <div className="mb-4">
      <span className="font-bold text-lg text-blue-700">Follow us:</span>
        <div className="flex gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        We value your feedback and are here to assist you with any inquiries.
      </div>
    </div>
  </div>
);

export default ContactPage;
