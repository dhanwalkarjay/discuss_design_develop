import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Header } from "./header";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/src/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discuss Design Develop",
  description: "It help's developer's to collaborate, discuss and design their project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <Toaster />
          <NextTopLoader />
          <Header />        
          <div className="container mx-auto"> 
            {children}
          </div> 
        </Providers>
      </body>
    </html>
  );
}
