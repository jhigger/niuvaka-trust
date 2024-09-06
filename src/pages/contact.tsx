import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { socials } from "~/lib/constants";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Niuvaka Trust</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <section className="mt-52">
          <div className="container mx-auto p-0">
            <img
              src="/hero_images/about.webp"
              alt="hero"
              className="aspect-[20/8] w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </section>

        <section className="container mx-auto mb-32 space-y-8">
          <div className="relative my-8 h-12 overflow-hidden text-3xl font-bold text-black md:h-20 md:text-6xl lg:h-24 lg:text-8xl">
            <h1 className="absolute flex w-full animate-scrolling-header flex-col gap-2 whitespace-nowrap md:gap-4">
              <span>Contact</span>
              <span className="text-coffee-400">Faafesootai matou</span>
              <span className="text-[#3390B3]">Fetu&#699;utaki ki ai</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-8 md:p-8 lg:grid-cols-2">
            <div className="col-span-1 space-y-8 md:p-8">
              <Button
                className="h-max w-full rounded-full bg-mint-500 px-6 py-4 text-xl font-black text-white"
                asChild
              >
                <Link href="/donate">
                  <img src="/donate.png" alt="donate" />
                  Make a Donation
                </Link>
              </Button>

              <div className="flex flex-col items-center gap-8 md:flex-row">
                <img src="/mail.svg" alt="mail" />
                <a
                  href="mailto:info@niuvaka.org.nz"
                  className="text-2xl font-bold underline underline-offset-4"
                >
                  info@niuvaka.org.nz
                </a>
              </div>

              <div className="flex flex-col flex-wrap items-center gap-8 md:flex-row">
                <img src="/phone.svg" alt="phone" />
                <a
                  href="tel:+08006488252"
                  className="whitespace-nowrap text-4xl font-black"
                >
                  0800 6488252
                </a>
                <span className="text-4xl font-black">(NIUVAKA)</span>
              </div>

              <div className="flex flex-col items-center gap-8 md:flex-row">
                <h2 className="text-3xl font-black">Follow us</h2>
                <div className="flex items-center gap-4">
                  {socials.map(({ href, image, name }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-16"
                    >
                      <img src={image} alt={name} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-8 md:flex-row">
                <img src="/location.svg" alt="location" />
                <p className="text-lg font-bold">
                  Level 1, 59 Queen Street, <br className="block lg:hidden" />{" "}
                  Palmerston North Central,
                  <br /> Palmerston North 4410,{" "}
                  <br className="block lg:hidden" /> New Zealand
                </p>
              </div>

              <iframe
                className="my-4 aspect-video w-full rounded-3xl border-2 border-black"
                src="https://www.google.com/maps/embed/v1/place?q=level+1/59+Queen+Street,+Palmerston+North+Central,+Palmerston+North+4410,+New+Zealand&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-full text-2xl font-black">
                  Office Hours
                </div>
                <div className="col-span-1 text-lg font-black">
                  Monday - Friday
                </div>
                <div className="col-span-1 text-lg font-black">
                  8:30 AM - 5:00 PM
                </div>
                <div className="col-span-1 text-lg font-black">
                  Saturday & Sunday
                </div>
                <div className="col-span-1 text-lg font-black">Closed</div>
              </div>
            </div>

            <div className="col-span-1 space-y-8 md:p-8">
              <p className="text-center text-2xl font-bold">
                If you have any questions, feedback, or just want to know more
                about us, use the form below. We&apos;re here to help.
              </p>

              <form className="grid w-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
                <Input
                  placeholder="Enter your first name"
                  name="first_name"
                  className="h-14 bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Enter your last name"
                  name="last_name"
                  className="h-14 bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Enter your email"
                  name="email"
                  className="col-span-full h-14 bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Enter your phone number"
                  name="phone"
                  className="col-span-full h-14 bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Subject"
                  name="subject"
                  className="col-span-full h-14 bg-[#D9D9D9] text-xl"
                />
                <Textarea
                  placeholder="Message"
                  name="message"
                  className="col-span-full h-60 bg-[#D9D9D9] text-xl"
                />
                <Button
                  type="submit"
                  className="col-span-full mx-auto w-max rounded-full bg-mint-500 px-8 py-6 text-white"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
