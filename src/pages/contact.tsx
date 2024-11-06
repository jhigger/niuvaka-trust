import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import ContactForm from "~/components/Forms/ContactForm";
import Navbar from "~/components/Navbar";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
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

        <section className="mt-40">
          <div className="container mx-auto p-0">
            <img
              src="/hero_images/contact.webp"
              alt="hero"
              className="w-full object-contain lg:object-cover xl:h-[800px]"
              loading="eager"
            />
          </div>
        </section>

        <section className="container mx-auto mb-32 space-y-8">
          <div className="relative my-8 h-12 overflow-hidden text-3xl font-bold text-black md:h-20 md:text-6xl lg:h-24 lg:text-8xl">
            <h1 className="absolute flex w-full animate-scrolling-header flex-col items-center gap-2 whitespace-nowrap md:gap-4">
              <span>Contact Us</span>
              <span className="text-coffee-400">Faafesootai matou</span>
              <span className="text-[#3390B3]">Fetu&#699;utaki ki ai</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-8 md:pt-8 lg:grid-cols-12">
            <div className="col-span-full space-y-8 p-4 lg:col-span-5">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="h-max w-full rounded-full bg-mint-500 px-6 py-4 text-xl font-black text-white hover:bg-coffee-400"
                      asChild
                    >
                      <Link href="/donate">
                        <img src="/donate.png" alt="donate" />
                        Make a Donation
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={-8}
                    className="flex max-w-xs items-center justify-center rounded-xl bg-coffee-200 p-8 text-xl font-bold md:max-w-lg md:p-16"
                  >
                    <p>
                      Your donation will make a difference in supporting Pacific
                      peoples in achieving their aspirations.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

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
                  className="whitespace-nowrap text-3xl font-black"
                >
                  0800 6488252
                </a>
                <span className="text-3xl font-black">(NIUVAKA)</span>
              </div>

              <div className="flex flex-col items-center gap-4 md:flex-row">
                <h2 className="text-2xl font-black">Follow us</h2>
                <div className="flex items-center gap-2">
                  {socials.map(({ href, image, name }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12"
                    >
                      <img src={image} alt={name} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-8 md:flex-row">
                <img src="/location.svg" alt="location" />
                <p className="text-base font-bold">
                  Level 1, 59 Queen Street, Palmerston North 4410, New Zealand
                </p>
              </div>

              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="my-4 h-full w-full rounded-3xl border-2 border-black"
                  src="https://www.google.com/maps/embed/v1/place?q=level+1/59+Queen+Street,+Palmerston+North+Central,+Palmerston+North+4410,+New+Zealand&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </AspectRatio>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-full text-2xl font-black">
                  Office Hours
                </div>
                <div className="col-span-1 text-base font-black">
                  Monday - Friday
                </div>
                <div className="col-span-1 text-base font-black">
                  9:00 AM - 4:00 PM
                </div>
                <div className="col-span-1 text-base font-black">
                  Saturday & Sunday
                </div>
                <div className="col-span-1 text-base font-black">Closed</div>
              </div>
            </div>

            <div className="col-span-full space-y-8 p-4 lg:col-span-7">
              <p className="text-center text-xl font-bold">
                If you have any questions, feedback, or just want to know more
                about us, use the form below. We&apos;re here to help.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
