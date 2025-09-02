import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ladliAfricaLogo from "@/public/ladliAfricaLogo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ladli Foundation Africa | Advancing Health & Education",
  description: "Explore Ladli Foundation Africa delivering health, education, WASH, and protection programs empowering women and youth through partnerships with dignity",
  keywords: "Ladli Foundation Africa",
  alternates: {
    canonical: "https://africa.ladlifoundation.org/",
  },
  openGraph: {
    title: "Ladli Foundation Africa | Advancing Health & Education",
    description:
      "Explore Ladli Foundation Africa delivering health, education, WASH, and protection programs empowering women and youth through partnerships with dignity",
    images: {ladliAfricaLogo},
    url: "https://africa.ladlifoundation.org/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
