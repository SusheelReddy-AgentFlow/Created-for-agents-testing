import React from 'react';
import './SchoolWebsite.css';

const SchoolWebsite: React.FC = () => {
  return (
    <div className="school-website-container">
      <header className="school-website-header">
        <h1>Welcome to Our School!</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="school-website-main">
        <section id="home" className="hero-section">
          <h2>Learning Today, Leading Tomorrow</h2>
          <p>Providing a nurturing and challenging environment for all students.</p>
          <button className="call-to-action">Learn More</button>
        </section>
        <section id="about" className="info-section">
          <h2>About Us</h2>
          <p>Our school is dedicated to academic excellence, personal growth, and community involvement. We believe in fostering a love for learning in every child.</p>
        </section>
        <section id="admissions" className="info-section">
          <h2>Admissions</h2>
          <p>Discover our simple and straightforward admissions process. We look forward to welcoming your child to our school family.</p>
        </section>
        <section id="contact" className="info-section">
          <h2>Contact Us</h2>
          <p>Have questions? Feel free to reach out to us!</p>
          <address>
            Email: <a href="mailto:info@ourschool.com">info@ourschool.com</a><br/>
            Phone: (123) 456-7890
          </address>
        </section>
      </main>
      <footer className="school-website-footer">
        <p>&copy; 2023 Our School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SchoolWebsite;
