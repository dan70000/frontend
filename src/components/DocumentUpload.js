import React, { useState } from "react";
import axios from "axios";

function DocumentUpload() {
  const [caseId, setCaseId] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("document", file);
    formData.append("case_id", caseId);

    try {
      await axios.post("https://backend-4hng.onrender.com/documents/upload", formData);
      alert("Document uploaded successfully!");
    } catch (error) {
      alert("Error uploading document: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Upload Document</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Case ID</label>
        <input
          type="text"
          value={caseId}
          onChange={(e) => setCaseId(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Document</label>
        <input type="file" onChange={handleFileChange} className="w-full p-2" />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </form>
  );
}

export default DocumentUpload;
