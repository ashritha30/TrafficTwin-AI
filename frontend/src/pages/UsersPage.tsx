import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Users, Shield, Activity } from "lucide-react";

const users = [
  {
    name: "Admin",
    email: "admin@traffictwin.ai",
    role: "Admin",
    status: "Online",
  },
  {
    name: "Traffic Police",
    email: "police@traffictwin.ai",
    role: "Police",
    status: "Online",
  },
  {
    name: "Emergency Officer",
    email: "emergency@traffictwin.ai",
    role: "Emergency",
    status: "Offline",
  },
];

export default function UsersPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Topbar />

        <h1 className="text-4xl font-bold text-cyan-400 mt-8">
          👥 User Management
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor registered TrafficTwin AI users.
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <Users className="text-cyan-400 mb-3" size={35} />
            <h2 className="text-3xl font-bold">3</h2>
            <p className="text-gray-400">Total Users</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <Activity className="text-green-400 mb-3" size={35} />
            <h2 className="text-3xl font-bold">2</h2>
            <p className="text-gray-400">Active Users</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <Shield className="text-yellow-400 mb-3" size={35} />
            <h2 className="text-3xl font-bold">3</h2>
            <p className="text-gray-400">Roles</p>
          </div>

        </div>

        {/* User Table */}

        <div className="bg-slate-900 rounded-xl mt-8 border border-slate-800 overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-800 hover:bg-slate-800 transition"
                >

                  <td className="p-4">{user.name}</td>

                  <td className="p-4">{user.email}</td>

                  <td className="p-4">
                    <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === "Online"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}