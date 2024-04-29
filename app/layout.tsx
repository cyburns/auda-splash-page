import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeContextProvider from "@/context/ThemeContext";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auda",
  description: "Share and discover music with your friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <ThemeContextProvider>
          {children}
          <Toaster position="top-center" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
