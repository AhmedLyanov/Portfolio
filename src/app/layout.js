import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: 'DevAhmed - Frontend Developer',
    template: '%s | DevAhmed'
  },
  description: 'Frontend разработчик, создающий современные веб-приложения с React и Next.js',
  keywords: ['frontend', 'react', 'next.js', 'разработчик', 'портфолио'],
  authors: [{ name: 'Ahmed' }],
  openGraph: {
    title: 'DevAhmed - Frontend Developer',
    description: 'Портфолио фронтенд разработчика',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}