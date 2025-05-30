import type { Metadata } from "next";
import { inter, hankenGrotesk, geistSans, geistMono } from "@/app/fonts/font";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Dhwani",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full flex flex-col bg-background text-black font-hankenGrotesk antialiased",
          hankenGrotesk.variable,
          inter.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <SessionProvider>
            <div className="w-full relative">
              <Navbar />
            </div>
            <main className=" flex flex-col justify-start items-start max-w-[1512px] w-full mx-auto px-4">
              {children}
            </main>
            <div className="w-full flex justify-center items-center">
              <Footer />
            </div>
            <Toaster />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
