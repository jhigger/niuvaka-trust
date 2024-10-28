import { type ArticleProps } from "~/pages/news";

export const email = "info@niuvaka.org.nz";

export const services: {
  image: string;
  name:
  | "Navigation Service"
  | "Ola Lelei Service"
  | "Outreach Service"
  | "Social Service";
  description: string;
  id: string;
}[] = [
    {
      image: "/services/navigation.webp",
      name: "Navigation Service",
      description:
        "The Niuvaka Trust Pasifika Navigation Team provide support to Pacific peoples to improve equity of access and health outcomes and support the increase of Primary Care enrolment numbers.",
      id: "navigation-services",
    },
    {
      image: "/services/ola.webp",
      name: "Ola Lelei Service",
      description:
        "Ola Lelei is our new Job & Skills Hub that has been set up to support Tagata Pasifika to undertake training and study pathways to achieve sustainable employment outcomes.",
      id: "ola-lelei-and-kai-services",
    },
    {
      image: "/services/outreach.webp",
      name: "Outreach Service",
      description:
        "Immunisations Protecting the health of you and your vuvale (family) with necessary vaccinations and immunisations is important.",
      id: "outreach-services",
    },
    {
      image: "/services/social.webp",
      name: "Social Service",
      description:
        "Niuvaka assist Tagata Pasifika to connect to and access welfare, housing, and financial support services.  We also provide free kai support through our food hub, Are Toa Kaikai.",
      id: "social-services",
    },
  ];

export const values = [
  {
    image: "/values/family.webp",
    name: "Family",
    description:
      "Cherishing family as the centre and foundation for belonging and identity",
  },
  {
    image: "/values/relationships.webp",
    name: "Relationships",
    description:
      "Relationships are nurtured, cared for, and honoured for shared mutual gain and success",
  },
  {
    image: "/values/service.webp",
    name: "Service",
    description:
      "Service for the benefit and good of all enacting kindness and thoughtfulness",
  },
  {
    image: "/values/respect.webp",
    name: "Respect",
    description:
      "Paying regard and respect valuing everyone and every situation",
  },
  {
    image: "/values/faithfulness.webp",
    name: "Faithfulness",
    description: "Being principled, devoted, dependable, and reliable",
  },
];

export const focusAreas = [
  {
    image: "/focus_areas/cultural_identity.webp",
    name: "Cultural Identity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
  },
  {
    image: "/focus_areas/leadership.webp",
    name: "Leadership",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
  },
  {
    image: "/focus_areas/wellbeing.webp",
    name: "Wellbeing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
  },
  {
    image: "/focus_areas/connectivity.webp",
    name: "Connectivity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
  },
  {
    image: "/focus_areas/prosperity.webp",
    name: "Prosperity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
  },
  {
    image: "/focus_areas/young_people.webp",
    name: "Young People",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
  },
];

export const staff = [
  {
    image: "/team/Dana Kunaiti.webp",
    name: "Dana Kunaiti",
    role: "‘Aka’aere | General Manager",
    description:
      "Mangaia i te Kuki Airani, Tahiti, Te Āti Haunui a Pāpārangi, Zierikzee i Horana",
  },
  {
    image: "/team/Sharron Smith.webp",
    name: "Sharron Smith",
    role: "Executive Assistant",
    description: "Ngā Rauru",
  },
  {
    image: "/team/Waimarama Albert.webp",
    name: "Waimarama Albert",
    role: "Business Administrator",
    description: "Ngāti Raukawa, Ngāti Kahungunu, Ngāti Maniapoto",
  },
  {
    image: "/team/Metaio Malama.webp",
    name: "Metaio Malama",
    role: "Business Development Manager",
    description: "Fasito’outa me Nofoali’i i Samoa",
  },
  {
    image: "/team/Stephanie Haami.webp",
    name: "Stephanie Haami",
    role: "Pasifika Health Service Manager",
    description: "Aitutaki i te Kuki Airani, Rangitikei",
  },
  {
    image: "/team/Analena Siu.webp",
    name: "Analena Talikimuli Siu",
    role: "Pasifika Pathway Navigator",
    description: "‘Oku ou ha’u mei Tonga",
  },
  {
    image: "/team/William Damudamu.webp",
    name: "William Damudamu",
    role: "Project Coordinator",
    description: "Vanuatu, Fiji",
  },
  {
    image: "/team/Andrew Mulitalo.webp",
    name: "Andrew Gu-Mulitalo",
    role: "Pasifika Navigator",
    description: "Letogo Apia, Iv’a Sava’i",
  },
  {
    image: "/team/Mutsuo Hatakeyama.webp",
    name: "Mutsuo Hatakeyama",
    role: "Pasifika Navigator",
    description: "Ou te Sau mai nu’u Tanugamanono",
  },
  {
    image: "/team/Aumetua Lackey.webp",
    name: "Aumetua Lackey",
    role: "Pasifika Coordinator",
    description: "Mangaia i te Kuki Airani, Tahiti",
  },
  {
    image: "/team/Leana Hamlin.webp",
    name: "Leana Hamlin",
    role: "Community Kai Support",
    description:
      "Rarotonga me Aitutaki i te Kuki Airani, Ngāti Kahungunu, Rongomaiwāhine",
  },
  {
    image: "/team/Patricia Hadley.webp",
    name: "Patricia Hadley",
    role: "Pasifika Community Clinical Nurse",
    description: "Lotofaga Safata, Samoa, Waitaha, Aotearoa",
  },
  {
    image: "/team/Randy Freddie (Liuvaie).webp",
    name: "Randy Freddie (Liuvaie)",
    role: "Pasifika Training Coordinator",
    description: "Manunu, Hakupu, Niue mo Lakeba, Lau, Fiji",
  },
  {
    image: "/team/Luana Tonga.webp",
    name: "Luana Tonga",
    role: "Pasifika Relationship Navigator",
    description: "Vai-Ko-Puna/Pea, Tonga",
  },
];

type SubLinkType = {
  name: string;
  href: string;
  subLinks?: SubLinkType[];
};

export const navigationLinks: {
  name: string;
  href: string;
  subLinks?: SubLinkType[];
}[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
      subLinks: [
        {
          name: "Our Journey",
          href: "/about#our-journey",
          subLinks: [
            {
              name: "Our Name",
              href: "/about#our-name",
            },
            {
              name: "Our Logo",
              href: "/about#our-logo",
            },
            {
              name: "Tagata Pasifika, Tangata Whenua & Te Tiriti o Waitangi",
              href: "/about#tagata-pasifika-tangata-whenua-te-tiriti-o-waitangi",
            },

            {
              name: "Pasifika Diversity",
              href: "/about#pasifika-diversity",
            },
          ],
        },
        {
          name: "Our Team",
          href: "/about#our-team",
        },
        {
          name: "Our Partners",
          href: "/about#our-partners",
        },
        {
          name: "Work With Us",
          href: "/about#work-with-us",
        },
      ],
    },
    {
      name: "Our Work",
      href: "/services",
      subLinks: [
        ...services.map(({ name, id: href }) => ({
          name,
          href: `/services#${href}`,
          subLinks:
            name === "Outreach Service"
              ? [
                {
                  name: "Immunisation",
                  href: "/services#immunisation",
                },
                {
                  name: "Breast Screening",
                  href: "/services#breast-screening",
                },
                {
                  name: "Cervical Screening",
                  href: "/services#cervical-screening",
                },
                {
                  name: "Bowel Screening",
                  href: "/services#bowel-screening",
                },
                {
                  name: "Health Assessment and Wellbeing checks",
                  href: "/services#health-assessment-and-wellbeing-checks",
                },
              ]
              : name === "Social Service"
                ? [
                  {
                    name: "Are Toa Kaikai",
                    href: "/services#are-toa-kaikai",
                  },
                ]
                : undefined,
        })),
        {
          name: "Our Projects and Initiatives",
          href: "/services#our-projects-and-initiatives",
        },
      ],
    },
    {
      name: "News",
      href: "/news",
      subLinks: [
        {
          name: "Latest News",
          href: "/news#latest-news",
        },
        {
          name: "Events",
          href: "/news#events",
        },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

export const socials = [
  {
    name: "facebook",
    href: "https://web.facebook.com/NiuvakaTrust",
    image: "/socials/facebook.png",
  },
  {
    name: "tiktok",
    href: "https://www.tiktok.com/@niuvaka_trust",
    image: "/socials/tiktok.png",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/trustniuvaka",
    image: "/socials/instagram.png",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@niuvakatrust",
    image: "/socials/youtube.png",
  },
];

export const events: ArticleProps[] = [
  {
    type: "event",
    title: "Pasifika Fusion 2024 Immunisation",
    date: new Date(2024, 7 - 1, 2),
    video: "https://www.youtube.com/embed/ZZKVLEc8Weo?si=RDB0eudXHT7ZIHT1",
  },
  {
    type: "event",
    title: "Manawatū Rugby Immunisation campaign",
    date: new Date(2023, 11 - 1, 24),
    video: "https://youtube.com/embed/XnJvf8gIXnU?si=2RzLAh9XM8S8CKZA",
  },
  {
    type: "event",
    title: "Poly Paddles",
    date: new Date(2024, 10 - 1, 6),
    video: "https://www.youtube.com/embed/ybQTydfoNpM?si=RsYLvWBhweEtEMKc",
  },
  {
    type: "event",
    title: "Pacific Health Clinics",
    date: new Date(2024, 8 - 1, 8),
    image: "/news/clinic.webp",
  },
];

export const partners = [
  {
    image: "/partners/1.webp",
    link: "https://www.tewhatuora.govt.nz/",
  },
  {
    image: "/partners/3.webp",
    link: "https://www.jrmckenzie.org.nz/",
  },
  {
    image: "/partners/2.webp",
    link: "https://www.msd.govt.nz/",
  },
  {
    image: "/partners/4.webp",
    link: "https://www.dia.govt.nz/",
  },
  {
    image: "/partners/5.webp",
    link: "https://www.mpp.govt.nz/",
  },

  {
    image: "/partners/6.webp",
    link: "https://www.sportmanawatu.org.nz/",
  },
  {
    image: "/partners/7.webp",
    link: "https://tetihi.org.nz/collective-impact/ora-konnect/",
  },
  {
    image: "/partners/8.webp",
    link: "https://www.thinkhauora.nz/",
  },
  {
    image: "/partners/9.webp",
    link: "https://ecct.org.nz/",
  },
  {
    image: "/partners/10.webp",
    link: "https://lionfoundation.nz/",
  },
  {
    image: "/partners/11.webp",
    link: "https://www.pubcharitylimited.org.nz/",
  },
];

export const news: ArticleProps[] = [
  {
    type: "news",
    image: "/news/pasifika-families.webp",
    title: "Pasifika families learn to grow their own kai",
    date: new Date(2024, 6, 1),
    excerpt:
      "Palmerston North family man Tui Saumalu has discovered the gift of gardening.\n\nThe father-of-four is among the 18 families who have learnt the joy of growing their own food through the Niuvaka Trust’s Pasifika Home Garden Initiative.",
    url: "https://www.stuff.co.nz/nz-news/350321965/pasifika-families-learn-grow-their-own-kai",
  },
  {
    type: "news",
    image: "/news/jr-mckenzie.webp",
    title:
      "Niuvaka Trust – Thriving, Flourishing and Resilient Tagata Pasifika",
    date: new Date(2024, 5, 22),
    excerpt:
      "Based in Palmerston North, Niuvaka Trust’s purpose is to work cooperatively with Tagata Pasifika, Pasifika communities, and Pasifika families in the MidCentral region, to build their capacity and capability, and realise their aspirations. It has a vision is for Tagata Pasifika to be ‘Thriving, Flourishing and Resilient’.",
    url: "https://www.jrmckenzie.org.nz/stories/niuvaka-trust-thriving-flourishing-and-resilient-tagata-pasifika",
  },
];
