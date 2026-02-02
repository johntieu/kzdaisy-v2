import PortfolioSection from './PortfolioSection'
import './Portfolio.css'
import prenatalPhoto from '/pilates-photos/prenatal.jpeg'

function PilatesPortfolio() {
  const items = [
    {
      title: 'Mat Pilates & Yogalates',
      description: 'Certified Mat Pilates & Yoga Instructor',
      
      placeholder: ''
    },
    {
      title: 'Prenatal Fitness & Wellness',
      description: 'Certified Prenatal Fitness Instructor',
      image: prenatalPhoto,
      placeholder: 'Class Image'
    },
    {
      title: 'Reformer Pilates (Coming Soon)',
      description: 'Certification In Progress',
      
      placeholder: ''
    }
  ]

  return (
    <PortfolioSection
      title="Pilates Classes"
      subtitle="Mat Pilates • Yogalates • Prenatal Fitness • Private & Group Sessions"
      items={items}
    />
    
  )
}

export default PilatesPortfolio
