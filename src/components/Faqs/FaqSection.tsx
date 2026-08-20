import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

import SliderSection from "../Slider/SliderSection";
import FaqCard from "./FaqCard";
import Loading from "../Loading";
import Error from "../Error";

import { faqsSectionData } from "../../data";

/**
 * FaqSection
 * ----------
 * Home-page "Frequently Asked Questions" section.
 *
 * Data flow:
 *  Firestore ("faqs" collection)
 *    -> DataListener (onSnapshot, realtime)
 *    -> redux/slices/faqSlice (items/loading/error)
 *    -> this component (useSelector)
 *
 * No direct Firebase calls happen here — the section is a pure
 * consumer of the `faqs` slice, keeping data-fetching and UI decoupled.
 *
 * Layout/responsiveness is fully delegated to the existing
 * <SliderSection /> + <Slider /> components (1 card mobile /
 * 2 cards tablet / 3 cards desktop), so this component only
 * supplies the header copy and the list of <FaqCard /> children.
 */
const FaqSection = () => {
  const { items: faqs, loading, error } = useSelector(
    (state: RootState) => state.faqs
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="my-80 md:my-96">
      <SliderSection
        title={faqsSectionData.title}
        desc={faqsSectionData.description}
        desktopCards={3}
        tabletCards={2}
        mobileCards={1}
        showButton
        buttonContent={faqsSectionData.buttonContent}
        buttonClassName="h-50 rounded-lg border border-grey-15 bg-grey-08 px-20 text-white transition-colors hover:bg-grey-15 cursor-pointer whitespace-nowrap"
      >
        {faqs.map((faq) => (
          <FaqCard key={faq.id} faq={faq} />
        ))}
      </SliderSection>
    </div>
  );
};

export default FaqSection;