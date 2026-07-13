// src/PageTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // 1. Grab your original authenticated user identifier (ID, Email, or Token)
    // Make sure 'userId' matches the exact key your app uses when a user logs in
    const userId = localStorage.getItem('userId'); 
    
    // Captures the route path, including query strings (e.g., "/who-we-are")
    const pagePath = location.pathname + location.search; 

    // 2. Capture the exact frontend timestamp when they landed on the page
    const timestamp = new Date().toISOString();

    const BACKEND_URL = 'https://growmore-1.vercel.app/api/log-view';

    fetch(BACKEND_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pagePath: pagePath,
        userId: userId,     // Transmits the original user ID
        timestamp: timestamp // Transmits the original user click time
      }),
    }).catch((err) => {
      console.error('Analytics log failed:', err);
    });

  }, [location]);

  return null;
}

export default PageTracker;