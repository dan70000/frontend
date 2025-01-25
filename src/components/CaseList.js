import React, { useEffect, useState } from "react";
import axios from "axios";

function CaseList() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get("https://backend-4hng.onrender.com/cases");
        setCases(response.data);
      } catch (error) {
        alert("Error fetching cases: " + error.message);
      }
    };
    fetchCases();
  }, []);

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-lg font-bold mb-4">All Cases</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Case Number</th>
            <th className="p-2">Parties</th>
            <th className="p-2">Registration Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem) => (
            <tr key={caseItem.id} className="border-t">
              <td className="p-2">{caseItem.case_number}</td>
              <td className="p-2">{caseItem.parties}</td>
              <td className="p-2">{caseItem.registration_date}</td>
              <td className="p-2">{caseItem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaseList;
