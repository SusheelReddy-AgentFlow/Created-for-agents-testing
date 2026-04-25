import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100 p-4">
      <header className="bg-white shadow p-4 mb-4 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard!</h1>
      </header>
      <main className="flex-grow bg-white shadow p-4 rounded-lg">
        <p className="text-gray-700">This is your main dashboard area. More content will be added here soon.</p>
        {/* Add more dashboard widgets/components here */}
      </main>
    </div>
  );
};

export default Dashboard;
