import React from "react";
import { FaPaypal, FaStripe } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="p-6 pt-20 bg-background dark:bg-darkBackground min-h-screen dark:text-background">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-500 shadow-lg border border-white dark:shadow-white rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center">
          Secure Payment Gateway
        </h1>
        <p className="text-center mt-2">
          Choose a payment method and manage your subscription and transaction
          history.
        </p>
      </div>

      {/* Payment Methods */}
      <div className="max-w-4xl mx-auto mt-6 bg-white dark:bg-gray-500 shadow-lg border border-white dark:shadow-white rounded-lg p-6">
        <h2 className="text-xl font-semibold">Payment Methods</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 p-4 bg-orange-400 hover:bg-orange-300 dark:bg-darkPrimary text-white rounded-lg shadow hover:bg-primary/70 dark:hover:bg-darkPrimary/70 transition duration-300">
            <FaStripe className="text-2xl" />
            <span>Pay with Stripe</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-orange-400 hover:bg-orange-300 text-white rounded-lg shadow hover:bg-accent/70 transition duration-300">
            <FaPaypal className="text-2xl" />
            <span>Pay with PayPal</span>
          </button>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="max-w-4xl mx-auto mt-6 bg-white dark:bg-gray-500 shadow-lg border border-white dark:shadow-white rounded-lg p-6">
        <h2 className="text-xl font-semibold  mb-4">Subscription Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 border rounded-lg shadow">
            <h3 className="font-bold ">Basic Plan</h3>
            <p className="text-sm ">Access to basic features</p>
            <p className="font-bold  mt-2">$10/month</p>
            <button className="mt-4 w-full bg-orange-400 hover:bg-orange-300 text-white py-2 rounded-lg  transition">
              Subscribe
            </button>
          </div>
          <div className="p-4 bg-gray-50 border rounded-lg shadow dark:bg-gray-800">
            <h3 className="font-bold ">Premium Plan</h3>
            <p className="text-sm">Access to all features</p>
            <p className="font-bold  mt-2">$20/month</p>
            <button className="mt-4 w-full bg-orange-400 hover:bg-orange-300 text-white py-2 rounded-lg  transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="max-w-4xl mx-auto mt-6 bg-white dark:bg-gray-500 shadow-lg border border-white dark:shadow-white rounded-lg p-6">
        <h2 className="text-xl font-semibold  mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">2024-12-20</td>
                <td className="px-4 py-2">Monthly Subscription - Basic Plan</td>
                <td className="px-4 py-2">$10</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">2024-11-20</td>
                <td className="px-4 py-2">Monthly Subscription - Basic Plan</td>
                <td className="px-4 py-2">$10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
