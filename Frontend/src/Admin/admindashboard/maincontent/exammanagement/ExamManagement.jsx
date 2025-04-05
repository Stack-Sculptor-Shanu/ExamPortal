import React, { useState } from 'react';

export default function ExamManagement() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState('');

  const examStats = [
    { label: 'Total Exams', value: 250 },
    { label: 'Upcoming Exams', value: 20 },
    { label: 'Ongoing Exams', value: 5 },
    { label: 'Completed Exams', value: 225 }
  ];

  const examDetails = [
    { batch: 'MERN', examName: 'React Test', date: '2025-04-15' },
    { batch: 'JAVA', examName: 'Java Test', date: '2025-04-18' },
    { batch: 'TESTING', examName: 'Testing Test', date: '2025-04-20' },
    { batch: 'PYTHON', examName: 'Python Test', date: '2025-04-10' }
  ];

  const upcomingExamDetails = [
    { batch: 'DEVOPS', examName: 'CI/CD Pipeline Exam', date: '2025-04-21' },
    { batch: 'UI/UX', examName: 'Design Principles Exam', date: '2025-04-23' },
    { batch: 'CLOUD', examName: 'AWS Certification Mock', date: '2025-04-25' }
  ];

  const ongoingExamDetails = [
    { batch: 'NODE', examName: 'Backend API Exam', date: '2025-04-05' },
    { batch: 'DB', examName: 'SQL & NoSQL Test', date: '2025-04-06' }
  ];

  const completedExamDetails = [
    { batch: 'DATA SCIENCE', examName: 'Data Analysis Test', date: '2025-03-30' },
    { batch: 'ANDROID', examName: 'Kotlin Mock Test', date: '2025-03-28' }
  ];

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Question:', {
      question,
      options,
      correctOption
    });
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOption('');
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-6 overflow-auto scrollbar-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {examStats.map((stat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(stat.label)}
            className={`bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
              selectedCard === stat.label ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h3 className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">Manage Questions</h3>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close Form' : 'Add Question'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Question</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Options</label>
            {options.map((opt, idx) => (
              <div key={idx} className="flex items-center space-x-2 mb-2">
                <span className="w-6 text-sm font-semibold text-gray-600 dark:text-gray-300">{String.fromCharCode(65 + idx)}.</span>
                <input
                  type="text"
                  placeholder={`Option ${idx + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                  className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correct Answer</label>
            <input
              type="text"
              placeholder="Enter the correct answer"
              value={correctOption}
              onChange={(e) => setCorrectOption(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit Question
          </button>
        </form>
      )}

      {selectedCard === 'Total Exams' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">All Exam Details</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {examDetails.map((exam, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{exam.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedCard === 'Upcoming Exams' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Exams</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {upcomingExamDetails.map((exam, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{exam.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedCard === 'Ongoing Exams' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Ongoing Exams <span className="text-red-500">● Live</span></h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {ongoingExamDetails.map((exam, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{exam.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedCard === 'Completed Exams' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Completed Exams</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {completedExamDetails.map((exam, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{exam.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{exam.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}