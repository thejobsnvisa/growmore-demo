import { useState, useMemo } from "react";
import { FaCalendar } from "react-icons/fa";
import { useBlogsData } from "../hooks/useBlogsData";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const BlogStep = () => {
  const { blogs = [], loading, error } = useBlogsData();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedSubcategory("");
    setCurrentPage(1);
  };

  const handleSubcategoryChange = (value) => {
    setSelectedSubcategory(value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedSubcategory("");
    setCurrentPage(1);
  };

  // Build filter options from the blog data.
  const categories = [
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ];

  // Get subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory) {
      return [
        ...new Set([
          ...blogs
            .filter((blog) => blog.category === selectedCategory)
            .flatMap((blog) =>
              Array.isArray(blog.subcategory)
                ? blog.subcategory
                : [blog.subcategory]
            )
            .filter(Boolean),
        ]),
      ];
    }

    return [
      ...new Set([
        ...blogs
          .flatMap((blog) =>
            Array.isArray(blog.subcategory)
              ? blog.subcategory
              : [blog.subcategory]
          )
          .filter(Boolean),
      ]),
    ];
  }, [selectedCategory]);

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return blogs.filter((blog) => {
      const searchableText = `
        ${blog.title}
        ${blog.category || ""}
        ${Array.isArray(blog.subcategory)
          ? blog.subcategory.join(" ")
          : blog.subcategory || ""}
      `.toLowerCase();

      const matchesQuery = !query || searchableText.includes(query);
      const matchesCategory =
        !selectedCategory || blog.category === selectedCategory;
      const matchesSubcategory =
        !selectedSubcategory ||
        (Array.isArray(blog.subcategory)
          ? blog.subcategory.includes(selectedSubcategory)
          : blog.subcategory === selectedSubcategory);

      return matchesQuery && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const blogsPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const indexOfLastBlog = safeCurrentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
           {/* =========================
            RESPONSIVE FILTER SECTION
        ========================== */}
        <div className="mb-8 flex w-full flex-col items-center gap-3">
          <div className="flex w-full max-w-[900px] flex-col gap-3">

            {/* Search */}
            <label
              className="flex w-full flex-col gap-2 text-sm font-medium text-[#163c3d]"
            >
              <span className="sr-only">Search</span>

              <div className="relative w-full">
                <CiSearch
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    handleSearchChange(event.target.value)
                  }
                  placeholder="Search"
                  className="
                    h-11 w-full rounded-lg border border-gray-300
                    bg-white pl-11 pr-4 text-sm font-normal text-gray-700
                    outline-none transition-all duration-200
                    placeholder:text-gray-400 focus:border-[#6dc7d1]
                    focus:ring-2 focus:ring-[#6dc7d1]/20
                  "
                />
              </div>
            </label>

             <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                {/* Category */}
            <select
              aria-label="Category"
              className="
                h-11 w-full min-w-0
                sm:w-auto sm:flex-1
                rounded-lg
                border border-gray-300
                bg-white
                px-4
                text-sm font-normal
                text-gray-700
                outline-none
                transition-all
                duration-200
                focus:border-[#6dc7d1]
                focus:ring-2
                focus:ring-[#6dc7d1]/20
              "
                value={selectedCategory}
                onChange={(event) =>
                  handleCategoryChange(event.target.value)
                }
              >
                <option value="">
                  Category
                </option>

                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
            </select>

            {/* Subcategory */}
            {availableSubcategories.length > 0 && (
              <select
                aria-label="Subcategory"
                className="
                  h-11 w-full min-w-0
                  sm:w-auto sm:flex-1
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-4
                  text-sm font-normal
                  text-gray-700
                  outline-none
                  transition-all
                  duration-200
                  focus:border-[#6dc7d1]
                  focus:ring-2
                  focus:ring-[#6dc7d1]/20
                "
                  value={selectedSubcategory}
                  onChange={(event) =>
                    handleSubcategoryChange(
                      event.target.value
                    )
                  }
                >
                  <option value="">
                    Subcategory
                  </option>

                  {availableSubcategories.map(
                    (subcategory) => (
                      <option
                        key={subcategory}
                        value={subcategory}
                      >
                        {subcategory}
                      </option>
                    )
                  )}
              </select>
            )}


          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e8eef5] px-4 text-sm font-medium text-[#163c3d] transition-colors hover:bg-[#dce6ef] sm:w-auto"
          >
            <VscRefresh className="h-4 w-4" />
            <span>Reset filters</span>
          </button>
             </div>
           </div>
        </div>

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
            disabled={safeCurrentPage === 1}
            aria-label="Previous page"
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 font-bold ${
              safeCurrentPage === 1
                ? "text-blue-400 cursor-not-allowed"
                : "text-cyan-700 hover:text-green-500 cursor-pointer"
            }`}
          >
            <LuArrowLeft className="h-6 w-6" />
          </button>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-[18px] text-slate-400">
            {safeCurrentPage} / {totalPages}
          </span>

          {/* NEXT */}
          <button
            type="button"
            onClick={goToNextPage}
            disabled={safeCurrentPage === totalPages}
            aria-label="Next page"
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 font-bold ${
              safeCurrentPage === totalPages
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
