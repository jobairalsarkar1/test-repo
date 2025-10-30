"use client";

import { useState } from "react";
import { X, Clock } from "lucide-react";

interface WithdrawalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WithdrawalModal({
  isOpen,
  onClose,
}: WithdrawalModalProps) {
  const [withdrawalAmount, setWithdrawalAmount] = useState("0.00");
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const availableBalance = 28450.0;

  const handleWithdrawAll = () => {
    setWithdrawalAmount(availableBalance.toFixed(2));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Request Withdrawal
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Available Balance */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-sm font-medium text-green-600 mb-1">
            Available Balance
          </p>
          <p className="text-3xl font-bold text-green-600">
            ${availableBalance.toFixed(2)}
          </p>
        </div>

        {/* Withdrawal Amount */}
        <div className="mb-6">
          <label className="text-sm font-medium text-blue-400 block mb-2">
            Withdrawal Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              $
            </span>
            <input
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleWithdrawAll}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2"
          >
            Withdraw all available balance
          </button>
        </div>

        {/* Withdrawal Method */}
        <div className="mb-6">
          <label className="text-sm font-medium text-blue-400 block mb-3">
            Withdrawal Method
          </label>

          {/* Bank Transfer */}
          <div
            onClick={() => setSelectedMethod("bank")}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all mb-3 ${
              selectedMethod === "bank"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bank Transfer</p>
                  <p className="text-sm text-gray-500">
                    Account ending in 6789
                  </p>
                </div>
              </div>
              {selectedMethod === "bank" && (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Primary
                </span>
              )}
            </div>
          </div>

          {/* Debit Card */}
          <div
            onClick={() => setSelectedMethod("card")}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedMethod === "card"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 8H4V4h16m0 12H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-6 3v2h-4v-2h4z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Debit Card</p>
                <p className="text-sm text-gray-500">Card ending in 4321</p>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Time Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
          <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              Processing Time
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Bank transfers typically take 1-2 business days to process. You'll
              receive a confirmation email once the withdrawal is completed.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
            <ArrowUpRight className="w-4 h-4" />
            Withdraw ${withdrawalAmount}
          </button>
        </div>
      </div>
    </div>
  );
}

function ArrowUpRight({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16V4m0 0L3 8m4-4l4 4"
      />
    </svg>
  );
}
