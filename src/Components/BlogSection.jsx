import { useEffect, useState } from "react";
import Papa from "papaparse";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SHEET_URL = import.meta.env.VITE_NEWS_SHEET_URL;
const CACHE_KEY = "live_news_cache_v3";

const normalizeSubcategories = (value) => {
  if (!value) return [];

  return [
    ...new Set(
      String(value)
        .split(/[,;\n]/)
        .map((item) => item.trim())
        .filter(Boolean)
    ),
  ];
};

const getCachedNews = () => {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : [];
  } catch {
    return [];
  }
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState(getCachedNews);
  const [loading, setLoading] = useState(
    () => Boolean(SHEET_URL) && getCachedNews().length === 0
  );
  const [error, setError] = useState(() =>
    SHEET_URL ? null : "Missing VITE_NEWS_SHEET_URL in .env file"
  );

  useEffect(() => {
    if (!SHEET_URL) return;

    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const getField = (row, key) => {
          const foundKey = Object.keys(row).find(
            (column) => column.trim().toLowerCase() === key.toLowerCase()
          );
          return foundKey ? row[foundKey] : "";
        };

        const latestBlogs = results.data
          .filter((row) => {
            const slug = getField(row, "slug");
            const title = getField(row, "title");
            const status = getField(row, "status") || "published";

            return (
              slug.trim() &&
              title.trim() &&
              status.trim().toLowerCase() === "published"
            );
          })
          .map((row) => {
            const title = getField(row, "title").trim();
            const rawSubcategory =
              getField(row, "sub category") ||
              getField(row, "subcategory") ||
              getField(row, "subCategory");

            return {
              id: Number(getField(row, "id")) || 0,
              slug: getField(row, "slug").trim(),
              title,
              category: getField(row, "category").trim(),
              subCategory: normalizeSubcategories(rawSubcategory),
              metaTitle: (getField(row, "metaTitle") || title).trim(),
              metaDescription: (getField(row, "metaDescription") || title).trim(),
              date: getField(row, "date").trim(),
              image: getField(row, "image").trim(),
              content: getField(row, "content").trim(),
            };
          })
          .sort((a, b) => b.id - a.id)
          .slice(0, 3);

        setBlogs(latestBlogs);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(latestBlogs));
        } catch {
          // Continue without caching if session storage is unavailable.
        }
        setError(null);
        setLoading(false);
      },
      error: () => {
        setError("Failed to load news articles.");
        setLoading(false);
      },
    });
  }, []);

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
        {loading && <p className="text-gray-500">Loading latest articles...</p>}
        {error && <p className="text-gray-500">{error}</p>}
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
