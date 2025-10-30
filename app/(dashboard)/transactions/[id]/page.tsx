"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  DollarSign,
  User,
  CreditCard,
  BadgeCheck,
  FolderKanban,
} from "lucide-react";

export default function TransactionDetailsPage() {
  const { id } = useParams();

  // Dummy transaction data (replace with API later)
  const transaction = {
    id,
    transactionId: "TXN-649201",
    type: "Purchase",
    amount: 200,
    status: "Completed",
    description: "Payment for design project assets",
    date: "2025-01-21 10:32 AM",
    project: {
      name: "Creative Design Pack",
      createdBy: "Alice Thompson",
      description: "A full bundle of creative design resources for clients",
    },
    buyer: {
      name: "John Doe",
      email: "johndoe@example.com",
      kyc: "Verified",
    },
    revenue: [
      { name: "Creator", percent: 35 },
      { name: "Collaborator 1", percent: 25 },
      { name: "Collaborator 2", percent: 20 },
    ],
  };

  const platformFee = transaction.amount * 0.15;
  const creatorReceives = transaction.amount * 0.3;
  const collaboratorReceives = transaction.amount * 0.5;

  return (
    <div className="p-6 space-y-8">
      {/* Back + Title */}
      <div className="flex items-center gap-3">
        <Link
          href="/transactions"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          Transaction Details
        </h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Transaction Amount"
          amount={transaction.amount}
          icon={<DollarSign className="w-5 h-5 text-blue-600" />}
          bgColor="bg-blue-50"
          borderColor="border-blue-200"
        />

        <SummaryCard
          title="Platform Fee (15%)"
          amount={platformFee}
          icon={<DollarSign className="w-5 h-5 text-red-600" />}
          bgColor="bg-red-50"
          borderColor="border-red-200"
        />

        <SummaryCard
          title="Creators Receives (30%)"
          amount={creatorReceives}
          icon={<DollarSign className="w-5 h-5 text-green-600" />}
          bgColor="bg-green-50"
          borderColor="border-green-200"
        />

        <SummaryCard
          title="Collaborators Receives (50%)"
          amount={collaboratorReceives}
          icon={<DollarSign className="w-5 h-5 text-sky-600" />}
          bgColor="bg-sky-50"
          borderColor="border-sky-200"
        />
      </div>

      {/* Transaction Info */}
      <div className="bg-white shadow-sm rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Transaction Information
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <InfoRow label="Transaction ID" value={transaction.transactionId} />
          <InfoRow label="Transaction Type" value={transaction.type} />
          <InfoRow label="Date & Time" value={transaction.date} />
          <InfoRow label="Status" value={transaction.status} />
          <InfoRow label="Description" value={transaction.description} />
          <InfoRow label="Payment Information" value="Credit Card" />
        </div>
      </div>

      {/* Project + Buyer Info */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Project Details */}
        <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
            <FolderKanban className="w-5 h-5 text-blue-500" />
            Project Details
          </h2>

          <InfoRow label="Project Name" value={transaction.project.name} />
          <InfoRow label="Created By" value={transaction.project.createdBy} />
          <InfoRow
            label="Description"
            value={transaction.project.description}
          />
        </div>

        {/* Buyer Information */}
        <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
            <User className="w-5 h-5 mt-0.5 text-green-600" />
            Buyer Information
          </h2>

          <InfoRow label="User Name" value={transaction.buyer.name} />
          <InfoRow label="Email Address" value={transaction.buyer.email} />
          <InfoRow
            label="KYC Status"
            value={transaction.buyer.kyc}
            icon={<BadgeCheck className="w-4 h-4 text-green-600" />}
          />
        </div>
      </div>

      {/* Revenue Distribution */}
      <div className="bg-white shadow-sm rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Revenue Distribution
        </h2>

        <div className="space-y-4">
          {/* Platform Fee Row */}
          <div className="flex items-center justify-between bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-sm">
                <CreditCard className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Platform Fee</p>
                <p className="text-sm text-gray-500">15% of total</p>
              </div>
            </div>
            <p className="text-gray-900 font-semibold">
              ${platformFee.toFixed(2)}
            </p>
          </div>

          {/* Revenue Distribution Rows */}
          {transaction.revenue.map((person, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-sm">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{person.name}</p>
                  <p className="text-sm text-gray-500">
                    {person.percent}% of net amount
                  </p>
                </div>
              </div>

              <p className="text-gray-900 font-semibold">
                $
                {(
                  (transaction.amount - platformFee) *
                  (person.percent / 100)
                ).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- Reusable Components --- */

function SummaryCard({
  title,
  amount,
  icon,
  bgColor,
  borderColor,
}: {
  title: string;
  amount: number;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-5 flex items-start gap-4`}>
      <div>
        <h1 className="flex items-center gap-2 text-lg font-semibold text-gray-800">{icon} {title}</h1>
        <p className="text-2xl font-bold text-gray-900">${amount.toFixed(2)}</p>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="py-2 flex justify-between items-center">
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase">{label}</p>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
      {icon && <div>{icon}</div>}
    </div>
  );
}