import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { FileText, Download } from "lucide-react";
import { downloadReport } from "../services/reportService";

export default function ReportsPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Topbar />

        <div className="mt-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FileText className="text-cyan-400" />
            AI Reports
          </h1>

          <p className="text-gray-400 mt-2">
            Generate and download AI traffic reports.
          </p>

          <div className="mt-8 bg-slate-900 rounded-xl border border-slate-800 p-6">

            <table className="w-full">

              <thead className="text-left border-b border-slate-700">

                <tr>

                  <th className="py-3">Report</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-800">

                  <td className="py-4">
                    MG Road Traffic Report
                  </td>

                  <td>Today</td>

                  <td className="text-green-400">
                    Ready
                  </td>

                  <td>

                    <button
  onClick={downloadReport}
  className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
>

                      <Download size={18} />

                      Download

                    </button>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
}