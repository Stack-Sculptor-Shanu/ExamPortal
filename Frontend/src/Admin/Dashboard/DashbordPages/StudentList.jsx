import React from "react";

const StudentList = () => {
  // Mock student data (Replace this with API data if needed)
  const students = [
    { id: 1, name: "Alice Johnson", rollNumber: "101", class: "10A" },
    { id: 2, name: "Bob Smith", rollNumber: "102", class: "10A" },
    { id: 3, name: "Charlie Brown", rollNumber: "103", class: "10B" },
    { id: 4, name: "David Williams", rollNumber: "104", class: "10B" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Student List</h1>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Roll Number</th>
              <th className="border border-gray-300 px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{student.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
