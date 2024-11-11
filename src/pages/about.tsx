import Head from "next/head";
import { Fragment } from "react";
import Footer from "~/components/Footer";
import CareerForm from "~/components/Forms/CareerForm";
import Logo from "~/components/Logo";
import Navbar from "~/components/Navbar";
import Partners from "~/components/Partners";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { staff } from "~/lib/constants";

type GovernanceBoardType = {
  image: string;
  name: string;
  role: string;
  description: React.ReactNode;
};

const governanceBoard: GovernanceBoardType[] = [
  {
    image: "/team/board/Daniel.webp",
    name: "Daniel Iose",
    role: "Chair",
    description: (
      <>
        <p>
          Daniel Iose is the Chairperson of the Board for Niuvaka Trust, an
          organization dedicated to providing social services to Pasifika
          communities. With over 25 years of experience in Information
          Technology, Daniel brings valuable expertise to the board&apos;s
          governance and executive leadership. He also serves as a director on
          the board of the Manawatu Rugby Union. Driven by a focus on long-term
          growth and business value, Daniel is committed to maintaining the
          highest standards of transparency and accountability in all his roles.
        </p>
        <p>
          As Chairperson of Niuvaka Trust, Daniel plays a pivotal role in
          guiding the Trust&apos;s strategic vision, overseeing key governance
          initiatives, and collaborating closely with the executive team to
          ensure the Trust&apos;s continued success in a dynamic environment.
          His leadership philosophy is rooted in collaboration, ethical
          decision-making, and a commitment to long-term sustainability.
        </p>
        <p>
          Daniel is passionate about fostering diversity and inclusion within
          cultural contexts and believes in creating environments where all
          individuals are valued. He joined Niuvaka Trust in 2022, bringing with
          him a deep sense of responsibility to support Pasifika communities.
        </p>
        <p>
          Born in Porirua and of Samoan descent, Daniel&apos;s late father,
          Semaoa Telu, was from Fasito&apos;o uta, Samoa, while his late mother,
          Tiana, hailed from Pata Faleatai, Samoa. He is married to Sandra, and
          together they have two adult sons, Jackson and Brayden. Daniel feels
          privileged to be part of Niuvaka Trust&apos;s mission to empower
          Pasifika communities and help them achieve their aspirations.
        </p>
      </>
    ),
  },
  {
    image: "/team/board/Jenine.webp",
    name: "Jenine Scoon",
    role: "Deputy Chair",
    description: (
      <>
        <p>
          Jenine is of Te Ipukarea and Samoan descent, born in Dunedin and
          raised in Te Papaieoa. Jenine has three grown sons and six mokopuna
          and is actively involved in the local Softball community holding the
          Chairperson&apos;s role for the past five years. Jenine currently
          works at Highbury Whānau Centre as a Team Lead for the Transition
          Service and has over 30 years experience working in the Public Service
          Sector. She is passionate about ensuring that our Polynesian peoples
          have all the opportunities available to them to succeed in their
          lives, and homelife to support the sustainabilty of the work that
          Niuvaka can offer to our beautiful communities.
        </p>
        <p>
          E toru oire o toku iwi — Titikaveka, Ngatangiia, e Matavera.
          <br />
          Te oire e kapiti ana ko Takitumu, ko Irirangi te Maunga, ko Avana te
          Ava.
          <br />
          Toku pirianga ia Aitutaki e Mangaia, Te Ipukarea (Kuki Airani).
          <br />
          Te maata i taau ka Oranga ko te Maata rai ia i taau ka rauka.
        </p>
        <p>&quot;The more you give the more you receive.&quot;</p>
        <p>Meitaki Ma&apos;ata</p>
      </>
    ),
  },
  {
    image: "/team/board/Suli.webp",
    name: "Suliasi Vunibola",
    role: "Founding Board Member",
    description: (
      <>
        <p>
          Dr Suli Vunibola is of Fijian descent and is one of the founding
          members of Niuvaka Trust.
        </p>
        <p>
          He is a transdisciplinary scholar and a Climate Research Fellow at
          Macmillan Brown Centre for Pacific Studies, University of Canterbury
          and adjunct with the{" "}
          <a
            href="https://www.usc.edu.au/research/australian-centre-for-pacific-islands-research"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Australian Centre for Pacific Islands Research
          </a>
          . Suli&apos;s research interests broadly lie in the interdisciplinary
          areas of development studies, human geography, ethnography,
          ethno-ecology, climate crisis, and community production. The core of
          some of his research is around indigenous knowledge systems, community
          indigenous innovation, alternative and pluriverse development,
          community-driven development, and social transformation in the
          Pacific.
        </p>
        <p>
          Suli&apos;s doctoral research explored indigenous alternative economic
          development on customary land in the Pacific through decolonised
          indigenous methodologies. His interests also include developing
          cohesion between Pasifika community providers and research, and he
          also co-developed the new Pacific Studies courses at the University of
          Canterbury, New Zealand, in 2024.
        </p>
      </>
    ),
  },
  {
    image: "/team/board/Tawhiti.webp",
    name: "Tawhiti Kunaiti",
    role: "Tangata Whenua Representative",
    description: (
      <>
        <p>
          Tawhiti is of Raukawa, Ngāti Mango, Ngai Tara, Rangitāne, Ngāti Kuia,
          Ngāti Kahungunu, Ngāti Ruapani, Rongomaiwahine, Te Āti Hau, Ngāti
          Matakore descent and is the Tangata Whenua representative having
          joined the Niuvaka Trust Board in 2023.
        </p>
        <p>
          He has been in several key leadership roles with Te Tihi o Ruahine
          Whānau Ora Alliance, New Zealand College of Clinical Psychologists and
          Te Papa Tongarewa, the Museum of Aotearoa-New Zealand. Tawhiti was an
          appointed member of the Manawhenua Iwi Relationship Board to the
          MidCentral District Health Board (MDHB) Healthy Communities Advisory
          Committee & MDHB Disability Support Advisory Committee.
          <br />
          Tawhiti is a Registered Graduate in Frontline Management, New Zealand
          Institute of Management, a Bursar Recipient of Te Rau Puawai Māori
          Mental Health Development studying Psychology through Te Kunenga ki
          Pūrehuroa and has a background in the education sector, specifically
          within total immersion Māori language settings. Tawhiti has given
          extensive contributions to the health sector and the Whānau Ora
          movement including as Co-Project Lead for the establishment of Te
          Awahou Community Health Service in Foxton.
        </p>
        <p>
          He was a key Leader for the Ngāti Whakatere and Te Awahou Waitangi
          Claims Hearings from and is the current Chair of Ngāti Whakatere Māori
          Land Trust, as well as a member of Te Whare Makatea, Ngāti Raukawa
          School of Traditional Māori Lore from 2018-2023. Tawhiti is passionate
          about supporting the advancement of Whānau Ora and extends this
          support to Pacific communities through his role on the Niuvaka Trust
          Board.
        </p>
      </>
    ),
  },
];

const BoardItem = ({ image, name, role, description }: GovernanceBoardType) => {
  return (
    <div
      key={name}
      className="grid grid-cols-1 place-items-start justify-items-center gap-8 px-8 lg:grid-cols-11"
    >
      <div className="col-span-full h-max w-full overflow-hidden rounded-2xl lg:col-span-3">
        <AspectRatio ratio={9 / 12}>
          <img
            src={image}
            alt={role}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      </div>

      <div className="col-span-full flex flex-col gap-4 text-center lg:col-span-8 lg:text-start">
        <h3 className="flex flex-col">
          <span className="text-2xl font-black lg:text-3xl">{name}</span>
          <span className="text-lg font-bold text-white lg:text-xl">
            {role}
          </span>
        </h3>
        {description}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - Niuvaka Trust</title>
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
              src="/hero_images/about.webp"
              alt="hero"
              className="w-full object-contain object-top lg:object-cover xl:h-[600px]"
              loading="eager"
            />
          </div>
        </section>

        <section
          id="our-journey"
          className="mx-auto flex flex-col items-center justify-center gap-4 px-8 pt-8"
        >
          <h2 className="text-center text-2xl font-black text-mint-500 lg:text-4xl">
            About Us
          </h2>
          <p className="max-w-screen-xl text-balance text-center text-lg">
            The Niuvaka journey started in August 2020, and is the coming
            together of prominent Pasifika innovators, both locally and from
            across Aotearoa, to cultivate a culture of positive change and
            transformation for Pasifika Communities.
          </p>
        </section>

        <section
          id="our-name"
          className="mx-auto flex flex-col items-center justify-center gap-4 px-8 pt-4"
        >
          <h2 className="text-center text-2xl font-black text-mint-500 lg:text-4xl">
            Our Name
          </h2>
          <p className="max-w-screen-lg text-balance text-center text-lg">
            The name NIUVAKA is the result of intertwining two of the most
            valuable commodities in Pacific history.
          </p>
        </section>

        <section className="container mx-auto space-y-4 p-0">
          <h2
            id="our-logo"
            className="pt-4 text-center text-2xl font-black text-mint-500 lg:text-4xl"
          >
            Our Logo
          </h2>
          <div className="grid grid-cols-1 border-black md:grid-cols-2 md:border [&>div]:border-black md:[&>div]:border">
            <div className="order-1 col-span-1 flex items-center justify-center p-8 md:order-none">
              <Logo className="!size-64" />
            </div>
            <div className="order-2 col-span-1 md:order-none">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <h2 className="text-xl font-black lg:text-2xl">
                  Cyclic Border
                </h2>
                <p className="max-w-screen-sm text-base">
                  The cyclic border has a chevron design around the outside of
                  the circle that is a universal design across the pacific that
                  represents the uniqueness of each Pasifika culture and our
                  ability to come together in a space to be one but maintain our
                  own uniqueness. The board is representative of the migratory
                  birds in an unending cycle depicting how our ancestors from
                  the Pacific had been migrating and sailing. The space between
                  the brown border and the inner circle reflects the space of
                  respect and relationship.
                </p>
              </div>
            </div>
            <div className="order-4 col-span-1 md:order-none">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <h2 className="text-xl font-black lg:text-2xl">Niu</h2>
                <p className="max-w-screen-sm text-base">
                  The Niu (coconut) is one of the most valuable commodities of
                  the pacific, the background behind the sails inside of the
                  coconut can also be looked at as the horizon coming off the
                  water.
                  <br />
                  <br />
                  Niuvaka Trust is the body of the vaka - navigating, exploring,
                  researching and guiding development and interventions which
                  are informed by Pacific notions of wellbeing and
                  self-determination.
                  <br />
                  <br />
                  May Niuvaka be the &quot;vaka of choice&quot; that our people
                  jump on to sail to their horizons.
                </p>
              </div>
            </div>
            <div className="order-3 col-span-1 mx-4 border-t md:order-none md:mx-0">
              <div className="h-full w-full pt-4 md:p-0">
                <img
                  src="/niu.webp"
                  alt="niu"
                  className="h-full w-full rounded object-fill object-center md:rounded-none md:object-cover md:object-bottom"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-5 col-span-1 mx-4 border-t md:order-none md:mx-0">
              <div className="h-full w-full pt-4 md:p-0">
                <img
                  src="/vaka.webp"
                  alt="vaka"
                  className="h-full w-full rounded object-fill object-center md:rounded-none md:object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-6 col-span-1 md:order-none">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <h2 className="text-xl font-black lg:text-2xl">Vaka</h2>
                <p className="max-w-screen-sm text-base">
                  The vaka sails pictured in our logo depict the journey ahead,
                  the future direction of Niuvaka and the aspirational futures
                  for our Pasifika communities. They also represent the Pacific
                  Ocean and the journey between the Pacific Islands and the
                  voyage to Aotearoa. One sail is darker than the other - it
                  reflects the same purpose but also reflects diversity. We are
                  from diverse cultures in the Pacific, but we share common
                  values.
                </p>
              </div>
            </div>
            <div className="order-8 col-span-1 md:order-none">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <h2
                  id="tagata-pasifika-tangata-whenua-te-tiriti-o-waitangi"
                  className="text-xl font-black lg:text-2xl"
                >
                  Tagata Pasifika, Tangata Whenua & Te Tiriti o Waitangi
                </h2>
                <p className="max-w-screen-sm text-base">
                  Iwi-Māori and Pacific Peoples have many historical bonds and
                  connections including genealogy, kinship, traditions, and
                  beliefs, as well as navigating and traversing Te Moana nui o
                  Kiva, the Pacific Ocean, upon vaka, all of which precedes Te
                  Tiriti o Waitangi. As a Pasifika organisation, Niuvaka affirms
                  and celebrates the multitude of historic and current
                  relationships it has with Iwi-Māori further to recognising
                  Iwi-Māori as Tangata Whenua, the indigenous people of
                  Aotearoa. Niuvaka also acknowledges Te Tiriti o Waitangi as
                  the founding document that sets the contemporary context for
                  Tagata Pasifika in present day Aotearoa-New Zealand, which
                  correspondingly reflects a large percentage of Tagata Pasifika
                  young people being of Tangata Whenua descent also.
                </p>
              </div>
            </div>
            <div className="order-7 col-span-1 mx-4 border-t md:order-none md:mx-0">
              <div className="h-full w-full pt-4 md:p-0">
                <img
                  src="/ngatangiia_rarotonga.webp"
                  alt="ngatangiia rarotonga"
                  className="h-full w-full rounded object-fill object-center md:rounded-none md:object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-9 col-span-1 mx-4 border-t md:order-none md:mx-0">
              <div className="h-full w-full pt-4 md:p-0">
                <img
                  src="/tapa.webp"
                  alt="tapa"
                  className="h-full w-full rounded object-fill object-center md:rounded-none md:object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-10 col-span-1 md:order-none">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <h2
                  id="pasifika-diversity"
                  className="text-xl font-black lg:text-2xl"
                >
                  Pasifika Diversity
                </h2>
                <p className="max-w-screen-sm text-base">
                  Pacific Peoples or Tagata Pasifika are umbrella terms, among
                  others, used to describe the multitude of island territories
                  and nations across the South Pacific Ocean, yet each nation
                  has its own uniqueness and distinctiveness, each with its own
                  intricate and elaborate micro-culture. As a Pasifika
                  organisation, Niuvaka acknowledges the special nature of
                  diverse Pasifika identities and recognises the multifaceted
                  characteristics of Tagata Pasifika.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-mint-500 to-mint-400">
          <div className="container mx-auto space-y-8 px-0 py-8">
            <div
              id="our-team"
              className="p-4 text-center font-black text-white"
            >
              <h2 className="text-2xl lg:text-4xl">Meet the Niuvaka Board</h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-16">
              {governanceBoard.map(BoardItem)}
            </div>

            <hr className="mx-4 border-black" />

            <div className="grid grid-cols-1 gap-8 p-8 pt-0 md:grid-cols-2 lg:grid-cols-4">
              <h3 className="col-span-full text-center text-2xl font-black text-white lg:text-4xl">
                Meet Our Team
              </h3>

              {staff.map(({ image, name, role, description }, index) => (
                <Fragment key={name}>
                  {index === 0 && (
                    <div className="col-span-1 hidden lg:block"></div>
                  )}
                  {index === 2 && (
                    <div className="col-span-1 hidden lg:block"></div>
                  )}
                  <div
                    className={
                      "group relative col-span-1 flex flex-col items-center gap-4 text-center"
                    }
                  >
                    <div className="flex w-full max-w-60 shrink-0 items-center justify-center overflow-hidden rounded-full group-odd:bg-coffee-50 group-even:bg-mint-500">
                      <AspectRatio ratio={1 / 1}>
                        <img
                          src={image}
                          alt={name}
                          className="size-full object-cover object-top"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </div>
                    <div className="text-2xl font-black">{name}</div>
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-200 ease-in-out group-hover:max-h-48 group-hover:opacity-100">
                      <div className="text-xl font-bold text-coffee-400">
                        {role}
                      </div>
                      <div className="text-xl font-normal">{description}</div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <Partners showDescription />

        <section
          id="work-with-us"
          className="bg-gradient-to-b from-mint-500 to-mint-400"
        >
          <div className="mx-auto flex flex-col items-center justify-center gap-8 p-8">
            <h2 className="pt-4 text-center text-2xl font-bold text-white lg:text-4xl">
              Work With Us
            </h2>
            <p className="max-w-screen-2xl text-center text-base lg:text-lg">
              Niuvaka Trust has a vision for Tagata Pasifika to be Thriving,
              Flourishing and Resilient. We work with Tagata Pasifika, Pasifika
              families & Pasifika communities for the realisation of their
              aspirations and do this through partnering to build capacity &
              capability of Pasifika communities. We aim to achieve our Vision
              through the delivery of our health, social, training & employment
              services as well as our community-led projects & initiatives.
              <br />
              <br />
              Join the Niuvaka Trust team to be an important part of making a
              real difference for Pasifika communities that we serve. We are a
              small team of 14 dedicated and friendly staff, in an organisation
              that is growing and developing. The environment is lively and
              perfect for someone who is passionate about advancing aspirations
              for Tagata Pasifika. Niuvaka Trust is a Not-for-Profit Pasifika
              Charitable Trust based in Palmerston North covering the MidCentral
              region providing opportunities to Pasifika communities and
              connecting Tagata Pasifika to support services for the best
              possible outcomes. Niuvaka Trust has a holistic approach to our
              work, this is reflected in the services we provide with and for
              Pasifika communities.
            </p>

            <CareerForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
