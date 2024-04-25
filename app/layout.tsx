import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/ThemeContext";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          {children}
          <Toaster position="top-center" />
          <div className="flex items-center justify-center">
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
