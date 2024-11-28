import React, { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [hoursLeft, setHoursLeft] = useState("");
  const [minutesLeft, setMinutesLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const christmas = new Date("2024-12-25T00:00:00");
      const difference = christmas - now; // Ottieni la differenza in millisecondi

      if (difference <= 0) {
        clearInterval(interval); // Fermiamo l'interval quando il countdown è finito
        setTimeLeft("Buon Natale!");
      } else {
        // Calcola giorni, ore, minuti e secondi
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft(`${days} ${hours} ${minutes}`);
        setDaysLeft(`${days}`);
        setHoursLeft(`${hours}`);
        setMinutesLeft(`${minutes}`);
      }
    }, 1000); // Aggiorna ogni secondo

    // Pulisce l'interval quando il componente viene smontato
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-600 h-screen flex flex-col justify-center items-center p-5">
      <h1 className="text-5xl font-serif text-white font-extrabold mb-8 uppercase text-center">
        Countdown fino a Natale!
      </h1>
      <div className="flex space-x-10">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl border-4 border-green-500">
          <p className="text-4xl font-bold text-gray-800">{daysLeft}</p>
          <p className="text-xl text-gray-600">Giorni</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl border-4 border-green-500">
          <p className="text-4xl font-bold text-gray-800">{hoursLeft}</p>
          <p className="text-xl text-gray-600">Ore</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl border-4 border-green-500">
          <p className="text-4xl font-bold text-gray-800">{minutesLeft}</p>
          <p className="text-xl text-gray-600">Minuti</p>
        </div>
      </div>
      {timeLeft === "Buon Natale!" && (
        <div className="mt-8 text-4xl font-serif text-white font-extrabold">
          {timeLeft}
        </div>
      )}
    </div>
  );
}

export default Countdown;
