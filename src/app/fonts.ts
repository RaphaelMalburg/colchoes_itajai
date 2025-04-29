import { Montserrat, Poppins, Quicksand } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200","400","700","900"],
  variable: "--font-montserrat"
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","700","900"],
  variable: "--font-poppins"
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300","400","700"],
  variable: "--font-quicksand"
});
