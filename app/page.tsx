import Image from "next/image";
import hero from "@/lib/images/student-life-hero.png";
import logo from "@/lib/images/logo.png";
import map from "@/lib/images/san-astra-map.png";
import arial from "@/lib/images/campus-arial.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header
        className="h-[90vh]"
        style={{
          backgroundImage: `url('${hero.src}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-between p-12 bg-black bg-opacity-25">
          <div>
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" height="30" className="mr-4" />
              <div className="text-white text-3xl">UCSA</div>
            </Link>
          </div>
          <div className="text-white">
            <div className="text-7xl">University of California</div>
            <div className="text-7xl mb-8">San Astra</div>
            <div className="italic text-3xl">Where Magic Meets Innovation</div>
          </div>
        </div>
      </header>
      <section className="mb-12">
        <div className="text-7xl text-center my-12">Your Story. Your UCSA.</div>
        <div className="flex justify-center">
          <div className="w-3/5 text-center text-xl leading-10">
            Welcome to UCSA – A leading institution at the intersection of
            arcane arts and cutting-edge technology. Our mission is to shape the
            innovators of tomorrow through immersive education, groundbreaking
            research, and a vibrant, inclusive community.
          </div>
        </div>
      </section>
      <section className="flex justify-between mb-12">
        <Image src={arial} alt="san astra map" className="w-[48%]" />
        <div className="w-[48%] flex flex-col justify-evenly pr-12">
          <div className="text-6xl ">
            Magic. Technology. Innovation. All in One Place.
          </div>
          <div className="text-xl leading-10">
            Located in the heart of the arcane metropolis of San Astra, UCSA
            fosters an innovative environment where students and faculty work
            together to explore the boundaries of science, magic, and
            engineering.
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <Button size="lg" className="bg-amber-700 text-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
