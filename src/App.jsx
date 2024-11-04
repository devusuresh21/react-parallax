import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const title = document.querySelector('.title');
    const bird = document.querySelector('.bird');
    const build = document.querySelector('.build');
    
    const handleScroll = () => {
      const value = window.scrollY;
  
      // Move the title down as user scrolls
      title.style.marginTop = value * 1.1 + 'px';
  
      // Reduce opacity to hide the title as it scrolls under the bird
      title.style.opacity = 1 - value / 300; // Adjust 300 for fade-out speed
  
      // Move other elements for parallax effect
      bird.style.marginLeft = -value + 'px';
      build.style.marginBottom = -value + 'px';
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const cities = [
    { name: "Paris", image: "https://th.bing.com/th/id/OIP.6Yrhn7ORfVo_4tS4VaSPxQHaEo?rs=1&pid=ImgDetMain" },
    { name: "New York", image: "https://imgs.6sqft.com/wp-content/uploads/2016/11/07150359/quiet-nyc-640x640.jpg" },
    { name: "Tokyo", image: "https://render.fineartamerica.com/images/rendered/default/print/8/5.5/break/images-medium-5/tokyo-tower-skyscrapers-neon-futuristic-fotovoyager.jpg" }
  ];
  
  const handleScroll = () => {
    const scrolled = window.scrollY;
    
    // Adjust the background position based on the scroll
    const section = document.querySelector('.sunset-section');
    section.style.backgroundPositionY = `${scrolled * 0.02}px`; // Adjust 0.5 for speed

    // Parallax effect for heading and list
    if (headingRef.current) {
      headingRef.current.style.transform = `translateY(${scrolled * 0.1}px)`; // Adjust speed
    }
    if (listRef.current) {
      listRef.current.style.transform = `translateY(${scrolled * 0.1}px)`; // Adjust speed
    }
  };

  window.addEventListener('scroll', handleScroll);


return (
    <>
      <header>
        <h2 className="logo">Urban Escapes</h2>
        <nav className="navigation">
          <a href="/">HOME</a>
          <a href="/">ABOUT</a>
          <a href="/">FEATURES</a>
          <a href="/">CONTACT</a>
        </nav>
      </header>

      <section className="home">
      <h2 className="title">Urban Escapes</h2>
        <img className="sky" src="./images/n.png" alt="sky" />
        
        <img className="build" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bee6c9a9-78f2-4294-ad27-6ca52060f5a5/daxx76c-96ffc7a6-b176-4e74-bf03-e6693cb38fd6.png/v1/fill/w_1024,h_576,strp/sunset_transparent_lines_by_axiomdesign_daxx76c-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYmVlNmM5YTktNzhmMi00Mjk0LWFkMjctNmNhNTIwNjBmNWE1XC9kYXh4NzZjLTk2ZmZjN2E2LWIxNzYtNGU3NC1iZjAzLWU2NjkzY2IzOGZkNi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dpTf61Ao6_1bggCUxfxh1mvB5PfMnadvnCC--9P-LA0" alt="build" />
        <img className="bird" src="http://pluspng.com/img-png/stars-png-stars-png-clipart-png-image-2992.png" alt="bird" />
        <img className="grass" src="http://pluspng.com/img-png/new-york-city-png-skyline-panorama-new-york-united-states-freedom-tower-960.png" alt="grass" />
      </section>

{/* about */}
<section className="about">
  <h2>The Magic of Twilight</h2>
  <p>
    Urban Escapes explores hidden gems, sunset views, and vibrant night adventures across the world’s cities. 
    Join us in discovering the beauty that dusk brings to city landscapes.
    As the sun sets, the skyline transforms, painting the horizon with hues of orange, pink, and purple. 
    From the romantic streets of Paris to the bustling avenues of New York, each city has its own story to tell 
    as day turns into night. 
    Our mission is to guide you through the enchanting moments of twilight, revealing the best spots to witness 
    breathtaking sunsets. Whether you’re a traveler seeking adventure or a local looking to explore, we offer 
    curated experiences that capture the essence of each destination.
  </p>
  <div className="about-images">
    <img src="https://cdn.openart.ai/stable_diffusion/e1a1aef6277d33652e7fc47e06bc5fc4e25b0bc9_2000x2000.webp" alt="Sunset over a city" />
    <img src="https://th.bing.com/th/id/R.7ebbf7d63732e3199101128278f8e03b?rik=SBflYFUpO1JORg&riu=http%3a%2f%2fwww.allappraisalservices.ca%2fwp-content%2fuploads%2fCanada_Toronto_Skyline_Evening_2019_High_Quality_Photo_1366x768-1-1024x576.jpg&ehk=xX4hIFyT94TW09TuDoTLnRNx1aM%2bc0EYgsPYJDBb%2fE8%3d&risl=&pid=ImgRaw&r=0" alt="Twilight skyline" />
    <img src="https://c4.wallpaperflare.com/wallpaper/1017/91/605/night-the-city-lights-the-evening-wallpaper-preview.jpg" alt="Evening city lights" />
  </div>
</section>




{/* featured city */}
    <section className="featured-cities">
      <h2>Explore Our Featured Cities</h2>
      <div className="cities-grid">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <img src={city.image} alt={city.name} />
            <h3>{city.name}</h3>
          </div>
        ))}
      </div>
    </section>


{/* top sunset spot */}
<section className="sunset-section">
      <div className="sunset-spots">
        <h2>Top Sunset Spots</h2>
        <ul>
          <li>Paris - Eiffel Tower</li>
          <li>New York - Brooklyn Bridge</li>
          <li>Tokyo - Tokyo Tower</li>
        </ul>
      </div>
    </section>



{/* footer */}
<footer className="footer">
  <ul className="social-icons">
    <li><i className="fa-brands fa-facebook"></i></li>
    <li><i className="fa-brands fa-instagram"></i></li>
    <li><i className="fa-brands fa-twitter"></i></li>
    <li><i className="fa-brands fa-whatsapp"></i></li>
  </ul>
  <p>&copy; 2024 Urban Escapes. All rights reserved.</p>
</footer>

    </>
  );
}

export default App;
