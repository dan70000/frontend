import React, { useState } from "react";
import axios from "axios";

function CaseForm() {
  const [caseData, setCaseData] = useState({
    case_number: "",
    parties: "",
    registration_date: "",
    status: "",
  });

  const handleChange = (e) => {
    setCaseData({ ...caseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-4hng.onrender.com/cases", caseData);
      alert("Case registered successfully!");
      setCaseData({ case_number: "", parties: "", registration_date: "", status: "" });
    } catch (error) {
      alert("Error registering case: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Register a New Case</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Case Number</label>
        <input
          type="text"
          name="case_number"
          value={caseData.case_number}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Parties</label>
        <input
          type="text"
          name="parties"
          value={caseData.parties}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Registration Date</label>
        <input
          type="date"
          name="registration_date"
          value={caseData.registration_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Status</label>
        <input
          type="text"
          name="status"
          value={caseData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Register Case
      </button>
    </form>
  );
}

export default CaseForm;
