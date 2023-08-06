import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

// component imports
import Navbar from "../components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Better Anki",
  description: "Learning a new language has never been so easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-between h-screen ${inter.className}`}
      >
        <Providers>
          {children}
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}
