import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { AppProvider } from "@/context/store";

// assets & Imports
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import metaImage from "@/assets/images/meta-image-nawar-alsafadi-website.jpg";
import { Header, Footer, Intro, SmoothScroll } from "@/components";
import favicon from "@/public/favicon.ico";
import MobileNav from "@/components/ui/MobileNav";
const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawar Alsafadi • Developer & Designer Freelance",
  description:
    "transform your ideas into reality, creating innovative solutions that make a positive impact on the world and improve lives © code by Nawar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract the URL from the StaticImageData object
  const metaImageUrl = (metaImage as StaticImageData).src;
  const faviconUrl = (favicon as StaticImageData).src;

  const metaTitle = "Nawar Alsafadi • Developer & Designer Freelance";
  const metaDescription =
    "transform your ideas into reality, creating innovative solutions that make a positive impact on the world and improve lives © code by Nawar";

  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:site_name" content="Nawar Alsfadi" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google" content="notranslate" />
        <meta property="og:locale" content="en" />
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className={` antialiased ${dmSans.className} ${inter.className}`}>
        <AppProvider>
          <SmoothScroll />
          <Intro />
          <Header />
          <MobileNav />
          <main className="">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
