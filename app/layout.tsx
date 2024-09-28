import type { Metadata } from "next";
import { Mate } from "next/font/google";
import logo from "@/lib/images/logo.png";
import "./globals.css";
import Image from "next/image";

const font = Mate({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "UC San Astra - Where Magic Meets Innovation",
  description:
    "Welcome to UCSA – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community.",
  openGraph: {
    title: "UC San Astra - Where Magic Meets Innovation",
    description:
      "Welcome to UCSA – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community.",
    images: [{ url: "https://i.imgur.com/oAGIsOH.png" }],
  },
  twitter: {
    title: "UC San Astra - Where Magic Meets Innovation",
    description:
      "Welcome to UCSA – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community.",
    images: [{ url: "https://i.imgur.com/oAGIsOH.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
        <footer className="bg-amber-700 p-8 flex text-white">
          <div className="flex items-center">
            <Image src={logo} alt="logo" height="50" className="mr-4" />
            <div>
              <div className="text-xl">University of California </div>
              <div className="text-5xl">San Astra</div>
            </div>
          </div>
          <div className="mx-16">
            <div className="text-2xl">Visit Us</div>
            <div>UCSA Downtown Campus</div>
            <div>100 College Avenue</div>
            <div>San Astra, CA 42069</div>
          </div>
          <div>
            <div className="text-2xl">Contact Us</div>
            <div>admissions@ucsa.edu</div>
            <div>(555) 123-4567</div>
            <div>Hours: M-F 7:00am - 4:30pm</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
