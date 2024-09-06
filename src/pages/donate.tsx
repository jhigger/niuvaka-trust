import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const choices = [
  "Niuvaka",
  "Poly Paddles",
  "Pasifika Home Gardening Initiatives",
];

const Donate = () => {
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

        <section className="container mx-auto my-16 flex max-w-screen-xl flex-col gap-8 md:p-8">
          <h1 className="text-center text-5xl font-black text-mint-500">
            Thank you for your contribution
          </h1>
          <p className="text-center text-4xl font-bold">
            Your donation will make a difference in supporting Pacific peoples
            to achieve their aspirations
          </p>
          <p className="text-center text-2xl font-bold">
            Please fill in the form below; we will contact you with more
            information
          </p>

          <form className="my-16 grid w-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
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
            <div className="col-span-full flex flex-col gap-4">
              <Label className="text-xl">I would like to donate to:</Label>
              {choices.map((choice) => {
                return (
                  <div key={choice} className="flex items-center space-x-4">
                    <Checkbox
                      id={choice}
                      className="rounded-full border-0 bg-[#D9D9D9]"
                    />
                    <Label htmlFor={choice} className="text-xl">
                      {choice}
                    </Label>
                  </div>
                );
              })}
            </div>
            <Button
              type="submit"
              className="col-span-full mx-auto w-max rounded-full bg-mint-500 px-8 py-6 text-white"
            >
              Submit
            </Button>
          </form>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Donate;
