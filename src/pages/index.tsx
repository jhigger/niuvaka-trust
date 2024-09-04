import Head from "next/head";
import Link from "next/link";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Partners from "~/components/Partners";
import { Button } from "~/components/ui/button";
import { focusAreas, services, values } from "~/lib/constants";

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

        <section className="mt-36">
          <div className="container mx-auto p-0">
            <img
              src="/Ocean Rarotonga.jpg"
              alt="hero"
              className="aspect-[2/1] object-cover"
            />
          </div>
        </section>

        <section>
          <div className="container mx-auto p-0">
            <img src="/texts.webp" alt="texts" />
          </div>
        </section>

        <section>
          <div className="container mx-auto flex flex-col lg:flex-row">
            <img
              src="/sitting.webp"
              alt="sitting woman"
              className="w-1/2 object-cover"
            />
            <div className="w-1/2 divide-y-[1px] divide-white">
              <div className="bg-mint-500 text-center">
                <h2 className="p-12 text-5xl font-bold text-white">
                  Our Vision
                </h2>
                <p className="p-12 text-3xl font-bold leading-[45px] text-black">
                  Tagata Pasifika: Thriving, Flourishing, Resilient
                </p>
              </div>
              <div className="bg-mint-500 text-center">
                <h2 className="p-12 text-5xl font-bold text-white">
                  Our Purpose
                </h2>
                <p className="p-12 text-3xl font-bold leading-[45px] text-black">
                  To work with Tagata Pasifika, Pasifika communities & Pasifika
                  families for the realisation of their aspirations
                </p>
              </div>
              <div className="bg-mint-500 text-center">
                <h2 className="p-12 text-5xl font-bold text-white">
                  Our Mision
                </h2>
                <p className="p-12 text-3xl font-bold leading-[45px] text-black">
                  Partnering to build capacity & capability of Pasifika
                  communities
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto my-8 grid grid-cols-1 items-center justify-center gap-16 gap-y-8 p-8 lg:grid-cols-5">
          <h2 className="col-span-full py-4 text-center text-5xl font-bold text-mint-500">
            Our Values
          </h2>
          {values.map(({ name, image }) => {
            return (
              <div
                key={name}
                className="col-span-1 flex h-full flex-col items-center justify-start gap-4 overflow-hidden"
              >
                <img src={image} alt="service" className="w-80" />
                <h3 className="sr-only">{name}</h3>
              </div>
            );
          })}
        </section>

        <section className="container mx-auto my-8 grid grid-cols-1 items-center justify-center gap-16 gap-y-8 p-8 lg:grid-cols-4">
          <h2 className="col-span-full py-4 text-center text-5xl font-bold text-mint-500">
            Our Work
          </h2>
          {services.map(({ name, image, description, id }) => {
            return (
              <div
                key={name}
                className="col-span-1 flex h-full flex-col items-center justify-start gap-4 overflow-hidden"
              >
                <img src={image} alt="service" className="w-80" />
                <h3 className="sr-only">{name}</h3>
                <p className="line-clamp-3 text-center">{description}</p>
                <Button asChild className="w-max rounded-full px-8 py-6">
                  <Link href={`/services#${id}`}>Read More</Link>
                </Button>
              </div>
            );
          })}
        </section>

        <section className="container mx-auto my-8 grid grid-cols-1 items-center justify-center gap-8 p-8 lg:grid-cols-6">
          <h2 className="col-span-full py-4 text-center text-5xl font-bold text-mint-500">
            Our Key Strategic Focus Areas
          </h2>
          {focusAreas.map(({ name, image }) => {
            return (
              <div
                key={name}
                className="col-span-1 flex h-full flex-col items-center justify-start gap-4 overflow-hidden"
              >
                <img src={image} alt="service" className="w-80" />
                <h3 className="sr-only">{name}</h3>
              </div>
            );
          })}
        </section>

        <section className="container mx-auto my-8 flex flex-col items-center justify-center gap-8 p-8">
          <h2 className="py-4 text-center text-5xl font-bold text-mint-500">
            Our Programmes and Initiatives
          </h2>
          <div className="w-full">
            <Carousel />
          </div>
        </section>

        <Partners />
        <Footer />
      </div>
    </>
  );
}
