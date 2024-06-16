import { Poppins, Inter } from "next/font/google";

export const poppins = Poppins({
  weight: ["100","200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const inter = Inter({
  weight: ["300","400","500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter"
});