"use client";

import Link from "next/link";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RxReset } from "react-icons/rx";
import { MdOutlineDeleteOutline } from "react-icons/md";


export default function Innersidebar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSetting = () => {
    setIsSettingsOpen(!isSettingsOpen);
  }

  return (
    <div className="w-full h-full dashboardbg p-4 flex flex-col">

      {/* Logo */}
      <div className="flex items-center justify-start mb-6">
        <span className="text-2xl font-bold">Logo</span>
      </div>

      <nav className="space-y-2">
        <Link
          href="/Dashboard"
          className="flex items-center space-x-2 p-2 rounded-lg innerSideBarMenu "
        >
          <span><RxDashboard /></span>
          <span className="font-semibold">Dashboard</span>
        </Link>

        <Link
          href="/Dashboard/Profile"
          className="flex items-center space-x-2 p-2 rounded-lg innerSideBarMenu"
        >
          <CgProfile />
          <span className="font-semibold">Profile</span>
        </Link>

        <button
          onClick={openSetting}
          className="flex items-center justify-between w-full p-2 rounded-lg cursor-pointer innerSideBarMenu"
        >
          <div className="flex items-center space-x-2">
            <IoSettingsOutline />
            <span className="font-semibold">Settings</span>
          </div>
        </button>

        {/* Nested Links inside Ssettings */}
        {isSettingsOpen && (
          <div className="pl-6 mt-1 space-y-1">
            <Link
              href="/Dashboard/Reset"
              className="p-2 rounded-lg font-semibold innerSideBarMenu flex items-center gap-1"
            >
              <RxReset />
              Reset Password
            </Link>

            <Link
              href="/Dashboard/Delete_Account"
              className="p-2 rounded-lg font-semibold innerSideBarMenu flex items-center gap-1"
            >
              <MdOutlineDeleteOutline />
              Delete Account
            </Link>
          </div>
        )}
      </nav>

    </div>
  );
}

