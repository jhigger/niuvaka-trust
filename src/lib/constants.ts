export const services = [
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Navigation Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
    id: "navigation-services",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Outreach Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
    id: "outreach-services",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Social Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit sem, pharetra ut semper sit amet, consectetur vel lectus. Pellentesque maximus sed nunc eget dapibus. Maecenas hendrerit commodo ante, sed consectetur nunc ultrices at.",
    id: "social-services",
  },
];

export const values = [
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Family",
    description:
      "Cherishing family as the centre and foundation for belonging and identity",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Faithfulness",
    description: "Being principled, devoted, dependable, and reliable",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Service",
    description:
      "Service for the benefit and good of all enacting kindness and thoughtfulness",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Relationships",
    description:
      "Relationships are nurtured, cared for, and honoured for shared mutual gain and success",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Respect",
    description:
      "Paying regard and respect valuing everyone and every situation",
  },
];

export const staff = [
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Dana Kunaiti",
    role: "‘Aka’aere | General Manager",
    description:
      "Mangaia i te Kuki Airani, Tahiti, Te Āti Haunui a Pāpārangi, Zierikzee i Horana",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Metaio Malama",
    role: "Business Development Manager",
    description: "Fasito’outa me Nofoali’i i Samoa",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Waimarama Albert",
    role: "Business Administrator",
    description: "Ngāti Raukawa, Ngāti Kahungunu, Ngāti Maniapoto",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Analena Talikimuli Siu",
    role: "Pasifika Community Connector",
    description: "‘Oku ou hai mei Tonga",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Stephanie Haami",
    role: "Pasifika Immunisation Coordinator",
    description: "Aitutaki i te Kuki Airani, Rangitikei",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Andrew Mose Gu Mulitalo",
    role: "Pasifika Health Navigator",
    description: "Letogo Apia, Iv’a Sava’i",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Mutsuo Hatakeyama",
    role: "Pasifika Navigator",
    description: "Ou te Sau mai nu’u Tanugamanono",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "William Damudamu",
    role: "Project Coordinator",
    description: "Vanuatu, Fiji",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Aumetua Lackey",
    role: "Pasifika Coordinator",
    description: "Mangaia i te Kuki Airani, Tahiti",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "Leana Hamlin",
    role: "Community Kai Support",
    description:
      "Rarotonga me Aitutaki i te Kuki Airani, Ngāti Kahungunu, Rongomaiwāhine",
  },
];

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    subLinks: [
      {
        name: "Who are we?",
        href: "/about#who-are-we",
      },
      {
        name: "Our Team",
        href: "/about#our-team",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      ...services.map(({ name, id: href }) => ({
        name,
        href: `/services#${href}`,
      })),
      {
        name: "Our Programmes",
        href: "/services#our-programmes",
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
    name: "Facebook",
    href: "https://web.facebook.com/NiuvakaTrust",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/trustniuvaka",
  },
];
