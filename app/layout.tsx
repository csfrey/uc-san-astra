import { Mate } from "next/font/google";
import logo from "@/lib/images/logo.png";
import "./globals.css";
import Image from "next/image";

const font = Mate({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

// export const metadata: Metadata = {
//   title: "UC San Astra - Where Magic Meets Innovation",
//   description:
//     "Welcome to UCSA – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community.",
//   openGraph: {
//     title: "UC San Astra - Where Magic Meets Innovation",
//     description:
//       "Welcome to UCSA – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community.",
//     images: [{ url: "https://i.imgur.com/oAGIsOH.png" }],
//   },
//   twitter: {
//     title: "UC San Astra - Where Magic Meets Innovation",
//     description:
//       "Welcome to UCSA – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community.",
//     images: [{ url: "https://i.imgur.com/oAGIsOH.png" }],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>UCSA - Where Magic Meets Innovation</title>
        <meta name="title" content="UCSA - Where Magic Meets Innovation" />
        <meta
          name="description"
          content="Welcome to the University of California, San Astra – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ucsa.vercel.app/" />
        <meta
          property="og:title"
          content="UCSA - Where Magic Meets Innovation"
        />
        <meta
          property="og:description"
          content="Welcome to the University of California, San Astra – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community."
        />
        <meta property="og:image" content="https://i.imgur.com/oAGIsOH.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ucsa.vercel.app/" />
        <meta
          property="twitter:title"
          content="UCSA - Where Magic Meets Innovation"
        />
        <meta
          property="twitter:description"
          content="Welcome to the University of California, San Astra – A leading institution at the intersection of arcane arts and cutting-edge technology. Our mission is to shape the innovators of tomorrow through immersive education, groundbreaking research, and a vibrant, inclusive community."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/oAGIsOH.png"
        />
      </head>
      <body
        className={`${font.className} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
        <footer className="bg-amber-700 p-8 flex justify-between items-center text-white">
          <div className="flex">
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
          </div>
          <p className="w-1/3 pl-16 text-[11px]">
            This is a work of fiction. Unless otherwise indicated, all the
            names, characters, businesses, places, events and incidents in this
            website are either the product of the author’s imagination or used
            in a fictitious manner. The University of California, San Astra
            (UCSA) is a fictional institution created for a Dungeons & Dragons
            game and does not exist in reality. Any references to this
            university are for creative and entertainment purposes only. This
            content is protected under fair use for the purposes of parody,
            commentary, and creative expression.
          </p>
        </footer>
      </body>
    </html>
  );
}
