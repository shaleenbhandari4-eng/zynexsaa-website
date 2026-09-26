import './App.css'

function App() {
  return (
    <main className="site-shell">
      <header className="navbar">
       <a className="brand" href="#home" aria-label="Zynexsaa home">
  <img src="/zynexsaa-icon.png" alt="" aria-hidden="true" />
  <span>ZYNEXSAA</span>
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

      <section className="vision-section" id="vision">
  <div className="section-container">
    <div className="section-label">
      <span>02</span>
      <span>/</span>
      <span>Evolution</span>
    </div>

    <div className="vision-header">
      <p className="vision-kicker">THE CIEL ROADMAP</p>

      <h2>
        Intelligence that
        <span> evolves with its environment.</span>
      </h2>

      <p className="vision-intro">
        Ciel is being built as an evolving command-center architecture:
        beginning with a secure foundation and expanding toward deeper
        intelligence, broader integration and user-governed orchestration.
      </p>
    </div>

    <div className="evolution-track">
      <div className="evolution-line" aria-hidden="true">
        <span className="evolution-progress" />
      </div>

      <article className="evolution-stage evolution-current">
        <div className="evolution-marker">
          <span className="marker-core" />
        </div>

        <div className="evolution-meta">
          <span>01</span>
          <span>Current Development</span>
        </div>

        <h3>Ciel Core</h3>

        <p>
          The secure foundation: understanding requests, structured planning,
          permission-aware actions and controlled execution across connected
          capabilities.
        </p>

        <div className="evolution-state">
          <span className="state-dot" />
          Foundation
        </div>
      </article>

      <article className="evolution-stage">
        <div className="evolution-marker">
          <span />
        </div>

        <div className="evolution-meta">
          <span>02</span>
          <span>Future Evolution</span>
        </div>

        <h3>Ciel Sage</h3>

        <p>
          A future expansion toward deeper multi-step intelligence, durable
          workflows, broader integrations and more capable coordination
          between tools and services.
        </p>

        <div className="evolution-state">
          Expansion
        </div>
      </article>

      <article className="evolution-stage">
        <div className="evolution-marker">
          <span />
        </div>

        <div className="evolution-meta">
          <span>03</span>
          <span>Long-Term Vision</span>
        </div>

        <h3>Ciel Sovereign</h3>

        <p>
          The long-term vision for a personal AI command center spanning
          devices, environments and services while keeping delegation and
          authority governed by the user.
        </p>

        <div className="evolution-state">
          Vision
        </div>
      </article>
    </div>

    <div className="vision-manifesto">
      <p className="manifesto-index">Z / 02</p>

      <blockquote>
        <span>The interface may change.</span>
        The principle doesn't.
      </blockquote>

      <p className="manifesto-copy">
        Intelligence should adapt to the environment — not force the
        environment to adapt to it.
      </p>
    </div>
  </div>
</section>

      <section className="company-section" id="company">
  <div className="section-container">
    <div className="section-label">
      <span>03</span>
      <span>/</span>
      <span>Zynexsaa</span>
    </div>

    <div className="company-closing">
      <p className="company-kicker">ZYNEXSAA</p>

      <h2>
        Born in Nepal.
        <span>Built for everywhere.</span>
      </h2>

      <div className="company-closing-copy">
        <p>
          We build intelligent systems around one principle: technology
          should integrate into people's environments — not force people
          to reorganize their lives around technology.
        </p>

        <a href="mailto:admin@zynexsaa.com">
          admin@zynexsaa.com
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <footer className="site-footer">
      <div className="footer-brand">
        <strong>ZYNEXSAA</strong>
        <p>Zynexsaa Artificial Intelligence And Technology</p>
      </div>

      <nav aria-label="Footer navigation">
        <a href="#ciel">Ciel</a>
        <a href="#vision">Vision</a>
        <a href="#home">Top ↑</a>
      </nav>

      <div className="footer-meta">
        <span>© 2026 Zynexsaa Artificial Intelligence And Technology</span>
        <span>Nepal → Everywhere</span>
      </div>
        </footer>
  </div>
</section>

    </main>
  )
}

export default App