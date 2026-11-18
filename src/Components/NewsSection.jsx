import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useNewsData } from "../hooks/useNewsData";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const NewsSection = () => {
  const { news: newsData = [], loading, error } = useNewsData();
  const news = Array.isArray(newsData) ? newsData : [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categoryOptions = useMemo(
    () => [...new Set(news.map((blog) => blog.category).filter(Boolean))],
    []
  );

  const subcategoryMap = useMemo(() => {
    return news.reduce((acc, blog) => {
      const category = blog.category;

      if (!category) return acc;

      const subcategories = Array.isArray(blog.subcategory)
        ? blog.subcategory
        : [blog.subcategory];

      const normalizedSubcategories = subcategories.filter(Boolean);

      if (!normalizedSubcategories.length) return acc;

      acc[category] = [...new Set([...(acc[category] || []), ...normalizedSubcategories])];

      return acc;
    }, {});
  }, []);

  const categories = useMemo(
    () => [...new Set([...categoryOptions, ...Object.keys(subcategoryMap)])],
    [categoryOptions, subcategoryMap]
  );

  const availableSubcategories = useMemo(() => {
    if (selectedCategory) {
      return [
        ...new Set([
          ...(subcategoryMap[selectedCategory] || []),
          ...news
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

    return [...new Set([
      ...Object.values(subcategoryMap).flat(),
      ...news
        .flatMap((blog) =>
          Array.isArray(blog.subcategory)
            ? blog.subcategory
            : [blog.subcategory]
        )
        .filter(Boolean),
    ])];
  }, [selectedCategory, subcategoryMap]);

  const filteredBlogs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return news.filter((blog) => {
      const searchableText = `${blog.title} ${blog.category || ""} ${Array.isArray(blog.subcategory)
          ? blog.subcategory.join(" ")
          : blog.subcategory || ""}`.toLowerCase();
      const matchesQuery = !query || searchableText.includes(query);
      const matchesCategory = !selectedCategory || blog.category === selectedCategory;
      const matchesSubcategory =
        !selectedSubcategory ||
        (Array.isArray(blog.subcategory)
          ? blog.subcategory.includes(selectedSubcategory)
          : blog.subcategory === selectedSubcategory);

      return matchesQuery && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory, news]);

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

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedSubcategory("");
    setCurrentPage(1);
  };

  const handleSubcategoryChange = (value) => {
    setSelectedSubcategory(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedSubcategory("");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <section className="bg-white py-20 mb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="xl:h-[242px] h-[200px] w-full max-w-[450px] rounded-2xl bg-slate-100 animate-pulse"
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
    <section className="bg-white py-20 mb-40 lg:mb-[155px] md:mb-40 xl:mb-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
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
        
        {/* BLOG GRID */}
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id || blog.slug}
              className="group relative xl:h-[242px] h-[200px] w-full max-w-[450px] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 aspect-[24/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 mt-[-15px] bottom-0 flex items-end justify-between gap-3 h-[74px] bg-[#FFFFFF33] px-4 pb-3 pt-12 backdrop-blur-[12px]">
                <h3 className="max-w-[280px] text-sm font-semibold leading-5 text-slate-800">
                  {blog.title}
                </h3>
                <Link
                  to={`/news/${blog.slug}/`}
                  aria-label={`Read ${blog.title}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-bold transition-transform duration-300 group-hover:translate-x-1"
                >
                  <LuArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
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

          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-400 text-[18px]">
            {safeCurrentPage} / {totalPages}
          </span>

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

export default NewsSection;