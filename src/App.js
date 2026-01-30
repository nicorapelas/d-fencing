import './App.css';

function App() {
  const bgImage = `${process.env.PUBLIC_URL}/homeBackground.png`;

  return (
    <div className="coming-soon">
      <div
        className="coming-soon__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <div className="coming-soon__overlay" />
      <main className="coming-soon__content">
        <img
          src={`${process.env.PUBLIC_URL}/d-fencing-logo-less.png`}
          className="coming-soon__logo"
          alt="D-Fencing logo"
        />
        <h1 className="coming-soon__title">D-Fencing</h1>
        <p className="coming-soon__tagline">Coming Soon</p>
        <a
          href="mailto:info@d-fencing.co.za"
          className="coming-soon__email"
        >
          info@d-fencing.co.za
        </a>
      </main>
    </div>
  );
}

export default App;
