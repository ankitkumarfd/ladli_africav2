import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//    metadata
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
    images: [
      {
        // url: "https://africa.ladlifoundation.org/ladliAfricaLogo.png",
        // url: "https://africa.ladlifoundation.org/africaLogo.png",
        url: "https://africa.ladlifoundation.org/africaLogoPreview.png",
        width: 100,
        height: 100,
        alt: "Ladli Foundation Africa Logo",
      },
    ],
    url: "https://africa.ladlifoundation.org/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*     GTM Script      */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MD5TN62Z');
          `}
        </Script>
        <GoogleTagManager gtmId="GTM-MD5TN62Z" />
        
        {/*     GA Script      */}
        <Script
          id="gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1E1VJ77Y1T"
        ></Script>
        <GoogleAnalytics gaId="G-1E1VJ77Y1T" />

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*     Google Tag Manager (noscript)     */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MD5TN62Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
