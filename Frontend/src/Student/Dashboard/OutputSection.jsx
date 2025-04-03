import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaRegFileAlt, FaJava, FaPython, FaBug, FaDatabase, FaCode, FaCogs, FaProjectDiagram, FaFlask, FaTools, FaClipboardCheck, FaVial, FaRobot, FaChartLine } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const OutputSection = ({ selectedContent }) => {
  return (
    <div className="flex-1 p-6 flex justify-center items-center">
      {selectedContent === "exams - Start New Exam" ? (
        <div className="flex gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center border">
            <h2 className="text-xl font-bold text-gray-800">Live Exam</h2>
            <p className="text-gray-600 mt-2">Join an ongoing exam in real-time.</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              <NavLink to='/examlists'>Start Live Exam</NavLink>
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center border">
            <h2 className="text-xl font-bold text-gray-800">Mock Exam</h2>
            <p className="text-gray-600 mt-2">Practice with a simulated exam.</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Start Mock Exam
            </button>
          </div>
        </div>
      ) : selectedContent === "study - MERN" ? (
        <div className="grid grid-cols-2 md:grid-cols-3  gap-6 ">
          <StudyMaterial icon={<FaHtml5 size={40} className="text-orange-500 mx-10" />} title="HTML" link="https://learn-javascript-mern.netlify.app/" />
          <StudyMaterial icon={<FaCss3Alt size={40} className="text-blue-500 mx-11" />} title="CSS" link="https://github.com" />
          <StudyMaterial icon={<FaJs size={40} className="text-yellow-500 mx-10" />} title="JavaScript" link="https://learn-javascript-mern.netlify.app/" />
          <StudyMaterial icon={<FaReact size={40} className="text-blue-500 mx-10" />} title="React JS" link="https://react-step.netlify.app/" />
          <StudyMaterial icon={<FaRegFileAlt size={40} className="text-black-500 mx-10" />} title="Questions" link="https://frontend-labs-zeta.vercel.app/" />
        </div>
      ) : selectedContent === "study - Java" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <StudyMaterial
            icon={<FaJava size={40} className="text-red-500 mx-10" />}
            title="Core Java"
            link="https://www.javatpoint.com/java-tutorial"
          />
          <StudyMaterial
            icon={<FaDatabase size={40} className="text-green-500 mx-10" />}
            title="JDBC"
            link="https://www.javatpoint.com/java-jdbc"
          />
          <StudyMaterial
            icon={<FaCode size={40} className="text-blue-500 mx-10" />}
            title="Spring Boot"
            link="https://spring.io/guides/gs/spring-boot/"
          />
          <StudyMaterial
            icon={<FaCogs size={40} className="text-gray-500 mx-10" />}
            title="Multithreading"
            link="https://www.geeksforgeeks.org/multithreading-in-java/"
          />
          <StudyMaterial
            icon={<FaProjectDiagram size={40} className="text-purple-500 mx-10" />}
            title="Design Pattern"
            link="https://refactoring.guru/design-patterns"
          />
        </div>
      ) : selectedContent === "study - Testing" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <StudyMaterial
            icon={<FaBug size={40} className="text-red-500 mx-10" />}
            title="Unit Testing"
            link="https://www.javatpoint.com/unit-testing-in-java"
          />
          <StudyMaterial
            icon={<FaVial size={40} className="text-green-500 mx-10" />}
            title="JUnit"
            link="https://junit.org/junit5/docs/current/user-guide/"
          />
          <StudyMaterial
            icon={<FaClipboardCheck size={40} className="text-blue-500 mx-10" />}
            title="Selenium"
            link="https://www.selenium.dev/documentation/"
          />
          <StudyMaterial
            icon={<FaTools size={40} className="text-gray-500 mx-10" />}
            title="Postman API Testing"
            link="https://learning.postman.com/docs/getting-started/introduction/"
          />
          <StudyMaterial
            icon={<FaFlask size={40} className="text-purple-500 mx-10" />}
            title="Performance Testing"
            link="https://jmeter.apache.org/"
          />
        </div>
      ) : selectedContent === "study - Python" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <StudyMaterial
            icon={<FaPython size={40} className="text-yellow-500 mx-10" />}
            title="Python Basics"
            link="https://www.w3schools.com/python/"
          />
          <StudyMaterial
            icon={<FaDatabase size={40} className="text-blue-500 mx-10" />}
            title="Django "
            link="https://docs.djangoproject.com/en/stable/"
          />
          <StudyMaterial
            icon={<FaChartLine size={40} className="text-green-500 mx-10" />}
            title="Data Science"
            link="https://www.datacamp.com/courses/intro-to-python-for-data-science"
          />
          <StudyMaterial
            icon={<FaRobot size={40} className="text-gray-500 mx-10" />}
            title="Machine Learning"
            link="https://scikit-learn.org/stable/"
          />
          <StudyMaterial
            icon={<FaFlask size={40} className="text-purple-500 mx-10" />}
            title="Flask Framework"
            link="https://flask.palletsprojects.com/en/latest/"
          />
        </div>
      ) : selectedContent ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center border">
          <h2 className="text-xl font-bold text-gray-800">Welcome to Your Profile</h2>
          <p className="text-gray-600 mt-2"><span className="font-semibold">{selectedContent}</span>.
          </p>
        </div>
      ) : (
        <h2 className="text-gray-400">Select an item from the menu</h2>
      )}
    </div>
  );
};

const StudyMaterial = ({ icon, title, link }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 w-40 text-center border">
    {icon}
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    {link ? (
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </button>
    ) : null}
  </div>
);

export default OutputSection;
