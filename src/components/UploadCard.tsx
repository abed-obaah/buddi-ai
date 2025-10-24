import { Plus, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function UploadCard() {
  const [isUploading, setIsUploading] = useState(false);
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState(null);

  const handleFileSelect = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile); // ✅ Fixed here

      const response = await axios.post("http://localhost:3001/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSummary(response.data.summary);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload PDF.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md h-64 border-2 border-dashed border-gray-400 rounded-2xl hover:border-orange-500 transition-colors cursor-pointer bg-white shadow-sm relative">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileSelect}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      {isUploading ? (
        <>
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-3" />
          <p className="text-gray-600">Uploading & summarizing...</p>
        </>
      ) : (
        <>
          <Plus className="w-16 h-16 text-gray-500 mb-3" />
          <p className="text-gray-600 text-center text-base font-medium">
            Upload your PDFs here to get summarized
          </p>
        </>
      )}

      {summary && (
        <div className="mt-4 p-4 bg-orange-50 rounded-lg shadow-inner w-full text-gray-800">
          <h3 className="font-semibold text-orange-700 mb-2">Summary</h3>
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
}
