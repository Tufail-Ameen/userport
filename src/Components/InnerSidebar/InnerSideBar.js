import Link from "next/link";

export default function Innersidebar() {
  return (
    <div className="w-full h-full bg-white text-gray-900 shadow-lg p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-start mb-6">
        {/* <span className="text-2xl font-bold text-indigo-600">🌊</span> */}
        <span className="text-2xl font-bold text-indigo-600">Logo here</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Link href="/Dashboard" className="flex items-center space-x-2 p-2 bg-indigo-100 text-indigo-600 rounded-lg">
          <span>🏠</span>
          <span className="font-semibold">Dashboard</span>
        </Link>
        <Link href="/Dashboard/Team" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
          <span>👥</span>
          <span>Team</span>
        </Link>
        <Link href="/Dashboard/Calender" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
          <span>📅</span>
          <span>Calendar</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
          <span>📄</span>
          <span>Documents</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
          <span>📊</span>
          <span>Reports</span>
        </Link>
      </nav>

      {/* Teams */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Your teams</h3>
        <div className="space-y-2">
          <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold rounded-full">H</span>
            <span>Heroicons</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold rounded-full">T</span>
            <span>Tailwind Labs</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold rounded-full">W</span>
            <span>Workcation</span>
          </Link>
        </div>
      </div>

      {/* Settings */}
      <div className="mt-auto">
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-indigo-100 rounded-lg">
          <span>⚙️</span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
