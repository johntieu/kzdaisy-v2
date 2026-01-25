import PortfolioSection from './PortfolioSection'
import './Portfolio.css'

function PilatesPortfolio() {
  const items = [
    {
      title: 'About',
      description: 'Your pilates background and certifications.',
      placeholder: 'Instructor Photo'
    },
    {
      title: 'Classes',
      description: 'Information about your classes and approach.',
      placeholder: 'Class Image'
    },
    {
      title: 'Studio',
      description: 'Details about your teaching environment.',
      placeholder: 'Studio'
    }
  ]

  return (
    <PortfolioSection
      title="Pilates Portfolio"
      subtitle="Movement • Wellness • Instruction"
      items={items}
    />
  )
}

export default PilatesPortfolio
