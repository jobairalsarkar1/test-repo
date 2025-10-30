"use client";

import { useState } from "react";
import {
  Download,
  Wallet,
  Calendar,
  Percent,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WithdrawalModal from "@/components/dashboard/withdrawal-modal";

export default function WithdrawalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statCards = [
    {
      icon: Wallet,
      label: "Available Balance",
      value: "$28,450.00",
      button: true,
    },
    {
      icon: Calendar,
      label: "This Month",
      value: "$28,450.00",
      metric: "↑ 12% from last month",
      metricColor: "text-green-500",
    },
    {
      icon: Percent,
      label: "Current Fee Rate",
      value: "15%",
      metric: "Applied to all payments",
      metricColor: "text-purple-500",
    },
  ];

  const withdrawalHistory = [
    {
      id: "WD-10234",
      dateRequested: "Oct 15, 2025",
      amount: "$45,250.00",
      method: "Bank Transfer",
      account: "****6789",
      status: "Completed",
      processed: "Oct 16, 202",
    },
    {
      id: "WD-10198",
      dateRequested: "Oct 01, 2025",
      amount: "$38,900.00",
      method: "Bank Transfer",
      account: "****6789",
      status: "Completed",
      processed: "Oct 02, 202",
    },
    {
      id: "WD-10156",
      dateRequested: "Sep 15, 2025",
      amount: "$42,150.00",
      method: "Bank Transfer",
      account: "****6789",
      status: "Completed",
      processed: "Sep 16, 202",
    },
    {
      id: "WD-10123",
      dateRequested: "Sep 01, 2025",
      amount: "$39,800.00",
      method: "Bank Transfer",
      account: "****6789",
      status: "Completed",
      processed: "Sep 02, 202",
    },
    {
      id: "WD-10089",
      dateRequested: "Aug 15, 2025",
      amount: "$41,600.00",
      method: "Bank Transfer",
      account: "****6789",
      status: "Completed",
      processed: "Aug 16, 202",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Stat Cards */}
        <div className="flex gap-6 mb-8">
          {statCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className=" bg-white rounded-2xl p-6 min-w-[260px] max-w-[260px]  shadow-sm border border-gray-100"
              >
                <div className="  items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gray-50">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <p className="text-sm font-medium text-blue-400 mb-2">
                  {card.label}
                </p>
                <p className="text-3xl font-  text-gray-900 mb-2">
                  {card.value}
                </p>
                {card.metric && (
                  <p className={`text-sm font-medium ${card.metricColor}`}>
                    {card.metric}
                  </p>
                )}
                {card.button && (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full   mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Withdraw
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {/* Withdrawal History */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-  text-gray-900">
              Withdrawal History
            </h2>
            <button className="bg-gray-200  px-4 py-2 rounded-lg flex items-center gap-2 text-blue-600 hover:text-blue-700 ">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Withdrawal ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Date Requested
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Method
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Account
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Processed
                  </th>
                </tr>
              </thead>
              <tbody>
                {withdrawalHistory.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {item.id}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-blue-400">
                        {item.dateRequested}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {item.amount}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Wallet className="w-4 h-4 text-blue-400" />
                        {item.method}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{item.account}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-blue-400">{item.processed}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-blue-400">
              Total Withdrawn:{" "}
              <span className="font-semibold text-gray-900">
                5 transactions
              </span>
            </p>
            <p className="text-sm">
              Total Amount:{" "}
              <span className="font-bold text-green-500">$207,700.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Withdrawal Modal */}
      <WithdrawalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
