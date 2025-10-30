"use client";

import { Eye, Flag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  const statCards = [
    {
      label: "Total Projects",
      value: "127",
      metric: "↑ 12% from last month",
      metricColor: "text-green-500",
    },
    {
      label: "Active Projects",
      value: "94",
      metric: "74% of total",
      metricColor: "text-blue-500",
    },
    {
      label: "Frozen Projects",
      value: "8",
      metric: "Requires attention",
      metricColor: "text-pink-500",
    },
    {
      label: "Total Revenue",
      value: "$1.2M",
      metric: "↑ 24% from last month",
      metricColor: "text-green-500",
    },
  ];

  const projects = [
    {
      name: "Valorant Tournament Overlay",
      date: "Aug 15, 2024",
      description:
        "Custom tournament overlay package with real-time stats integration and",
      creator: "@johnmarston",
      client: "@epicgames",
      status: "Active",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "GTA Roleplay UI Pack",
      date: "Jul 22, 2024",
      description:
        "Complete UI overhaul for GTA V roleplay servers including HUD,",
      creator: "@sarahjohnson",
      client: "@rockstargames",
      status: "Active",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "Cyberpunk 2077 Asset Pack",
      date: "Sep 10, 2024",
      description:
        "Futuristic weapon and vehicle asset pack with high-quality textures and",
      creator: "@michaelchen",
      client: "@cdprojektred",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      name: "Minecraft Server Plugin Suite",
      date: "Jun 5, 2024",
      description:
        "Custom plugin suite for Minecraft servers including economy system,",
      creator: "@emmadavis",
      client: "@hypixel",
      status: "Active",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "Fortnite Creative Map Pack",
      date: "Oct 1, 2024",
      description:
        "Collection of creative maps for competitive gaming including parkour,",
      creator: "@davidlee",
      client: "@epicgames",
      status: "Frozen",
      statusColor: "bg-pink-100 text-pink-600",
    },
    {
      name: "League of Legends Skin Concepts",
      date: "Aug 28, 2024",
      description:
        "High-quality skin concept art for League of Legends champions with",
      creator: "@lisawang",
      client: "@riotgames",
      status: "Active",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "Apex Legends Audio Pack",
      date: "Sep 18, 2024",
      description:
        "Custom audio pack including weapon sounds, character voicelines, and",
      creator: "@jameswilson",
      client: "@respawn",
      status: "Active",
      statusColor: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <p className="text-sm font-medium text-blue-400 mb-2">
                {card.label}
              </p>
              <p className="text-4xl font-bold text-gray-900 mb-3">
                {card.value}
              </p>
              <p className={`text-sm font-medium ${card.metricColor}`}>
                {card.metric}
              </p>
            </div>
          ))}
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Project Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Creator
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">
                        {project.name}
                      </p>
                      <p className="text-sm text-blue-400 mt-1">
                        {project.date}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-blue-400 max-w-xs">
                        {project.description}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{project.creator}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{project.client}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => router.push(`/projects/${index}`)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye className="w-5 h-5 text-blue-400" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          ❄️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
