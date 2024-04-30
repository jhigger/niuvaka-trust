import Head from "next/head";
import LatestEvents from "~/components/LatestEvents";
import Mission from "~/components/Mission";
import Navbar from "~/components/Navbar";
import Partners from "~/components/Partners";
import Services from "~/components/Services";
import Testimonials from "~/components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Niuvaka Trust</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" type="image/png" href="/favicon.svg" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <section className="mt-36 bg-gradient-to-b from-coffee-50 via-coffee-50 to-background">
          <div className="container mx-auto max-w-screen-2xl p-0">
            <img src="/hero1.png" alt="hero" />
          </div>
        </section>

        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-[3400px] bg-[url('/bg.png')] bg-[size:auto_100%] bg-repeat-x opacity-5"></div>
          <div className="absolute left-0 right-0 top-0 z-10">
            <div className="flex flex-col gap-8">
              <Services />
              <Mission />
              <Partners />
              <Testimonials />
              <LatestEvents />
            </div>
            <footer className="mt-36 h-96 bg-coffee-50 p-16"></footer>
          </div>
        </div>
      </div>
    </>
  );
}
