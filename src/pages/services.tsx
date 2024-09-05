import Head from "next/head";
import { useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";
import { projects, services as serviceItems } from "~/lib/constants";

const serviceDescriptions = [
  {
    id: "navigation-services",
    description: (
      <p className="text-xl">
        The Niuvaka Trust Pasifika Navigation Team provide support to Pacific
        peoples to improve equity of access and health outcomes and support the
        increase of Primary Care enrolment numbers.
        <br />
        <br />
        The support provided ranges from navigation support, early intervention
        and prevention focus, advocacy, navigation of care pathways, cultural
        needs assessment, supporting health management plans, supporting
        enrolment, appointment attendance, and culturally appropriate support.
        <br />
        <br />
        Our Pasifika Navigators can connect you to access services and supports
        with other providers, community organisations and government agencies.
        <br />
        <br />
        If you would like to enquire about our Are Toa Kaikai service, please
        call Niuvaka on 0800-648-8252 or via email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="underline underline-offset-4"
        >
          info@niuvaka.org.nz
        </a>
      </p>
    ),
  },
  {
    id: "ola-lelei-and-kai-services",
    description: (
      <p className="text-xl">
        Ola Lelei is our new Job & Skills Hub that has been set up to support
        Tagata Pasifika to undertake training and study pathways to achieve
        sustainable employment outcomes.
        <br />
        <br />
        The Ola Lelei service aims to improve employment outcomes through
        upskilling unemployed Pasifika individuals, improve Pacific
        people&apos;s readiness for work through training and education and
        ensure they obtain meaningful and sustainable employment.
        <br />
        <br />
        We support Pacific parents, women and youth in the MidCentral region who
        are specifically looking for opportunities within the health, social
        service and IT sectors. The Ola Lelei team are able to support Pacific
        individuals through their study journey by providing tailored workshops
        and pastoral care.
        <br />
        <br />
        If you would like to enquire about our Are Toa Kaikai service, please
        call Niuvaka on 0800-648-8252 or via email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="underline underline-offset-4"
        >
          info@niuvaka.org.nz
        </a>
      </p>
    ),
  },
  {
    id: "outreach-services",
    description: (
      <>
        <h3 className="text-2xl font-bold text-coffee-400 underline underline-offset-4">
          Immunisations
        </h3>
        <p className="text-xl">
          Protecting the health of you and your vuvale (family) with necessary
          vaccinations and immunisations is important. The{" "}
          <a
            href="https://www.health.govt.nz/our-work/preventative-health-wellness/immunisation/new-zealand-immunisation-schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            National Immunisation Schedule
          </a>{" "}
          provides free vaccinations for children until they are 18 years old.
          Some of these services are available for free, including all scheduled
          childhood immunisations.
          <br />
          <br />
          We have a range of services that we offer support with as part of the
          Immunisation Outreach Service including regular Pasifika Immunisation
          Clinics:
        </p>
        <ul className="list-inside list-disc text-xl">
          <li>Childhood Immunisations</li>
          <li>Flu vaccinations</li>
          <li>COVID vaccinations</li>
        </ul>
        <p className="text-2xl">
          The{" "}
          <a
            href="https://www.immune.org.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Immunisation Advisory Centre
          </a>{" "}
          provides useful information to help make informed decisions about
          immunisation.
        </p>
      </>
    ),
  },
  {
    id: "social-services",
    description: (
      <>
        <h3 className="text-2xl font-bold text-coffee-400 underline underline-offset-4">
          Are Toa Kaikai
        </h3>
        <p className="text-xl">
          Our food-hub started because of COVID where we provided support to
          Pasifika communities who were isolating during the COVID-19 Pandemic.
          The support extended beyond COVID as we recognised the need for
          ongoing support for Pacific peoples in our region who were struggling
          to meet their basic living needs.
          <br />
          <br />
          Niuvaka provide free, fresh and healthy food to our local Pasifika
          communities and in particular to those who are in need.
          <br />
          <br />
          Are Toa Kaikai relies on the support and generosity of our partner
          food suppliers, funders and donations. The contents of our food packs
          depend on the supplies available to us.
          <br />
          <br />
          If you would like to enquire about our Are Toa Kaikai service, please
          call Niuvaka on 0800-648-8252 or via email:{" "}
          <a
            href="mailto:info@niuvaka.org.nz"
            className="underline underline-offset-4"
          >
            info@niuvaka.org.nz
          </a>
        </p>
      </>
    ),
  },
];

const items = serviceItems.map(({ image, name, id }) => {
  return {
    image,
    name,
    id,
    description: serviceDescriptions.find((d) => d.id === id)?.description,
  };
});

const Services = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

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

        <section className="mt-52">
          <div className="container mx-auto p-0">
            <img
              src="/services.jpeg"
              alt="hero"
              className="aspect-[25/10] w-full object-cover"
              loading="eager"
            />
          </div>
        </section>

        <section className="container mx-auto p-8">
          <h1 className="border-b border-primary p-8 text-6xl font-black">
            Our Work
          </h1>

          <div className="flex flex-col gap-8 divide-y divide-primary">
            {items.map(({ image, name, description, id }) => {
              return (
                <div
                  key={id}
                  id={id}
                  className="grid grid-cols-1 place-items-center gap-8 p-8 lg:grid-cols-5"
                >
                  <img
                    src={image}
                    alt="service"
                    className="col-span-full w-full max-w-96 object-cover lg:col-span-2"
                  />
                  <div className="col-span-full flex flex-col gap-12 p-8 lg:col-span-3">
                    <h2 className="text-bold text-4xl font-semibold capitalize">
                      {name}
                    </h2>
                    {description}
                  </div>

                  {id === "outreach-services" && !show && (
                    <Button
                      className="col-span-full justify-self-end rounded-full bg-mint-500 p-6 text-xl text-white"
                      onClick={handleToggle}
                    >
                      See More
                    </Button>
                  )}
                  {show && id === "outreach-services" && (
                    <div className="col-span-full max-w-screen-2xl space-y-8">
                      <p className="text-xl">
                        For more information on any immunisation services please
                        call your <b>General Practice team</b> or contact
                        Niuvaka on 0800-648-8252 or email{" "}
                        <a
                          href="mailto:info@niuvaka.org.nz"
                          className="underline underline-offset-4"
                        >
                          info@niuvaka.org.nz
                        </a>{" "}
                        <br />
                        <br />
                        If you are unsure what support you need, please get in
                        touch and we can talk you through the process to see if
                        you are eligible for the free services.
                      </p>
                      <br />
                      <br />
                      <h2 className="text-bold text-4xl font-semibold text-coffee-400">
                        We also provide Screening support within the Outreach
                        Service:
                      </h2>
                      <h3 className="text-2xl font-bold text-coffee-400 underline underline-offset-4">
                        Breast Screening
                      </h3>
                      <p className="text-xl">
                        Protecting the health of you and your vuvale Free
                        mammograms are available every two years through
                        BreastScreen Aotearoa for women aged 45&ndash;69 years.
                        <br />
                        We want to empower Pasifika women to actively lead their
                        health and wellbeing aspirations.
                        <br />
                        Niuvaka are here to support and guide you by connecting
                        you for free mammogram appointments that meet the
                        criteria, eligible women are:
                      </p>
                      <ul className="list-inside list-disc text-xl">
                        <li>Pacific women aged 45&ndash;69, and</li>
                        <li>
                          All women aged between 45&ndash;69 who have never been
                          screened or have not had a screen in the previous five
                          years.
                        </li>
                      </ul>
                      <p className="text-xl">
                        For more information on <b>Breast Screening</b> see{" "}
                        <a
                          href="https://info.health.nz/keeping-healthy/cancer-screening/breast-screening"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4"
                        >
                          BreastScreen Aotearoa
                        </a>{" "}
                        or call{" "}
                        <a
                          href="tel:+0800270200"
                          className="underline underline-offset-4"
                        >
                          0800 270 200
                        </a>
                      </p>
                      <br />
                      <br />
                      <h3 className="text-2xl font-bold text-coffee-400 underline underline-offset-4">
                        Cervical Screening
                      </h3>
                      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <div className="order-2 col-span-full space-y-8 lg:order-none lg:col-span-2">
                          <p className="text-xl">
                            Cervical cancer is one of the most preventable
                            cancers. Regular cervical screening and human
                            papillomavirus (HPV) immunisation are the best ways
                            to protect yourself.
                            <br />
                            <br />
                            Screening allows for early detection, follow-up
                            testing and treatment. It finds early warning signs
                            before they become cancer.
                            <br />
                            Of the 180 people who get cervical cancer in
                            Aotearoa New Zealand every year, 85% have either
                            never been screened or have not had regular
                            screening.
                            <br />
                            <br />
                            The National Cervical Screening Programme is not
                            fully funded, however, free screening is available
                            for women and people with a cervix who:
                          </p>
                          <ul className="list-inside list-disc text-xl">
                            <li>are Māori or Pacific, any age</li>
                            <li>
                              are 30 years and over who are under-screened (have
                              not had a test in the past 5 years), or have never
                              had a screening test
                            </li>
                            <li>require follow-up testing, any age</li>
                            <li>hold a Community Services Card, any age.</li>
                          </ul>
                          <p className="text-xl">
                            In September 2023, HPV screening became the new
                            method for cervical screening in Aotearoa New
                            Zealand. HPV testing is a better first screening
                            test. It looks for the human papillomavirus (HPV),
                            which causes cell changes that may lead to cervical
                            cancer.
                            <br />
                            <br />
                            This gives you options for how you have your
                            screening sample taken:
                          </p>
                          <ul className="list-inside list-disc text-xl">
                            <li>
                              a vaginal swab - you can either self-test, or a
                              health professional can help
                            </li>
                            <li>
                              a cervical sample (previously known as a smear
                              test) - taken by a health professional.
                            </li>
                          </ul>
                          <p className="text-xl">
                            For more information about what screening tests and
                            what follow-up tests are funded, please get in touch
                            with us.
                          </p>
                        </div>
                        <div className="order-1 col-span-full lg:order-none lg:col-span-1">
                          <img
                            src="https://placehold.co/400x500?text=Image"
                            alt="poster"
                            className="w-full rounded"
                          />
                        </div>
                      </div>
                      <br />
                      <br />
                      <h3 className="text-2xl font-bold text-coffee-400 underline underline-offset-4">
                        Bowel Screening
                      </h3>
                      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <div className="col-span-full space-y-8 md:order-2 lg:col-span-2">
                          <p className="text-xl">
                            The National Bowel Screening Programme (NBSP) is a
                            FREE programme to help detect bowel cancer. It is
                            available for people who are eligible for publicly
                            funded health care. In the MidCentral region, Bowel
                            Screening is available for:
                          </p>
                          <ul className="list-inside list-disc text-xl">
                            <li>
                              Māori and Pacific people aged 50 to 74 years
                            </li>
                            <li>
                              For everyone else, the age is 60 &ndash; 74 years
                            </li>
                          </ul>
                          <p className="text-xl">
                            Pacific people in the MidCentral district, aged
                            between 50 and 59, will receive an invite through
                            the mail to take part in free bowel screening. You
                            might also receive your invite directly from a
                            community health provider.
                            <br />
                            <br />
                            You don&apos;t have to do anything &ndash; the
                            invite will be delivered to your address and will be
                            followed by a bowel screening simple self-test kit
                            that can be done at home.
                            <br />
                            <br />
                            Once you start on the bowel screening programme, a
                            bowel screening test kit will be delivered to your
                            home every two years while you are aged 50 to 74
                            years.
                            <br />
                            <br />
                            If you are Pasifika aged 50 to 74, but haven&apos;t
                            been invited, please call the National Bowel
                            Screening Programme on 0800 924 432. If you need
                            help, we can assist with connecting you for the
                            appropriate support.
                            <br />
                            <br />
                            For more information check the{" "}
                            <a
                              href="https://info.health.nz/keeping-healthy/cancer-screening/bowel-screening"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-4"
                            >
                              National Bowel Screening
                            </a>{" "}
                            Programme website or call{" "}
                            <a
                              href="tel:+0800924432"
                              className="underline underline-offset-4"
                            >
                              0800 924 432
                            </a>
                            .
                            <br />
                            <br />
                            You can also contact the local Bowel Screening team
                            at{" "}
                            <a
                              href="mailto:bowelscreening@midcentraldhb.govt.nz"
                              className="break-words underline underline-offset-4"
                            >
                              bowelscreening@midcentraldhb.govt.nz
                            </a>
                          </p>
                        </div>
                        <div className="col-span-full md:order-1 lg:col-span-1">
                          <img
                            src="https://placehold.co/400x500?text=Image"
                            alt="poster"
                            className="w-full rounded"
                          />
                        </div>
                      </div>
                      <br />
                      <br />
                      <h3 className="text-2xl font-bold text-coffee-400 underline underline-offset-4">
                        Health Assessments & Wellbeing Checks
                      </h3>
                      <p className="text-xl">
                        Niuvaka are committed to delivering mobile services
                        closer to home in your community.
                        <br />
                        <br />
                        We deliver regular community health clinics so if you
                        require support to manage your health needs, our health
                        team can assist and help you navigate your health
                        journey and access other support services as well as
                        refer you if additional support is required.
                        <br />
                        <br />
                        Get in touch with us at Niuvaka on 0800-648-8252 or
                        email{" "}
                        <a
                          href="mailto:info@niuvaka.org.nz"
                          className="underline underline-offset-4"
                        >
                          info@niuvaka.org.nz
                        </a>{" "}
                        to book an appointment and find out when the next
                        community health clinic will be scheduled!
                      </p>
                    </div>
                  )}
                  {id === "outreach-services" && show && (
                    <Button
                      className="col-span-full my-8 justify-self-end rounded-full bg-mint-500 p-6 text-xl text-white"
                      onClick={handleToggle}
                    >
                      See Less
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-gradient-to-b from-mint-500 to-mint-400">
          <div className="container mx-auto p-8">
            <h2
              id="our-programmes"
              className="p-8 text-6xl font-black text-white"
            >
              Our Projects and Initiatives
            </h2>

            <div className="flex flex-col gap-8 divide-y divide-primary">
              {projects.map(({ image, name, description }) => {
                return (
                  <div
                    key={name}
                    className="grid grid-cols-1 gap-24 p-8 lg:grid-cols-5"
                  >
                    <img
                      src={image}
                      alt="service"
                      className="col-span-full aspect-[4/3] w-full rounded object-cover lg:col-span-2"
                    />
                    <div className="col-span-full flex flex-col gap-12 lg:col-span-3">
                      <h3 className="text-4xl font-semibold uppercase text-white md:text-6xl">
                        {name}
                      </h3>
                      <p className="whitespace-pre-wrap text-xl">
                        {description}
                        <Button className="float-right aspect-square size-max rounded-full bg-coffee-400 px-8 py-6 text-2xl font-black text-coffee-50">
                          Register
                        </Button>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
