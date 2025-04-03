import React, { useState } from "react";
import Sidebar from "./Sidebar";
import OutputSection from "./OutputSection";
import Profile from "./Profile"; // Import Profile component
import ContentBar from "./Contentbar";

const StudentDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard"); // Set default to dashboard
  const [selectedContent, setSelectedContent] = useState("dashboard"); // Default to profile

  return (
    <div className="flex h-screen">
      <Sidebar 
        selectedMenu={selectedMenu} 
        setSelectedMenu={setSelectedMenu} 
        setSelectedContent={setSelectedContent} 
      />
      <ContentBar 
        selectedMenu={selectedMenu} 
        setSelectedContent={setSelectedContent} 
      />
      <div className="flex-1 flex">
        <OutputSection selectedContent={selectedContent} />
        <Profile /> {/* Profile added to the right side */}
      </div>
    </div>
  );
};

export default StudentDashboard;
