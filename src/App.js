import { useEffect } from "react";
import Navigation from "./Component/Navigation/Navigation";
import Footer from "./Component/Footer/Footer";
import phone1 from "./assets/images/phone1.png";
import phone2 from "./assets/images/phone2.png";
import { ReactComponent as Car } from "./assets/icons/carIcon.svg";
import { ReactComponent as Time } from "./assets/icons/timeIcon.svg";
import { ReactComponent as Settings } from "./assets/icons/settingsIcon.svg";
import { ReactComponent as Safety } from "./assets/icons/safetyIcon.svg";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className="page-section section1">
        <div className="section1-left animate__animated animate__fadeInUp">
          <h1>Compare & book ride-hailing providers </h1>
          <p>
            Save money and time with WhichrRide. Think Compare the market but
            for taxis.
          </p>
        </div>
        <div className="section1-right animate__animated animate__fadeInRight">
          <img src={phone1} alt="phone1" />
        </div>
      </div>
      <div className="page-section section2">
        <div className="section2-description">
          <h1>
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </h1>
          <p>
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app
          </p>
        </div>
        <div className="page-section section2-steps">
          <img data-aos="fade-right" src={phone2} alt="" />
          <div className="section2-steps-right">
            <div data-aos="fade-up-left" className="section2-steps-li">
              <div className="section2-steps-pill first-pill">Step 1</div>
              <div className="section2-steps-text">
                <p>Enter location</p>
                <p>
                  Enter your destination to see a list of taxi providers near
                  you.
                </p>
              </div>
            </div>
            <div data-aos="fade-up-left" className="section2-steps-li">
              <div className="section2-steps-pill">Step 2</div>
              <div className="section2-steps-text">
                <p>Find the perfect ride</p>
                <p>
                  Filter results by driver rating, driver sex, waiting times,
                  price or speed. Reduce carbon footprint by only showing hybrid
                  or electric cars.
                </p>
              </div>
            </div>
            <div data-aos="fade-up-left" className="section2-steps-li">
              <div className="section2-steps-pill">Step 3</div>
              <div className="section2-steps-text">
                <p>Pay and Save</p>
                <p>
                  Once you select a ride, we search the web for coupons to get
                  you an even better deal, then book seemlessly within our app
                  and earn points while you ride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section section3">
        <h1>Why Whichride</h1>
        <div className="section3-left">
          <div data-aos="zoom-in" className="section3-why-card">
            <div className="section3-why-card-pill car">
              <Car />
            </div>
            <p>More choices</p>
            <p>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </p>
          </div>
          <div data-aos="zoom-in" className="section3-why-card">
            <div className="section3-why-card-pill time">
              <Time />
            </div>
            <p>More choices</p>
            <p>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </p>
          </div>
        </div>
        <div className="section3-right">
          <div data-aos="zoom-in" className="section3-why-card">
            <div className="section3-why-card-pill settings">
              <Settings />
            </div>
            <p>More choices</p>
            <p>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </p>
          </div>
          <div data-aos="zoom-in" className="section3-why-card">
            <div className="section3-why-card-pill safety">
              <Safety />
            </div>
            <p>Safety first</p>
            <p>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </p>
          </div>
        </div>
      </div>
      <div className="page-section section4">
        <h1>Sign up to our beta form</h1>
        <p>
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </p>
        <div className="form">
          <input type="email" placeholder="email" />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
