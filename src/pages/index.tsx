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

        <section className="mt-40">
          <div className="mx-auto p-0">
            <img
              src="/hero_images/home.webp"
              alt="hero"
              className="h-[700px] w-full object-cover"
              loading="eager"
            />
          </div>
        </section>

        <section>
          <div className="mx-auto overflow-hidden p-0">
            <img
              src="/texts.webp"
              alt="texts"
              className="-my-[15%] h-full w-full scale-125 object-center"
              loading="lazy"
            />
          </div>
        </section>

        <section>
          <div className="mx-auto flex flex-col p-0 lg:flex-row lg:px-8">
            <img
              src="/sitting.webp"
              alt="sitting woman"
              className="-mt-12 hidden object-cover lg:block lg:w-1/2"
              loading="lazy"
            />
            <div className="flex flex-col lg:w-1/2">
              <div className="flex flex-1 flex-col items-center justify-center space-y-8 bg-mint-500 p-8 text-center">
                <h2 className="text-3xl font-bold text-white lg:text-5xl">
                  Our Vision
                </h2>
                <p className="text-xl font-normal leading-normal text-black lg:text-3xl">
                  Tagata Pasifika: Thriving, Flourishing, Resilient
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-8 bg-white p-8 text-center">
                <h2 className="text-3xl font-bold text-mint-500 lg:text-5xl">
                  Our Purpose
                </h2>
                <p className="text-xl font-normal leading-normal text-black lg:text-3xl">
                  To work with Tagata Pasifika, Pasifika communities & Pasifika
                  families for the realisation of their aspirations
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-8 bg-mint-500 p-8 text-center">
                <h2 className="text-3xl font-bold text-white lg:text-5xl">
                  Our Mission
                </h2>
                <p className="text-xl font-normal leading-normal text-black lg:text-3xl">
                  Partnering to build capacity & capability of Pacific
                  communities
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto my-8 grid grid-cols-1 items-center justify-center gap-8 gap-y-4 p-8 lg:grid-cols-5 lg:gap-y-8">
          <h2 className="col-span-full py-4 text-center text-3xl font-bold text-mint-500 lg:text-5xl">
            Our Values
          </h2>
          {values.map(({ name, image, description }) => {
            return (
              <div
                key={name}
                className="group relative col-span-1 flex h-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl p-4 lg:hover:scale-105 lg:hover:bg-coffee-50 xl:p-8"
              >
                <img
                  src={image}
                  alt="service"
                  className="w-2/3 transition-all duration-300 ease-in-out md:w-1/3 lg:w-full lg:group-hover:w-0"
                  loading="lazy"
                />
                <div className="-bottom-full w-full p-4 transition-all duration-150 ease-in-out lg:absolute lg:group-hover:bottom-0 xl:p-8">
                  <h3 className="sr-only !relative mb-1 text-[100%] font-bold capitalize text-coffee-700 lg:not-sr-only xl:text-2xl">
                    {name}
                    <span className="absolute -bottom-1 left-0 h-1 w-[20%] bg-coffee-400"></span>
                  </h3>
                  <p className="text-center text-base lg:text-[75%] xl:text-base">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mx-auto my-8 grid grid-cols-1 items-center justify-center gap-16 p-8 lg:grid-cols-4">
          <h2 className="col-span-full py-4 text-center text-3xl font-bold text-mint-500 lg:text-5xl">
            Our Work
          </h2>
          {services.map(({ name, image, description, id }) => {
            return (
              <div
                key={name}
                className="col-span-1 flex h-full flex-col items-center justify-start gap-4 overflow-hidden"
              >
                <img
                  src={image}
                  alt="service"
                  className="w-2/3 md:w-1/3 lg:w-full"
                  loading="lazy"
                />
                <h3 className="sr-only">{name}</h3>
                <p className="line-clamp-4 text-center">{description}</p>
                <Button
                  asChild
                  className="mt-auto w-max rounded-full px-8 py-6"
                >
                  <Link href={`/services#${id}`}>Read More</Link>
                </Button>
              </div>
            );
          })}
        </section>

        <section className="mx-auto my-8 grid grid-cols-1 items-center justify-center gap-8 p-8 lg:grid-cols-6">
          <h2 className="col-span-full text-balance py-4 text-center text-3xl font-bold text-mint-500 lg:text-5xl">
            Our Key Strategic Focus Areas
          </h2>
          {focusAreas.map(({ name, image }) => {
            return (
              <div
                key={name}
                className="col-span-1 flex h-full flex-col items-center justify-start gap-4 overflow-hidden"
              >
                <img
                  src={image}
                  alt="service"
                  className="w-2/3 md:w-1/3 lg:w-full"
                  loading="lazy"
                />
                <h3 className="sr-only">{name}</h3>
              </div>
            );
          })}
        </section>

        <section className="mx-auto my-8 flex flex-col items-center justify-center gap-8 p-8">
          <h2 className="text-balance py-4 text-center text-3xl font-bold text-mint-500 lg:text-5xl">
            Our Programmes and Initiatives
          </h2>

          <Carousel />
        </section>

        <Partners />
        <Footer />
      </div>
    </>
  );
}
