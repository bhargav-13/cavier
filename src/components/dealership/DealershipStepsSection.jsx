import AboutSectionHeading from "../about/AboutSectionHeading";
import Reveal from "../about/Reveal";

const DealershipStepsSection = ({ steps }) => {
  return (
    <section className="overflow-hidden bg-page px-6 py-10 text-white md:px-12 lg:px-24 lg:py-20 xl:px-40">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <AboutSectionHeading
            title="The Path To Partnership"
            className="flex items-center justify-center"
          />
        </Reveal>

        <div className="mt-16 grid gap-0 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={0.08 + index * 0.07}
              y={28}
              className="h-full"
            >
              <div
                className="relative flex h-full flex-col items-center py-4 md:py-0 md:px-4 text-center"
              >
                <div className="absolute left-0 top-8 hidden h-px w-[calc(50%-2rem)] bg-white/10 xl:block" />

                <div className="absolute right-0 top-8 hidden h-px w-[calc(50%-2rem)] bg-white/10 xl:block" />

                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center  border text-lg ${
                    step.isActive
                      ? " bg-gradient-to-br from-[#C6C6C6] to-[#454747] text-page"
                      : "border-white/10 bg-[#1F2020] text-white"
                  }`}
                >
                  {step.number}
                </div>

                <h3 className="mt-6 text-xs uppercase tracking-[0.35em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[300px] text-xs uppercase text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealershipStepsSection;
