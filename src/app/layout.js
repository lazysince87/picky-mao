import { Sniglet } from "next/font/google";
import Link from 'next/link'; 
import Image from 'next/image';
import "./globals.css";

const sniglet = Sniglet({
  subsets: ["latin"],
  weight: "800"
});

export const metadata = {
  title: "Picky Mao", // Title of the website
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
    { rel: 'icon', url: '/capoo.ico' },
    { rel: 'apple-touch-icon', url: '/capoo.ico' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sniglet.className}>
        {/* Fixed Back to Homepage Button */}
        <div className="fixedButtonContainer">
          <Link href="/">
          <Image 
              src="/homeCatIMG.png"
              alt="Home"
              width={70}
              height={70}
              className="homepageImage"
              />
          </Link>
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
