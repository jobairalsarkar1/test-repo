"use client";

import { ArrowLeft, DollarSign, Users, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  // Mock data - in a real app, this would come from an API based on params.id
  const project = {
    id: params.id,
    name: "Valorant Tournament Overlay",
    status: "Active",
    createdDate: "Aug 15, 2024",
    totalRevenue: "$12,600",
    collaborators: 3,
    description:
      "Custom tournament overlay package with real-time stats integration and animated elements for professional sports broadcasts.",
    creator: "@johnmarston",
    client: "@epicgames",
    grossRevenue: "$12,600.00",
    platformFee: "-$1,890.00",
    netToTeam: "$10,710.00",
    teamMembers: [
      {
        id: 1,
        name: "John Marston",
        role: "Creator",
        share: "50%",
        earnings: "$6,426.00",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        role: "Collaborator",
        share: "20%",
        earnings: "$2,142.00",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      {
        id: 3,
        name: "Michael Chen",
        role: "Collaborator",
        share: "15%",
        earnings: "$2,142.00",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
    ],
    platformFeeShare: "15%",
    platformFeeEarnings: "-$1,890.00",
    totalDistribution: "$10,710.00",
    totalShares: "100%",
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="  mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  {project.name}
                </h1>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-blue-400 mt-1">
                Created {project.createdDate}
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
            <span className="text-lg text-white">❄️</span>
            Freeze Project
          </button>
        </div>

        {/* Info Cards */}
        <div className="md:flex gap-6 mb-8 ">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-w-[260px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm font-medium text-blue-400">Total Revenue</p>
            </div>
            <p className="text-3xl  text-gray-900">{project.totalRevenue}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-w-[260px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-blue-400">Collaborators</p>
            </div>
            <p className="text-3xl  text-gray-900">{project.collaborators}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-w-[260px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-sm font-medium text-blue-400">Created</p>
            </div>
            <p className="text-3xl  text-gray-900">{project.createdDate}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Project Information */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Project Information
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-blue-400 mb-2">
                  Project Name
                </p>
                <p className="text-gray-900 font-semibold">{project.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-400 mb-2">
                  Description
                </p>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-400 mb-2">
                    Creator
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {project.creator}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-400 mb-2">
                    Client
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {project.client}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Revenue Breakdown
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-400 mb-1">
                  Gross Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {project.grossRevenue}
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm font-medium text-pink-500 mb-1">
                  Platform Fee (15%)
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {project.platformFee}
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-medium text-green-600 mb-1">
                  Net to Team
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {project.netToTeam}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members & Revenue Splits */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl  text-gray-900">
              Team Members & Revenue Splits
            </h2>
            <span className="px-3 py-2 rounded-lg text-xs font-semibold bg-blue-100 text-blue-600">
              {project.collaborators} Active Members
            </span>
          </div>

          <div className="space-y-4">
            {/* Team Members */}
            {project.teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-sm text-blue-400">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right bg-blue-500/20 p-4 rounded-lg text-center">
                    <p className="text-sm font-medium text-blue-400">Share</p>
                    <p className="text-lg font-  text-blue-600">
                      {member.share}
                    </p>
                  </div>
                  <div className="text-right bg-green-500/10 p-4 rounded-lg text-center">
                    <p className="text-sm font-medium text-blue-400">
                      Earnings
                    </p>
                    <p className="text-lg font-  text-green-600">
                      {member.earnings}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Platform Fee */}
            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg  ">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-red-600">$</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Platform Fee</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right bg-blue-500/20 p-4 rounded-lg text-center">
                  <p className="text-sm font-medium text-blue-400">Share</p>
                  <p className="text-lg font-  text-blue-600">67%</p>
                </div>
                <div className="text-right bg-green-500/10 p-4 rounded-lg text-center">
                  <p className="text-sm font-medium text-blue-400">Earnings</p>
                  <p className="text-lg font-  text-red-600">-$2,142.00</p>
                </div>
              </div>
            </div>

            {/* Total Distribution */}
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100 mt-4">
              <div>
                <p className="font-  text-gray-900">
                  Total Distribution (After Platform Fee)
                </p>
                <p className="text-lg font-  text-gray-900">
                  {project.totalDistribution}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-400">
                    Total Shares
                  </p>
                  <p className="text-lg font-  text-blue-600">
                    {project.totalShares}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
