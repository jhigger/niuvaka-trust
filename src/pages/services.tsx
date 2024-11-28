import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import { services as serviceItems } from "~/lib/constants";

export const projects = [
  {
    image: "/projects/paddles.webp",
    name: "Poly Paddles",
    description: (
      <p className="lg:text-lg">
        Water safety and life skills programme for Pasifika and Māori Tamariki
        and Rangatahi 5-18 years.
        <br />
        <br />
        Contact our Project Coordinator on{" "}
        <b className="whitespace-nowrap">0800-648-8252</b> or email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="font-bold underline underline-offset-4"
        >
          info@niuvaka.org.nz
        </a>
      </p>
    ),
  },
  {
    image: "/projects/gardening.webp",
    name: "Pasifika Home Gardening Initiative",
    description: (
      <p className="lg:text-lg">
        Wellbeing programme using ancestral knowledge to support Pacific
        families to be self-managing and self-sufficient and support the
        achievement of kai sovereignty.
        <br />
        <br />
        Contact our Project Coordinator on{" "}
        <b className="whitespace-nowrap">0800-648-8252</b> or email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="font-bold underline underline-offset-4"
        >
          info@niuvaka.org.nz
        </a>
      </p>
    ),
  },
  {
    image: "/projects/vaka.webp",
    name: "Vaka Programme: Traditional Pacific Cultural Games",
    description: (
      <p className="lg:text-lg">
        Initiative to revive traditional Pacific cultural games to create
        connectedness and belonging.
        <br />
        <br />
        Contact our Project Coordinator on{" "}
        <b className="whitespace-nowrap">0800-648-8252</b> or email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="font-bold underline underline-offset-4"
        >
          info@niuvaka.org.nz
        </a>
      </p>
    ),
  },
];

const images = [
  "/services/navigation.svg",
  "/services/ola.svg",
  "/services/outreach.svg",
  "/services/social.svg",
];

const serviceDescriptions = [
  {
    id: "navigation-services",
    description: (
      <p className="text-base lg:text-lg">
        The Pasifika Navigation Team provide support to Pacific peoples to
        improve equity of access, health outcomes and support Pacific
        communities to connect to a health team.
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
        Contact our Navigation team on{" "}
        <b className="whitespace-nowrap">0800-648-8252</b> or email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="font-bold underline underline-offset-4"
        >
          info@niuvaka.org.nz
        </a>
      </p>
    ),
  },
  {
    id: "ola-lelei-and-kai-services",
    description: (
      <p className="text-base lg:text-lg">
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
        service, data, digital and IT sectors.
        <br />
        <br />
        Contact our Ola Lelei team on{" "}
        <b className="whitespace-nowrap">0800-648-8252</b> or email:{" "}
        <a
          href="mailto:info@niuvaka.org.nz"
          className="font-bold underline underline-offset-4"
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
        <h3
          id="immunisation"
          className="text-xl font-bold text-coffee-400 underline underline-offset-4 lg:text-2xl"
        >
          Immunisations
        </h3>
        <p className="text-base lg:text-lg">
          Protecting the health of you and your vuvale (family) with necessary
          vaccinations and immunisations is important. The{" "}
          <a
            href="https://www.health.govt.nz/our-work/preventative-health-wellness/immunisation/new-zealand-immunisation-schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4"
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
        <ul className="list-inside list-disc self-center text-left lg:w-full lg:text-lg">
          <li>Childhood Immunisations</li>
          <li>Flu vaccinations</li>
          <li>COVID vaccinations</li>
        </ul>
      </>
    ),
  },
  {
    id: "social-services",
    description: (
      <>
        <h3
          id="are-toa-kaikai"
          className="text-xl font-bold text-coffee-400 underline underline-offset-4 lg:text-2xl"
        >
          Are Toa Kaikai
        </h3>
        <p className="text-base lg:text-lg">
          Our food hub was born out of COVID initially supporting Pacific
          communities who were isolating during the COVID-19 Pandemic. The
          support extended beyond COVID as we recognised the need for ongoing
          support for Pacific peoples in our region who were struggling to meet
          their basic living needs.
          <br />
          <br />
          Niuvaka provide free, fresh, and healthy food to our local Pacific
          communities and to those who are in need. Are Toa Kaikai relies on the
          support and generosity of our funders, donations and food suppliers in
          supplying rescued food to Pacific communities. The contents of our kai
          packs depend on the supplies available to us. We are also able to
          provide fresh fruit and vegetables grown and harvested from our own
          community garden that is then distributed to Pacific communities.
          <br />
          <br />
          If you need support, contact our Pasifika Coordinator on{" "}
          <b className="whitespace-nowrap">0800-648-8252</b> or email:{" "}
          <a
            href="mailto:info@niuvaka.org.nz"
            className="font-bold underline underline-offset-4"
          >
            info@niuvaka.org.nz
          </a>
        </p>
      </>
    ),
  },
];

const items = serviceItems.map(({ name, id }, i) => {
  return {
    image: images[i],
    name,
    id,
    description: serviceDescriptions.find((d) => d.id === id)?.description,
  };
});

const Services = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (
        hash &&
        [
          "breast-screening",
          "cervical-screening",
          "bowel-screening",
          "health-assessment-and-wellbeing-checks",
        ].includes(hash)
      ) {
        setShow(true);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [router.asPath]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (show) {
      const element = document.getElementById(hash ?? "");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [show]);

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

        <section className="mt-[160px]">
          <div className="container mx-auto overflow-hidden p-0">
            <img
              src="/hero_images/services.webp"
              alt="hero"
              className="-ml-[2%] w-full scale-[1.1] object-contain object-top lg:object-cover xl:h-[600px]"
              loading="eager"
            />
          </div>
        </section>

        <section className="container mx-auto p-8 pt-0">
          <h1 className="border-b border-primary p-4 px-0 text-2xl font-black lg:py-6 lg:text-4xl">
            Our Work
          </h1>

          <div className="flex flex-col gap-8 divide-y divide-primary text-center lg:text-left">
            {items.map(({ image, name, description, id }) => {
              return (
                <div
                  key={id}
                  id={id}
                  className="grid grid-cols-1 place-items-center gap-8 gap-y-0 p-8 !pb-0 lg:grid-cols-12"
                >
                  <div
                    key={name}
                    className="col-span-full flex h-full max-h-[327px] w-full max-w-[462px] flex-col items-center justify-center gap-4 rounded object-contain lg:col-span-3"
                  >
                    <img
                      src={image}
                      alt="service"
                      className="w-2/3 max-w-60 md:w-1/3 lg:w-full"
                    />
                    <div className="!relative mb-1 !whitespace-nowrap text-[80%] font-black uppercase text-coffee-700">
                      {name}
                      <span className="absolute -bottom-0.5 left-0 h-[3px] w-6 bg-coffee-600/90"></span>
                    </div>
                  </div>
                  <div className="col-span-full flex flex-col gap-4 lg:col-span-9">
                    <h2 className="text-bold text-2xl font-semibold capitalize lg:text-3xl">
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
                    <div className="col-span-full space-y-8">
                      <img
                        src="/services/service3.webp"
                        alt="immunisation"
                        className="mx-auto h-[540px] w-[380px] rounded object-cover lg:float-right lg:m-8 xl:-mt-20"
                      />
                      <p className="text-base lg:text-lg">
                        The{" "}
                        <a
                          href="https://www.immune.org.nz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline underline-offset-4"
                        >
                          Immunisation Advisory Centre
                        </a>{" "}
                        provides useful information to help make informed
                        decisions about immunisation.
                      </p>
                      <p className="lg:text-lg">
                        Contact your <b>General Practice team</b> or our Mobile
                        Outreach team on{" "}
                        <b className="whitespace-nowrap">0800-648-8252</b> or
                        email{" "}
                        <a
                          href="mailto:info@niuvaka.org.nz"
                          className="font-bold underline underline-offset-4"
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
                      <hr />
                      <br />
                      <h3
                        id="breast-screening"
                        className="text-xl font-bold text-coffee-400 underline underline-offset-4 lg:text-2xl"
                      >
                        Breast Screening
                      </h3>
                      <p className="lg:text-lg">
                        Free mammograms are available every two years through
                        BreastScreen Aotearoa for women aged 45&ndash;69 years.
                        <br />
                        We want to empower Pacific women to actively lead their
                        health and wellbeing aspirations.
                        <br />
                        Niuvaka are here to support and guide you by connecting
                        you for free mammogram appointments that meet the
                        criteria, eligible women are:
                      </p>
                      <ul className="ml-5 list-disc self-center text-left lg:text-lg">
                        <li>Pacific women aged 45&ndash;69, and</li>
                        <li>
                          All women aged between 45&ndash;69 who have never been
                          screened or have not had a screen in the previous five
                          years.
                        </li>
                      </ul>
                      <p className="lg:text-lg">
                        Contact BreastScreen Aotearoa on{" "}
                        <b className="whitespace-nowrap">0800-270-200</b> or our
                        Mobile Outreach team on{" "}
                        <b className="whitespace-nowrap">0800-648-8252</b> or
                        email{" "}
                        <a
                          href="mailto:info@niuvaka.org.nz"
                          className="font-bold underline underline-offset-4"
                        >
                          info@niuvaka.org.nz
                        </a>
                      </p>
                      <br />
                      <hr />
                      <br />
                      <h3
                        id="cervical-screening"
                        className="text-xl font-bold text-coffee-400 underline underline-offset-4 lg:text-2xl"
                      >
                        Cervical Screening
                      </h3>
                      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <div className="order-2 col-span-full space-y-8 lg:order-none lg:col-span-2">
                          <p className="lg:text-lg">
                            Cervical cancer is one of the most preventable
                            cancers. Regular cervical screening and human
                            papillomavirus (HPV) immunisation are the best ways
                            to protect yourself.
                            <br />
                            <br />
                            Screening allows for early detection, follow-up
                            testing and treatment. It finds early warning signs
                            before they become cancer. Of the 180 people who get
                            cervical cancer in Aotearoa New Zealand every year,
                            85% have either never been screened or have not had
                            regular screening.
                            <br />
                            <br />
                            The National Cervical Screening Programme is not
                            fully funded, however, free screening is available
                            for women and people with a cervix who:
                          </p>
                          <ul className="ml-5 list-disc self-center text-left lg:text-lg">
                            <li>are Māori or Pacific, any age</li>
                            <li>
                              are 30 years and over who are under-screened (have
                              not had a test in the past 5 years), or have never
                              had a screening test
                            </li>
                            <li>require follow-up testing, any age</li>
                            <li>hold a Community Services Card, any age.</li>
                          </ul>
                          <p className="lg:text-lg">
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
                          <ul className="ml-5 list-disc self-center text-left lg:text-lg">
                            <li>
                              a vaginal swab - you can either self-test, or a
                              health professional can help
                            </li>
                            <li>
                              a cervical sample (previously known as a smear
                              test) - taken by a health professional.
                            </li>
                          </ul>
                          <p className="text-lg">
                            Contact our Mobile Outreach team for more
                            information about what screening and follow up tests
                            are funded on{" "}
                            <b className="whitespace-nowrap">0800-648-8252</b>{" "}
                            or email{" "}
                            <a
                              href="mailto:info@niuvaka.org.nz"
                              className="font-bold underline underline-offset-4"
                            >
                              info@niuvaka.org.nz
                            </a>
                          </p>
                        </div>
                        <div className="order-1 col-span-full lg:order-none lg:col-span-1">
                          <img
                            src="/services/cervical-screening.webp"
                            alt="poster"
                            className="w-full rounded"
                          />
                        </div>
                      </div>
                      <br />
                      <hr />
                      <br />
                      <h3
                        id="bowel-screening"
                        className="text-xl font-bold text-coffee-400 underline underline-offset-4 lg:text-2xl"
                      >
                        Bowel Screening
                      </h3>
                      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <div className="col-span-full space-y-8 md:order-2 lg:col-span-2">
                          <p className="lg:text-lg">
                            The National Bowel Screening Programme (NBSP) is a
                            FREE programme to help detect bowel cancer. It is
                            available for people who are eligible for publicly
                            funded health care. In the MidCentral region, Bowel
                            Screening is available for:
                          </p>
                          <ul className="ml-5 list-disc self-center text-left lg:text-lg">
                            <li>
                              Māori and Pacific people aged 50 &ndash; 74 years
                            </li>
                            <li>
                              For everyone else, the age is 60 &ndash; 74 years
                            </li>
                          </ul>
                          <div className="lg:text-lg">
                            <p>
                              Pacific people in the MidCentral district, aged
                              between 50 and 59, will receive an invite through
                              the mail to take part in free bowel screening. You
                              might also receive your invite directly from a
                              community health provider.
                            </p>
                            <br />
                            <p>
                              You don&apos;t have to do anything &ndash; the
                              invite will be delivered to your address and will
                              be followed by a simple bowel screening self-test
                              kit that can be done at home.
                            </p>
                            <br />
                            <p>
                              Once you start on the Bowel Screening Programme, a
                              bowel screening test kit will be delivered to your
                              home every two years while you are aged 50 to 74
                              years.
                            </p>
                            <br />
                            <p className="lg:text-lg">
                              {" "}
                              If you are Pasifika aged 50 to 74, but have not
                              been invited, please make contact by:
                            </p>
                            <br />
                            <ul className="ml-5 list-disc self-center text-left lg:text-lg">
                              <li>
                                Calling the{" "}
                                <a
                                  href="https://info.health.nz/keeping-healthy/cancer-screening/bowel-screening"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-bold underline underline-offset-4"
                                >
                                  National Bowel Screening Programme
                                </a>{" "}
                                on <b>0800-924-432</b> or
                              </li>
                              <li>
                                Email the local Bowel Screening team &ndash;{" "}
                                <a
                                  href="mailto:bowelscreening@midcentraldhb.govt.nz"
                                  className="break-words font-bold underline underline-offset-4"
                                >
                                  bowelscreening@midcentraldhb.govt.nz
                                </a>
                              </li>
                            </ul>
                            <br />
                            <p>
                              If you need help, we can assist with connecting
                              you for the appropriate support, contact our
                              Mobile Outreach team on <b>0800-648-8252</b> or
                              email{" "}
                              <a
                                href="mailto:info@niuvaka.org.nz"
                                className="font-bold underline underline-offset-4"
                              >
                                info@niuvaka.org.nz
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="col-span-full md:order-1 lg:col-span-1">
                          <img
                            src="/services/bowel-screening.webp"
                            alt="poster"
                            className="w-full rounded"
                          />
                        </div>
                      </div>
                      <br />
                      <hr />
                      <br />
                      <h3
                        id="health-assessment-and-wellbeing-checks"
                        className="text-xl font-bold text-coffee-400 underline underline-offset-4 lg:text-2xl"
                      >
                        Health Assessments & Wellbeing Checks
                      </h3>
                      <p className="lg:text-lg">
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
                        To book an appointment, contact our Health team on{" "}
                        <b className="whitespace-nowrap">0800-648-8252</b> or
                        email{" "}
                        <a
                          href="mailto:info@niuvaka.org.nz"
                          className="font-bold underline underline-offset-4"
                        >
                          info@niuvaka.org.nz
                        </a>
                      </p>
                    </div>
                  )}
                  {id === "outreach-services" && show && (
                    <Button
                      className="col-span-full justify-self-end rounded-full bg-mint-500 p-6 text-xl text-white"
                      onClick={handleToggle}
                      asChild
                    >
                      <a href="#outreach-services">See Less</a>
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-gradient-to-b from-mint-500 to-mint-400">
          <div className="container mx-auto px-0 py-8 lg:mx-auto lg:p-8">
            <h2
              id="our-projects-and-initiatives"
              className="p-4 text-2xl font-black text-white lg:text-4xl"
            >
              Our Projects & Initiatives
            </h2>

            <div className="flex flex-col gap-8 divide-y divide-primary lg:gap-4">
              {projects.map(({ image, name, description }) => {
                return (
                  <div
                    key={name}
                    className="grid grid-cols-1 gap-8 p-4 pt-8 lg:grid-cols-12"
                  >
                    <div className="col-span-full lg:col-span-5">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image}
                          alt="service"
                          className="ml-auto h-full w-full rounded object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="col-span-full flex flex-col gap-6 lg:col-span-7">
                      <h3 className="text-2xl font-semibold capitalize text-white lg:text-3xl">
                        {name}
                      </h3>
                      <div className="whitespace-pre-wrap lg:text-lg">
                        {description}
                      </div>
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
