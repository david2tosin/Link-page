import "./index.css";
import profile from "./assets/profile__img.png";
import button1 from "./assets/_Avatar share button1.png";
import slack from "./assets/slack.png"
import github from "./assets/icon.png"
import zuri from "./assets/vector.png"
import globe from "./assets/I4G.png"


function App() {
  return (
    <div className="app">
      <main className="container">
        <section className="profile-container">
          <img id="profile__img" src={profile} alt="" />
          <p id="twitter">David Tosin</p>
          <p id="slack" className="slack">
            Oduwole Oluwatosin David
          </p>
          <img className="share-button" src={button1} alt="" />
        </section>
        <section className="links">
          <a href="https://twitter.com/David2Tosin">Twitter Link</a>
          <a id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
          <a id="books" href="http://books.zuri.team/">
            Zuri Books
          </a>
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=OduwoleOluwatosinDavid"
          >
            Python Books
          </a>
          <a id="pitch" href="https://background.zuri.team/">
            Background Check for Coders
          </a>
          <a id="book__design" href="https://books.zuri.team/design-rules">
            Design Books
          </a>
        </section>
      </main>
      <footer>
        <div className="footer-one">
          <div className="footer-one-logo">
            <img className="" src={slack} alt="" />
            <img  src={github} alt="" />
          </div>
        </div>
        <div className="footer-two">
          <div className="footer-two-logo">
            <img src={zuri} alt="" />
            <p className="hng">HNG Internship 9 Frontend Task</p>
            <img src={globe} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
