import { Geist, Geist_Mono } from "next/font/google";
import "../.././globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



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
                  <Navbar></Navbar>
          
            
        {children}
        <Footer/>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
