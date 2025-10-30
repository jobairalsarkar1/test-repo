import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export function TransactionsTab() {
  // Dummy transactions data
  const transactions = [
    {
      id: "TXN-001",
      type: "payout",
      description: "Project Revenue Payout",
      amount: 1250.75,
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "TXN-002",
      type: "payment",
      description: "Service Subscription",
      amount: -99.99,
      status: "completed",
      date: "2024-01-14",
    },
    {
      id: "TXN-003",
      type: "payout",
      description: "Referral Bonus",
      amount: 250.0,
      status: "pending",
      date: "2024-01-14",
    },
    {
      id: "TXN-004",
      type: "payment",
      description: "Platform Fee",
      amount: -49.99,
      status: "completed",
      date: "2024-01-13",
    },
    {
      id: "TXN-005",
      type: "payout",
      description: "Project Completion Bonus",
      amount: 500.0,
      status: "completed",
      date: "2024-01-12",
    },
    {
      id: "TXN-006",
      type: "payment",
      description: "Premium Features",
      amount: -199.99,
      status: "pending",
      date: "2024-01-11",
    },
  ];

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => (
    <div
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
        status === "completed"
          ? "bg-green-100 text-green-800 border border-green-200"
          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );

  // Format date to year-month-day
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD
  };

  return (
    <div className="space-y-6 bg-white rounded-lg p-4 sm:p-6 border border-gray-300">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
        Transaction History
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors gap-3 sm:gap-4"
          >
            {/* Left Side - Transaction Info */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                  transaction.amount > 0 ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {transaction.amount > 0 ? (
                  <ArrowDownLeft className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                )}
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-base font-medium text-gray-900 capitalize truncate">
                    {transaction.type}
                  </span>
                  <span className="hidden sm:inline text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500 truncate">
                    {transaction.id}
                  </span>
                </div>
                <p className="text-xs text-gray-600 truncate">
                  {transaction.description}
                </p>
                <p className="text-xs text-gray-500 sm:hidden">
                  {formatDate(transaction.date)}
                </p>
              </div>
            </div>

            {/* Right Side - Amount & Status */}
            <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end sm:gap-1 sm:text-right w-full sm:w-auto">
              <p
                className={`text-base sm:text-lg font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}$
                {Math.abs(transaction.amount).toFixed(2)}
              </p>
              
              <div className="flex items-center gap-2 sm:gap-0 sm:flex-col sm:items-end">
                <p className="text-xs text-gray-500 hidden sm:block">
                  {formatDate(transaction.date)}
                </p>
                <div className="mt-0 sm:mt-1">
                  <StatusBadge status={transaction.status} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}