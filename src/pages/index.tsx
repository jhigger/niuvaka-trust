import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Events from "~/components/Events";
import MissionVisionPurpose from "~/components/MissionVisionPurpose";
import Navbar from "~/components/Navbar";
import Partners from "~/components/Partners";
import Testimonials from "~/components/Testimonials";
import { Button } from "~/components/ui/button";
import { services } from "~/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Niuvaka Trust</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <section className="mt-36 bg-gradient-to-b from-coffee-50 via-coffee-50 to-coffee-400">
          <div className="container mx-auto max-w-screen-2xl p-0">
            <img src="/hero1.png" alt="hero" />
          </div>
        </section>

        <div className="flex flex-col gap-4 bg-coffee-400 pb-16">
          <section className="container mx-auto grid grid-cols-12 gap-8 p-8">
            <h2 className="col-span-full flex flex-col gap-8 py-8 text-[50px] font-semibold leading-none text-coffee-50 lg:text-[80px]">
              <span>Nau mai, haere mai.</span>
              <span className="lg:text-center">Welcome to Niuvaka Trust!</span>
            </h2>

            <p className="col-span-full text-2xl font-medium leading-[45px] lg:col-span-10 lg:text-3xl">
              We work cooperatively with Tagata Pasifika, Pasifika communities
              and Pasifika families to build their capacity and capability.
            </p>
            <p className="col-span-full text-left text-2xl font-medium leading-[45px] md:col-span-9 lg:text-3xl">
              The Niuvaka journey started in August 2020, and is the coming
              together of prominent Pasifika innovators, both locally and from
              across Aotearoa, to cultivate a culture of positive change and
              transformation for Pasifika Communities.
            </p>

            <div className="col-span-full flex items-center justify-center md:col-span-3">
              <Button
                asChild
                size="lg"
                className="size-48 rounded-full text-3xl font-semibold text-coffee-400 hover:bg-[#3390B3]"
              >
                <Link href="/about">Read More</Link>
              </Button>
            </div>
          </section>

          <MissionVisionPurpose />
        </div>

        <section className="container mx-auto grid grid-cols-1 gap-8 p-8 lg:grid-cols-3">
          <h2 className="col-span-full py-8 text-6xl font-semibold md:text-7xl">
            Our Services
          </h2>
          {services.map(({ name, image, description, id }) => {
            return (
              <div
                key={name}
                className="group col-span-1 flex flex-col items-center justify-center gap-4 overflow-hidden"
              >
                <img
                  src={image}
                  alt="service"
                  className="size-80 rounded-full transition-all duration-500 ease-in-out group-hover:size-40"
                />
                <span className="text-3xl font-semibold">{name}</span>
                <div className="space-y-8 pb-8 text-center transition-all delay-200 group-hover:h-max group-hover:opacity-100 lg:h-0 lg:opacity-0">
                  <p className="line-clamp-3">{description}</p>
                  <Button asChild className="w-max rounded-full px-8 py-6">
                    <Link href={`/services#${id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </section>

        <Events />
        <Partners />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
