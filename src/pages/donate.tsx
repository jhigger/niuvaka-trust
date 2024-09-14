import Head from "next/head";
import Footer from "~/components/Footer";
import DonationForm from "~/components/Forms/DonationForm";
import Navbar from "~/components/Navbar";

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

          <DonationForm />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Donate;
