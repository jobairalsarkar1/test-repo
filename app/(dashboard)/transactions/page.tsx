"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, Search } from "lucide-react";
import { transactionsData } from "@/data/transactionsData";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  // Filter transactions based on search
  const filteredTransactions = transactionsData.filter(transaction =>
    transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredTransactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  const StatusBadge = ({ status }: { status: "completed" | "pending" }) => (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        status === "completed"
          ? "bg-green-100 text-green-800 border border-green-200"
          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );

  const TypeBadge = ({ type }: { type: string }) => (
    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800 border border-violet-200">
      {type}
    </div>
  );

  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Track all platform transactions
        </h1>
        
        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Container with shadow */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  Transaction ID
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  Project
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  User
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  Type
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  Status
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4 text-right">
                  Amount
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  Fee
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4">
                  Date
                </TableHead>
                <TableHead className="text-gray-900 uppercase text-xs font-semibold py-4 px-4 text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentItems.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-gray-50 transition-colors border-0"
                >
                  <TableCell className="text-sm font-medium text-gray-900 py-4 px-4">
                    {transaction.transactionId}
                  </TableCell>

                  <TableCell className="text-sm text-gray-900 py-4 px-4">
                    {transaction.project}
                  </TableCell>

                  <TableCell className="text-sm text-gray-900 py-4 px-4">
                    {transaction.user}
                  </TableCell>

                  <TableCell className="py-4 px-4">
                    <TypeBadge type={transaction.type} />
                  </TableCell>

                  <TableCell className="py-4 px-4">
                    <StatusBadge status={transaction.status} />
                  </TableCell>

                  <TableCell className="text-sm font-medium text-gray-900 py-4 px-4 text-right">
                    ${transaction.amount.toFixed(2)}
                  </TableCell>

                  <TableCell className="text-sm text-gray-900 py-4 px-4">
                    ${transaction.fee.toFixed(2)}
                  </TableCell>

                  <TableCell className="text-sm text-gray-900 py-4 px-4">
                    {new Date(transaction.date).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="py-4 px-4 text-right">
                    <Link
                      href={`/transactions/${transaction.id}`}
                      className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-white border-t border-gray-200">
          <div className="text-sm text-gray-700">
            {startIndex + 1} - {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 text-sm border rounded-md transition-colors shadow-sm ${
                  currentPage === page
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}