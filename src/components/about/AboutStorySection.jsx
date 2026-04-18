import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Button from "../utils/Button.jsx";
import AboutSectionHeading from "./AboutSectionHeading.jsx";

const AboutStorySection = ({ content }) => {
  return (
    <section className="bg-page py-5 text-foreground md:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:px-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <AboutSectionHeading
          title={content.title}
        />

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-md text-base leading-8 text-muted-strong md:text-lg">
              {content.body}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <Button text={content.cta} icon={<ChevronRight />} />
          </Reveal>
        </div>

        <Reveal x={28} className="overflow-hidden">
          <div className="aspect-[1.08] overflow-hidden">
            <img
              src={content.image}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutStorySection;
