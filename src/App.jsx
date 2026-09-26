import './App.css'

function App() {
  return (
    <main className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Zynexsaa home">
          ZYNEXSAA
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#ciel">Ciel</a>
          <a href="#vision">Vision</a>
          <a href="#company">Company</a>
        </nav>

        <a className="nav-contact" href="mailto:admin@zynexsaa.com">
          Contact
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="system-core">
            <span className="core-ring ring-one" />
            <span className="core-ring ring-two" />
            <span className="core-point" />
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            INTELLIGENCE · INTEGRATION · CONTROL
          </p>

          <h1>
            Building intelligence
            <span>that integrates.</span>
          </h1>

          <p className="hero-description">
            Zynexsaa builds intelligent systems designed to connect software,
            devices and people while keeping control in human hands.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#ciel">
              Explore Ciel
              <span aria-hidden="true">↗</span>
            </a>

            <a className="secondary-button" href="#vision">
              Our Vision
            </a>
          </div>
        </div>

        <a className="discover" href="#ciel">
          <span>Discover</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="placeholder-section" id="ciel">
        <p>01 / CIEL</p>
      </section>

      <section className="placeholder-section" id="vision">
        <p>02 / VISION</p>
      </section>

      <section className="placeholder-section" id="company">
        <p>03 / COMPANY</p>
      </section>
    </main>
  )
}

export default App