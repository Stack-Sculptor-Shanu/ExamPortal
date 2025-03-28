import React from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

const GraphComponent = () => {
  // Define nodes (steps) and edges (connections)
  const elements = [
    // Nodes (Steps in the process)
    {
      id: '1',
      data: { label: 'Welcome to AptiNest' },
      position: { x: 50, y: 50 },
      style: { backgroundColor: '#4CAF50', color: '#fff', padding: '20px', fontWeight: 'bold', borderRadius: '10px' },
    },
    {
      id: '2',
      data: { label: 'Login' },
      position: { x: 250, y: 50 },
      style: { backgroundColor: '#2196F3', color: '#fff', padding: '20px', fontWeight: 'bold', borderRadius: '10px' },
    },
    {
      id: '3',
      data: { label: 'Select Exam' },
      position: { x: 450, y: 50 },
      style: { backgroundColor: '#FF9800', color: '#fff', padding: '20px', fontWeight: 'bold', borderRadius: '10px' },
    },
    {
      id: '4',
      data: { label: 'Instruction Page' },
      position: { x: 650, y: 50 },
      style: { backgroundColor: '#009688', color: '#fff', padding: '20px', fontWeight: 'bold', borderRadius: '10px' },
    },
    {
      id: '5',
      data: { label: 'Start Exam' },
      position: { x: 850, y: 50 },
      style: { backgroundColor: '#9C27B0', color: '#fff', padding: '20px', fontWeight: 'bold', borderRadius: '10px' },
    },
    {
      id: '6',
      data: { label: 'Exam Dashboard' },
      position: { x: 1050, y: 50 },
      style: { backgroundColor: '#673AB7', color: '#fff', padding: '20px', fontWeight: 'bold', borderRadius: '10px' },
    },
    // Edges (Connections between the steps)
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: true,
      style: { stroke: '#2C6B40', strokeWidth: 2 },
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      animated: true,
      style: { stroke: '#2C6B40', strokeWidth: 2 },
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      animated: true,
      style: { stroke: '#2C6B40', strokeWidth: 2 },
    },
    {
      id: 'e4-5',
      source: '4',
      target: '5',
      animated: true,
      style: { stroke: '#2C6B40', strokeWidth: 2 },
    },
    {
      id: 'e5-6',
      source: '5',
      target: '6',
      animated: true,
      style: { stroke: '#2C6B40', strokeWidth: 2 },
    },
  ];

  return (
    <div className="w-full h-full bg-white p-8">
      <h2 className="text-center text-3xl font-bold mb-8">How AptiNest Works</h2>
      <div style={{ height: 600 }}>
        <ReactFlow elements={elements} snapToGrid={true} style={{ width: '100%', height: '100%' }}>
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
      {/* Descriptions or Tooltips */}
      <div className="mt-8 text-center text-lg">
        <p><strong>Step 1:</strong> Login to your account.</p>
        <p><strong>Step 2:</strong> Select an exam to start.</p>
        <p><strong>Step 3:</strong> Review instructions for the exam.</p>
        <p><strong>Step 4:</strong> Start the exam and begin answering questions.</p>
      </div>
    </div>
  );
};

export default GraphComponent;
