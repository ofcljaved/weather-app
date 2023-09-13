import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Weather 360',
  description: 'Your One-Stop Shop for Reliable Weather Information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid w-screen h-screen`}>
        <div className="grid grid-rows-layout max-w-7xl w-full md:w-4/5 mx-auto mt-4 lg:mt-6 mb-4">
          {children}
        </div>
        <div className="-z-10 relative">
          <Image
            src="/image/space-background.png"
            alt="Space Background with stars"
            fill={true}
          />
        </div>
      </body>
    </html>
  );
}
