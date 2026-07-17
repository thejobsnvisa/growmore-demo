import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Helmet } from "react-helmet-async";

const BookConsultation = () => {
  const url = "https://www.growmore.one/book-consultation/";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const openCalendly = (url) => {
    setSelectedUrl(url);
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  // Lock background scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <Helmet>
        <title>
          Book Your Australian Visa Consultation | Growmore Immigration
        </title>

        <meta
          name="description"
          content="Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Book Your Australian Visa Consultation | Growmore Immigration"
        />
        <meta
          property="og:description"
          content="Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://www.growmore.one/assets/c3.jpg"
        />
      </Helmet>
      <div>
        {/* Hero Section */}
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-[22px] md:text-5xl font-semibold text-white mb-3">
              Book Consultation
            </h1>
            <p className="text-white font-semibold">
              Home &gt; Book Consultation
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
              {" "}
              <div className="h-[350px] overflow-hidden rounded-t-3xl">
                {" "}
                <img
                  src={`${import.meta.env.BASE_URL}assets/c3.jpg`}
                  alt="Urgent Consultation"
                  className="w-full h-full object-cover object-top"
                />{" "}
              </div>{" "}
              <div className="p-4">
                {" "}
                <h2 className="text-[22px] font-bold text-[#042325]">
                  Free Callback
                </h2>{" "}
                <h3 className="mt-3 text-lg font-bold">
                  {" "}
                  Speak with our Migration Support Team{" "}
                </h3>{" "}
                <p className="text-[#042325] text-[15px] mt-4 leading-relaxed ">
                  {" "}
                  Fill in your details, and our team members will call you to :
                  Understand your migration goals, Check your eligibility,
                  Explain the next steps, Answer your questions. No obligation.
                  No payment required.{" "}
                </p>{" "}
                <a
                  href="https://6fvy.short.gy/icfactsheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-[15px] mt-4 block"
                >
                  {" "}
                  View Factsheet{" "}
                </a>{" "}
                <a
                  href="https://case.growmore.one/add/company-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
                >
                  Book Now
                </a>
              </div>{" "}
            </div>
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
              <div className="h-[350px] overflow-hidden rounded-t-3xl">
                <img
                  src={`${import.meta.env.BASE_URL}assets/c2.jpg`}
                  alt="Standard Consultation"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-4">
                <h2 className="text-[22px] font-bold text-[#042325]">$299</h2>

                <h3 className="mt-3 text-lg font-bold">
                  Standard Consultation with Krunal Nayak (30 Mins)
                </h3>

                <p className="text-[#042325] text-[15px] mt-4 leading-relaxed ">
                  Book your online Standard consultation with our Principal
                  Migration Agents specialised in Australian visas —
                  appointments available in approximately 3 weeks.
                </p>
                <br/>
                <a
                  href="https://6fvy.short.gy/icfactsheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-[15px] mt-4 block"
                >
                  {" "}
                  View Factsheet{" "}
                </a>
                <button
                  onClick={() =>
                    openCalendly("https://calendly.com/krunalnayak/regular")
                  }
                  className="mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
              <div className="h-[350px] overflow-hidden rounded-t-3xl">
                <img
                  src={`${import.meta.env.BASE_URL}assets/c.png`}
                  alt="Urgent Consultation"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-4">
                <h2 className="text-[22px] font-bold text-[#042325]">$500</h2>

                <h3 className="mt-3 text-lg font-bold">
                  Urgent Consultation with Krunal Nayak (60 Mins)
                </h3>

                <p className="text-[#042325] text-[15px] mt-4  mb-3 leading-relaxed ">
                  Book your urgent online consultation with our Principal
                  Migration Agents, who specialise in Australian visas and
                  applications, and receive priority expert guidance .
                </p>
                <a
                  href="https://6fvy.short.gy/icfactsheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-[15px] mt-10 block"
                >
                  {" "}
                  View Factsheet{" "}
                </a>
                <button
                  onClick={() =>
                    openCalendly("https://calendly.com/krunalnayak/urgent")
                  }
                  className="mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Popup */}
        {isOpen && (
          <PopupModal
            url={selectedUrl}
            open={isOpen}
            onModalClose={closeCalendly}
            rootElement={document.getElementById("root")}
          />
        )}
      </div>
    </>
  );
};

export default BookConsultation;
