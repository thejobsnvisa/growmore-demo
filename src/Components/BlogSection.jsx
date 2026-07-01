import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
<<<<<<< HEAD
  {
=======
{
>>>>>>> e85be7e01508b92476ee102ec1b99aa70925e838
    id: 1,
    slug: "australia-visa-application-fees-increase-from-1-july-2026",
    title: "Australia Visa Application Fees Increase From 1 July 2026",
    metaTitle: "Australia Visa Application Fees Increase From 1 July 2026",
    metaDescription:"Australia visa application fees have increased from 1 July 2026. Check the latest charges for Australia PR, skilled, partner, employer-sponsored and visitor visas.",
    date: "July  1, 2026",
    image: `/assets/nb29.png`,
  }, 
  
  {
    id: 2,
    slug: "can-you-work-in-australia-without-sponsorship-a-real-option-explained",
    title: "Can You Work in Australia Without Sponsorship? A Real Option Explained",
    metaTitle:"Subclass 400 Visa: No English Test or Sponsorship Required",
    metaDescription:"Discover who can apply for Australia's Subclass 400 Visa. Learn about eligibility, duration, documents, application process, and English test requirements.",
    date: "Jun 30, 2026",
    image: `/assets/bg82.png`,
  },   
  {
<<<<<<< HEAD
=======
    id: 2,
    slug: "what-is-the-western-australia-dama-and-how-does-it-work",
    title: "What Is the Western Australia DAMA and How Does It Work?",
    metaTitle:"What Is the Western Australia DAMA and How Does It Work?",
    metaDescription:"What is the Western Australia DAMA? Learn about eligibility, employer sponsorship, occupation lists, concessions, and visa pathways.",
    date: "Jun 27, 2026",
    image: `/assets/bg81.png`,
  },  
  {
>>>>>>> e85be7e01508b92476ee102ec1b99aa70925e838
    id: 3,
    slug: "how-to-get-an-australia-pr-after-study-a-complete-guide",
    title: "How to Get an Australia PR After Study: A Complete Guide",
    metaTitle:"How to Get Australia PR After Study: Complete Guide",
    metaDescription:"Learn the main Australia PR pathways after study, including employer-sponsored visas, skilled migration, and partner visa options.",
    date: "Jun 26, 2026",
    image: `/assets/bg80.png`,
  }, 
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
                  <Link to={`/blogs/${blog.slug}/`}>
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
