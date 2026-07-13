// src/PageTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem('userId') || 'Guest';
    const pagePath = location.pathname + location.search;

    // CHANGE THIS: Replace with your actual live backend Vercel URL
    const BACKEND_URL = 'https://growmore-1.vercel.app/api/log-view';

    fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pagePath: pagePath,
        userId: userId,
      }),
    }).catch((err) => {
      console.error('Analytics log failed:', err);
    });

  }, [location]);

  return null;
}

export default PageTracker;