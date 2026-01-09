import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import FontLoader from "./components/FontLoader";
import CookieBanner from "./components/CookieBanner";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AAKAR Interior | Premium Interior Design Services in India",
  description: "Transform your house into the home you've always imagined. AAKAR Interior Design offers premium interior design services across Delhi, Agra, and Mathura. Trusted by 5000+ families across India.",
  keywords: [
    "interior design",
    "home interior design",
    "interior designer",
    "residential interior design",
    "commercial interior design",
    "interior design Delhi",
    "interior design Agra",
    "interior design Mathura",
    "home renovation",
    "modular interiors",
    "AAKAR Interior",
    "interior design India",
  ],
  authors: [{ name: "AAKAR Interior" }],
  creator: "AAKAR Interior",
  publisher: "AAKAR Interior",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aakarinterior.in",
    title: "AAKAR Interior | Premium Interior Design Services",
    description: "Transform your house into the home you've always imagined. Trusted by 5000+ families across India.",
    siteName: "AAKAR Interior Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAKAR Interior Design | Premium Interior Design Services",
    description: "Transform your house into the home you've always imagined. Trusted by 5000+ families across India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification code if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <FontLoader />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
