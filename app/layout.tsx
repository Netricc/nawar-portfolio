import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { AppProvider } from "@/context/store";

// Assets & Imports
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import metaImage from "@/assets/images/meta-image-nawar-alsafadi-website.jpg";
import { Header, Footer, Intro, SmoothScroll } from "@/components";
import favicon from "@/public/favicon.ico";
import MobileNav from "@/components/ui/MobileNav";

const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const PRODUCTION_URL = "https://nawar-portfolio.vercel.app";
const metaImageUrl = `${PRODUCTION_URL}${(metaImage as StaticImageData).src}`;
const faviconUrl = (favicon as StaticImageData).src;

export const metadata: Metadata = {
  title: "Nawar Alsafadi • Developer & Designer Freelance",
  description:
    "Transform your ideas into reality with innovative solutions that make a positive impact © Code by Nawar",

  metadataBase: new URL(PRODUCTION_URL),
  alternates: {
    canonical: PRODUCTION_URL,
  },
  keywords: [
    "freelance developer",
    "web designer",
    "portfolio",
    "Next.js developer",
    "Nawar Alsafadi",
    "Nawar",
    "Alsafadi",
    "Front-End Developer",
    "Netric Master",
    "Netric",
    "React developer",
    "Nawar React developer",
    "Nawar Ui/Ux designer",
    "Nawar Front end developer",
    "Nawar Alsafadi • Developer & Designer Freelance",
  ],
  openGraph: {
    type: "website",
    url: PRODUCTION_URL,
    title: "Nawar Alsafadi • Developer & Designer Freelance",
    description:
      "Transform your ideas into reality with innovative solutions © Code by Nawar",
    siteName: "Nawar Alsafadi Portfolio",
    images: [
      {
        url: metaImageUrl,
        width: 1200,
        height: 630,
        alt: "Nawar Alsafadi Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawar Alsafadi • Developer & Designer Freelance",
    description:
      "Transform your ideas into reality with innovative solutions © Code by Nawar",
    images: [metaImageUrl],
    creator: "@netricMaster",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: faviconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${dmSans.className} ${inter.className}`}>
        <AppProvider>
          <SmoothScroll />
          <Intro />
          <Header />
          <MobileNav />
          <main className="">{children}</main>
          <Footer />
        </AppProvider>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nawar Alsafadi",
            jobTitle: "Freelance Developer & Designer",
            url: "https://nawar-portfolio.vercel.app",
            image: "https://nawar-portfolio.vercel.app/path-to-your-image.jpg",
            sameAs: [
              "https://linkedin.com/in/yourprofile",
              "https://github.com/yourusername",
            ],
            description:
              "Freelance developer specializing in Next.js and modern web design.",
          })}
        </script>
      </body>
    </html>
  );
}
