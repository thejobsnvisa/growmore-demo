import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Helmet } from "react-helmet-async";
import { Clock3, ThumbsUp } from "lucide-react";

const BookConsultation = () => {
  const url = "https://www.growmore.one/book-consultation/";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const openCalendly = (calendlyUrl) => {
    setSelectedUrl(calendlyUrl);
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}
      <Helmet>
        <title>
          Book Your Australian Visa Consultation | Growmore Immigration
        </title>

        <meta
          name="description"
          content="Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"
        />

        <link rel="canonical" href={url} />

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

      <div className="w-full">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-15">
            <h1 className="mb-3 text-[22px] font-semibold text-white md:text-5xl">
              Book Consultation
            </h1>

            <p className="font-semibold text-white">
              Home &gt; Book Consultation
            </p>
          </div>
        </section>

        {/* =====================================================
            CARDS
        ===================================================== */}
        <section className="bg-[#fafafa] px-4 py-14 md:px-6 lg:px-8">
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1180px]
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {/* =================================================
                CARD 1
            ================================================= */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#dedede]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              "
            >
              {/* Badge */}
              <div className="absolute left-3 top-0 z-30">
                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-b-[18px]
                    bg-[#1474D4]
                    px-3.5
                    py-[7px]
                    text-[10px]
                    font-medium
                    text-white
                  "
                >
                  <ThumbsUp size={11} />
                  Recommended
                </div>
              </div>

              {/* =================================================
                  CARD 1 TOP
              ================================================= */}
              <div className="relative h-[270px] overflow-hidden bg-[#F5EED7]">
                {/* Person image - BEHIND */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/1.png`}
                  alt="Free Callback"
                  className="
                    absolute
                    bottom-0
                    right-[-15px]
                    z-0
                    h-[105%]
                    w-[58%]
                    object-cover
                    object-[55%_center]
                  "
                />

                {/* Background layer */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    z-[1]
                    w-[56%]
                    bg-[#F5EED7]
                  "
                />

                {/* Image background */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    top-0
                    z-[1]
                    w-[43%]
                    rounded-tl-[45px]
                    bg-[#C9A45C]
                  "
                />

                {/* Person image above image background */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/1.png`}
                  alt="Free Callback"
                  className="
                    absolute
                    bottom-0
                    right-[-15px]
                    z-[2]
                    h-[105%]
                    w-[58%]
                    object-cover
                    object-[55%_center]
                  "
                />

                {/* Text */}
                <div className="relative z-10 flex h-full w-[56%] flex-col justify-center px-5 pt-4">
                  <h2 className="text-[23px] font-medium leading-[1.15] text-[#8B6F2F]">
                    Free
                  </h2>

                  <h2 className="text-[23px] font-medium leading-[1.15] text-[#8B6F2F]">
                    Callback
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-5 pt-5">
                <h3 className="text-[22px] font-semibold text-[#111]">
                  Free Callback
                </h3>

                <h4 className="mt-3 text-[16px] font-semibold leading-[1.35] text-[#111]">
                  Speak with our Migration Support Team
                </h4>

                <p className="mt-4 text-[13px] leading-[1.55] text-[#333]">
                  Fill in your details, and our team members will call you to :
                  Understand your migration goals, Check your eligibility,
                  Explain the next steps, Answer your questions. No obligation.
                  No payment required.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="text-[13px] font-medium text-[#1769ff] hover:underline"
                  >
                    View Factsheet
                  </button>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() =>
                      openCalendly(
                        "https://calendly.com/krunalnayak/regular"
                      )
                    }
                    className="
                      w-full
                      rounded-[8px]
                      bg-[#222]
                      py-[11px]
                      text-[13px]
                      font-medium
                      text-white
                      transition
                      hover:bg-black
                    "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                CARD 2
            ================================================= */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#dedede]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              "
            >
              {/* Badge */}
              <div className="absolute left-3 top-0 z-30">
                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-b-[18px]
                    bg-[#E7B923]
                    px-3.5
                    py-[7px]
                    text-[10px]
                    font-medium
                    text-white
                  "
                >
                  <Clock3 size={11} />
                  Limited time Deal!
                </div>
              </div>

              {/* =================================================
                  CARD 2 TOP
              ================================================= */}
              <div className="relative h-[270px] overflow-hidden bg-[#E7E9F8]">
                {/* Main background */}
                <div className="absolute inset-0 bg-[#E7E9F8]" />

                {/* Person image behind */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/2.png`}
                  alt="Standard Consultation"
                  className="
                    absolute
                    bottom-0
                    right-[-20px]
                    z-0
                    h-[108%]
                    w-[62%]
                    object-cover
                    object-[55%_center]
                  "
                />

                {/* Left colored layer */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    z-[1]
                    w-[56%]
                    bg-[#E7E9F8]
                  "
                />

                {/* Image background */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    top-0
                    z-[1]
                    w-[43%]
                    rounded-tl-[45px]
                    bg-[#858DCC]
                  "
                />

                {/* Person */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/2.png`}
                  alt="Standard Consultation"
                  className="
                    absolute
                    bottom-0
                    right-[-20px]
                    z-[2]
                    h-[108%]
                    w-[62%]
                    object-cover
                    object-[55%_center]
                  "
                />

                {/* Text */}
                <div className="relative z-10 flex h-full w-[56%] flex-col justify-center px-5 pt-4">
                  <h2 className="text-[23px] font-medium leading-[1.15] text-[#4E5C91]">
                    Standard
                  </h2>

                  <h2 className="text-[23px] font-medium leading-[1.15] text-[#4E5C91]">
                    Consultation
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-5 pt-5">
                <h3 className="text-[22px] font-semibold text-[#111]">
                  $299
                </h3>

                <h4 className="mt-3 text-[16px] font-semibold leading-[1.35] text-[#111]">
                  Standard Consultation with Krunal Nayak (30 Mins)
                </h4>

                <p className="mt-4 text-[13px] leading-[1.55] text-[#333]">
                  Book your online Standard consultation with our Principal
                  Migration Agents specialised in Australian visas —
                  appointments available in approximately 3 weeks.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="text-[13px] font-medium text-[#1769ff] hover:underline"
                  >
                    View Factsheet
                  </button>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() =>
                      openCalendly(
                        "https://calendly.com/krunalnayak/regular"
                      )
                    }
                    className="
                      w-full
                      rounded-[8px]
                      bg-[#222]
                      py-[11px]
                      text-[13px]
                      font-medium
                      text-white
                      transition
                      hover:bg-black
                    "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                CARD 3
            ================================================= */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#dedede]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              "
            >
              {/* Badge */}
              <div className="absolute left-3 top-0 z-30">
                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-b-[18px]
                    bg-[#1474D4]
                    px-3.5
                    py-[7px]
                    text-[10px]
                    font-medium
                    text-white
                  "
                >
                  <ThumbsUp size={11} />
                  Recommended
                </div>
              </div>

              {/* =================================================
                  CARD 3 TOP
              ================================================= */}
              <div className="relative h-[270px] overflow-hidden bg-[#EEF1F5]">
                {/* Main background */}
                <div className="absolute inset-0 bg-[#EEF1F5]" />

                {/* Person image behind */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/3.png`}
                  alt="Urgent Consultation"
                  className="
                    absolute
                    bottom-0
                    right-[-20px]
                    z-0
                    h-[108%]
                    w-[62%]
                    object-cover
                    object-[55%_center]
                  "
                />

                {/* Left background layer */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    z-[1]
                    w-[56%]
                    bg-[#EEF1F5]
                  "
                />

                {/* Image background */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    top-0
                    z-[1]
                    w-[55%]
                    rounded-tl-[45px]
                    bg-[#71849D]
                  "
                />

                {/* Person */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/3.png`}
                  alt="Urgent Consultation"
                  className="
                    absolute
                    top-0
                    right-[-30px]
                    z-[4]
                    h-full
                    w-[80%]
                    object-cover
                    object-[55%_center]
                  "
                />

                {/* Text */}
                <div className="relative z-10 flex h-full w-[56%] flex-col justify-center px-5 pt-4">
                  <h2 className="text-[23px] font-medium leading-[1.15] text-[#3B4B63]">
                    Urgent
                  </h2>

                  <h2 className="text-[23px] font-medium leading-[1.15] text-[#3B4B63]">
                    Consultation
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-5 pt-5">
                <h3 className="text-[22px] font-semibold text-[#111]">
                  $500
                </h3>

                <h4 className="mt-3 text-[16px] font-semibold leading-[1.35] text-[#111]">
                  Urgent Consultation with Krunal Nayak (60 Mins)
                </h4>

                <p className="mt-4 text-[13px] leading-[1.55] text-[#333]">
                  Book your urgent online consultation with our Principal
                  Migration Agents, who specialise in Australian visas and
                  applications, and receive priority expert guidance .
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="text-[13px] font-medium text-[#1769ff] hover:underline"
                  >
                    View Factsheet
                  </button>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() =>
                      openCalendly(
                        "https://calendly.com/krunalnayak/urgent"
                      )
                    }
                    className="
                      w-full
                      rounded-[8px]
                      bg-[#222]
                      py-[11px]
                      text-[13px]
                      font-medium
                      text-white
                      transition
                      hover:bg-black
                    "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CALENDLY POPUP
        ===================================================== */}
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