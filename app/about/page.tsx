import Image from "next/image";
import Link from "next/link";
import building from "@/lib/images/building.png";
import logo from "@/lib/images/logo.png";
import studying from "@/lib/images/students-studying.png";
import elfgirl from "@/lib/images/elf-girl.png";

const About = () => {
  return (
    <>
      <div
        className="h-[90vh]"
        style={{
          backgroundImage: `url('${building.src}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-between p-12 bg-black bg-opacity-25">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" height="30" className="mr-4" />
              <div className="text-white text-3xl">UCSA</div>
            </Link>
            <div className="text-white space-x-12">
              <Link
                href="/about"
                className="p-4 rounded hover:bg-black hover:bg-opacity-20"
              >
                About
              </Link>
              <Link
                href="/programs"
                className="p-4 rounded hover:bg-black hover:bg-opacity-20"
              >
                Programs
              </Link>
            </div>
          </div>
          <div className="text-white">
            <div className="text-7xl">Shaping the Leaders</div>
            <div className="text-7xl mb-8">of Tomorrow</div>
          </div>
        </div>
      </div>
      <section className="mb-12">
        <div className="my-12 text-7xl text-center">About Us</div>
        <div className="flex justify-center">
          <div className="flex flex-col w-[75%] text-xl leading-10 text-justify">
            <p>
              The University of California, San Astra is a world-renowned
              institution that seamlessly blends magic with technology. Located
              in the heart of the arcane metropolis of San Astra, UCSA fosters
              an innovative environment where students and faculty work together
              to explore the boundaries of science, magic, and engineering.
            </p>
            <p className="my-4">
              Founded on the principles of discovery, creativity, and
              collaboration, UCSA is home to one of the most diverse academic
              communities in the multiverse. With access to state-of-the-art
              facilities and cutting-edge research opportunities, students are
              encouraged to challenge conventions and pioneer new solutions to
              the world’s most complex problems.
            </p>
            <p>
              Our unique Planar Exchange Program brings students from across
              dimensions to study at UCSA, creating a thriving environment of
              cross-cultural exchange. Whether you’re mastering the mysteries of
              the arcane or developing the latest technological marvels, UCSA is
              where your journey begins.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <Image
          src={studying}
          alt="students studying"
          className="bg-cover w-full"
        />
      </section>
      <section className="mb-12">
        <div className="text-7xl text-center mb-4">Planar Exchange Program</div>
        <div className="text-3xl text-center text-amber-700 mb-4">
          Expand Your Horizons Beyond Planes
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-[75%] text-xl leading-10 text-justify">
            <p className="text-xl leading-10 text-justify mb-4">
              The Planar Exchange Program is one of UCSA’s flagship initiatives,
              inviting students from realms beyond the Material Plane to study
              at our prestigious university. With connections to various
              dimensions—including the Feywild, Shadowfell, and more—students
              engage in a rich, cross-planar learning experience that expands
              their understanding of both magic and technology.
            </p>
            <p className="text-xl leading-10 text-justify mb-4">
              Planar Exchange students are fully integrated into UCSA’s academic
              and social life, and our program offers a range of support
              services to help them adjust to life on the Material Plane. The
              friendships and partnerships formed here transcend borders,
              creating lifelong connections that span dimensions.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12 w-3/4 mx-auto">
        <div className="text-7xl mb-4 text-center">Campus Life</div>
        <div className="text-3xl mb-4 text-amber-700 text-center">
          A Thriving Magical Metropolis
        </div>
        <Image
          src={elfgirl}
          alt="elf girl"
          className="float-right ml-12 mb-8 w-2/5"
        />
        <p className="mb-4 text-xl text-justify leading-10">
          UCSA offers a dynamic, inclusive campus life in the heart of San
          Astra. Our students come from all realms of life, creating a vibrant
          community filled with diverse perspectives and ideas. Whether you’re
          exploring the city’s renowned arcane markets, attending a lecture in
          one of our historic halls, or relaxing in Runefield Stadium after a
          game of Mageball, there’s always something happening at UCSA.
        </p>

        <p className="mb-4 text-xl text-justify leading-10">
          <strong>Clubs and Organizations:</strong> From arcane dueling clubs to
          technomancy societies, our student organizations allow you to explore
          your passions outside the classroom.
        </p>
        <p className="mb-4 text-xl text-justify leading-10">
          <strong>Student Housing:</strong> UCSA offers modern, comfortable
          housing options for students, many with enchanting views of the arcane
          cityscape of San Astra. We also offer accommodations for planar
          exchange students to ensure a smooth transition to life on the
          Material Plane.
        </p>
      </section>
      <section className="mb-12">
        <div className="text-7xl text-center mb-4">Admissions</div>
        <div className="text-3xl text-center text-amber-700 mb-4">
          Join the Leaders of Tomorrow
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-[75%] text-xl leading-10 text-justify">
            <p className="text-xl leading-10 text-justify mb-4">
              At UCSA, we seek students who are curious, innovative, and driven
              by a passion for discovery. Whether you’re an aspiring arcane
              engineer, a technomancer, or a planar exchange student, we offer
              programs that challenge you to reach your highest potential.
            </p>
            <p className="text-xl leading-10 text-justify mb-4">
              Apply Today: Our admissions process is designed to help us get to
              know you beyond your grades and test scores. We look for students
              with diverse talents, perspectives, and backgrounds who can
              contribute to the vibrant community here at UCSA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
