
import { useState, useEffect } from "react";
import Papa from "papaparse";

const SHEET_URL = import.meta.env.VITE_BLOGS_SHEET_URL;
const CACHE_KEY = "live_blogs_cache_v3";

// Normalize multiple subcategories from Excel / Google Sheets
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

export function useBlogsData() {
  const [blogs, setBlogs] = useState(() => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(
    () => Boolean(SHEET_URL) && !sessionStorage.getItem(CACHE_KEY)
  );

  const [error, setError] = useState(() =>
    SHEET_URL ? null : "Missing VITE_BLOGS_SHEET_URL in .env file"
  );

  useEffect(() => {
    if (!SHEET_URL) return;

    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        console.log("RAW BLOG CSV ROWS FROM GOOGLE SHEET:", results.data);

        const formatted = results.data
          .filter((row) => {
            const getVal = (key) => {
              const foundKey = Object.keys(row).find(
                (k) => k.trim().toLowerCase() === key.toLowerCase()
              );

              return foundKey ? row[foundKey] : "";
            };

            const slug = getVal("slug");
            const title = getVal("title");
            const status = getVal("status") || "published";

            return (
              slug?.trim() &&
              title?.trim() &&
              status.trim().toLowerCase() === "published"
            );
          })
          .map((row) => {
            const getField = (key) => {
              const foundKey = Object.keys(row).find(
                (k) => k.trim().toLowerCase() === key.toLowerCase()
              );

              return foundKey ? row[foundKey] : "";
            };

            const title = getField("title").trim();
            const content = getField("content").trim();

            const rawSubcategory =
              getField("sub category") ||
              getField("subcategory") ||
              getField("subCategory");

            const subcategories = normalizeSubcategories(rawSubcategory);

            if (!content) {
              console.warn(
                `[useBlogsData] Warning: Blog "${title}" has empty content!`
              );
            }

            return {
              id: Number(getField("id")) || 0,
              slug: getField("slug").trim(),
              title,
              category: getField("category").trim(),

              // Multiple subcategories are now stored as an array
              subCategory: subcategories,

              metaTitle: (getField("metaTitle") || title).trim(),
              metaDescription: (getField("metaDescription") || title).trim(),
              date: getField("date").trim(),
              image: getField("image").trim(),
              content,
            };
          })
          .sort((a, b) => b.id - a.id);

        console.log("FORMATTED BLOGS WITH MULTIPLE SUBCATEGORIES:", formatted);

        setBlogs(formatted);

        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify(formatted)
        );

        setError(null);
        setLoading(false);
      },

      error: (err) => {
        console.error("Error fetching Google Sheet:", err);
        setError("Failed to load blog articles.");
        setLoading(false);
      },
    });
  }, []);

  return { blogs, loading, error };
}
