import React from "react";
import "./globals.css";
// import "../styles/Home.module.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import Analytics from "../components/Analytics";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Imaiger: Best Online Platform to Generate AI Images for Website",
  description:
    "Try out the best AI generated image tool for websites. Analyse and generate images with cutting edge artificial intelligence technology.",
};

// function MyApp({ Component, pageProps }: AppProps) {
//   React.useEffect(() => {
//     const start = () => NProgress.start();
//     const end = () => NProgress.done();

//     Router.events.on("routeChangeStart", start);
//     Router.events.on("routeChangeComplete", end);
//     Router.events.on("routeChangeError", end);

//     return () => {
//       Router.events.off("routeChangeStart", start);
//       Router.events.off("routeChangeComplete", end);
//       Router.events.off("routeChangeError", end);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.classList?.remove("loading");
//   }, []);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
    //   >
    //     {children}
    //     <CookieConsent open={true} />
    //     <Analytics />
    //   </body>
    // </html>

    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Toaster />
          <Analytics />
          <CookieConsent open={true} />
        </Providers>
      </body>
    </html>
  );
}
