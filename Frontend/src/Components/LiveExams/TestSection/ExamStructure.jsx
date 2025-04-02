import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enterFullScreen, exitExam } from "../../../Redux/ExamSlice";
import QuestionSection from "./QuestionSection";
import StudentDetails from "./StudentDetails";

const ExamStructure = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const enableFullScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(console.log);
      }
    };
    
    enableFullScreen();
    dispatch(enterFullScreen());

    const handleVisibilityChange = () => {
      if (document.hidden) {
        dispatch(exitExam());
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [dispatch]);

  return (
    <div className="flex h-screen">
      <div className="w-2/3 p-4 bg-gray-100">
        <QuestionSection />
      </div>
      
      <div className="w-1/3 p-4 bg-white border-l">
        <StudentDetails />
      </div>
    </div>
  );
};

export default ExamStructure;
