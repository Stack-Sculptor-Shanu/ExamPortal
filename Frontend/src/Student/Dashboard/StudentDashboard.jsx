import React, { useState } from "react";
import Sidebar from "./Sidebar";
import OutputSection from "./OutputSection";
import Profile from "./Profile"; 
import ContentBar from "./Contentbar";

const StudentDashboard = () => {
const [selectedMenu, setSelectedMenu] = useState("dashboard"); 
  const [selectedContent, setSelectedContent] = useState("dashboard"); 

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
        <Profile />
      </div>
    </div>
  );
};

export default StudentDashboard;
