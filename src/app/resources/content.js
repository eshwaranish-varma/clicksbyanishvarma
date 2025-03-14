import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anish",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Photographer",
  avatar: "/images/avatar.jpg",
  location: "Ashburn, Virginia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu"], // optional: Leave the array empty if you don't want to display languages
  phone: "+5712472552",
  email: "eshwaranish.varma@outlook.com",
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about photography, events, and share insights on capturing special moments.
    </>
  ),
};

const social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/anishvarma/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Phone",
    icon: "phone",
    link: `tel:${person.phone}`,
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Capturing Memories, One Click at a Time</>,
  subline: (
    <>
      I'm Anish, a passionate photographer specializing in birthdays, baby showers, traditional events, and portraits.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, a ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anish Varma is a photographer based in Ashburn, Virginia, with a passion for capturing life's special moments.
        Specializing in birthdays, baby showers, traditional events, and portraits, he ensures each frame tells a story.
      </>
    ),
  },
};

const work = {
  label: "Work",
  title: "My Photography Portfolio",
  description: `A collection of ${person.name}'s photography projects`,
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A curated photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Birthday Event",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Traditional Ceremony",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Portrait Photography",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
