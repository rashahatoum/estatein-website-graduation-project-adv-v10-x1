export interface BrandingData {
  logoIcon: string;
  logoText: string;
  emailIcon: string;
  emailPlaceholder: string;
  shareIcon: string;
}
export interface ColumnData {
  header: string;
  links: string[];
}
export interface FooterBottomData {
  copyright: string;
  legalLinks: string;
  socialIcons: string[];
}

/**
 * Generic content shape for a page section header
 * (title + description + optional CTA button label).
 * Reused by any slider-based section (FAQs, Properties, Testimonials...).
 */
export interface SectionHeaderData {
  title: string;
  description: string;
  buttonContent: string;
}