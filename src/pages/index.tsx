import Head from "next/head";
import Footer from "~/components/Footer";
import LatestEvents from "~/components/LatestEvents";
import Mission from "~/components/Mission";
import Navbar from "~/components/Navbar";
import Partners from "~/components/Partners";
import Testimonials from "~/components/Testimonials";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Niuvaka Trust</title>
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
          <section className="container mx-auto grid grid-cols-1 gap-8 p-8 lg:grid-cols-12">
            <h2 className="col-span-full flex flex-col gap-8 py-8 text-[80px] font-semibold leading-none text-coffee-50">
              <span>Nau mai, haere mai.</span>
              <span className="text-center">Welcome to Niuvaka Trust!</span>
            </h2>

            <p className="col-span-10 text-3xl font-medium leading-[45px]">
              We work cooperatively with Tagata Pasifika, Pasifika communities
              and Pasifika families to build their capacity and capability.
            </p>
            <p className="col-span-9 text-left text-3xl font-medium leading-[45px]">
              The Niuvaka journey started in August 2020, and is the coming
              together of prominent Pasifika innovators, both locally and from
              across Aotearoa, to cultivate a culture of positive change and
              transformation for Pasifika Communities.
            </p>

            <div className="col-span-3 flex items-center justify-center">
              <Button
                size="lg"
                className="size-48 rounded-full text-3xl font-semibold text-coffee-400"
              >
                Read More
              </Button>
            </div>
          </section>

          <Mission />
        </div>

        <section className="container mx-auto grid grid-cols-1 gap-8 p-8 lg:grid-cols-3">
          <h2 className="col-span-full py-8 text-7xl font-semibold">
            Our Services
          </h2>
          {[
            {
              name: "Service 1",
              image: "https://placehold.co/200x200/?text=Image",
            },
            {
              name: "Service 2",
              image: "https://placehold.co/200x200/?text=Image",
            },
            {
              name: "Service 3",
              image: "https://placehold.co/200x200/?text=Image",
            },
          ].map(({ name, image }) => {
            return (
              <div
                key={name}
                className="col-span-1 flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={image}
                  alt="service"
                  className="size-80 rounded-full"
                />
                <span className="text-3xl font-semibold">{name}</span>
              </div>
            );
          })}
        </section>

        <LatestEvents />
        <Partners />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
