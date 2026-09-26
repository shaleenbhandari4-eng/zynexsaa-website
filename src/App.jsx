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

      <section className="ciel-section" id="ciel">
  <div className="section-container">
    <div className="section-label">
      <span>01</span>
      <span>/</span>
      <span>Flagship System</span>
    </div>

    <div className="ciel-intro">
      <div className="ciel-heading">
        <p className="ciel-status">
          <span className="status-dot" />
          Ciel Core
        </p>

        <h2>CIEL</h2>
      </div>

      <div className="ciel-copy">
        <h3>
          Intelligence shouldn't
          <span> live in a box.</span>
        </h3>

        <p>
          Ciel is an AI command center designed to understand intent,
          connect with applications and devices, and turn authorized
          requests into controlled actions.
        </p>
      </div>
    </div>

    <div className="ciel-system">
      <div className="system-stage">
        <div className="system-lines" aria-hidden="true">
          <span className="line line-top" />
          <span className="line line-left" />
          <span className="line line-right" />
          <span className="line line-bottom" />
        </div>

        <div className="system-node ciel-node">
          <span className="node-index">00</span>
          <span className="node-core" />
          <strong>Ciel</strong>
          <small>Intelligence Layer</small>
        </div>

        <div className="system-node applications-node">
          <span className="node-index">01</span>
          <span className="node-point" />
          <strong>Applications</strong>
          <small>Connected Tools</small>
        </div>

        <div className="system-node devices-node">
          <span className="node-index">02</span>
          <span className="node-point" />
          <strong>Devices</strong>
          <small>Connected Environments</small>
        </div>

        <div className="system-node workflows-node">
          <span className="node-index">03</span>
          <span className="node-point" />
          <strong>Workflows</strong>
          <small>Controlled Execution</small>
        </div>
      </div>
    </div>

    <div className="ciel-principles">
      <div className="principle">
        <span>01</span>
        <strong>Understand</strong>
        <p>Interpret what the user intends to accomplish.</p>
      </div>

      <div className="principle">
        <span>02</span>
        <strong>Plan</strong>
        <p>Translate intent into explicit, structured actions.</p>
      </div>

      <div className="principle">
        <span>03</span>
        <strong>Authorize</strong>
        <p>Keep meaningful actions under user control.</p>
      </div>

      <div className="principle">
        <span>04</span>
        <strong>Execute</strong>
        <p>Act through connected capabilities and environments.</p>
      </div>
    </div>

    <div className="ciel-footer">
      <p>
        One intelligence layer.
        <span> An expanding ecosystem.</span>
      </p>

      <a href="#vision">
        Explore the evolution
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  </div>
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