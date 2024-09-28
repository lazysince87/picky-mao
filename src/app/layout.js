import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Picky Mao", //title of the website
  creator: "Picky Mao",
  keywords: [
    'Picky Mao',
    'Picky mao',
    'picky mao',
    'food finder',
    'restaurant finder',
    'Food Picker',
    'Restaurant Picker',
    'Pick a place to eat',
    'Food Chooser',
  ],
  openGraph: {
    title: 'PICKY MAO',
    description: 'Picky Mao - Food Finder',
  },
  icons: [
    { rel: 'icon', url: '/logotiem.ico' },
    { rel: 'apple-touch-icon', url: '/logotiem.ico' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
