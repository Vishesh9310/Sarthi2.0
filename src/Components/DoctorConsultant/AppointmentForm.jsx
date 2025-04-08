import React, { useState } from "react";

function AppointmentForm({ onAddAppointment }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [textarea, setArea] = useState("Enter Your Symptoms");
  const [disease, setDisease] = useState("Viral fever");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      name,
      email,
      tel,
      id: Date.now(),
      date,
      time,
      disease,
    };

    onAddAppointment(newAppointment);
  };

  return (
    <div>
      <div className="h-fit backg_teal">
        <h2 className="text-xl font-semibold text-black py-4 text-center bg-white">Make An Appointment</h2>
        <form onSubmit={handleSubmit} className="mt-3 p-5 space-y-5">
          <input name="name" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 outline-none div divheadingblack w-full" />
          <input name="email" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 outline-none div divheadingblack w-full" />
          <input name="phoneNo" type="tel" placeholder="Enter Mobile Number" value={tel} onChange={(e) => setTel(e.target.value)} required className="p-2 outline-none div divheadingblack w-full" />
          <input name="date" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required className="p-2 outline-none div divheadingblack w-full" />
          <input name="time" type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required className="p-2 outline-none div divheadingblack w-full" />
          <textarea name="symptoms" id="textarea" value={textarea} onChange={(e) => setArea(e.target.value)} required className="p-2 outline-none div divheadingblack w-full"></textarea>
          <select name="disease" id="disease" onChange={(e) => setDisease(e.target.value)} className="p-2 outline-none div divheadingblack w-full">
            <option value="notsure">Not Sure</option>
            <optgroup label="Viral Fever">
              <option value="covid19">COVID-19</option>
              <option value="Influenza">Influenza (Flu)</option>
              <option value="Measles">Measles</option>
              <option value="Mumps">Mumps</option>
              <option value="Rubella">Rubella</option>
              <option value="HIV/AIDS">HIV/AIDS</option>
              <option value="Ebola">Ebola</option>
              <option value="Zika">Zika</option>
              <option value="Chickenpox">Chickenpox</option>
              <option value="Rabies">Rabies</option>
            </optgroup>

            <optgroup label="Bacterial">
              <option value="Tuberculosis">Tuberculosis</option>
              <option value="Pneumonia">Pneumonia</option>
              <option value="StrepThroat">Strep Throat</option>
              <option value="Diphtheria">Diphtheria</option>
              <option value="Tetanus">Tetanus</option>
              <option value="Cholera">Cholera</option>
              <option value="Leprosy">Leprosy</option>
            </optgroup>

            <optgroup label="Parasitic">
              <option value="ChagesDisease">Chagas Disease</option>
              <option value="Malaria">Malaria</option>
              <option value="Leishmaniasis">Leishmaniasis</option>
            </optgroup>

            <optgroup label="NutritionalDeficiencies">
              <option value="Anemia">Anemia</option>
              <option value="Scurvy">Scurvy</option>
              <option value="Rickets">Rickets</option>
            </optgroup>

            <optgroup label="InheritedDiseases">
              <option value="CysticFibrosis">Cystic Fibrosis</option>
              <option value="SickleCellAnemia">Sickle Cell Anemia</option>
              <option value="Tay_SachsDisease">Tay-Sachs Disease</option>
            </optgroup>
          </select>
          <button type="submit" className="w-full bg-blue-500 text-white p-2">Book Appointment</button>
        </form>
        <button name="disease" id="disease" onClick={()=>setDisease("Not Sure")} className="p-2 outline-none div divheadingblack w-full">press here for not sure about your diesease</button>
          
      </div>
    </div>
  );
}

export default AppointmentForm;
