import "./index.css";

function App() {
  return (
    <div>
      <main>
        <section className="profile-container">
          <div id="profile__img"></div>
          <p id="twitter">David Tosin</p>
          <p id="slack">Oduwole Oluwatosin David</p>
          <div className="share-button"></div>
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
        <div className="footer-one"></div>
        <div className="footer-two"></div>
      </footer>
    </div>
  );
}

export default App;
