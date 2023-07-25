import logo from "./assets/images/logo.svg";
import heroMobile from "./assets/images/image-hero-mobile.png";
import heroDesktop from "./assets/images/image-hero-desktop.png";
import arrowDown from "./assets/images/icon-arrow-down.svg";
import arrowUp from "./assets/images/icon-arrow-up.svg";
import clientDatabiz from "./assets/images/client-databiz.svg";
import clientAudiophile from "./assets/images/client-audiophile.svg";
import clientMaker from "./assets/images/client-maker.svg";
import clientMeet from "./assets/images/client-meet.svg";
import menu from "./assets/images/icon-menu.svg";

function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="" className="logo" />

        <nav>
          <ul className="links-section">
            <li>
              <a href="">
                Features <img src={arrowDown} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                Company <img src={arrowDown} alt="" />
              </a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
          <ul className="buttons-section">
            <button className="btn-login">Login</button>
            <button className="btn-register">Register</button>
          </ul>
        </nav>
        <img src={menu} alt="" className="btn-menu" />
      </header>
      <section className="main-section">
        <section className="hero-section">
          <img src={heroMobile} alt="" className="hero-mobile" />
          <img src={heroDesktop} alt="" className="hero-desktop" />
        </section>
        <section className="description-section">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn-learn-more">Learn more</button>
          <ul className="footer-ul">
            <li>
              <img src={clientDatabiz} alt="" />
            </li>
            <li>
              <img src={clientAudiophile} alt="" />
            </li>
            <li>
              <img src={clientMeet} alt="" />
            </li>
            <li>
              <img src={clientMaker} alt="" />
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default App;
