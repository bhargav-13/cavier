import AboutSectionHeading from './AboutSectionHeading.jsx'
import Reveal from './Reveal.jsx'

const AboutTeamSection = ({ members }) => {
  return (
    <section className="bg-page py-10 text-white md:py-10 md:pb-0">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        
        <AboutSectionHeading title="Meet Our Team" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              
              <article className="group">
                
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[340px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>

                {/* NAME */}
                <div className="mt-4">
                  <p className="text-lg font-medium">{member.name}</p>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>

              </article>

            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection