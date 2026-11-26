import { useState, useEffect } from "react";
import Papa from "papaparse";

const SHEET_URL = import.meta.env.VITE_BLOGS_SHEET_URL;
const CACHE_KEY = "live_blogs_cache_v3";

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
    let isMounted = true;

    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: "greedy",
      transformHeader: (header) => header.trim().toLowerCase(),

      complete: (results) => {
        if (!isMounted) return;

        const formatted = results.data
          .filter((row) => {
            const slug = row.slug?.trim();
            const title = row.title?.trim();
            const status = (row.status || "published").trim().toLowerCase();
            return Boolean(slug && title && status === "published");
          })
          .map((row) => {
            const title = row.title.trim();
            const content = (row.content || "").trim();
            const rawSubcategory = row["sub category"] || row.subcategory || "";

            if (!content) {
              console.warn(`[useBlogsData] Warning: Blog "${title}" has empty content!`);
            }

            return {
              id: Number(row.id) || 0,
              slug: row.slug.trim(),
              title,
              category: (row.category || "").trim(),
              subCategory: normalizeSubcategories(rawSubcategory),
              metaTitle: (row.metatitle || title).trim(),
              metaDescription: (row.metadescription || title).trim(),
              date: (row.date || "").trim(),
              image: (row.image || "").trim(),
              content,
            };
          })
          .sort((a, b) => b.id - a.id);

        setBlogs(formatted);

        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(formatted));
        } catch (storageErr) {
          console.warn("[useBlogsData] Failed to cache blogs in sessionStorage:", storageErr);
        }

        setError(null);
        setLoading(false);
      },

      error: (err) => {
        if (!isMounted) return;
        console.error("Error fetching Google Sheet:", err);
        setError("Failed to load blog articles.");
        setLoading(false);
      },
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { blogs, loading, error };
}