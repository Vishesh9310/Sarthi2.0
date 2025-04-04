import React, { useState } from "react";

function AppointmentForm({ onAddAppointment }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      date,
      time,
    };

    onAddAppointment(newAppointment);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Book a New Appointment:</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
