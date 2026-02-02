import audioDemo from '/KZDaisy-CommercialDemo.mp3'

function RecentWorkTab() {
  return (
    <div className="recent-work">
      <div className="video-item">
        <h3>Actor</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/wKKxllDWRQ4?rel=0&modestbranding=1"
            title="Actor Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="video-item">
        <h3>Writer</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/89h3EfuBoJo?rel=0&modestbranding=1"
            title="Writer Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="video-item">
        <h3>Improviser</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Cxt4ijdPFNc?rel=0&modestbranding=1"
            title="Improviser Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
        <div className="video-item">
          <h3>Musical Improviser</h3>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/s6cmfiyBcgI?rel=0&modestbranding=1"
              title="Musical Improviser Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
      </div>
      <div className="video-item">
        <h3>Puppeteer</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/7J5-XOCnSsY?rel=0&modestbranding=1"
            title="Puppeteer Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="video-item">
        <h3>Puppet Improviser</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/CtMgFESHJik?rel=0&modestbranding=1"
            title="Puppet Improviser Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="audio-item">
        <h3>Voiceover Artist</h3>
        <div className="audio-content">
          <div className="audio-wrapper">
            <audio controls>
              <source src={audioDemo} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="audio-equipment">
            <ul>
              <li><strong>Microphone:</strong> Rode NT1</li>
              <li><strong>Audio Interface:</strong> Focusrite Scarlett 2i2</li>
              <li><strong>DAW:</strong> Audacity</li>
              <li><strong>Directed Sessions:</strong> Zoom</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="coaching-link">Reach out <a href="#contact" onClick={(e) => {
        e.preventDefault()
        window.location.hash = 'contact'
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      }}>here</a> with coaching requests, booking inquiries, or just to say hi! </h3>
    </div>
  )
}

export default RecentWorkTab
