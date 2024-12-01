import React from "react";

const pillars = [
  {
    title: "Shahada",
    description: "Allohdan o‘zga iloh yo‘q va Muhammad (s.a.v.) Uning payg‘ambaridir, deb shahodat berish.",
  },
  {
    title: "Salat",
    description: "Kuniga 5 mahal namoz o‘qish.",
  },
  {
    title: "Zakat",
    description: "Moliyaviy zakotni berish.",
  },
  {
    title: "Ro‘za",
    description: "Ramazon oyida ro‘za tutish.",
  },
  {
    title: "Haj",
    description: "Mablag‘ va imkoniyat bo‘lsa, haj ziyoratini ado etish.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 my-16">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-center mb-4">Islom haqida</h1>
        <p className="text-gray-700 text-justify">
          Islom dunyoning eng keng tarqalgan va tinchlikka asoslangan dinlaridan biri. Bu din Allohning yagona ekanligini va 
          Muhammad (s.a.v.) Uning elchisi ekanligini tasdiqlaydi. Islomda har bir musulmonning hayot yo‘li Qur'on va Payg‘ambar 
          sunnatlari asosida belgilangan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{pillar.title}</h2>
            <p className="text-gray-600">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
