import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const contact = () => {
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

        <section className="mt-52 bg-gradient-to-b from-coffee-50 via-coffee-50 to-background">
          <div className="container relative mx-auto h-[600px] max-w-screen-2xl p-0">
            <img
              src="/contact.png"
              alt="hero"
              className="size-full object-cover"
            />
          </div>
        </section>

        <div className="relative -mb-36 overflow-hidden">
          <img
            src="/bg1.png"
            alt="background"
            className="absolute left-1/2 w-full max-w-screen-2xl -translate-x-1/2 opacity-5"
          />
          <div className="relative flex flex-col gap-8">
            <section className="container mx-auto space-y-8 p-8">
              <h2 className="relative h-24 overflow-hidden text-8xl font-bold text-black ">
                <div className="absolute flex animate-scrolling-header flex-col gap-4">
                  <span>Contact</span>
                  <span className="text-coffee-400">Faafesootai matou</span>
                  <span className="text-[#3390B3]">Fetu&#699;utaki ki ai</span>
                </div>
              </h2>

              <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
                <div className="col-span-3">
                  <h3 className="mb-4 text-5xl font-bold">Our Location</h3>
                  <p className="text-2xl font-medium">
                    Level 1, 59 Queen Street, Palmerston North Central,
                    <br /> Palmerston North 4410, New Zealand
                  </p>
                  <iframe
                    className="my-4 h-[500px] w-full rounded-3xl border-2 border-black"
                    src="https://www.google.com/maps/embed/v1/place?q=level+1/59+Queen+Street,+Palmerston+North+Central,+Palmerston+North+4410,+New+Zealand&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                  <p className="text-2xl font-medium">
                    If you have any questions, feedback, or just want to know
                    more about us, use the form below. We&apos;re here to help.
                  </p>
                </div>

                <div className="col-span-2 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">Email:</div>
                    <div className="text-xl font-medium underline">
                      info@niuvaka.org.nz
                    </div>
                  </div>

                  <div className="text-2xl font-bold">Call Us:</div>
                  <div className="space-x-4 text-5xl font-bold">
                    <span className="text-[#595959]">06</span>
                    <span className="text-coffee-400">755-2819</span>
                  </div>
                  <div className="space-x-4 text-5xl font-bold">
                    <span className="text-[#595959]">+64</span>
                    <span className="text-coffee-400">2781-7894</span>
                  </div>

                  <div className="text-2xl font-bold">Office Hours</div>
                  <div className="flex justify-between">
                    <div className="text-2xl font-bold">Monday - Friday</div>
                    <div className="text-xl font-medium">8:30 AM - 5:00 PM</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-2xl font-bold">Saturday & Sunday</div>
                    <div className="text-xl font-medium">Closed</div>
                  </div>
                </div>
              </div>

              <h3 className="text-5xl font-bold">Send us a message</h3>
              <p className="text-3xl font-medium">
                Please call us on 0800 456 789 for urgent enquiries.
              </p>
              <form className="flex w-full flex-col items-center justify-center gap-8 py-4">
                <Input
                  placeholder="Enter your name"
                  name="name"
                  className="h-14 max-w-screen-md bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Enter your email"
                  name="email"
                  className="h-14 max-w-screen-md bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Enter your phone number"
                  name="phone"
                  className="h-14 max-w-screen-md bg-[#D9D9D9] text-xl"
                />
                <Input
                  placeholder="Subject"
                  name="subject"
                  className="h-14 max-w-screen-md bg-[#D9D9D9] text-xl"
                />
                <Textarea
                  placeholder="Message"
                  name="message"
                  className="max-w-screen-md bg-[#D9D9D9] text-xl"
                />
                <Button type="submit" className="w-max rounded-full px-8 py-6">
                  Submit
                </Button>
              </form>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default contact;
