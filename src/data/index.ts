import type { BrandingData, ColumnData, FooterBottomData, SectionHeaderData } from "../type";

export const brandingData: BrandingData = {
  logoIcon: "/logo.png",
  logoText: "Estatein",
  emailIcon: "/EmailImage.png",
  emailPlaceholder: "Enter Your Email",
  shareIcon: "/ShareImage.png",
};

export const columnsData: { [key: string]: ColumnData } = {
  home: { header: "Home", links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"] },
  about: { header: "About Us", links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"] },
  properties: { header: "Properties", links: ["Portfolio", "Categories"] },
  services: { header: "Services", links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"] },
  contact: { header: "Contact Us", links: ["Contact Form", "Our Offices"] }
};

export const footerBottomData:FooterBottomData = {
  copyright: "@2023 Estatein. All Rights Reserved.",
  legalLinks: "Terms & Conditions",
  socialIcons: ["/face.png", "/linkedin.png", "/twitter.png", "/youtube.png"],
};

/**
 * Header content for the FAQs section (title/description/CTA),
 * used by <FaqSection /> to feed <SliderSection />.
 */
export const faqsSectionData: SectionHeaderData = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  buttonContent: "View All FAQ's",
};

/**
 * Content for the global "Call To Action" section
 * shown at the bottom of every page (mounted once in RootLayout).
 */
export const ctaSectionData: SectionHeaderData = {
  title: "Start Your Real Estate Journey Today",
  description:
    "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
  buttonContent: "Explore Properties",
};