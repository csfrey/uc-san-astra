import Image from "next/image";
import hero from "@/lib/images/student-life-hero.png";
import logo from "@/lib/images/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className="h-[90vh]"
        style={{
          backgroundImage: `url('${hero.src}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-between p-12 bg-black bg-opacity-25">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" height="30" className="mr-4" />
            <div className="text-white text-3xl">UCSA</div>
          </Link>
          <div className="text-white">
            <div className="text-7xl">University of California</div>
            <div className="text-7xl mb-8">San Astra</div>
            <div className="italic text-3xl">Where Magic Meets Innovation</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-7xl text-center my-12">Your Story. Your UCSA.</div>
        <div className="flex justify-center">
          <div className="w-3/5 text-center text-xl leading-10">
            Welcome to UCSA – A leading institution at the intersection of
            arcane arts and cutting-edge technology. Our mission is to shape the
            innovators of tomorrow through immersive education, groundbreaking
            research, and a vibrant, inclusive community.
          </div>
        </div>
      </div>
    </div>
  );
}
