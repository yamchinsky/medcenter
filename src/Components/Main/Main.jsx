import React, { Component } from 'react';

import { MainStyled } from './MainStyled';

import '../../../src/main.css'

import logo from '../../img/logo.png'
import tools from '../../img/tools.png'
import lady  from '../../img/lady.jpg'
import servicesBackground from '../../img/services_bg.jpg'
import pricing from '../../img/pricing_bg.jpg'
import contact from '../../img/contact_image.jpg'
import cardiology from '../../img/icons/cardiology.jpg'
import dentistry from '../../img/icons/dentistry.jpg'
import laboratory from '../../img/icons/laboratory.jpg'
import oftalmology from '../../img/icons/oftalmology.jpg'
import pediatrics from '../../img/icons/pediatrics.jpg'
import radiology from '../../img/icons/radiology.jpg'


class Main extends Component {
  render() {
    
    return (
        <MainStyled>
        <div className="wrap">
      <div className="svg-icon up-arrow-icon">
        <a href="#"><i className="fas fa-arrow-up"></i></a>
      </div>

      <div className="header">
        <div className="logo-wrap">
          <a href="#home-anchor"></a>
          <a href="./"><img src={logo} alt="logo_image" className="logo-img"/></a>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home-anchor" className="nav-link">HOME</a>
            </li>
            <li className="nav-item">
              <a href="#about-anchor" className="nav-link">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="#services-anchor" className="nav-link">SERVICES</a>
            </li>
            <li className="nav-item">
              <a href="#pricing-anchor" className="nav-link">PRICING</a>
            </li>
            <li className="nav-item">
              <a href="#contact-anchor" className="nav-link">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main">
        <section className="home" style={{ backgroundImage: `url(${lady})`}} id="home-anchor">
          <h1 className="heading">
            Professional Gorjarogacki Clinic <br />
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis reiciendis voluptate repellat consectetur velit. <br />
            Placeat!
          </p>
          <div className="svg-icons">
            <div className="svg-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <div className="svg-icon">
              <i className="fas fa-first-aid"></i>
            </div>
            <div className="svg-icon">
              <i className="fas fa-stethoscope"></i>
            </div>
          </div>
        </section>

        <section className="about" id="about-anchor">
          <div className="img-wrap">
            <img src={tools} alt="tools" className="about-img" />
          </div>
          <h2 className="heading">About Clinic</h2>
          <p className="subheading">PROFESSIONAL CARE</p>
          <div className="topics">
            <div className="topic">
              <h3 className="topic-heading"><b>&#8680;</b> Medical consulting</h3>
              <p className="topic-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias eveniet sint ex commodi, ut error corrupti, voluptate,
                laboriosam inventore repudiandae quasi dolorum reiciendis
                ratione quos aspernatur. Sint, quae numquam!
              </p>
            </div>

            <div className="topic">
              <h3 className="topic-heading"><b>&#8680;</b>Laboratory analysis</h3>
              <p className="topic-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias eveniet sint ex commodi, ut error corrupti, voluptate,
                laboriosam inventore repudiandae quasi dolorum reiciendis
                ratione quos aspernatur. Sint, quae numquam!
              </p>
            </div>

            <div className="topic">
              <h3 className="topic-heading"><b>&#8680;</b>Diagnostics</h3>
              <p className="topic-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias eveniet sint ex commodi, ut error corrupti, voluptate,
                laboriosam inventore repudiandae quasi dolorum reiciendis
                ratione quos aspernatur. Sint, quae numquam!
              </p>
            </div>
          </div>
        </section>

        <section className="services" style={{ backgroundImage: `url(${servicesBackground})`}} id="services-anchor">
          <h2 className="heading">How we can help you</h2>
          <p className="subheading">READ MORE ABOUT OUR SERVICES</p>

          <div className="topics">
            <div className="topic">
              <div className="icon-wrap">
                <img
                  src={oftalmology}
                  alt="ophthalmology"
                  className="icon"
                />
              </div>
              <h3 className="topic-heading">Ophthalmology</h3>
              <p className="topic-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quibusdam harum voluptas, natus doloribus ducimus
              </p>
            </div>

            <div className="topic">
              <div className="icon-wrap">
                <img
                  src={dentistry}
                  alt="dentistry"
                  className="icon"
                />
              </div>
              <h3 className="topic-heading">Dentistry</h3>
              <p className="topic-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quibusdam harum voluptas, natus doloribus ducimus
              </p>
            </div>

            <div className="topic">
              <div className="icon-wrap">
                <img
                  src={cardiology}
                  alt="cardiology"
                  className="icon"
                />
              </div>
              <h3 className="topic-heading">Cardiology</h3>
              <p className="topic-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quibusdam harum voluptas, natus doloribus ducimus
              </p>
            </div>

            <div className="topic">
              <div className="icon-wrap">
                <img
                  src={pediatrics}
                  alt="pediatrics"
                  className="icon"
                />
              </div>
              <h3 className="topic-heading">Pediatrics</h3>
              <p className="topic-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quibusdam harum voluptas, natus doloribus ducimus
              </p>
            </div>

            <div className="topic">
              <div className="icon-wrap">
                <img
                  src={laboratory}
                  alt="laboratory"
                  className="icon"
                />
              </div>
              <h3 className="topic-heading">Laboratory</h3>
              <p className="topic-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quibusdam harum voluptas, natus doloribus ducimus
              </p>
            </div>

            <div className="topic">
              <div className="icon-wrap">
                <img
                  src={radiology}
                  alt="radiology"
                  className="icon"
                />
              </div>
              <h3 className="topic-heading">Radiology</h3>
              <p className="topic-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quibusdam harum voluptas, natus doloribus ducimus
              </p>
            </div>
          </div>
        </section>

        <section className="pricing" style={{ backgroundImage: `url(${pricing})`}} id="pricing-anchor">
          <h2 className="heading">Our Special Offers</h2>
          <p className="subheading">START TO BE HEALTHY TODAY</p>
          <div className="offers">
            <div className="offer">
              <h3 className="offer-heading">Allegry Check</h3>
              <p className="offer-price">$ 255</p>
              <p className="offer-quantity">10 treatments</p>
              <ul className="offer-items">
                <li className="offer-item">Allergy Test</li>
                <li className="offer-item">Consultation</li>
                <li className="offer-item">Treatments</li>
                <li className="offer-item">10 Procedures</li>
                <li className="offer-item"><b>&times;</b></li>
                <li className="offer-item">Test Results</li>
              </ul>
              <button className="offer-button">Get Now</button>
            </div>

            <div className="offer">
              <h3 className="offer-heading">Eye Checkup</h3>
              <p className="offer-price">$ 108</p>
              <p className="offer-quantity">3 treatments</p>
              <ul className="offer-items">
                <li className="offer-item">Allergy Test</li>
                <li className="offer-item">Consultation</li>
                <li className="offer-item">Treatments</li>
                <li className="offer-item">10 Procedures</li>
                <li className="offer-item"><b>&times;</b></li>
                <li className="offer-item">Test Results</li>
              </ul>
              <button className="offer-button">Get Now</button>
            </div>

            <div className="offer">
              <h3 className="offer-heading">Dental Care</h3>
              <p className="offer-price">$ 320</p>
              <p className="offer-quantity">6 treatments</p>
              <ul className="offer-items">
                <li className="offer-item">Allergy Test</li>
                <li className="offer-item">Consultation</li>
                <li className="offer-item">Treatments</li>
                <li className="offer-item">10 Procedures</li>
                <li className="offer-item">Oral Hygiene</li>
                <li className="offer-item">Test Results</li>
              </ul>
              <button className="offer-button">Get Now</button>
            </div>
          </div>
        </section>

        <section className="contact"  id="contact-anchor">
          <div className="img-wrap">
            <img
              src={contact}
              alt="contact"
              className="contact-img"
            />
          </div>
          <h2 className="heading">Make An Appointment</h2>
          <p className="subheading">AND WE WILL CONTACT YOU</p>
          <form action="#" className="contact-form" method="GET">
            <input type="text" placeholder="Full Name" /><br />
            <input type="email" placeholder="Email" /><br />
            <input
              type="tel"
              placeholder="Phone - XXX-XXX-XXXX"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            /><br />
            <input type="date" /><br />

            <input list="subjects-datalist" placeholder="Subject" /><br />
            <datalist id="subjects-datalist">
              <option value="Ophthalmology"></option>
              <option value="Dentistry"></option>
              <option value="Cardiology"></option>
              <option value="Pediatrics"></option>
              <option value="Laboratory"></option>
              <option value="Radiology"></option>
            </datalist>

            <button type="submit" className="contact-submit">Submit</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <small>Copywright &copy; 2022 Gorjarogacki</small>
      </footer>
    </div>
    </MainStyled>
    )}
}

export default Main;
