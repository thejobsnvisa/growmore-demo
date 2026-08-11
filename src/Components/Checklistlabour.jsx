import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

const Checklistlabour = () => {
  const recaptchaRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState("61");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    labourAgreementApproved: "",
    companyName: "",
    abn: "",
    website: "",
    businessAddress: "",
    totalEmployees: "",
    yearsOfOperation: "",
    turnoverRange: "",
    industryAccreditation: "",
    dama: "",
    jobTitle: "",
    anzscoCode: "",
    employmentType: "",
    otherEmploymentType: "",
    paygArrangement: "",
    otherPaygArrangement: "",
    labourMarketTesting: "",
    previousLabourAgreement: "",
    overseasWorkers: "",
    contactPerson: "",
  });

  // Fix for packages that may be imported as an object
  const PhoneInputComponent = PhoneInput?.default || PhoneInput;
  const RecaptchaComponent = ReCAPTCHA?.default || ReCAPTCHA;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check phone number
    if (!phoneNumber.trim()) {
      alert("Please enter phone number");
      return;
    }

    // Check CAPTCHA
    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    setLoading(true);

    const finalPhone = `+${dialCode}${phoneNumber}`;

    const payload = {
      ...formData,
      phone: finalPhone,
      captchaToken: captchaValue,
      source: "Labour Agreement Form",
    };

    try {
      const BASE_URL = "https://growmore-1.vercel.app";

      const response = await fetch(`${BASE_URL}/api/labour`, {
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

      // Reset form
      setFormData({
        labourAgreementApproved: "",
        companyName: "",
        abn: "",
        website: "",
        businessAddress: "",
        totalEmployees: "",
        yearsOfOperation: "",
        turnoverRange: "",
        industryAccreditation: "",
        dama: "",
        jobTitle: "",
        anzscoCode: "",
        employmentType: "",
        otherEmploymentType: "",
        paygArrangement: "",
        otherPaygArrangement: "",
        labourMarketTesting: "",
        previousLabourAgreement: "",
        overseasWorkers: "",
        contactPerson: "",
      });

      setPhoneNumber("");
      setDialCode("61");

      recaptchaRef.current?.reset();

      // Reset native form controls
      e.target.reset();
    } catch (error) {
      console.error("Submission Error:", error);

      alert(
        error.message ||
          "Something went wrong. Please try again later."
      );

      recaptchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#28535B] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Employer-Sponsored Visa Assessment Form
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl shadow-md bg-[#eff9fb]">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Employer Details */}
            <h2 className="text-xl font-medium">
              Employer Details
            </h2>

            {/* Labour Agreement */}
            <div>
              <p className="font-medium">
                Is the business approved under Labour Agreement?
              </p>

              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="labourAgreementApproved"
                      value={item}
                      checked={
                        formData.labourAgreementApproved === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Company Details */}
            {[
              {
                name: "companyName",
                placeholder: "Legal Business Name",
              },
              {
                name: "abn",
                placeholder: "ABN (Australian Business Number)",
              },
              {
                name: "website",
                placeholder: "Company Website",
              },
              {
                name: "businessAddress",
                placeholder: "Business Address",
              },
              {
                name: "totalEmployees",
                placeholder: "Total Employees",
              },
            ].map((field) => (
              <input
                key={field.name}
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6dc7d1]"
                required
              />
            ))}

            {/* Phone */}
            <div>
              <p className="font-medium mb-2">
                Contact Number
              </p>

              <div className="flex flex-col sm:flex-row gap-3">

                {/* Country Code */}
                <div className="w-full sm:w-32">
                  <PhoneInputComponent
                    country="au"
                    enableSearch
                    value={dialCode}
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
                      borderRadius: "6px",
                      border: "1px solid #d1d5db",
                      backgroundColor: "#ffffff",
                      paddingLeft: "48px",
                    }}
                    buttonStyle={{
                      border: "1px solid #d1d5db",
                      borderRadius: "6px 0 0 6px",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </div>

                {/* Phone Number */}
                <input
                  type="tel"
                  placeholder="Contact Number"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value)
                  }
                  className="flex-1 h-[46px] px-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6dc7d1]"
                  required
                />
              </div>
            </div>

            {/* Years of Operation */}
            <div>
              <p className="font-medium">
                Years of Operation:
              </p>

              <div className="flex flex-wrap gap-6 mt-2">
                {[
                  "Less than 1 year",
                  "1–3 years",
                  "4–10 years",
                  "10+ years",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="yearsOfOperation"
                      value={item}
                      checked={
                        formData.yearsOfOperation === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Turnover */}
            <div>
              <p className="font-medium">
                Turnover Range (Annual Business Revenue):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  "Less than AUD 100,000",
                  "AUD 100k - 1M",
                  "AUD 1M - 2M",
                  "AUD 2M - 4M",
                  "AUD 4M - 10M",
                  "AUD 10M - 25M",
                  "AUD 25M+",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="turnoverRange"
                      value={item}
                      checked={
                        formData.turnoverRange === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Accreditation */}
            <div>
              <p className="font-medium">
                Does your company have any relevant industry
                accreditations (e.g., ISO 9001)?
              </p>

              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="industryAccreditation"
                      value={item}
                      checked={
                        formData.industryAccreditation === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* DAMA */}
            <div>
              <p className="font-medium">
                Does the company have any Designated Area
                Migration Agreement (DAMA)?
              </p>

              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="dama"
                      value={item}
                      checked={formData.dama === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <h2 className="text-xl font-medium">
              Job & Position Details
            </h2>

            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6dc7d1]"
              required
            />

            <input
              type="text"
              name="anzscoCode"
              placeholder="6-digit ANZSCO Code"
              value={formData.anzscoCode}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6dc7d1]"
              required
            />

            {/* Employment Type */}
            <div>
              <p className="font-medium">
                What employment contract type are you willing
                to offer?
              </p>

              <div className="flex flex-wrap gap-6 mt-2">
                {["Full-time", "Part-time", "Other"].map(
                  (item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="employmentType"
                        value={item}
                        checked={
                          formData.employmentType === item
                        }
                        onChange={handleChange}
                      />
                      {item}
                    </label>
                  )
                )}
              </div>

              {formData.employmentType === "Other" && (
                <input
                  type="text"
                  name="otherEmploymentType"
                  placeholder="Please specify"
                  value={formData.otherEmploymentType}
                  onChange={handleChange}
                  className="w-full mt-3 border border-gray-200 rounded-md px-3 py-3 bg-white"
                />
              )}
            </div>

            {/* PAYG */}
            <div>
              <p className="font-medium">
                How will the company legally contract workers
                under a PAYG employment arrangement?
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  "Industrial Award",
                  "Enterprise Agreement",
                  "Common Law Contract",
                  "Other",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="paygArrangement"
                      value={item}
                      checked={
                        formData.paygArrangement === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>

              {formData.paygArrangement === "Other" && (
                <input
                  type="text"
                  name="otherPaygArrangement"
                  placeholder="Please specify the name"
                  value={formData.otherPaygArrangement}
                  onChange={handleChange}
                  className="w-full mt-3 border border-gray-200 rounded-md px-3 py-3 bg-white"
                />
              )}
            </div>

            {/* Labour Market Testing */}
            <div>
              <p className="font-medium">
                Has advertising (labour market testing) been
                conducted for this position?
              </p>

              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="labourMarketTesting"
                      value={item}
                      checked={
                        formData.labourMarketTesting === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Sponsorship Information */}
            <h2 className="text-xl font-medium">
              Company & Sponsorship Information
            </h2>

            {/* Previous Labour Agreement */}
            <div>
              <p className="font-medium">
                Has your company previously applied for a
                Labour Agreement?
              </p>

              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="previousLabourAgreement"
                      value={item}
                      checked={
                        formData.previousLabourAgreement === item
                      }
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Overseas Workers */}
            <input
              type="text"
              name="overseasWorkers"
              placeholder="How many overseas Workers are currently working in your company?"
              value={formData.overseasWorkers}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-3 py-3 bg-white"
            />

            {/* Contact Person */}
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person at Business (if Known)"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-3 py-3 bg-white"
            />

            {/* reCAPTCHA */}
            <div className="flex justify-start overflow-x-auto">
              <RecaptchaComponent
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#6dc7d1] px-8 py-3 text-white rounded-full hover:bg-[#28535B] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Checklistlabour;
