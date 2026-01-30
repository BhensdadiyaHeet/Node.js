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
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow">
              <Search size={16} className="text-gray-400" />
              <input placeholder="Search" className="outline-none text-sm" />
            </div>
            <div className="flex items-center gap-4">
              <Bell className="text-gray-500" />
              <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
            </div>
          </header>

          {/* Welcome + Inbox */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#f6c9bb] rounded-3xl p-6 flex justify-between">
              <div>
                <p className="text-lg text-blue-900">Welcome</p>
                <h2 className="text-3xl font-bold text-blue-900">Pablo Nicolus</h2>
                <span className="inline-block mt-4 bg-white/40 px-4 py-1 rounded-full text-sm">NY, USA</span>
              </div>
              <div className="text-blue-900 opacity-70">Illustration</div>
            </div>

            <div className="bg-[#fdeedd] rounded-3xl p-6">
              <p className="text-lg">Inbox</p>
              <h2 className="text-5xl font-bold text-blue-900">23</h2>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Income Variations">
              <div className="h-40 flex items-center justify-center text-gray-400">Donut Chart</div>
            </Card>

            <Card title="Net Income">
              <div className="h-40 flex items-center justify-center text-gray-400">Bar Chart</div>
            </Card>

            <Card title="Sales">
              <h3 className="text-2xl font-bold text-blue-900">$5878</h3>
              <p className="text-sm text-gray-500">200-500 sales</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Monthly Sales">
              <h3 className="text-2xl font-bold text-blue-900">$5878</h3>
              <div className="h-24 flex items-center justify-center text-gray-400">Gauge</div>
            </Card>
          </div>
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







