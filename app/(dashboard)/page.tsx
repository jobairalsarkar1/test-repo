"use client";

import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Edit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Revenue & Payout Trend Data
const revenueData = [
  { day: "Sat", fees: 50, payouts: 480 },
  { day: "Sun", fees: 80, payouts: 350 },
  { day: "Mon", fees: 40, payouts: 320 },
  { day: "Tue", fees: 120, payouts: 480 },
  { day: "Wed", fees: 90, payouts: 150 },
  { day: "Thu", fees: 30, payouts: 400 },
  { day: "Fri", fees: 60, payouts: 400 },
];

// Balance History Data
const balanceData = [
  { month: "Jul", balance: 2400 },
  { month: "Aug", balance: 3200 },
  { month: "Sep", balance: 4500 },
  { month: "Oct", balance: 7200 },
  { month: "Nov", balance: 3800 },
  { month: "Dec", balance: 5600 },
  { month: "Jan", balance: 6200 },
];

// Recent Activities Data
const activities = [
  {
    id: 1,
    activity: "Valorant Tournament Overlay",
    date: "09 Oct 2025",
    type: "Payment",
    user: "@neonStudio",
    status: "Completed",
    amount: "+$1,500.00",
  },
  {
    id: 2,
    activity: "Valorant Tournament Overlay",
    date: "09 Oct 2025",
    type: "Payment",
    user: "@johnMarstan",
    status: "Pending",
    amount: "+$750.00",
  },
  {
    id: 3,
    activity: "GTA Roleplay UI Pack",
    date: "10 Oct 2025",
    type: "Payment",
    user: "@skylineMods",
    status: "Completed",
    amount: "+$2,000.00",
  },
  {
    id: 4,
    activity: "Withdraw",
    date: "11 Oct 2025",
    type: "Payout",
    user: "@arthurMorgan",
    status: "Pending",
    amount: "-$1,800.00",
  },
  {
    id: 5,
    activity: "Cyberpunk Asset Pack",
    date: "12 Oct 2025",
    type: "Payment",
    user: "@novaFX",
    status: "Completed",
    amount: "+$3,500.00",
  },
];

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
          <p className="text-slate-600 mt-1">
            Platform statistics and activity summary
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Platform Revenue */}
          <Card className="bg-white max-w-[255px] w-full ">
            <CardContent className=" py-4">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 p-3 rounded-full">
                  <div className="text-purple-600 text-xl">💰</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Total Platform Revenue
                  </p>
                  <p className="text-3xl font-semibold text-slate-900 mt-2">
                    $1.93M
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Fee Earned */}
          <Card className="bg-white max-w-[255px] w-full ">
            <CardContent className=" py-4">
              <div className="flex items-start justify-between">
                <div className="bg-purple-100 p-3 rounded-full">
                  <div className="text-purple-600 text-xl">📋</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Platform Fee Earned
                  </p>
                  <p className="text-3xl font-semibold text-slate-900 mt-2">
                    $132,750
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Projects */}
          <Card className="bg-white max-w-[255px] w-full ">
            <CardContent className=" py-4">
              <div className="flex items-start justify-between">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <div className="text-cyan-600 text-xl">🎯</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Active Projects
                  </p>
                  <p className="text-3xl font-semibold text-slate-900 mt-2">
                    123
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pending Payouts */}
          <Card className="bg-white max-w-[255px] w-full ">
            <CardContent className=" py-4">
              <div className="flex items-start justify-between">
                <div className="bg-amber-100 p-3 rounded-full">
                  <div className="text-amber-600 text-xl">📦</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Pending Payouts
                  </p>
                  <p className="text-3xl font-semibold text-slate-900 mt-2">
                    $132,750
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue & Payout Trend */}
          <Card className="lg:col-span-2 bg-white border-slate-200 w-full">
  <CardHeader className="pb-4 px-6">
    <CardTitle className="text-slate-900 text-lg font-semibold">
      Revenue & Payout Trend
    </CardTitle>
  </CardHeader>

  {/* Remove default CardContent padding */}
  <CardContent className="p-0">
    <div className="w-full h-[320px]">
      <ChartContainer
        config={{
          fees: {
            label: "Platform Revenue (Fees)",
            color: "hsl(180, 100%, 50%)",
          },
          payouts: {
            label: "Payouts to Creators & Collaborators",
            color: "hsl(240, 100%, 50%)",
          },
        }}
        className="w-full h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="fees" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            <Bar dataKey="payouts" fill="#4f46e5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  </CardContent>
</Card>


          {/* Platform Fee Card */}
          <Card className="bg-white border-slate-200 pt-4 h-[200px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
              <CardTitle className="text-slate-900">Platform Fee</CardTitle>
              <Edit2 className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Current Rate
                  </p>
                  <p className="text-4xl font-bold text-purple-600 mt-2">15%</p>
                </div>
                <p className="text-sm text-slate-600">
                  Applied to all payments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-slate-900">Recent Activities</CardTitle>
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All
            </a>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">
                      Activity
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">
                      User
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">
                      Status
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-slate-600">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity) => (
                    <tr
                      key={activity.id}
                      className="border-b border-slate-100 hover:bg-slate-50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 flex justify-center items-center h-[35px] w-[35px] rounded-lg">
                            <span className="text-purple-600">$</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {activity.activity}
                            </p>
                            <p className="text-xs text-slate-500">
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-blue-600 font-medium">
                          {activity.type}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-slate-700">
                          {activity.user}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            activity.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {activity.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span
                          className={`text-sm font-medium ${
                            activity.amount.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {activity.amount}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Balance History */}
        <Card className="bg-white border-slate-200 w-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-slate-900 text-lg font-semibold">
              Balance History
            </CardTitle>
          </CardHeader>

          <CardContent className="w-full">
            <div className="w-full h-[320px]">
              {" "}
              {/* Ensures chart fills card width */}
              <ChartContainer
                config={{
                  balance: {
                    label: "Balance",
                    color: "hsl(240, 100%, 50%)",
                  },
                }}
                className="w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={balanceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorBalance"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#4f46e5"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4f46e5"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#4f46e5"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorBalance)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
