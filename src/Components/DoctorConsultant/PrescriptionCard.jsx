import React from 'react';

function PrescriptionCard({ prescription }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h3 className="text-lg font-semibold">{prescription.patientName}</h3>
      <p className="text-gray-700">Medication: {prescription.medication}</p>
      <p className="text-gray-700">Dosage: {prescription.dosage}</p>
      <p className="text-gray-700">Duration: {prescription.duration}</p>
    </div>
  );
}

export default PrescriptionCard;
