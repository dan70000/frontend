import React from "react";
import Navbar from "./components/Navbar";
import CaseForm from "./components/CaseForm";
import CaseList from "./components/CaseList";
import DocumentUpload from "./components/DocumentUpload";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <CaseForm />
        <hr className="my-6" />
        <DocumentUpload />
        <hr className="my-6" />
        <CaseList />
      </div>
    </div>
  );
}

export default App;
