import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ".././globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "../../component/Navbar";
import Footer from "@/component/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Review Expert Blog | Tips & Insights for Job Seekers",
  description: "Explore expert articles, tips, and guides on CV writing, job applications, and career growth. Stay updated with the latest trends and advice from CV Review Expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AppRouterCacheProvider>
          <Navbar/>
            
        {children}
        <Footer/>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
