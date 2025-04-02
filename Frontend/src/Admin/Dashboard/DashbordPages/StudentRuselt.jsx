import React from "react";

const StudentResult = () => {
  // Mock student result data (Replace with actual API data)
  const studentResults = [
    { id: 1, name: "Alice Johnson", subject: "Math", score: 85, grade: "A" },
    { id: 2, name: "Bob Smith", subject: "Science", score: 78, grade: "B" },
    { id: 3, name: "Charlie Brown", subject: "English", score: 92, grade: "A+" },
    { id: 4, name: "David Williams", subject: "History", score: 66, grade: "C" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Results</h1>

      {/* Results Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Score</th>
              <th className="border border-gray-300 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentResults.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{student.score}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentResult;
