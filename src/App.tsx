import heroMobile from "./assets/images/image-hero-mobile.png";
import heroDesktop from "./assets/images/image-hero-desktop.png";
import clientDatabiz from "./assets/images/client-databiz.svg";
import clientAudiophile from "./assets/images/client-audiophile.svg";
import clientMaker from "./assets/images/client-maker.svg";
import clientMeet from "./assets/images/client-meet.svg";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="main-section">
        <section className="hero-section">
          <img src={heroMobile} alt="" className="mobile" />
          <img src={heroDesktop} alt="" className="desktop" />
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
      </main>
    </>
  );
}

export default App;
