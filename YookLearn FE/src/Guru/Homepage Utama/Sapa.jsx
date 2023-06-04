import React from 'react';

function Sapa() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = 'Selamat Pagi';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Selamat Siang';
  } else {
    greeting = 'Selamat Malam';
  }

  return (
    <div className="homepage_Card text-xl flex bg-tosca p-4 rounded-lg shadow-md">
      <h1>
        {`${greeting}, Lorem! Terdapat 3 Kelas untuk diajar hari ini.`}
      </h1>
    </div>
  );
}

export default Sapa;