// src/PageTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BACKEND_URL = 'https://growmore-1.vercel.app/api/log-view';

export const trackWidgetEvent = async (actionDescription = "Page View") => {
  const userId = localStorage.getItem('userId'); 
  const pagePath = window.location.pathname + window.location.search; 
  const timestamp = new Date().toISOString();

  const payload = {
    pagePath: pagePath,
    userId: userId, 
    timestamp: timestamp,
    action: actionDescription
  };

  // ADD THIS LOCAL PRINT OUT TO CONFIRM PAYLOAD COMPLETENESS
  console.log("📊 Prepared Payload for DB Log:", payload);

  try {
    await fetch(BACKEND_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Analytics log failed:', err);
  }
};

// EXPOSE TO THE WINDOW OBJECT FOR EXTERNAL SCRIPTS
if (typeof window !== "undefined") {
  window.trackWidgetEvent = trackWidgetEvent;
}

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackWidgetEvent("Page View");
  }, [location]);

  return null;
}

export default PageTracker;