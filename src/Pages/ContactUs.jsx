import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";
import { Helmet } from "react-helmet-async";
import ContactSection from "../Components/ContactSection";

const ContactUs = () => {
const url = "https://www.growmore.one/contact-us/";

const recaptchaRef = useRef(null);

const [loading, setLoading] = useState(false);
const [dialCode, setDialCode] = useState("61");
const [phoneNumber, setPhoneNumber] = useState("");

/*

* IMPORTANT:
* Same import handling as the working Hero component.
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

setLoading(true);

try {
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const finalPhone = `+${dialCode}${phoneNumber}`;

  const payload = {
    name: data.name,
    email: data.email,
    phone: finalPhone,
    visaType: data.visaType,
    message: data.message,
    captchaToken: token,
    source: "Website Contact Form",
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

  e.target.reset();
  setPhoneNumber("");
  setDialCode("61");

  recaptchaRef.current?.reset();
} catch (error) {
  console.error("Contact form error:", error);
  alert(`Error: ${error.message}`);
} finally {
  setLoading(false);
}

};

return (
<> <Helmet> <title>
Contact Us | Growmore Immigration Offices in Melbourne Australia </title>

    <meta
      name="description"
      content="Growmore Immigration specializes in Australian immigration services, 30 Years experienced professionals, personalized guidance, and a strong track record of successful visa outcomes."
    />

    <link rel="canonical" href={url} />

    <meta
      property="og:title"
      content="Contact Us | Growmore Immigration Offices in Melbourne Australia"
    />

    <meta
      property="og:description"
      content="Growmore Immigration specializes in Australian immigration services, 30 Years experienced professionals, personalized guidance, and a strong track record of successful visa outcomes."
    />

    <meta property="og:url" content={url} />

    <meta
      property="og:image"
      content="https://www.growmore.one/assets/c.png"
    />

    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Helmet>

  <div className="w-full">

    {/* HERO */}
    <section className="bg-[#28535B] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
          Contact Us
        </h1>

        <p className="text-white font-semibold">
          Home &gt; Contact Us
        </p>
      </div>
    </section>

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
                    onChange={(_, data) => {
                      setDialCode(data.dialCode);
                    }}
                    inputProps={{
                      readOnly: true,
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
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                <option>Student Visa</option>
                <option>Work/Skilled Migration</option>
                <option>Partner Visa</option>
                <option>Tourist Visa</option>
                <option>Employer Sponsor Visa</option>
                <option>PR Inquiries</option>
              </select>

              {/* MESSAGE */}
              <textarea
                rows="4"
                name="message"
                placeholder="Your Comments"
                className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
              />

              {/* GOOGLE RECAPTCHA */}
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

    {/* CONTACT INFORMATION / MAPS */}
    <ContactSection />

  </div>
</>

);
};

export default ContactUs;
