import React from 'react';

function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-600">Admin Dashboard</h1>
      <p>Only users with the 'admin' role can see this.</p>
    </div>
  );
}

export default AdminDashboard;
