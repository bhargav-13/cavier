import Reveal from './Reveal.jsx'

const AboutSectionHeading = ({ title, eyebrow, className = '' }) => {
  return (
    <Reveal className={className}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[28px] md:text-4xl font-normal text-start">
        {title}
      </h2>
    </Reveal>
  )
}

export default AboutSectionHeading
