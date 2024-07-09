import Head from "next/head";
import Footer from "~/components/Footer";
import Events from "~/components/Events";
import Navbar from "~/components/Navbar";

const news = () => {
  return (
    <>
      <Head>
        <title>Services - Niuvaka Trust</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <div className="container mx-auto mt-52 py-20">
          <h1 className="text-6xl font-bold text-black md:text-8xl">
            Events and Opportunities
          </h1>
        </div>

        <div className="relative bg-background">
          <section className="container mx-auto p-8 md:p-16">
            <h2
              id="latest-news"
              className="mb-8 text-center text-5xl font-bold text-coffee-400 md:text-7xl lg:text-left"
            >
              Our Latest Events
            </h2>

            <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
              <img
                src="https://via.placeholder.com/500x700?text=Image"
                alt="event"
                className="rounded-xl object-cover object-center"
              />
              <div className="flex flex-col gap-8 self-start">
                <h3 className="text-center text-3xl font-semibold md:text-5xl lg:text-left">
                  What our vuvale are signing up for when registering for Poly
                  Paddles.
                </h3>
                <div className="flex flex-col gap-4 text-2xl md:whitespace-nowrap">
                  <div>
                    <strong className="text-3xl font-medium">
                      Register Now{" "}
                    </strong>
                    as there are still available spaces:
                  </div>
                  <div className="flex flex-col">
                    <div>
                      Levin Registration Link:{" "}
                      <a
                        href="https://forms.office.com/r/YZvAXpG8fq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        https://forms.office.com/r/YZvAXpG8fq
                      </a>
                    </div>
                    <div className="font-medium">
                      (registration closes tomorrow - Friday 12th April at
                      10.00pm)
                    </div>
                  </div>
                  <div>
                    Palmy Registration Link:{" "}
                    <a
                      href="https://forms.office.com/r/k23LZ4fw6Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      https://forms.office.com/r/k23LZ4fw6Z
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Events title="Upcoming Events" />

        <Footer />
      </div>
    </>
  );
};

export default news;
