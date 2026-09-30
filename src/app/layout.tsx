import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://bootcamp.codemantix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Codemantix Bootcamp - Career Skills Bootcamp",
  description:
    "14 weeks intensive practical mentorship for beginners and intermediates. Learn Web Development, UI/UX Design, Graphic Design, or Data Analytics.",
  openGraph: {
    title: "Codemantix Career Skills Bootcamp",
    description:
      "14 weeks intensive practical mentorship for beginners and intermediates. Web Development, UI/UX Design, Graphic Design, and Data Analytics.",
    url: "/",
    siteName: "Codemantix Collective",
    images: [
      {
        url: "/og-image.jpg",
        width: 819,
        height: 1024,
        alt: "Codemantix Career Skills Bootcamp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codemantix Career Skills Bootcamp",
    description:
      "14 weeks intensive practical mentorship for beginners and intermediates. Web Development, UI/UX Design, Graphic Design, and Data Analytics.",
    images: ["/og-image.jpg"],
    creator: "@codemantix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-[family-name:var(--font-inter)]"
      >
        {children}
      </body>
    </html>
  );
}
