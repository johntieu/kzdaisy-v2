import pic1 from '/pic1.jpeg'
import pic2 from '/pic2.jpeg'
import pic3 from '/pic3.jpeg'

function HeadshotsTab() {
  return (
    <div className="headshots-photos">
      <img src={pic1} alt="Headshot 1" className="headshots-photo" />
      <img src={pic2} alt="Headshot 2" className="headshots-photo" />
      <img src={pic3} alt="Headshot 3" className="headshots-photo" />
    </div>
  )
}

export default HeadshotsTab
