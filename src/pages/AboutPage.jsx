
import React from "react";

const AboutPage = () => (
  <div className="flex justify-center items-center min-h-[60vh] px-4 bg-gray-100">
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 max-w-2xl w-full p-8 mt-10">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl" role="img" aria-label="curry">🍛</span>
        </div>
        <h1 className="text-3xl font-bold text-blue-600">Khana Khazana</h1>
      </div>
      <p className="mb-4 text-gray-700">
        Khana Khazana is your one-stop solution for ordering delicious food from your favorite restaurants and cafes. 
        Our mission is to deliver fresh, hot, and tasty meals to your doorstep quickly and reliably.
      </p>
      <ul className="mb-4 list-disc pl-5 text-gray-900">
        <li>Wide variety of cuisines and dishes</li>
        <li>Fast and reliable delivery</li>
        <li>Easy and secure online ordering</li>
        <li>24/7 customer support</li>
      </ul>
      <div className="mb-4">
        <span className="font-semibold">Follow us:</span>
        <div className="flex gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
            Instagram
          </a>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        Thank you for choosing Khana Khazana. We are committed to making your food ordering experience delightful!
      </div>
    </div>
  </div>
);

export default AboutPage;
