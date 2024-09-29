import { Sniglet } from "next/font/google";
import Link from 'next/link'; 
import Image from 'next/image';
import "./globals.css";


const snigletBold = Sniglet({
  subsets: ["latin"],
  weight: "800", // Bold weight
});

const snigletRegular = Sniglet({
  subsets: ["latin"],
  weight: "400", // Regular weight
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
      <body className={`${snigletBold.className} ${snigletRegular.className}`}>
        {/* Fixed Back to Homepage Button */}
        <div className="fixedButtonContainer">
          <Link href="/">
            <div className="imageWrapper">
              <Image 
                  src="/homeCatIMG.png"
                  alt="Home"
                  width={70}
                  height={70}
                  className="homepageImage"
                />
                <Image
                  src="/homeCatHover.png"
                  alt="Home"
                  width={90}
                  height={90}
                  className="hoverImage"
                  />
            </div>
          </Link>
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
