"use client";

import React from "react";
import { Bell, KeyRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface DashboardTopNavProps {
  pageTitle?: string;
}

const DashboardTopNav = ({ pageTitle = "Dashboard" }: DashboardTopNavProps) => {
  // Static mock user
  const user = {
    firstName: "John",
    lastName: "Doe",
    profilePic: "/user-01.png",
  };

  const notificationsCount = 3;

  return (
    <div className="flex items-center justify-between px-6 py-2.5 bg-white shadow-sm">
      {/* Page Title */}
      <div className="text-xl font-semibold text-gray-900">{pageTitle}</div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Key Icon */}
        <Link
          href="/security"
          className="bg-gray-100 p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
        >
          <KeyRound className="w-5 h-5 text-gray-700" />
        </Link>

        {/* Notifications */}
        <Link
          href="/notifications"
          className="relative bg-gray-100 p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-700" />
          {notificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              {notificationsCount}
            </span>
          )}
        </Link>

        {/* Profile */}
        <Link
          href="/profile"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-r from-[#FFBC6F] via-[#F176B7] to-[#3797CD]">
            <div className="w-full h-full rounded-full bg-black overflow-hidden">
              <Image
                src={user.profilePic}
                alt="User Avatar"
                width={40}
                height={40}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardTopNav;
