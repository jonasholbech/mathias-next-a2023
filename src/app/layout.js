import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Søde vovser",
  description: "Generated by Jonas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
