import Image from "next/image";
import Link from "next/link";
import building from "@/lib/images/building.png";
import logo from "@/lib/images/logo.png";
import studying from "@/lib/images/students-studying.png";

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
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" height="30" className="mr-4" />
            <div className="text-white text-3xl">UCSA</div>
          </Link>
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
        <div className="p-12">
          <div className="text-4xl mb-4">
            Innovative Programs for a Changing World
          </div>
          <div className="text-xl leading-10 text-justify mb-4">
            At UCSA, we offer a wide range of undergraduate, graduate, and
            doctoral programs that fuse arcane knowledge with scientific
            discovery. Our students work with expert faculty in a dynamic,
            collaborative environment designed to spark creativity and push the
            limits of what’s possible. Key areas of study include:
          </div>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">Arcane Engineering</div>
            <div className="text-xl leading-10">
              Arcane Engineering is where magic meets innovation. Students learn
              to design, develop, and implement magical devices and systems that
              shape everyday life in both magical and non-magical societies.
              From enchanted transportation to communication networks and
              technomantic infrastructure, this field focuses on the practical
              applications of magic through a technological lens. Graduates are
              prepared to lead projects that revolutionize industries by merging
              arcane theory with modern engineering principles. Whether it’s
              creating new magical technologies or refining existing systems,
              Arcane Engineering pushes the boundaries of what’s possible in a
              rapidly evolving world.
            </div>
          </article>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">
              Enchanted Business Management
            </div>
            <div className="text-xl leading-10">
              Enchanted Business Management combines the complexities of running
              a business with the unique challenges of working in the magical
              economy. Students in this field learn traditional business
              strategies—finance, marketing, and leadership—while adapting them
              to enchanted goods, arcane services, and magical enterprises.
              Courses cover everything from managing enchanted supply chains to
              negotiating contracts with beings from other planes. Graduates are
              well-prepared to lead businesses that operate in magical markets,
              using both conventional and arcane skills to maximize growth and
              innovation. The program emphasizes ethical management practices in
              a world where magic can create both opportunities and risks.
            </div>
          </article>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">Psionic Studies</div>
            <div className="text-xl leading-10">
              Psionic Studies is dedicated to exploring the hidden potential of
              the mind. Students develop mastery over psychic powers such as
              telepathy, telekinesis, and clairvoyance, while studying the
              mental disciplines necessary to harness these abilities. The
              program delves into the science and philosophy behind psionics,
              blending practical training with theoretical research on how
              mental energy interacts with magic and the physical world. With an
              emphasis on control and responsibility, students learn to apply
              psionics in various fields, from communication to defense. Psionic
              Studies is perfect for those with the rare talent of mental magic,
              helping them unlock the true power of the mind.
            </div>
          </article>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">
              Magical Constructs and Automation
            </div>
            <div className="text-xl leading-10">
              In the field of Magical Constructs and Automation, students learn
              to create and program enchanted beings and devices that perform
              tasks autonomously. Whether building golems, animating objects, or
              designing magical machines, this program emphasizes both the art
              of creation and the science of automation. Coursework covers the
              intricacies of imbuing objects with magic, designing
              self-operating systems, and managing the ethical implications of
              autonomous magical entities. Graduates are equipped to create
              innovative solutions for labor, defense, and everyday life,
              ensuring that magical constructs operate efficiently and safely.
              The future of automation lies in combining magic with engineering
              precision.
            </div>
          </article>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">Planar Physics</div>
            <div className="text-xl leading-10">
              Planar Physics explores the laws that govern the multiverse and
              the interactions between different realms. Students in this
              program study the mechanics of interplanar travel, dimensional
              rifts, and how magical energies behave across planes of existence.
              They learn to analyze and predict phenomena such as time dilation,
              spatial anomalies, and the unique physics that apply to specific
              planes. With a strong foundation in both arcane theory and
              scientific principles, graduates are equipped to work in fields
              ranging from dimensional exploration to arcane defense. Planar
              Physics offers a deeper understanding of the universe and the
              forces that bind it together.
            </div>
          </article>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">
              Transmutation and Material Sciences
            </div>
            <div className="text-xl leading-10">
              Transmutation and Material Sciences focuses on the art of changing
              substances at their most fundamental levels. Students learn to
              transmute materials, altering their form and properties, while
              also studying the magical and scientific principles that govern
              the behavior of matter. The program emphasizes practical
              applications, such as turning lead into gold or modifying the
              composition of magical substances to create new, enchanted
              materials. Research in this field has wide-reaching implications,
              from industrial manufacturing to arcane alchemy. Graduates are
              equipped to push the boundaries of transformation, both for
              practical use and magical discovery.
            </div>
          </article>
          <article className="leading-10 text-justify mb-4">
            <div className="text-3xl text-amber-700">
              Spellcrafting and Wizardry
            </div>
            <div className="text-xl leading-10">
              Spellcrafting and Wizardry is the heart of magical practice at
              UCSA. In this program, students learn the intricate art of
              designing, refining, and casting spells. They study the ancient
              foundations of wizardry while being encouraged to innovate and
              create new spells that push the limits of magic. Courses cover
              everything from basic incantations to complex, multi-layered
              spells, with an emphasis on balancing power, safety, and
              creativity. Graduates emerge as skilled spellcasters and
              innovators, ready to apply their knowledge in various magical
              disciplines. Whether for combat, healing, or research,
              spellcrafting is where magic truly comes to life.
            </div>
          </article>
          <div className="text-xl leading-10 text-justify">
            Our curriculum is designed to foster innovation and critical
            thinking, preparing students for successful careers in a variety of
            magical and technological fields. UCSA’s research partnerships with
            top arcane and technological industries ensure that our students are
            at the forefront of their disciplines.
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
