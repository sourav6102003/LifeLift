import React from 'react';

const DashboardMain = () => {
  const appointments = [
    {
      date: '2025-06-01',
      id: 'P1001',
      name: 'John Doe',
      age: 34,
      type: 'General Checkup',
    },
    {
      date: '2025-06-02',
      id: 'P1002',
      name: 'Jane Smith',
      age: 29,
      type: 'Dental',
    },
  
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="New Schedule" />
        <Card title="Total Patients" value="132" />
        <Card title="Total Recovered" value="87" />
        <Card title="Total Critical" value="12" />
      </div>

  
      <h2 className="text-xl font-semibold mb-3">📅 Upcoming Appointments</h2>


      <div className="bg-white shadow-md rounded overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Patient ID</th>
              <th className="px-4 py-2">Patient Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Type of Appointment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{appt.date}</td>
                <td className="px-4 py-2">{appt.id}</td>
                <td className="px-4 py-2">{appt.name}</td>
                <td className="px-4 py-2">{appt.age}</td>
                <td className="px-4 py-2">{appt.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Card = ({ title, value = '...' }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-green-700">{value}</p>
  </div>
);

export default DashboardMain;
