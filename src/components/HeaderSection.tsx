import type { ReactNode } from "react";

export interface HeaderSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

/**
 * HeaderSection
 * -------------
 * Standalone "title + description (+ optional action)" header block.
 * Not tied to any slider/section — purely presentational, driven
 * entirely by props.
 *
 * Responsive behavior:
 *  - Mobile/Tablet (below md): title, description, then the action
 *    (children) stacked vertically, full width.
 *  - Desktop (md+): title/description on the left, action aligned
 *    to the right, sharing the same row.
 *
 * @param {HeaderSectionProps} props
 */
const HeaderSection = ({ title, description, children, className = "" }: HeaderSectionProps) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-20 md:gap-5 ${className}`}>
      <div className="md:max-w-975 min-[1440px]:max-w-1200">
        <h1 className="text-[28px] md:text-[38px] font-semibold mb-6 md:mb-10 text-white">
          {title}
        </h1>
        <p className="text-[14px] md:text-[16px] min-[1440px]:text-[18px] text-grey-60 font-medium">
          {description}
        </p>
      </div>

      {children && (
        <div className="w-fit md:w-auto shrink-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default HeaderSection;