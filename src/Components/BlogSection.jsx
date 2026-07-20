import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
<<<<<<< HEAD
  {
    id: 1,
    slug: "subclass-202-visa-applicants-australia-introduces-new-csp-allocation-rules",
    title: "Subclass 202 Visa Applicants: Australia Introduces New CSP Allocation Rules",
    metaTitle: "Subclass 202 Visa: New CSP Allocation Rules for 2026–27",
    metaDescription:"Facing Indian PCC delays in Australia? Learn how Home Affairs will assess visa applications and what options are available for affected applicants.",
    date: "July 20, 2026",
    image: `/assets/nb49.png`,
  },
   {
    id: 2,
=======
{
    id: 1,
>>>>>>> 0bed6c55806d4e9bf824fe7a4e22653799c59177
    slug: "worried-about-indian-pcc-delays-in-australia-heres-what-home-affairs-clarified",
    title: "Worried About Indian PCC Delays in Australia? Here's What Home Affairs Clarified",
    metaTitle: "Home Affairs Clarifies Indian PCC Delays in Australia",
    metaDescription:"Facing Indian PCC delays in Australia? Learn how Home Affairs will assess visa applications and what options are available for affected applicants.",
    date: "July 20, 2026",
    image: `/assets/nb48.png`,
<<<<<<< HEAD
  },
 {
    id: 3,
=======
  },  
  {
    id: 2,
>>>>>>> 0bed6c55806d4e9bf824fe7a4e22653799c59177
    slug: "nil-vac-announced-for-rugby-league-world-cup-2026-participants",
    title: "Nil VAC Announced for Rugby League World Cup 2026 Participants",
    metaTitle: "Nil VAC for Rugby League World Cup 2026 Participants",
    metaDescription:"Eligible Rugby League World Cup 2026 participants can apply for a Subclass 408 visa with no Visa Application Charge (VAC) in Australia.",
    date: "July 17, 2026",
    image: `/assets/nb47.png`,
  }, 
<<<<<<< HEAD
=======
  {
    id: 3,
    slug: "applying-for-a-working-holiday-visa-prepare-for-longer-processing-times",
    title: "Applying for a Working Holiday Visa? Prepare for Longer Processing Times",
    metaTitle: "Australia Working Holiday Visa Processing Times Delayed",
    metaDescription:"Australia advises Working Holiday Visa applicants to apply early as Subclass 417 and 462 visa processing times are taking longer than usual.",
    date: "July 17, 2026",
    image: `/assets/nb46.png`,
  },
>>>>>>> 0bed6c55806d4e9bf824fe7a4e22653799c59177
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Subtitle */}
        <p className="text-[#8fd07c] font-semibold text-sm tracking-widest uppercase mb-3">
          Recent Blogs
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
          Latest <span className="text-[#8fd07c] font-semibold">Insights</span>{" "}
          and Immigration <span className="font-semibold">Updates</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#163c3d] mb-6">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576] font-medium" />{" "}
                  {blog.date}
                </p>

                <div className="mt-auto">
                  {/* 2. Wrap the button in a Link using the slug or ID */}
                  <Link to={`/news/${blog.slug}/`}>
                    <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                      <span className="relative">
                        READ MORE
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
