import api from "./api";

export const downloadReport = async () => {

    const response = await api.post(
        "/report/generate",
        {
            location: "MG Road"
        },
        {
            responseType: "blob"
        }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");

    link.href = url;
    link.download = "Traffic_Report.pdf";

    document.body.appendChild(link);

    link.click();

    link.remove();
};


