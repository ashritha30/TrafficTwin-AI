import { downloadReport } from "../services/reportService";

export default function ReportButton() {

    return (

        <button
            onClick={downloadReport}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
        >
            📄 Generate AI Report
        </button>

    );

}