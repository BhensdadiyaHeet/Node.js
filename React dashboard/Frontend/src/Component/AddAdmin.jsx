import { Bell, Search, LayoutGrid, Inbox, Ticket, Layers } from "lucide-react";

export default function AdvertdaDashboard() {
  return (
    <div className="min-h-screen bg-[#f6efe8] p-6">
      <div className="max-w-10xl mx-auto bg-[#fbf7f2] rounded-[32px] shadow-xl flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#fbf7f2] border-r p-6 space-y-6">
          <h1 className="text-xl font-bold text-blue-900">Advertda</h1>

          <button className="w-full bg-gradient-to-r from-pink-400 to-orange-400 text-white py-2 rounded-xl">
            Create New
          </button>

          <nav className="flex flex-col gap-4">
            <a href="" className="flex text-blue-900">Dashboard</a>
            <a href="" className="flex text-blue-900">Add Admin</a>
            <a href="" className="flex text-blue-900">View Admin</a>
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 p-6 space-y-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <h1>Dashboard</h1>
            <div className="flex items-center gap-4">
              <Bell className="text-gray-500" />
              <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
            </div>
          </header>

         <form>
            <input type="text" placeholder="Enter your name" name="name" />
            <input type="number" placeholder="Enter your age" name="age" />
            <input type="text" placeholder="Enter your email" name="email" />
            <input type="text" placeholder="Enter your password" name="password" />
         </form>
          
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${active ? "bg-white shadow text-blue-900" : "hover:bg-white"}`}>
      {icon}
      {label}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
