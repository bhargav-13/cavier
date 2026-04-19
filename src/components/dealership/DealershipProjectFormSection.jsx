import { useState } from 'react'
import Reveal from '../about/Reveal'
import AboutSectionHeading from '../about/AboutSectionHeading'
import Button from '../utils/Button'

const initialState = {
  builderName: '',
  projectName: '',
  area: '',
  city: '',
  state: '',
  pincode: '',
  email: '',
  mobileNumber: '',
  comments: '',
}

const DealershipProjectFormSection = ({ fields }) => {
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="overflow-hidden bg-page px-6 pb-10 text-white md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <AboutSectionHeading
            title='Project Form'
            className="max-w-xl"
          />
        </Reveal>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            {fields.map((field, index) => (
              <Reveal key={field.name} delay={0.08 + index * 0.04} y={22}>
                <label className="block">
                  <span className="text-sm text-foreground">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formValues[field.name]}
                    onChange={handleChange}
                    className="mt-2 w-full border border-white/40 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white"
                  />
                </label>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} y={24}>
            <label className="mt-6 block">
              <span className="text-sm text-foreground">Comment*</span>
              <textarea
                name="comments"
                value={formValues.comments}
                onChange={handleChange}
                rows="4"
                className="mt-2 w-full resize-none border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white"
              />
            </label>
          </Reveal>

          <div className="mt-5 flex justify-center">
            <Reveal delay={0.38} y={20}>
              <Button text='Contact Now' className='border border-white/35' />
            </Reveal>
          </div>
        </form>
      </div>
    </section>
  )
}

export default DealershipProjectFormSection
