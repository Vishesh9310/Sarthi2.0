import React from "react";

function AppointmentList({ appointments, onCancelAppointment }) {
  if (appointments.length === 0) {
    return <p className="text-center text-gray-500">No appointments booked yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Your Appointments:</h2>
      <ul className="space-y-4 mt-4">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="flex justify-between items-center p-4 form rounded-lg shadow">
            <div>
              <p className="text-lg font-semibold">Name: {appointment.name}</p>
              <p className="text-lg font-semibold">Email: {appointment.email}</p>
              <p className="text-lg font-semibold">Phone: {appointment.tel}</p>
              <p className="text-lg font-semibold">Date: {appointment.date}</p>
              <p className="text-lg font-semibold">Time: {appointment.time}</p>
              <p className="text-lg font-semibold">Disease: {appointment.disease}</p>
            </div>
            <button onClick={() => onCancelAppointment(appointment.id)} className="text-red-500 hover:text-red-700">Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
