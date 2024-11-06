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

        <section className="mt-40">
          <div className="container mx-auto p-0">
            <img
              src="/hero_images/services.webp"
              alt="hero"
              className="w-full object-contain object-top lg:object-cover xl:h-[600px]"
              loading="eager"
            />
          </div>
        </section>

        <section className="mx-auto my-16 flex max-w-screen-md flex-col items-center gap-8 p-4 md:p-8">
          <h1 className="text-center text-2xl font-black text-mint-500 lg:text-4xl">
            Thank you for your contribution
          </h1>
          <p className="max-w-4xl text-center text-lg font-bold lg:text-xl">
            Your donation will make a difference in supporting Pacific peoples
            to achieve their aspirations
          </p>
          <p className="text-center text-base font-bold lg:text-lg">
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
