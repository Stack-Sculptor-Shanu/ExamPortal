import React from 'react';
import GraphComponent from './GraphComponent';

const UserManual = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to AptiNest</h1>
      <p className="text-lg mb-6">Here’s a quick guide on how to use our website:</p>
      <GraphComponent />  {/* This will render your workflow as a graph */}
    </div>
  );
};

export default UserManual;
