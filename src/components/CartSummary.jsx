import React from 'react';

const CartSummary = ({ bill, totalItems }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md w-[400px]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total Items:</span>
        <span className="text-gray-800 font-medium">{totalItems}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Total Payable:</span>
        <span className="text-gray-800 font-medium">₹ {bill.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
