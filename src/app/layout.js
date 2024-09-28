import { Coiny } from "next/font/google";
import "./globals.css";

const coiny = Coiny({
  subsets: ["latin"],
  weight: "400"
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
      <body className={coiny.className}>
          <main>
              {children}
          </main>
      </body>
    </html>
  );
}
