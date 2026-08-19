import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { Helmet } from "react-helmet-async";
import { Clock3, ThumbsUp, Check } from "lucide-react";

// =====================================================
// Consultation Card Configuration
// =====================================================

const CONSULTATION_CARDS = [
  {
    id: "free-callback",
    badge: {
      text: "Recommended",
      icon: ThumbsUp,
      color: "bg-[#38A5BC]",
    },
    bgColor: "bg-[#F0F7F4]",
    accentBg: "bg-[#A6C9AF]",
    textColor: "text-[#111827]",
    buttonBg: "bg-[#2DA099] hover:bg-[#23837D]",
    buttonText: "REQUEST FREE CALLBACK",
    titleLines: ["Free", "Callback"],
    heading: "$0 | 15 Mins",
    subheading: "Speak with our Migration Support Specialist",
    bullets: [
      "Discuss your migration goals",
      "Understand available services",
      "Know your next steps",
      "Callback within 24 hours",
    ],
    imageSrc: "assets/1.png",
    calendlyUrl: "https://case.growmore.one/add/company-website",
  },

  {
    id: "standard-consultation",
    badge: {
      text: "Limited time Deal!!",
      icon: Clock3,
      color: "bg-[#70BF44]",
    },
    bgColor: "bg-[#EEF6FB]",
    accentBg: "bg-[#9FC9EB]",
    textColor: "text-[#111827]",
    buttonBg: "bg-[#1D82AA] hover:bg-[#166A8B]",
    buttonText: "BOOK NOW",
    titleLines: ["Migration Strategy", "Session"],
    heading: "$299 | 30 Mins",
    subheading: "Krunal Nayak – MARN 2217941",
    bullets: [
      "Principal Migration Agent",
      "Expert migration advice",
      "Review your visa options",
      "Clear guidance on next steps",
      "Available within 7 days",
    ],
    imageSrc: "assets/2.png",
    calendlyUrl: "https://calendly.com/krunalnayak/regular",
  },

  {
    id: "urgent-consultation",
    badge: {
      text: "Recommended",
      icon: ThumbsUp,
      color: "bg-[#38A5BC]",
    },
    bgColor: "bg-[#EDF7F6]",
    accentBg: "bg-[#80C2BD]",
    textColor: "text-[#111827]",
    buttonBg: "bg-[#16676C] hover:bg-[#0F4E52]",
    buttonText: "BOOK URGENT",
    titleLines: ["Urgent / ","F2Fconsultation"],
    heading: "$500 | 60 Mins",
    subheading: "Krunal Nayak – MARN 2217941",
    bullets: [
      "Principal Migration Agent",
      "Priority migration advice",
      "Review urgent visa concerns",
      "Discuss immediate options",
      "Same-day availability",
    ],
    imageSrc: "assets/3.png",
    calendlyUrl: "https://calendly.com/krunalnayak/urgent",
  },
];

// =====================================================
// Book Consultation
// =====================================================

const BookConsultation = () => {
  const pageUrl = "https://www.growmore.one/book-consultation/";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  // ===================================================
  // Calendly
  // ===================================================

  const openCalendly = (calendlyUrl) => {
    setSelectedUrl(calendlyUrl);
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
    setSelectedUrl("");
  };

  // ===================================================
  // Prevent background scrolling when modal is open
  // ===================================================

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* =================================================
          SEO
      ================================================= */}

      <Helmet>
        <title>
          Book Your Australian Visa Consultation | Growmore Immigration
        </title>

        <meta
          name="description"
          content="Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"
        />

        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Book Your Australian Visa Consultation | Growmore Immigration"
        />

        <meta
          property="og:description"
          content="Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"
        />

        <meta property="og:url" content={pageUrl} />

        <meta
          property="og:image"
          content="https://www.growmore.one/assets/c3.jpg"
        />
      </Helmet>

      {/* =================================================
          PAGE
      ================================================= */}

      <main className="w-full bg-[#fafafa]">
        {/* =================================================
            HERO
        ================================================= */}

        <section className="bg-[#16676C] py-12 md:py-16 lg:py-20">
          <div
            className="
              mx-auto
              w-full
              max-w-[1400px]
              px-5
              sm:px-8
              md:px-12
              lg:px-15
            "
          >
            <h1
              className="
                mb-3
                text-[22px]
                font-semibold
                leading-tight
                text-white
                sm:text-[28px]
                md:text-4xl
                lg:text-5xl
              "
            >
              Book Consultation
            </h1>

            <p
              className="
                text-[13px]
                font-semibold
                text-white
                sm:text-[14px]
                md:text-base
              "
            >
              Home &gt; Book Consultation
            </p>
          </div>
        </section>

        {/* =================================================
            CONSULTATION CARDS
        ================================================= */}

        <section
          className="
            w-full
            bg-[#fafafa]
            px-4
            py-14
            sm:px-6
            md:py-16
            lg:px-8
          "
        >
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
            {CONSULTATION_CARDS.map((card) => {
              const BadgeIcon = card.badge.icon;

              const fullImgSrc = `${import.meta.env.BASE_URL}${card.imageSrc}`;

              return (
                <article
                  key={card.id}
                  className="
                    relative
                    flex
                    min-h-[520px]
                    flex-col
                    overflow-visible
                    rounded-[20px]
                    border
                    border-[#E5E7EB]
                    bg-white
                    shadow-[0_2px_6px_rgba(0,0,0,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                  "
                >
                  {/* =================================================
                      BADGE
                  ================================================= */}

                  <div className="absolute left-3 top-0 z-[50]">
                    <div
                      className={`
                        flex
                        items-center
                        gap-1.5
                        rounded-b-[18px]
                        ${card.badge.color}
                        px-3.5
                        py-[7px]
                        text-[10px]
                        font-medium
                        text-white
                      `}
                    >
                      <BadgeIcon size={11} strokeWidth={2} />

                      <span>{card.badge.text}</span>
                    </div>
                  </div>

                  {/* =================================================
                      TOP IMAGE AREA
                  ================================================= */}

                  <div
                    className={`
                      relative
                      h-[270px]
                      w-full
                      overflow-visible
                      rounded-t-[20px]
                      ${card.bgColor}
                    `}
                  >
                    {/* Left Half */}

                    <div
                      className={`
                        absolute
                        inset-y-0
                        left-0
                        z-[1]
                        w-1/2
                        rounded-tl-[20px]
                        ${card.bgColor}
                      `}
                    />

                    {/* Right Half */}

                    <div
                      className={`
                        absolute
                        inset-y-0
                        right-0
                        z-[1]
                        w-1/2
                        rounded-tl-[45px]
                        rounded-tr-[20px]
                        ${card.accentBg}
                      `}
                    />

                    {/* =================================================
                        PERSON IMAGE
                    ================================================= */}

                    <img
                      src={fullImgSrc}
                      alt={card.titleLines.join(" ")}
                      loading="lazy"
                      className="
                        pointer-events-none
                        absolute
                        right-[-35px]
                        top-[-55px]
                        z-[20]
                        h-[325px]
                        w-[78%]
                        select-none
                        object-contain
                        object-right-bottom
                      "
                    />

                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <div
                      className="
                        relative
                        z-[10]
                        flex
                        h-full
                        w-1/2
                        flex-col
                        justify-center
                        px-5
                        pt-4
                        sm:px-6
                      "
                    >
                      {card.titleLines.map((line, index) => (
                        <h3
                          key={`${card.id}-title-${index}`}
                          className={`
                            text-[16px]
                            font-bold
                            leading-[1.15]
                            sm:text-[20px]
                            ${card.textColor}
                          `}
                        >
                          {line}
                        </h3>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-[5]
                      flex
                      flex-1
                      flex-col
                      justify-between
                      rounded-b-[20px]
                      bg-white
                      px-4
                      pb-5
                      pt-5
                      sm:px-5
                    "
                  >
                    {/* Main Content */}

                    <div>
                      <h3
                        className="
                          text-center
                          text-[22px]
                          font-bold
                          leading-tight
                          text-[#111827]
                          sm:text-[24px]
                        "
                      >
                        {card.heading}
                      </h3>

                      <h4
                        className="
                          mt-2
                          text-center
                          text-[15px]
                          font-bold
                          leading-[1.35]
                          text-[#111827]
                          sm:text-[16px]
                        "
                      >
                        {card.subheading}
                      </h4>

                      {/* Bullet points description */}

                      <ul className="mt-4 space-y-2 text-[13px] text-[#374151]">
                        {card.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-left"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-[#2DA099]"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <div className="mt-6">
                      {/* Factsheet */}

                      <div className="mb-3 text-center">
                        <a
                          href="https://6fvy.short.gy/icfactsheet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
      inline-block
      text-[13px]
      font-medium
      text-[#1D82AA]
      transition
      hover:underline
    "
                        >
                          View Factsheet
                        </a>
                      </div>

                      {/* Action Button */}

                      <button
                        type="button"
                        onClick={() => openCalendly(card.calendlyUrl)}
                        className={`
                          w-full
                          rounded-[8px]
                          ${card.buttonBg}
                          py-[11px]
                          text-[13px]
                          font-semibold
                          tracking-wide
                          text-white
                          transition
                          duration-200
                          focus:outline-none
                          focus:ring-2
                          focus:ring-[#1D82AA]
                          focus:ring-offset-2
                        `}
                      >
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =================================================
            CALENDLY MODAL
        ================================================= */}

        {isOpen && selectedUrl && (
          <PopupModal
            url={selectedUrl}
            open={isOpen}
            onModalClose={closeCalendly}
            rootElement={document.getElementById("root") || document.body}
          />
        )}
      </main>
    </>
  );
};

export default BookConsultation;
