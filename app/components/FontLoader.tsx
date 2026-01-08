"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    // Check if link already exists
    const existingLink = document.querySelector('link[href*="Google+Sans"]');
    if (existingLink) return;

    // Add preconnect for Google Fonts
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    // Add Google Sans font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return null;
}

