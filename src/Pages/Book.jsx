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
          <div className="max-w-7xl h-[500px] mx-auto px-6 grid md:grid-cols-3 gap-6">
            {/* Card - styled similar to provided image */}
            <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="relative bg-[#8b6f2f] flex items-stretch">
                <div className="w-2/5 bg-[#f3e9d6] p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold text-[#8b6f2f]">
                    Free Call
                  </h3>
                </div>
                <div className="w-3/5">
                <div className="relative bg-[#8b6f2f] flex items-stretch rounded-tl-[20px]">
                </div>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/c3.jpg`}
                    alt="Consultant"
                    className="w-full h-full object-cover object-center rounded-tr-2xl "
                    style={{
                      height: 188,
                      marginLeft: 20,
                      marginTop: 40,
                      borderRadius: 20,
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Mentor</p>
                    <h4 className="text-lg font-bold text-[#042325]">
                      Migration Support
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                      4.9 ★
                    </div>
                    <p className="text-xs text-gray-400">(500 ratings)</p>
                  </div>
                </div>
                <span className="relative -top-[-50px] text-2xl font-semibold text-gray-900 ml-1">
                  Free
                </span>

                <ul className="mt-[-10px] text-sm text-gray-700 space-y-1 ml-28">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Calculate
                    Retirement Money.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Right Way to
                    Select Mutual Funds.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Plan Your
                    House Purchase.
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-[#042325] text-white rounded-full py-3">
                    Book a seat
                  </button>
                </div>
              </div>
            </div>

            {/* Reuse structure for second card */}
            <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="bg-[#33458b] relative flex items-stretch">
                <div className="w-2/5 bg-[#e6ecff] p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-[#33458b]">
                    Stock Market
                  </h3>
                  <p className="text-sm text-[#33458b] mt-2">Masterclass</p>
                </div>
                <div className="w-3/5">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/c.png`}
                    alt="Consultant"
                    className="w-full h-full object-cover object-center rounded-tr-2xl"
                    style={{
                      height: 188,
                      marginLeft: 20,
                      marginTop: 40,
                      borderRadius: 20,
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Mentor</p>
                    <h4 className="text-lg font-bold text-[#042325]">
                      Kunal Nayak
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                      4.9 ★
                    </div>
                    <p className="text-xs text-gray-400">(500 ratings)</p>
                  </div>
                </div>

               <span className="relative -top-[-50px] text-2xl font-semibold text-gray-900 ml-1">
                  $299
                </span>

                <ul className="mt-[-10px] text-sm text-gray-700 space-y-1 ml-28">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Calculate
                    Retirement Money.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Right Way to
                    Select Mutual Funds.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Plan Your
                    House Purchase.
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() =>
                      openCalendly("https://calendly.com/krunalnayak/regular")
                    }
                    className="flex-1 bg-[#042325] text-white rounded-full py-3"
                  >
                    Book a seat
                  </button>
                </div>
              </div>
            </div>

            {/* Third card */}
            <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="bg-[#3b4b63] relative flex items-stretch rounded-tl-[30px]">
                <div className="w-2/5 bg-[#f0f4f8] p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-[#3b4b63]">
                    Urgent
                  </h3>
                  <p className="text-sm text-[#3b4b63] mt-2">Consultation</p>
                </div>
                <div className="w-3/5">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/c.png`}
                    alt="Consultant"
                    className="w-full h-full object-cover object-center rounded-tr-2xl"
                    style={{
                      height: 188,
                      marginLeft: 20,
                      marginTop: 40,
                      borderRadius: 20,
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Mentor</p>
                    <h4 className="text-lg font-bold text-[#042325]">
                      Krunal Nayak
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                      4.9 ★
                    </div>
                    <p className="text-xs text-gray-400">(500 ratings)</p>
                  </div>
                </div>
                <span className="relative -top-[-50px] text-2xl font-semibold text-gray-900 ml-1">
                  $500
                </span>

                <ul className="mt-[-10px] text-sm text-gray-700 space-y-1 ml-28">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Calculate
                    Retirement Money.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Right Way to
                    Select Mutual Funds.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span> Plan Your
                    House Purchase.
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() =>
                      openCalendly("https://calendly.com/krunalnayak/urgent")
                    }
                    className="flex-1 bg-[#042325] text-white rounded-full py-3"
                  >
                    Book a seat
                  </button>
                </div>
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
