import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const fontPrimary = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

const fontSecondary = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-secondary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontPrimary.variable} ${fontSecondary.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
