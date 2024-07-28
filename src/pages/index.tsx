import Head from "next/head";
import Link from "next/link";
import Events from "~/components/Events";
import Footer from "~/components/Footer";
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

        <section className="mt-36 bg-background">
          <div className="container mx-auto max-w-screen-2xl p-0">
            <img src="/hero1.png" alt="hero" />
          </div>
        </section>

        <div className="flex flex-col gap-4 bg-background pb-16">
          <section className="container mx-auto grid grid-cols-12 gap-8 p-8">
            <h2 className="col-span-full flex flex-col gap-8 py-8 text-[50px] font-semibold leading-none text-coffee-400 lg:text-[80px]">
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
        </div>

        <section className="container mx-auto grid grid-cols-1 items-center justify-center gap-8 p-8 lg:grid-cols-3">
          <h2 className="col-span-full py-8 text-6xl font-semibold text-coffee-400 md:text-7xl">
            Our Services
          </h2>
          {services.map(({ name, shortName, image, description, id }) => {
            return (
              <div
                key={name}
                className="group relative col-span-1 flex h-full flex-col items-center justify-start gap-4 overflow-hidden lg:-mb-24"
              >
                <img
                  src={image}
                  alt="service"
                  className="w-80 rounded-full transition-all duration-200 ease-in-out lg:group-hover:w-40"
                />
                <div className="relative mb-1 text-3xl font-semibold uppercase ">
                  {(shortName ?? name).split(" ").map((w, i) =>
                    i === 0 ? (
                      <span key={i} className="font-bold">
                        {w}{" "}
                      </span>
                    ) : (
                      <span key={i}>{w} </span>
                    ),
                  )}
                  <div className="absolute -bottom-1 left-0 h-1 w-10 bg-coffee-400"></div>
                </div>
                <div className="space-y-8 pb-8 text-center transition-all delay-100 group-hover:top-0 group-hover:opacity-100 lg:top-40 lg:opacity-0">
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
