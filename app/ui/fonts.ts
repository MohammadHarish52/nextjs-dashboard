import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["600", "700"],
});
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
