import Head from "next/head";
import Footer from "~/components/Footer";
import Logo from "~/components/Logo";
import Navbar from "~/components/Navbar";
import { StickyScroll } from "~/components/ui/sticky-scroll-reveal";

export default function About() {
  return (
    <>
      <Head>
        <title>Niuvaka Trust - About</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <section className="mt-52 bg-gradient-to-b from-coffee-50 via-coffee-50 to-[#E7E4DE]">
          <div className="container relative mx-auto h-[600px] max-w-screen-2xl p-0">
            <img
              src="/hero2.png"
              alt="hero"
              className="size-full object-cover"
            />
            <span className="absolute bottom-20 left-14 text-8xl font-bold text-white">
              About Us
            </span>
          </div>
        </section>

        <div className="relative bg-[#E7E4DE]">
          <div className="flex flex-col gap-8">
            <section className="container mx-auto p-8">
              <h2
                id="who-are-we"
                className="mb-8 text-7xl font-semibold text-coffee-400"
              >
                Who is Niuvaka Trust?
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <p className="col-span-1 text-3xl md:col-span-2">
                  The Niuvaka journey started in August 2020, and is the coming
                  together of prominent Pasifika innovators, both locally and
                  from across Aotearoa, to cultivate a culture of positive
                  change and transformation for <b>Pasifika Communities</b>.
                </p>
                <div className="col-span-1 row-span-2">
                  <Logo className="h-max w-full" />
                </div>

                <div className="col-span-1 space-y-8 md:col-span-2">
                  <h3 className="text-6xl font-semibold text-coffee-400">
                    Our Name
                  </h3>
                  <p className="text-2xl">
                    The name <b>NIUVAKA</b> is the result of intertwining two of
                    the most valuable commodities in <b>Pasifika</b> history.
                    <br />
                    <br />
                    <b>NIU</b> is the universal word for coconut amongst the
                    Pacific Islands. Also known as the{" "}
                    <b>&quot;Tree of Life&quot;</b>, every part of the tree is
                    utilised for one&apos;s survival and continued existence:
                    the fruit for eating, husks for fuelling fires, fronds for
                    making multi-use baskets and the trunk for building houses
                    or infrastructure such as bridges across streams. In modern
                    times, coconuts also drive economic growth in most Pacific
                    Island countries.
                    <br />
                    <br />
                    <b>VAKA</b> is a double-hulled canoe that was used by our
                    ancestors more than a thousand years ago to navigate the
                    ocean on a voyage of discovery.
                  </p>
                </div>
                <p className="col-span-full text-2xl">
                  The coining of these two words signifies the importance of
                  Niuvaka&apos;s mission at hand and anchors Niuvaka within our
                  Pasifika history as we work cooperatively with our Pacific
                  anau (family) to build and strengthen their capability and
                  capacity to navigate the modern challenges of today&apos;s
                  world.
                </p>
              </div>
            </section>

            <section className="container mx-auto space-y-8 p-8 text-center">
              <h3 className="text-6xl font-semibold text-coffee-400">
                TAGATA PASIFIKA, TANGATA WHENUA & TE TIRITI O WAITANGI
              </h3>
              <p className="text-2xl">
                Iwi-Māori and Pacific Peoples have many historical bonds and
                connections including genealogy, kinship, traditions, and
                beliefs, as well as navigating and traversing Te Moana nui o
                Kiva, the Pacific Ocean, upon vaka, all of which precedes Te
                Tiriti o Waitangi. As a Pasifika organisation, Niuvaka affirms
                and celebrates the multitude of historic and current
                relationships it has with Iwi-Māori further to recognising
                Iwi-Māori as Tangata Whenua, the indigenous people of Aotearoa.
                Niuvaka also acknowledges Te Tiriti o Waitangi as the founding
                document that sets the contemporary context for Tagata Pasifika
                peoples in present day Aotearoa-New Zealand, which which
                correspondingly reflects the high proportion of Tagata Pasifika
                young people being of Tangata Whenua descent.
              </p>

              <h3 className="text-6xl font-semibold text-coffee-400">
                PASIFIKA DIVERSITY
              </h3>
              <p className="text-2xl">
                Pacific Peoples or Tagata Pasifika are umbrella terms, among
                others, used to describe the multitude of island territories and
                nations across the South Pacific Ocean, yet each nation has its
                own uniqueness and distinctiveness, each with its own intricate
                and elaborate micro-culture. As a Pasifika organisation, Niuvaka
                acknowledges the special nature of diverse Pasifika identities
                and recognises the multifaceted characteristics of Tagata
                Pasifika.
              </p>
            </section>

            <StickyScroll
              content={[
                {
                  title: "OUR MISSION",
                  description:
                    "Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability",
                  src: "/mission.jpg",
                },
                {
                  title: "OUR VISION",
                  description:
                    "Tagata Pasifika: Thriving, Flourishing, Resilient",
                  src: "/vision.jpeg",
                },
                {
                  title: "OUR PURPOSE",
                  description:
                    "To work with Tagata Pasifika, Pasifika communities, and Pasifika families for the realisation of their aspirations",
                  src: "/purpose.jpeg",
                },
              ]}
            />
          </div>

          <section className="container mx-auto space-y-8 p-8">
            <h2
              id="our-team"
              className="mb-8 text-7xl font-semibold text-coffee-400"
            >
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                {
                  src: "/Mutsuo_Hatakeyama.png",
                  name: "Mutsuo Hatakeyama",
                },
                {
                  src: "/Aumetua_Lackey.png",
                  name: "Aumetua Lackey",
                },
                {
                  src: "/Andrew_Mulitalo.png",
                  name: "Andrew Mulitalo",
                },
                {
                  src: "/Waimarama_Albert.png",
                  name: "Waimarama Albert",
                },
              ].map((member) => (
                <div key={member.name} className="group space-y-8 text-center">
                  <div className="group-even:bg-mint-500 col-span-1 flex aspect-square items-center justify-center overflow-hidden rounded-full group-odd:bg-coffee-50">
                    <img
                      src={member.src}
                      alt={member.name}
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <span>{member.name}</span>
                </div>
              ))}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
