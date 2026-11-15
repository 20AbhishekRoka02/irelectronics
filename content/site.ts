export type IconName =
  | "monitor"
  | "board"
  | "components"
  | "office"
  | "school"
  | "reseller"
  | "integrator"
  | "lab"
  | "import"
  | "check"
  | "box"
  | "warranty"
  | "invoice"
  | "truck"
  | "arrow"
  | "shield"
  | "phone"
  | "mail"
  | "clock"
  | "pin"
  | "menu"
  | "close"
  | "chat";

export type Testimonial = {
  quote: string;
  name: string;
  organization: string;
};

export type ClientLogo = {
  name: string;
  image: string;
  alt: string;
};

const business = {
  name: "[BUSINESS NAME]",
  tagline: "[TAGLINE]",
  phone: "[PHONE]",
  whatsapp: "[WHATSAPP]",
  email: "[EMAIL]",
  address: "[ADDRESS]",
  city: "[CITY, STATE]",
  hours: "[HOURS]",
  gst: "[GST]",
  yearsInBusiness: "[YEARS]",
  brands: "[BRANDS]",
} as const;

export const site = {
  business,
  metadata: {
    title: `Wholesale LED Monitors & Motherboards | ${business.name}`,
    description:
      `Wholesale LED monitors, motherboards and computer components for offices, education and IT businesses. Request a bulk quote from ${business.name}.`,
    locale: "en_IN",
  },
  navigation: {
    links: [
      { label: "Products", href: "#products" },
      { label: "Why us", href: "#why-us" },
      { label: "Industries", href: "#industries" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    mainNavigationLabel: "Main navigation",
    menuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    callLabel: "Call",
    whatsappLabel: "WhatsApp us",
  },
  hero: {
    eyebrow: "Wholesale supply for business",
    title:
      "Wholesale LED Monitors & Motherboards for Offices, Colleges and IT Resellers",
    description:
      "Bulk import, quality checks before dispatch, GST invoice and warranty support. Get a quote within [RESPONSE TIME] on WhatsApp.",
    primaryAction: "Get bulk quote on WhatsApp",
    secondaryAction: "Call",
    image: {
      src: "/warehouse-placeholder.svg",
      alt: "Illustration placeholder of monitor stock ready for wholesale dispatch",
      caption: "Wholesale supply, prepared around your requirement",
      label: "Stock and warehouse image placeholder",
    },
    highlight: "Wholesale pricing on enquiry",
  },
  trustStrip: {
    heading: "Wholesale supply, with the details that matter",
    action: "Discuss your requirement",
    items: [
      {
        value: `${business.yearsInBusiness}+`,
        label: "Years in business",
        icon: "shield" as const,
      },
      {
        value: "[X]+",
        label: "Institutions supplied",
        icon: "school" as const,
      },
      { value: "GST", label: "Registered business", icon: "invoice" as const },
      {
        value: "[DISPATCH COVERAGE]",
        label: "Dispatch coverage",
        icon: "truck" as const,
      },
    ],
  },
  products: {
    eyebrow: "Product range",
    title: "Components for your next bulk requirement",
    description:
      "Share the quantities and specifications you need. We’ll confirm availability and wholesale pricing on enquiry.",
    cards: [
      {
        id: "led-monitors",
        icon: "monitor" as const,
        title: "LED Monitors",
        description:
          "Monitors for office deployments, classrooms, labs and reseller inventory.",
        details: [
          "Screen size: [AVAILABLE SIZES]",
          "Resolution: [AVAILABLE RESOLUTIONS]",
          "Ports and warranty: confirm on enquiry",
        ],
        action: "Request monitor details",
        whatsappMessage:
          "Hi, I'm interested in LED monitors in bulk. Please share the details.",
      },
      {
        id: "motherboards",
        icon: "board" as const,
        title: "Motherboards",
        description:
          "Boards for system builds, IT projects and computer hardware resellers.",
        details: [
          "Form factors: [AVAILABLE FORM FACTORS]",
          "Chipsets and sockets: [AVAILABLE OPTIONS]",
          "Warranty: confirm on enquiry",
        ],
        action: "Request motherboard details",
        whatsappMessage:
          "Hi, I'm interested in motherboards in bulk. Please share the details.",
      },
      {
        id: "other-components",
        icon: "components" as const,
        title: "Other Components",
        description:
          "Ask about PCBs and similar components for your business requirement.",
        details: [
          "PCBs and related components",
          "Specifications: share your requirement",
          `Brands: ${business.brands}`,
        ],
        action: "Request component details",
        whatsappMessage:
          "Hi, I'm interested in computer components in bulk. Please share the details.",
      },
    ],
  },
  audiences: {
    eyebrow: "Who we supply",
    title: "Wholesale supply for teams that build and equip",
    description:
      "For organizations buying for their own operations and businesses supplying technology to others.",
    action: "Enquire for your organization",
    items: [
      { icon: "office" as const, label: "Corporate offices" },
      { icon: "school" as const, label: "Colleges and schools" },
      { icon: "reseller" as const, label: "IT resellers" },
      { icon: "integrator" as const, label: "System integrators" },
      { icon: "lab" as const, label: "Computer labs" },
    ],
  },
  benefits: {
    eyebrow: "Why work with us",
    title: "Straightforward wholesale supply",
    description:
      "Practical support from product selection through dispatch. Confirm the details of your order with our team.",
    action: "Ask us about wholesale supply",
    items: [
      {
        icon: "import" as const,
        title: "Direct import",
        description:
          "Imported electronics for business and institutional requirements.",
        enabled: true,
      },
      {
        icon: "check" as const,
        title: "Quality checks",
        description: "Stock is checked before dispatch.",
        enabled: true,
      },
      {
        icon: "box" as const,
        title: "Bulk availability",
        description:
          "Share your quantities so we can confirm current availability.",
        enabled: true,
      },
      {
        icon: "warranty" as const,
        title: "Warranty support",
        description: "Warranty terms are confirmed with your quotation.",
        enabled: true,
      },
      {
        icon: "invoice" as const,
        title: "GST invoicing",
        description: "GST invoice provided for eligible business orders.",
        enabled: true,
      },
      {
        icon: "truck" as const,
        title: "Dispatch coordination",
        description:
          "Dispatch timing and coverage are confirmed for each requirement.",
        enabled: true,
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "From requirement to dispatch",
    description:
      "A clear enquiry process for your next business or institutional order.",
    action: "Start your enquiry",
    items: [
      {
        number: "01",
        icon: "chat" as const,
        title: "Send your requirement",
        description:
          "Tell us the product, specifications, quantity and delivery location.",
      },
      {
        number: "02",
        icon: "invoice" as const,
        title: "Receive a quotation",
        description:
          "We’ll confirm availability, wholesale pricing and applicable terms.",
      },
      {
        number: "03",
        icon: "truck" as const,
        title: "Arrange delivery",
        description:
          "Once confirmed, we coordinate dispatch with the applicable invoice.",
      },
    ],
  },
  proof: {
    eyebrow: "Customer stories",
    title: "Trusted by teams we work with",
    action: "Discuss your requirement",
    testimonials: [] as Testimonial[],
    clientLogos: [] as ClientLogo[],
  },
  about: {
    eyebrow: "About us",
    title: `Your wholesale electronics supply partner in ${business.city}`,
    paragraphs: [
      `${business.name} supports organizations and technology businesses with wholesale LED monitors, motherboards and related components.`,
      `Our team is based in ${business.city}. Get in touch to discuss specifications, quantities and delivery requirements for your next order.`,
    ],
    image: {
      src: "/premises-placeholder.svg",
      alt: `Illustration placeholder for the ${business.name} premises or owner photo`,
      label: "Replace with a genuine premises or owner photo",
    },
    details: [
      { label: "Based in", value: business.city, icon: "pin" as const },
      {
        label: "Brands stocked",
        value: business.brands,
        icon: "components" as const,
      },
    ],
    action: "Talk to our team",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Good to know before you enquire",
    description:
      "Need a detail that isn’t listed? Send us your requirement and we’ll help clarify it.",
    helpText: "Still have a question? Our team is happy to help.",
    action: "Ask us on WhatsApp",
    items: [
      {
        question: "What is the minimum order quantity?",
        answer:
          "Minimum order quantities depend on the product and current stock. Tell us the item and quantity you need so we can confirm the applicable minimum.",
      },
      {
        question: "How does wholesale pricing work?",
        answer:
          "Wholesale pricing is shared on enquiry. Send the product specifications and quantity for a quotation.",
      },
      {
        question: "What warranty is available?",
        answer:
          "Warranty coverage varies by product and brand. We’ll confirm the applicable warranty terms with your quotation.",
      },
      {
        question: "Do you ship to my location?",
        answer:
          "Dispatch coverage and delivery timelines depend on the destination and order. Share your delivery location to confirm availability.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Payment terms: [PAYMENT TERMS]. Please confirm the applicable terms with our team before placing an order.",
      },
      {
        question: "Can you provide a GST invoice?",
        answer:
          "GST invoice: [GST INVOICE DETAILS]. Share your business details when requesting a quotation.",
      },
      {
        question: "Can I request a sample?",
        answer:
          "Sample availability: [SAMPLE POLICY]. Contact us with the product and quantity you’re considering.",
      },
      {
        question: "Which brands do you stock?",
        answer:
          `Brands stocked: ${business.brands}. Contact us to confirm the brand and model currently available.`,
      },
    ],
    expandLabel: "Show answer",
    collapseLabel: "Hide answer",
  },
  enquiry: {
    eyebrow: "Get a wholesale quote",
    title: "Tell us what your team needs",
    description:
      "Share a few details and our team will follow up. For a faster response, you can also message us on WhatsApp.",
    fields: {
      name: { label: "Your name", placeholder: "Your name" },
      phone: { label: "Phone number", placeholder: "Your business contact number" },
      requirement: {
        label: "What do you need?",
        placeholder:
          "Product, specifications, quantity and delivery location",
      },
      honeypot: { label: "Leave this field empty" },
    },
    submitLabel: "Send enquiry",
    submittingLabel: "Sending your enquiry...",
    successTitle: "Thanks — your enquiry is received.",
    successDescription:
      "Our team will follow up using the contact details you provided.",
    whatsappAction: "Continue on WhatsApp",
    whatsappMessage:
      "Hi, I'm {name}. My phone number is {phone}. My requirement: {requirement}",
    emailSubject: "New wholesale website enquiry",
    emailLabels: {
      name: "Name",
      phone: "Phone",
      requirement: "Requirement",
    },
    apiErrors: {
      invalidRequest: "Invalid request body.",
      invalidDetails: "Invalid enquiry details.",
      emailConfiguration: "Enquiry email delivery is not configured correctly.",
      emailDelivery: "Unable to deliver the enquiry email.",
    },
    privacyNote:
      "Your details are used only to respond to this business enquiry.",
    validation: {
      name: "Enter your name.",
      phone: "Enter a valid phone number.",
      requirement: "Tell us what you need.",
      generic: "We couldn’t send your enquiry. Please try again or contact us directly.",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s discuss your wholesale requirement",
    description:
      "Speak with our team about product availability, quantities and delivery.",
    addressLabel: "Visit or write to us",
    hoursLabel: "Business hours",
    phoneLabel: "Call us",
    emailLabel: "Email us",
    whatsappLabel: "Message us",
    mapLabel: "Find us on Google Maps",
    mapQuery: `${business.address}, ${business.city}`,
  },
  footer: {
    description: "Wholesale electronics for offices, education and IT businesses.",
    gstLabel: "GSTIN",
    phoneAction: "Call our team",
    whatsappAction: "WhatsApp our team",
    navigationLabel: "Footer navigation",
    copyright: `© ${business.name}. All rights reserved.`,
  },
  actions: {
    whatsappDefaultMessage:
      "Hi, I’d like to enquire about wholesale electronics. Please share the details.",
    callAction: "Call our team",
    emailAction: "Email our team",
    whatsappAction: "Chat with us on WhatsApp",
    floatingWhatsappLabel: `Chat with ${business.name} on WhatsApp`,
    bottomBarCall: "Call",
    bottomBarWhatsapp: "WhatsApp",
  },
  common: {
    logoAlt: `${business.name} logo placeholder`,
    learnMore: "Learn more",
    backToTop: "Back to top",
    clientLogoLabel: "Client logo",
    close: "Close",
    open: "Open",
  },
} as const;
