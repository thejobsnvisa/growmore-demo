import React from "react";

const team = [
  {
    name: "Krunal Nayak",
    role: "Founder of Growmore Immigration",
    img: `${import.meta.env.BASE_URL}assets/team1.png`,
  },
  {
    name: "Keyur Chaudhari",
    role: "General Manager",
    img: `${import.meta.env.BASE_URL}assets/team2.png`,
  },
  {
    name: "Abhisha Rathod",
    role: "COO",
    img: `${import.meta.env.BASE_URL}assets/team3.png`,
  },
  {
    name: "Hiren Maharaj",
    role: "Knowledge Manager",
    img: `${import.meta.env.BASE_URL}assets/team4.png`,
  },
  {
    name: "Paritosh Kumar Parasher",
    role: "MARN: 0428682",
    img: `${import.meta.env.BASE_URL}assets/paritosh.jpg`,
  },
  {
    name: "Ravinderpal Mahal",
    role: "MARN: 2518731",
    img: `${import.meta.env.BASE_URL}assets/team5.jpg`,
  },
  {
    name: "Hina Ghanghro",
    role: "MARN: 2217803",
    img: `${import.meta.env.BASE_URL}assets/team7.jpg`,
  },
  {
    name: "Arunkumar Padmani",
    role: "MARN: 2418630",
    img: `${import.meta.env.BASE_URL}assets/team6.jpg`,
  },
  {
    name: "Sunaina Dhupad",
    role: "MARN: 2318061",
    img: `${import.meta.env.BASE_URL}assets/team8.jpg`,
  },
];

const Teams = () => {
  return (
    <div className="w-full bg-white py-20 md:py-24">
      {/* ================= TEAM SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-8 md:space-y-10">
          {/* first row: two items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-full"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-[#1E4E54] font-semibold text-md">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* second row: three items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.slice(3, 6).map((member, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-full"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-[#1E4E54] font-semibold text-md">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.slice(6, 9).map((member, index) => (
              <div
                key={index + 6}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-full"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-[#1E4E54] font-semibold text-md">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ================= COMMUNITY SECTION ================= */}
      <div className="max-w-7xl lg:max-w-screen-2xl mx-auto mt-16 md:mt-24 px-4 sm:px-6">
        <div className="bg-[#1E4E54] rounded-[20px] md:rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6dc7d1] mb-3 md:mb-4">
              Community
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-5 md:mb-6 max-w-md">
              Stay updated with the latest news, tips, and success stories by
              connecting with us on our social media platforms:
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-4 sm:gap-5 pt-2">
              <a href="https://www.facebook.com/growmore.one">
                <img
                  src={`${import.meta.env.BASE_URL}assets/f.svg`}
                  alt="Facebook"
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a href="https://www.instagram.com/growmore.one/">
                <img
                  src={`${import.meta.env.BASE_URL}assets/i.svg`}
                  alt="Instagram"
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a href="https://www.linkedin.com/company/growmore-immigration/">
                <img
                  src={`${import.meta.env.BASE_URL}assets/l.svg`}
                  alt="LinkedIn"
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a href="https://tiktok.com/@growmore.immigration">
                <img
                  src={`${import.meta.env.BASE_URL}assets/t.svg`}
                  alt="Tiktok"
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a href="https://www.youtube.com/@growmoreimmigration">
                <img
                  src={`${import.meta.env.BASE_URL}assets/y.svg`}
                  alt="YouTube"
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src={`${import.meta.env.BASE_URL}assets/c.png`}
              alt="community"
              className="rounded-2xl w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
