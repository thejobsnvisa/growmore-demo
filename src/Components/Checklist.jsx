import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

const Checklist = () => {
  const recaptchaRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    location: "",
    qualification: "",
    occupation: "",
    skillsAssessment: "",
    experience: "",
    jobOffer: "",
    resume: null,
  });

  const [dialCode, setDialCode] = useState("61");
  const [phoneNumber, setPhoneNumber] = useState("");

  // IMPORTANT:
  // Prevents "Element type is invalid... got: object"
  const PhoneInputComponent = PhoneInput?.default || PhoneInput;
  const RecaptchaComponent = ReCAPTCHA?.default || ReCAPTCHA;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get reCAPTCHA token
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }

    if (!phoneNumber.trim()) {
      alert("Please enter phone number");
      return;
    }

    setLoading(true);

    const finalPhone = `+${dialCode}${phoneNumber}`;

    const finalData = {
      fullName: formData.fullName,
      email: formData.email,
      country: formData.country,
      location: formData.location,
      qualification: formData.qualification,
      occupation: formData.occupation,
      skillsAssessment: formData.skillsAssessment,
      experience: formData.experience,
      jobOffer: formData.jobOffer,

      phone: finalPhone,

      captchaToken: token,

      source: "DAMA Eligibility Form",
    };

    try {
      const BASE_URL = "https://growmore-1.vercel.app";

      const response = await fetch(`${BASE_URL}/api/dama`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      alert("Thank you! Our team will contact you shortly.");

      // Reset React form state
      setFormData({
        fullName: "",
        email: "",
        country: "",
        location: "",
        qualification: "",
        occupation: "",
        skillsAssessment: "",
        experience: "",
        jobOffer: "",
        resume: null,
      });

      setPhoneNumber("");
      setDialCode("61");

      // Reset CAPTCHA
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Submission Error:", error);

      alert(
        error.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            DAMA Visa Interest & Pre-Screening Form
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl shadow-md bg-[#eff9fb]">

          <h2 className="text-xl font-semibold mb-6">
            Applicant's Information:
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="input-style"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* Country Code */}
              <div className="w-full sm:w-32 bg-white rounded-md border border-gray-300">

                <PhoneInputComponent
                  country="au"
                  enableSearch
                  onChange={(value, data) => {
                    setDialCode(data?.dialCode || "61");
                  }}
                  inputProps={{
                    readOnly: true,
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "46px",
                    border: "none",
                    backgroundColor: "white",
                    borderRadius: "6px",
                  }}
                  buttonStyle={{
                    border: "none",
                    backgroundColor: "white",
                    borderRadius: "6px 0 0 6px",
                  }}
                />

              </div>

              {/* Phone Number */}
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(
                      e.target.value.replace(/\D/g, "")
                    );
                  }}
                  className="w-full h-[46px] px-4 rounded-md border border-gray-300 focus:outline-none bg-white"
                  required
                />
              </div>

            </div>

            {/* Country */}
            <input
              type="text"
              name="country"
              placeholder="Country of Residence"
              value={formData.country}
              onChange={handleChange}
              className="input-style"
              required
            />

            {/* Current Location */}
            <div>
              <p className="label">
                Current Location
              </p>

              <div className="flex flex-wrap gap-6 mt-2">

                <label>
                  <input
                    type="radio"
                    name="location"
                    value="Australia"
                    checked={formData.location === "Australia"}
                    onChange={handleChange}
                    required
                  />{" "}
                  Australia
                </label>

                <label>
                  <input
                    type="radio"
                    name="location"
                    value="Outside Australia"
                    checked={
                      formData.location === "Outside Australia"
                    }
                    onChange={handleChange}
                  />{" "}
                  Outside Australia
                </label>

              </div>
            </div>

            {/* Qualification */}
            <div>
              <p className="label">
                What is your highest qualification?
              </p>

              <div className="grid md:grid-cols-2 gap-3 mt-2">

                {[
                  "No formal qualification",
                  "High School",
                  "Trade Certificate / Diploma",
                  "Bachelor’s Degree",
                  "Master’s Degree or higher",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="qualification"
                      value={item}
                      checked={
                        formData.qualification === item
                      }
                      onChange={handleChange}
                      required
                    />

                    {item}
                  </label>
                ))}

              </div>
            </div>

            {/* Resume */}
            <div>
              <p className="label">
                Upload Resume
              </p>

              <input
                type="file"
                name="resume"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="input-style file:bg-gray-200 file:border-0 file:px-4 file:py-2 file:rounded-md"
              />
            </div>

            {/* Occupation */}
            <input
              type="text"
              name="occupation"
              placeholder="Occupation of Interest"
              value={formData.occupation}
              onChange={handleChange}
              className="input-style"
              required
            />

            {/* Skills Assessment */}
            <div>
              <p className="label">
                Do you have a valid Skills Assessment for your occupation?
              </p>

              <div className="flex flex-wrap gap-6 mt-2">

                {["Yes", "No", "In Process"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="skillsAssessment"
                      value={item}
                      checked={
                        formData.skillsAssessment === item
                      }
                      onChange={handleChange}
                      required
                    />{" "}
                    {item}
                  </label>
                ))}

              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="label">
                How many years of full-time experience do you have?
              </p>

              <div className="flex flex-wrap gap-6 mt-2">

                {[
                  "Less than 1 year",
                  "1-2 years",
                  "2-5 years",
                  "5+ years",
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="experience"
                      value={item}
                      checked={formData.experience === item}
                      onChange={handleChange}
                      required
                    />{" "}
                    {item}
                  </label>
                ))}

              </div>
            </div>

            {/* Job Offer */}
            <div>
              <p className="label">
                Do you already have a job offer in a DAMA region?
              </p>

              <div className="flex flex-wrap gap-6 mt-2">

                {[
                  "Yes",
                  "No",
                  "Currently looking for one",
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="jobOffer"
                      value={item}
                      checked={formData.jobOffer === item}
                      onChange={handleChange}
                      required
                    />{" "}
                    {item}
                  </label>
                ))}

              </div>
            </div>

            {/* Google reCAPTCHA */}
            <div className="flex justify-start">
              <RecaptchaComponent
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#6dc7d1] px-8 py-3 text-white rounded-full hover:bg-black transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Checklist;
