import Button from "../components/Button";
import { ctaSectionData } from "../data";

interface CTAProps {
  title?: string;
  description?: string;
  buttonContent?: string;
  onButtonClick?: () => void;
}

/**
 * CTA (Call To Action)
 * ---------------------
 * Global, page-agnostic section rendered once inside <RootLayout />
 * (right above the <Footer />), so it automatically appears on every
 * page without being duplicated per-page.
 *
 * Visual composition:
 *  - A single decorative "AbstractDesign" image is used twice and
 *    mirrored with CSS transforms instead of shipping two separate
 *    files, to avoid duplicate assets/requests.
 *  - Desktop/tablet (md+): one copy anchored to the bottom-left edge,
 *    the mirrored copy anchored to the top-right edge.
 *  - Mobile (below md): one copy anchored to the top-left corner,
 *    the mirrored copy anchored to the bottom-right corner.
 *  - The section has a 1px top/bottom border (#262626 / grey-15) and
 *    no side borders, matching the rest of the site's section dividers.
 *
 * Content is data-driven (via `ctaSectionData`) but fully overridable
 * through props if a specific page ever needs different copy.
 *
 * @param {CTAProps} props
 */
const CTA = ({
  title = ctaSectionData.title,
  description = ctaSectionData.description,
  buttonContent = ctaSectionData.buttonContent,
  onButtonClick,
}: CTAProps) => {
  return (
    <section
      className="CTA-Section relative isolate w-full overflow-hidden border-t border-b border-grey-15 bg-grey-08 px-16 py-40 md:px-80 md:py-60 min-[1440px]:px-162"
      >
          <img
        src="/assets/imgs/CtaAbstractDesign.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none
                   bottom-0 right-0 w-220 
                   md:bottom-0 md:right-0 md:top-auto md:block md:w-480 lg:w-2xl"
      />
      <img
        src="/assets/imgs/CtaAbstractDesign.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none
                   top-0 left-0 w-220 rotate-180
                    md:left-0 md:rotate-0 md:bottom-0 md:w-480 md:-scale-x-100 lg:w-2xl"
      />

      <div className="CTA-Content relative z-10 flex flex-col items-start gap-20 md:flex-row md:items-center md:justify-between md:gap-40">

    <div className="flex-1 md:max-w-[70%] min-[1440px]:max-w-900">
      <h2 className="mb-10 text-[28px] font-semibold text-white md:text-[38px]">
        {title}
      </h2>
      <p className="text-[14px] font-medium text-grey-60 md:text-[16px] min-[1440px]:text-[18px]">
        {description}
      </p>
    </div>

    <Button
      content={buttonContent}
      onClick={onButtonClick}
      className="h-50 text-[14px] lg:text[18px] w-full shrink-0 rounded-lg bg-purple-60 px-20 text-white transition-colors hover:bg-purple-65 cursor-pointer md:w-auto"
    />
    </div>
    </section>
  );
};

export default CTA;