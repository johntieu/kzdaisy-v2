import PortfolioSection from './PortfolioSection'
import './Portfolio.css'

function ActingPortfolio() {
  const items = [
    {
      title: 'About',
      description: 'Your acting bio and experience goes here.',
      placeholder: 'Headshot'
    },
    {
      title: 'Recent Work',
      description: 'Description of recent performances or roles.',
      placeholder: 'Project Image'
    },
    {
      title: 'Demo Reel',
      description: 'Your demo reel or performance highlights.',
      placeholder: 'Reel'
    }
  ]

  return (
    <PortfolioSection
      title="Acting Portfolio"
      subtitle="Performance • Film • Theater"
      items={items}
    />
  )
}

export default ActingPortfolio
