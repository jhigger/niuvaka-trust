import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";

const services = () => {
  return (
    <>
      <Head>
        <title>Niuvaka Trust - Services</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <section className="mt-52 bg-gradient-to-b from-coffee-50 via-coffee-50 to-background">
          <div className="container relative mx-auto h-[600px] max-w-screen-2xl p-0">
            <img
              src="/services.jpeg"
              alt="hero"
              className="size-full object-cover"
            />
            <span className="absolute bottom-28 left-16 text-8xl font-bold text-black">
              Our Services And Programmes
            </span>
          </div>
        </section>

        <div className="relative bg-background">
          <div className="flex flex-col gap-8">
            <section className="container mx-auto p-8">
              <h2
                id="our-services"
                className="mb-8 text-7xl font-bold text-black"
              >
                Our Services
              </h2>

              <div className="flex flex-col gap-8">
                {[
                  {
                    image: "https://placehold.co/200x200/?text=Image",
                    name: "NAVIGATION SERVICES",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
                  },
                  {
                    image: "https://placehold.co/200x200/?text=Image",
                    name: "OUTREACH SERVICES",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
                  },
                  {
                    image: "https://placehold.co/200x200/?text=Image",
                    name: "SOCIAL SERVICES",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
                  },
                ].map(({ image, name, description }) => {
                  return (
                    <div
                      key={name}
                      className="grid grid-cols-1 gap-24 p-12 lg:grid-cols-5"
                    >
                      <img
                        src={image}
                        alt="service"
                        className="col-span-2 w-full rounded-full object-cover"
                      />
                      <div className="col-span-3 flex flex-col gap-12">
                        <h3 className="text-6xl font-semibold uppercase text-black">
                          {name}
                        </h3>
                        <p className="whitespace-pre-wrap text-xl">
                          {description}
                        </p>
                        <Button className="w-max self-end rounded-full px-8 py-6">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="container mx-auto p-8">
              <h2
                id="our-programmes"
                className="mb-8 text-7xl font-bold text-black"
              >
                Our Services
              </h2>

              <div className="flex flex-col gap-8">
                {[
                  {
                    image: "https://placehold.co/200x200/?text=Image",
                    name: "lorem",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
                  },
                  {
                    image: "https://placehold.co/200x200/?text=Image",
                    name: "ipsum",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
                  },
                ].map(({ image, name, description }) => {
                  return (
                    <div
                      key={name}
                      className="grid grid-cols-1 gap-24 p-12 lg:grid-cols-5"
                    >
                      <img
                        src={image}
                        alt="service"
                        className="col-span-2 w-full rounded-full object-cover"
                      />
                      <div className="col-span-3 flex flex-col gap-12">
                        <h3 className="text-6xl font-semibold uppercase text-black">
                          {name}
                        </h3>
                        <p className="whitespace-pre-wrap text-xl">
                          {description}
                        </p>
                        <Button className="w-max self-end rounded-full px-8 py-6">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
