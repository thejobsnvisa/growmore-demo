import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ReCAPTCHA from "react-google-recaptcha";

import { Helmet } from "react-helmet-async";

import PathwaySection from "../Components/PathwaySection";
import States from "../Components/States";

const Migrate = () => {
  const url = "https://www.growmore.one/migrate-to-australia/";

  const recaptchaRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState("61");
  const [phoneNumber, setPhoneNumber] = useState("");

  /*
   * IMPORTANT:
   * These two lines protect against packages being exposed
   * as either a component or { default: component }.
   */
  const PhoneInputComponent = PhoneInput?.default || PhoneInput;
  const RecaptchaComponent = ReCAPTCHA?.default || ReCAPTCHA;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    if (!phoneNumber.trim()) {
      alert("Please enter your contact number");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const finalPhone = `+${dialCode}${phoneNumber}`;

      const payload = {
        name: data.name,
        email: data.email,
        phone: finalPhone,
        visaType: data.visaType,
        message: data.message,
        captchaToken: token,
        source: "Website Form",
      };

      const BASE_URL = "https://growmore-1.vercel.app";

      const response = await fetch(`${BASE_URL}/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      alert("Thank you! Our team will contact you shortly.");

      e.currentTarget.reset();

      setPhoneNumber("");
      setDialCode("61");

      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        error?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Migrate to Australia | Skilled Occupation List with GrowMore
          Immigration
        </title>

        <meta
          name="description"
          content="Growmore Immigration can assist you in migrating to Australia. Check the latest Skilled Occupation List, eligibility criteria, and expert migration support to start your journey today."
        />

        <link rel="canonical" href={url} />

        <meta
          property="og:title"
          content="Migrate to Australia | Skilled Occupation List with GrowMore Immigration"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Growmore Immigration can assist you in migrating to Australia. Check the latest Skilled Occupation List, eligibility criteria, and expert migration support to start your journey today."
        />

        <meta property="og:url" content={url} />

        <meta
          property="og:image"
          content="https://www.growmore.one/assets/i1.png"
        />
      </Helmet>

      <div className="w-full">
        {/* HERO */}
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              How to Move Australia Permanently?
            </h1>

            <p className="text-white font-semibold">
              Home &gt; Migrate to Australia
            </p>
          </div>
        </section>

        {/* WHY AUSTRALIA */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
            {/* IMAGE COLLAGE */}
            <div className="grid grid-cols-2 gap-5 max-w-xl">
              <div className="row-span-2">
                <img
                  src={`${import.meta.env.BASE_URL}assets/i1.png`}
                  alt="Family Immigration"
                  className="w-full h-[376px] object-cover rounded-2xl"
                />
              </div>

              <div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/i2.png`}
                  alt="Australia City"
                  className="w-full h-32 object-cover rounded-2xl shadow-sm"
                />
              </div>

              <div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/i3.png`}
                  alt="Immigration Consultant"
                  className="w-full h-[228px] object-cover rounded-2xl shadow-sm"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[#8FD07C] text-sm font-semibold tracking-widest mb-3">
                Why Australia
              </p>

              <h2 className="text-xl md:text-4xl text-gray-900 leading-tight mb-6 mt-6">
                <span className="text-[#8FD07C] font-semibold">
                  Benefits
                </span>{" "}
                of Moving to Australia
              </h2>

              <p className="text-[#727272] font-medium leading-relaxed max-w-xl text-justify">
                Australia is a land of endless opportunities, known for its
                high standard of living, multicultural society, and
                breathtaking landscapes. If you’re wondering about the{" "}
                <b>best way to get PR in Australia</b>, exploring the
                country’s skilled migration pathways, family sponsorships,
                or student visas can open doors to permanent residency and a
                prosperous future. Discover why Australia could be the perfect
                destination for your next big move.
              </p>

              <div className="flex items-center gap-5 mt-8">
                <Link to="/points-calculator">
                  <button
                    type="button"
                    className="bg-[#6dc7d1] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#333333] transition whitespace-nowrap"
                  >
                    Explore the option →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MIGRATION HIGHLIGHTS */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-8xl mx-auto md:h-120 lg:h-100 bg-[#333333] rounded-[30px] md:rounded-[40px] px-6 md:px-10 py-12 relative overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}assets/wave2.jpg`}
              alt="Migration highlights background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />

            <div className="relative max-w-7xl mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-white leading-tight">
                  Australia’s Migration <br />
                  Highlights 2024–25
                </h2>
              </div>

              {/* RIGHT */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* CARD 1 */}
                <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/r1.svg`}
                    alt=""
                    className="w-10 h-10 shrink-0"
                  />

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      4,46,000
                    </h3>

                    <p className="text-sm md:text-base text-white mt-1">
                      With 4,46,000 net overseas migrations
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/r2.svg`}
                    alt=""
                    className="w-10 h-10 shrink-0"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      27.1 million
                    </h3>

                    <p className="text-sm md:text-base text-white mt-1">
                      Australia's population has reached 27.1 million
                    </p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition sm:col-span-2">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/r3.svg`}
                    alt=""
                    className="w-10 h-10 shrink-0"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      185,000
                    </h3>

                    <p className="text-sm md:text-base text-white mt-1">
                      Supported by a migration program of 185,000 places for
                      skilled professionals and families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PATHWAY */}
        <PathwaySection />

        {/* STATES */}
        <States />

        {/* CONTACT FORM */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src={`${import.meta.env.BASE_URL}assets/krunal2.png`}
                alt="MARA Registration"
                className="w-full max-w-sm h-[680px] object-cover rounded-2xl"
              />
            </div>

            {/* FORM */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="w-full mb-6 text-left">
                <p className="text-[#8fd07c] text-sm font-semibold">
                  Contact Information
                </p>

                <h2 className="text-[#8fd07c] text-3xl md:text-4xl font-semibold">
                  Get in Touch with Us
                </h2>
              </div>

              <div className="bg-[#EFF9FB] rounded-3xl shadow-2xl w-full max-w-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      required
                      className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* COUNTRY CODE */}
                    <div className="w-full sm:w-28 bg-white rounded-lg border border-gray-300">
                      <PhoneInputComponent
                        country="au"
                        enableSearch
                        onChange={(value, data) => {
                          setDialCode(data?.dialCode || "61");
                        }}
                        inputProps={{
                          readOnly: true,
                          "aria-label": "Country code",
                        }}
                        containerStyle={{
                          width: "100%",
                        }}
                        inputStyle={{
                          width: "100%",
                          border: "none",
                          height: "44px",
                          backgroundColor: "white",
                        }}
                        buttonStyle={{
                          border: "none",
                          backgroundColor: "white",
                        }}
                      />
                    </div>

                    {/* PHONE NUMBER */}
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      className="flex-1 bg-white rounded-lg px-4 py-2 border border-gray-300 w-full"
                      required
                    />
                  </div>

                  {/* VISA TYPE */}
                  <select
                    name="visaType"
                    required
                    className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                  >
                    <option value="">Inquiry For</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Work/Skilled Migration">
                      Work/Skilled Migration
                    </option>
                    <option value="Partner Visa">Partner Visa</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Employer Sponsor Visa">
                      Employer Sponsor Visa
                    </option>
                    <option value="PR Inquiries">PR Inquiries</option>
                  </select>

                  {/* MESSAGE */}
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Comments"
                    className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                  />

                  {/* RECAPTCHA */}
                  <div className="flex justify-center sm:justify-start w-full overflow-hidden">
                    <RecaptchaComponent
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      ref={recaptchaRef}
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-64 bg-[#373737] hover:bg-black text-white py-3 rounded-xl transition disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit →"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Migrate;