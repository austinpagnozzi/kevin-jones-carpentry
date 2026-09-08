// Single source of truth for every verified fact and piece of copy on this site.
// Every claim here traces back to factual-source-summary.json for the
// Kevin Jones Carpentry mockup job. Do not add a fact here that is not
// verified in that file.

export const business = {
  name: "Kevin Jones Carpentry",
  ownerFirstName: "Kevin",
  phoneDisplay: "(207) 578-0606",
  phoneHref: "tel:+12075780606",
  email: "kevinjonescarpentry@gmail.com",
  emailHref: "mailto:kevinjonescarpentry@gmail.com",
  addressLine1: "106 North Dexter Road",
  addressLine2: "Parkman, ME 04443",
  locationShort: "Parkman, Maine",
  facebookUrl: "https://www.facebook.com/people/Kevin-Jones-Carpentry/61552366566715/",
} as const;

export const ownWords = {
  experience: "20+ Year Experience",
  insurance: "Fully Insured",
} as const;

export type ServiceSlug =
  | "new-construction"
  | "barns"
  | "garages"
  | "sheds"
  | "decks"
  | "remodel"
  | "repairs";

export interface ServicePhoto {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface Service {
  slug: ServiceSlug;
  label: string;
  railTick: string;
  summary: string;
  detail: string;
  /** Natural-English call-to-action phrase for this specific service, used
   *  on its /services/[slug] page. Never a plural service name forced to
   *  do adjective duty (e.g. never "a barns project" or "a sheds project"). */
  ctaPhrase: string;
  photo?: ServicePhoto;
}

// Build order: Rough end of the span to Finish end, exactly as directed.
export const services: Service[] = [
  {
    slug: "new-construction",
    label: "New Construction",
    railTick: "New Construction",
    summary:
      "A new building from the footing up, framed and sheathed on ZIP System, trusses set and roof closed in.",
    detail:
      "This is ground-up work. Foundation and slab, walls framed and sheathed in ZIP System, trusses set (Kevin has run this by boom lift), and the building closed in and ready for the next trade. If you have a set of plans or even a rough sketch, that is enough to start the conversation.",
    ctaPhrase: "Call about a new build",
    photo: {
      src: "/images/truss-setting-boom-lift.webp",
      alt: "A gable truss being lifted into place by boom lift over a partially sheathed new building on a poured foundation",
      caption: "Setting trusses on a new building, ZIP System sheathing already up.",
      width: 720,
      height: 960,
    },
  },
  {
    slug: "barns",
    label: "Barns",
    railTick: "Barns",
    summary:
      "Barns and outbuildings built for the work they do, like the rough-sawn run-in shelter below.",
    detail:
      "Barns get built for the animals and equipment using them, not for looks first. Kevin frames them rough-sawn where that is the right call, sets them on a proper footing, and roofs them to shed Maine weather for years.",
    ctaPhrase: "Call about a barn you need built",
    photo: {
      src: "/images/run-in-shed-railcar.webp",
      alt: "A rough-sawn open-front shelter framed against the side of a maroon railcar, with a metal roof and exposed rafters",
      caption: "A rough-sawn run-in shelter, framed against a railcar, on a concrete footing.",
      width: 1500,
      height: 2000,
    },
  },
  {
    slug: "garages",
    label: "Garages",
    railTick: "Garages",
    summary: "Detached and attached garages, framed and finished to match the house or built to stand on their own.",
    detail:
      "A garage is structural work with a finish-carpentry ending: it has to frame square, close in tight, and end with doors, trim and siding that look like they belong. Call with your rough dimensions and what you want to store or park in it.",
    ctaPhrase: "Call about a garage you need built",
  },
  {
    slug: "sheds",
    label: "Sheds",
    railTick: "Sheds",
    summary: "Storage sheds and small outbuildings, sized and built for what you actually need to keep dry.",
    detail:
      "Sheds range from a simple lean-to to a framed structure with a real floor system and trim. Kevin builds them to hold up, not just to look good in a driveway for a season. Tell him what you are storing and roughly how much room you need.",
    ctaPhrase: "Call about a shed you need built",
  },
  {
    slug: "decks",
    label: "Decks",
    railTick: "Decks",
    summary: "Decks framed for the load they will actually carry, built onto the house or standing free.",
    detail:
      "A deck lives outside year round, so the framing underneath matters as much as the boards on top. Kevin frames to the ledger or on freestanding footings, whichever the site calls for, and finishes with the decking and railing you choose.",
    ctaPhrase: "Call about a deck you need built",
  },
  {
    slug: "remodel",
    label: "Remodel",
    railTick: "Remodel",
    summary: "Interior remodels and finish carpentry, down to the pine wainscoting and the closet shelving.",
    detail:
      "This is the finish end of the span: opening up a room, building in shelving and closets, running wainscoting and trim. The pine closet below was built in with diagonal wainscoting, a chair rail and a plank door on strap hinges. That level of detail is what a remodel gets.",
    ctaPhrase: "Call about a remodel",
    photo: {
      src: "/images/interior-pine-closet.webp",
      alt: "A built-in pine closet with a plank door on strap hinges, open shelving inside, and diagonal pine wainscoting on the surrounding wall",
      caption: "Built-in pine closet with diagonal wainscoting, a chair rail and LVP flooring.",
      width: 1200,
      height: 1600,
    },
  },
  {
    slug: "repairs",
    label: "Repairs",
    railTick: "Repairs",
    summary: "Repairs to framing, siding, decks, floors and trim, sized to the job and not padded into more work.",
    detail:
      "Not every call is a new build. Rot in a sill, a soft deck board, siding that took a hit over the winter: Kevin fixes what is actually broken. Describe what you are seeing and he can tell you what it will take to put right.",
    ctaPhrase: "Call about a repair",
  },
];

export const plusMark = {
  label: "+++",
  title: "Shed +++",
  body: "Kevin lists his services on Facebook ending in “Shed +++,” his own way of saying the list above is not the whole story. If your project does not fit neatly into one of the seven, call and describe it. If it is carpentry, it is worth the conversation.",
};

export const projectRecord = {
  intro:
    "Four jobs, both ends of the span. All of it genuine Kevin Jones Carpentry work, nothing staged for a photograph.",
  // One photograph row at a single fixed media height (the layout sets the
  // height; no tile sizes itself from its source image), widths 5:4:3 in
  // build order, then the crossing bridge as a full-width ruled entry
  // outside that row, sized to its own content instead of stretching to
  // match a photograph.
  entries: [
    {
      kind: "photo" as const,
      src: "/images/framing-walls-zip-sheathing.webp",
      alt: "Framed and partially sheathed exterior walls on a poured foundation and slab, ZIP System panels up, temporary braces holding the frame",
      caption: "Walls framed and sheathed in ZIP System, on a poured foundation and slab.",
      width: 1301,
      height: 1734,
      objectPosition: "50% 78%",
      label: "New Construction",
      widthShare: 5,
    },
    {
      kind: "photo" as const,
      src: "/images/run-in-shed-railcar.webp",
      alt: "A rough-sawn open-front shelter framed against the side of a maroon railcar, with a metal roof and exposed rafters",
      caption: "A rough-sawn run-in shelter, framed against a railcar, on a concrete footing.",
      width: 1500,
      height: 2000,
      objectPosition: "50% 55%",
      label: "Barns",
      widthShare: 4,
    },
    {
      kind: "photo" as const,
      src: "/images/interior-pine-closet.webp",
      alt: "A built-in pine closet with a plank door on strap hinges, open shelving inside, and diagonal pine wainscoting on the surrounding wall",
      caption: "Built-in pine closet with diagonal wainscoting, a chair rail and LVP flooring.",
      width: 1200,
      height: 1600,
      objectPosition: "50% 50%",
      label: "Remodel",
      widthShare: 3,
    },
    {
      kind: "text" as const,
      title: "Custom crossing bridge",
      body: "A pressure-treated footbridge with railings, built to cross a stream.",
      note: "No photograph of this one is available yet, but it is real completed work.",
    },
  ],
};

export const howKevinWorks = {
  heading: "How Kevin works",
  intro:
    "Kevin answers his own phone and does his own estimating. There is no office and no sales call, just a conversation about the job.",
  points: [
    "Call or email with what you are picturing, even if it is not fully worked out yet.",
    "Know roughly what kind of project it is: new construction, a barn, a garage, a shed, a deck, a remodel or a repair, or something that does not fit that list.",
    "If you have rough dimensions, a sketch, plans, or photos of the site, bring them. If you do not, that is fine too.",
    "Kevin will tell you plainly whether it is something he takes on and what he needs to see next.",
  ],
};

export const contactSheet = {
  heading: "Get in touch",
  intro:
    "Call is the fastest way to reach Kevin. Email works if you would rather write it out.",
  whatToHave:
    "Have the project type and a general sense of what you are picturing. Rough dimensions or a photo of the site help but are not required to start.",
};

export const heroCopy = {
  headline: "One carpenter. Rough frame to finished room.",
  subline: "Kevin Jones Carpentry, based in Parkman, Maine.",
};

export const factRule = {
  items: [
    { label: business.locationShort },
    { label: ownWords.experience, attribution: "Kevin's own words" },
    { label: ownWords.insurance, attribution: "Kevin's own words" },
  ],
};

export const allServiceNamesSentence =
  "Kevin takes on new construction, barns, garages, sheds, decks, remodels and repairs.";

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const siteCredit = {
  builder: "Pine State Creative",
};
