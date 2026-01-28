function TestimonialsTab() {
  const testimonials = [
    {
      text: "I've had the pleasure of working with KZ on a multitude of live and filmed projects. With each new project KZ brings a fresh, fun, and most importantly, funny take on any character she plays. She has the ability to take the wackiest characters and ground them in reality and vulnerability. She has the ability to take a devastating scene and still make you smile. Her talent is without question.",
      author: "Kim Alu, Director, Writer, Improv/Sketch Coach"
    },
    {
      text: "KZ has such bold and artistic visions for her projects, and always works the extra mile to bring it to life.",
      author: "Melissa Takai, Actor"
    },
    {
      text: "What a beautiful show. KZ is such a moving and brilliant performer.",
      author: "Kit C., Solo Show Audience Member"
    },
    {
      text: "KZ is a tour de force and inspiring artist who you don't want to miss. Your eyes will be drawn to her from the moment she appears on stage!",
      author: "Carlos Narvaez, Actor"
    },
    {
      text: "I never knew I liked improv until I saw KZ do it! Her style is engaging, so accessible, and hilarious in a subtle, unique way - I felt completely transported into the scene when I watched her perform.",
      author: "Fiona W., Audience Member"
    },
    {
      text: "KZ is a pleasure to work with: her comedic instincts, timing, and acting are awesome!",
      author: "Rachel L., Filmmaker"
    },
    {
      text: "KZ is a captivating performer in her economy of movement and emotional depth. Strikingly beautiful and brave, she's fearless!",
      author: "Savannah Kinzer, Actor"
    },
    {
      text: "KZ's improv show was the first one I had gone to since college, and I did not know what to expect. KZ's performance was so emotive and powerful, showing range from loveliness to being truly unhinged. I would definitely go again to gape, gasp, and of course, laugh.",
      author: "Betty F., Audience Member"
    },
    {
      text: "KZ knows how to stay grounded yet always interesting, and quite often outrageous. And, outrageously funny!",
      author: "James Navan, Improviser"
    },
    {
      text: "It's been an absolute pleasure to see KZ blossom into the talent that she is, all through her dedication and perseverance when it comes to her craft. Whether it's a soft sweet sound, or contemporary quirk, KZ has the reads you need for all things VO!",
      author: "Emma Romasco, Voice Actor & Coach"
    },
    {
      text: "I enjoy working with her so much, and I truly appreciate her willingness to learn and work on such a wide variety of repertoire. Her voice has grown so much through singing classical music, pop, and musical theatre repertoire, and I am especially thrilled with her note-reading progress and ability to sight-sing. KZ is a solid alto/mezzo-soprano, with a lovely high extension that is developing in a very exciting way, and her confidence in her singing has grown tremendously. I am so pleased to work with her, and hope to continue for a long while to come!",
      author: "Jessy Tomsko, Musician, Composer, Teaching Artist"
    },
    {
      text: "One of my favorite people to collaborate with. She brings a level of authenticity and depth to her work that is rare. Her attention to detail and passion are truly inspiring and has pushed me to improve in my own work.",
      author: "Kaughlin Caver, Actor"
    }
  ]

  return (
    <div className="testimonials-section">
      <p className="testimonials-subheader">Grounded, Comedic, Artistic, Emotional, Inspiring</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">—{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsTab
