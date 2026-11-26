import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { useBlogsData } from "../hooks/useBlogsData";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const BlogStep = () => {
  const { blogs = [], loading, error } = useBlogsData();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.max(1, Math.ceil(blogs.length / blogsPerPage));

  const goToPreviousPage = () => {
    setCurrentPage((page) => (page > 1 ? page - 1 : page));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => (page < totalPages ? page + 1 : page));
  };

  if (loading) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-[200px] w-full max-w-[450px] rounded-3xl bg-slate-100 animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <div className="py-20 text-center text-red-500 font-medium">{error}</div>;
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                 <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full aspect-[18/10] object-cover p-4 sm:p-4 rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#163c3d] mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576]" /> {blog.date}
                </p>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <Link to={`/blogs/${blog.slug}`}>
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
        <div className="mt-12 flex items-center justify-center gap-3">
          {/* PREV */}
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 font-bold ${
              currentPage === 1
                ? "text-blue-400 cursor-not-allowed"
                : "text-cyan-700 hover:text-green-500 cursor-pointer"
            }`}
          >
            <LuArrowLeft className="h-6 w-6" />
          </button>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-[18px] text-slate-400">
            {currentPage} / {totalPages}
          </span>

          {/* NEXT */}
          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 font-bold ${
              currentPage === totalPages
                ? "text-blue-400 cursor-not-allowed"
                : "text-cyan-700 hover:text-green-500 cursor-pointer"
            }`}
          >
            <LuArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogStep;
