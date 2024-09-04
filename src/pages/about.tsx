import Head from "next/head";
import Footer from "~/components/Footer";
import Logo from "~/components/Logo";
import Navbar from "~/components/Navbar";
import { partners, staff } from "~/lib/constants";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Niuvaka Trust</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <section className="mt-52 bg-background">
          <div className="container mx-auto p-0">
            <img
              src="/hero_images/about.webp"
              alt="hero"
              className="aspect-[20/8] w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </section>

        <section className="container mx-auto my-8 flex flex-col items-center justify-center gap-8 p-8">
          <h2 className="py-4 text-center text-5xl font-bold text-mint-500">
            About Us
          </h2>
          <p className="max-w-screen-xl text-center text-xl">
            The Niuvaka journey started in August 2020, and is the coming
            together of prominent Pasifika innovators, both locally and from
            across Aotearoa, to cultivate a culture of positive change and
            transformation for Pasifika Communities.
          </p>
        </section>

        <section className="container mx-auto my-8 flex flex-col items-center justify-center gap-8 p-8">
          <h2 className="py-4 text-center text-5xl font-bold text-mint-500">
            Our Name
          </h2>
          <p className="max-w-screen-lg text-center text-3xl">
            The name NIUVAKA is the result of intertwining two of the most
            valuable commodities in Pacific history.
          </p>
        </section>

        <section className="container mx-auto space-y-8 p-0">
          <h2 className="py-4 text-center text-5xl font-bold text-mint-500">
            Our Logo
          </h2>
          <div className="grid grid-cols-1 border border-black md:grid-cols-2 [&>div]:border [&>div]:border-black">
            <div className="order-1 col-span-1 flex items-center justify-center p-8 md:order-none lg:aspect-video">
              <Logo className="h-fit w-64" />
            </div>
            <div className="order-2 col-span-1 md:order-none lg:aspect-video">
              <div className="flex h-full flex-col items-center justify-center gap-8 p-8 text-center">
                <h2 className="text-4xl font-black">Cyclic Border</h2>
                <p className="max-w-screen-sm text-lg">
                  The cyclic border has a chevron design around the outside of
                  the circle that is a universal design across the pacific that
                  represents the uniqueness of each Pasifika culture and our
                  ability to come together in a space to be one but maintain our
                  own uniqueness. The board is representative of the migratory
                  birds in an unending cycle depicting how our ancestors from
                  the Pacific had been migrating and sailing. The space between
                  the brown border and the inner circle reflects the space of
                  respect and relationship.
                </p>
              </div>
            </div>
            <div className="order-4 col-span-1 md:order-none lg:aspect-video">
              <div className="flex h-full flex-col items-center justify-center gap-8 p-8 text-center">
                <h2 className="text-4xl font-black">Niu</h2>
                <p className="max-w-screen-sm text-lg">
                  The Niu (coconut) is one of the most valuable commodities of
                  the pacific, the background behind the sails inside of the
                  coconut can also be looked at as the horizon coming off the
                  water.
                  <br />
                  Niuvaka Trust is the body of the vaka - navigating, exploring,
                  researching and guiding development and interventions which
                  are informed by Pacific notions of wellbeing and
                  self-determination.
                  <br />
                  <br />
                  May Niuvaka be the &quot;vaka of choice&quot; that our people
                  jump on to sail to their horizons.
                </p>
              </div>
            </div>
            <div className="order-3 col-span-1 md:order-none lg:aspect-video">
              <img
                src="/sitting.webp"
                alt="sitting woman"
                className="h-full w-full object-cover object-bottom"
                loading="lazy"
              />
            </div>
            <div className="order-5 col-span-1 md:order-none lg:aspect-video">
              <img
                src="https://placehold.co/400?text=Image"
                alt="placeholder"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="order-6 col-span-1 md:order-none lg:aspect-video">
              <div className="flex h-full flex-col items-center justify-center gap-8 p-8 text-center">
                <h2 className="text-4xl font-black">Vaka</h2>
                <p className="max-w-screen-sm text-lg">
                  The vaka sails pictured in our logo depict the journey ahead,
                  the future direction of Niuvaka and the aspirational futures
                  for our Pasifika communities. They also represent the Pacific
                  Ocean and the journey between the Pacific Islands and the
                  voyage to Aotearoa. One sail is darker than the other - it
                  reflects the same purpose but also reflects diversity. We are
                  from diverse cultures in the Pacific, but we share common
                  values.
                </p>
              </div>
            </div>
            <div className="order-8 col-span-1 md:order-none lg:aspect-video">
              <div className="flex h-full flex-col items-center justify-center gap-8 p-8 text-center">
                <p className="max-w-screen-sm text-lg">
                  Iwi-Māori and Pacific Peoples have many historical bonds and
                  connections including genealogy, kinship, traditions, and
                  beliefs, as well as navigating and traversing Te Moana nui o
                  Kiva, the Pacific Ocean, upon vaka, all of which precedes Te
                  Tiriti o Waitangi. As a Pasifika organisation, Niuvaka affirms
                  and celebrates the multitude of historic and current
                  relationships it has with Iwi-Māori further to recognising
                  Iwi-Māori as Tangata Whenua, the indigenous people of
                  Aotearoa. Niuvaka also acknowledges Te Tiriti o Waitangi as
                  the founding document that sets the contemporary context for
                  Tagata Pasifika in present day Aotearoa-New Zealand, which
                  correspondingly reflects a large percentage of Tagata Pasifika
                  young people being of Tangata Whenua descent also.
                </p>
              </div>
            </div>
            <div className="order-7 col-span-1 h-96 md:order-none md:h-full lg:aspect-video">
              <div className="relative h-full w-full">
                <img
                  src="/hero_images/home.webp"
                  alt="hero"
                  className="absolute h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/25 p-8">
                  <h2 className="max-w-screen-sm text-center text-4xl font-black text-white">
                    Tagata Pasifika, Tangata Whenua & Te Tiriti o Waitangi
                  </h2>
                </div>
              </div>
            </div>
            <div className="order-9 col-span-1 h-96 md:order-none md:h-full lg:aspect-video">
              <div className="relative h-full w-full">
                <img
                  src="/hero_images/home.webp"
                  alt="hero"
                  className="absolute h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/25 p-8">
                  <h2 className="max-w-screen-sm text-center text-4xl font-black text-white">
                    Pasifika Diversity
                  </h2>
                </div>
              </div>
            </div>
            <div className="order-10 col-span-1 md:order-none lg:aspect-video">
              <div className="flex h-full flex-col items-center justify-center gap-8 p-8 text-center">
                <p className="max-w-screen-sm text-lg">
                  Pacific Peoples or Tagata Pasifika are umbrella terms, among
                  others, used to describe the multitude of island territories
                  and nations across the South Pacific Ocean, yet each nation
                  has its own uniqueness and distinctiveness, each with its own
                  intricate and elaborate micro-culture. As a Pasifika
                  organisation, Niuvaka acknowledges the special nature of
                  diverse Pasifika identities and recognises the multifaceted
                  characteristics of Tagata Pasifika.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="to-mint-400 bg-gradient-to-b from-mint-500">
          <div className="container mx-auto space-y-8 py-8">
            <div
              id="our-team"
              className="mt-8 space-y-16 p-8 text-center font-bold text-white"
            >
              <h2 className="text-7xl">Meet Our Team</h2>
              <h3 className="text-5xl">Board of Trustees</h3>
            </div>

            <div className="flex flex-col gap-16 p-8">
              <div className="mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center gap-y-8 md:grid-cols-2">
                <img
                  src="https://placehold.co/200x200/?text=Image"
                  alt="chairman"
                  className="col-span-full w-full max-w-72 rounded-full object-cover md:col-span-1"
                  loading="lazy"
                />

                <div className="col-span-full flex flex-col items-center gap-8 text-center md:col-span-1">
                  <h3 className="flex flex-col gap-4 font-black">
                    <span className="text-4xl">Daniel Iose</span>
                    <span className="text-2xl">Chair</span>
                  </h3>
                  <p className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque elit sem, pharetra ut semper sit amet,
                    consectetur vel lectus. Pellentesque maximus sed nunc eget
                    dapibus. Maecenas hendrerit commodo ante, sed consectetur
                    nunc ultrices at.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-4">
              {staff.slice(0, 4).map(({ image, name, role, description }) => {
                return (
                  <div
                    key={name}
                    className="group flex flex-col items-center gap-4 text-center"
                  >
                    <div className="col-span-1 flex aspect-square w-full max-w-72 shrink-0 items-center justify-center overflow-hidden rounded-full group-odd:bg-coffee-50 group-even:bg-mint-500">
                      <img
                        src={image}
                        alt={name}
                        className="size-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <div className="transition-all duration-200 ease-in-out group-hover:opacity-100 lg:opacity-0">
                      <div className="text-2xl font-bold">{name}</div>
                      <div className="text-2xl font-medium">{role}</div>
                      <div className="text-2xl font-normal">{description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-4">
              <h3 className="col-span-full pb-8 text-center text-6xl font-black text-white">
                Our Team
              </h3>

              {staff.map(({ image, name, role, description }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-4 text-center"
                >
                  <div className="col-span-1 flex aspect-square w-full max-w-72 shrink-0 items-center justify-center overflow-hidden rounded-full group-odd:bg-coffee-50 group-even:bg-mint-500">
                    <img
                      src={image}
                      alt={name}
                      className="size-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="transition-all duration-200 ease-in-out group-hover:opacity-100 lg:opacity-0">
                    <div className="text-2xl font-bold">{name}</div>
                    <div className="text-2xl font-medium">{role}</div>
                    <div className="text-2xl font-normal">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto my-8 flex flex-col items-center justify-center gap-8 p-8">
          <h2 className="py-8 text-center text-5xl font-bold text-mint-500">
            Our Partners
          </h2>
          <p className="max-w-screen-sm text-center text-2xl">
            We partner and collaborate with many organisations, agencies and
            services who support Pasifika communities to achieve better
            outcomes.
          </p>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-8 p-8 md:grid-cols-3">
            {partners.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt="partner"
                  className="aspect-video h-full max-h-32 w-full object-contain object-center grayscale hover:grayscale-0"
                  loading="lazy"
                />
              );
            })}
          </div>
        </section>

        <section className="to-mint-400 bg-gradient-to-b from-mint-500">
          <div className="container mx-auto my-8 mb-0 flex flex-col items-center justify-center gap-8 p-8">
            <h2 className="py-8 text-center text-5xl font-bold text-white">
              Work With Us
            </h2>
            <p className="max-w-screen-lg text-center text-2xl">
              Join the Niuvaka Trust team to be an important part of making a
              real difference for Pasifika communities that we serve. We are a
              small team of dedicated and friendly staff, in an organisation
              that is growing and developing. The environment is lively and
              perfect for someone who is passionate about advancing aspirations
              for Tagata Pasifika.
              <br />
              <br />
              Niuvaka Trust is a Pasifika community provider covering the
              MidCentral region providing health, social services, training and
              employment support. We support and encourage this by providing
              opportunities to Pasifika communities and connecting Tagata
              Pasifika to support services for the best possible outcomes.
              Niuvaka Trust has a holistic approach to our work, this is
              reflected in the services we provide with and for Pasifika
              communities.
            </p>

            <div className="my-16 grid max-w-screen-lg grid-cols-1 gap-12 p-8 md:grid-cols-3">
              <div className="space-y-8 text-center">
                <h3 className="text-2xl font-black text-white">Vacancy One</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque elit sem, pharetra ut semper sit amet,
                  consectetur vel lectus. Pellentesque maximus sed nunc eget
                  dapibus.
                </p>
              </div>

              <div className="space-y-8 text-center">
                <h3 className="text-2xl font-black text-white">Vacancy Two</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque elit sem, pharetra ut semper sit amet,
                  consectetur vel lectus. Pellentesque maximus sed nunc eget
                  dapibus.
                </p>
              </div>

              <div className="space-y-8 text-center">
                <h3 className="text-2xl font-black text-white">
                  Vacancy Three
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque elit sem, pharetra ut semper sit amet,
                  consectetur vel lectus. Pellentesque maximus sed nunc eget
                  dapibus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
