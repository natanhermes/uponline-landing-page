import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Stick_No_Bills } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });
const stickNoBills = Stick_No_Bills({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "UP Online",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-[#1C1B2B] flex items-center justify-center ${inter.className} ${plusJakartaSans.className} ${stickNoBills.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
