import React from "react";

function Sapa() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 4 && currentHour < 12) {
    greeting = "Selamat Pagi";
  } else if (currentHour >= 12 && currentHour < 15) {
    greeting = "Selamat Siang";
  } else if (currentHour >= 15 && currentHour < 18) {
    greeting = "Selamat Sore";
  } else {
    greeting = "Selamat Malam";
  }

  return (
    <div className="homepage_Card text-lg flex bg-white border-biru p-4 rounded-lg shadow-md text-text">
      <h1>{`${greeting}! Berikut Daftar Kelas yang Harus Kamu Ajar!`}</h1>
    </div>
  );
}

export default Sapa;
