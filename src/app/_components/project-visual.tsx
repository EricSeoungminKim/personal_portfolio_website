export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "quant") {
    return (
      <div className="project-visual visual-quant" aria-hidden="true">
        <div className="visual-quant-grid" />
        <div className="terminal-window">
          <div className="terminal-top"><span>MARKET / LIVE</span><span>● ONLINE</span></div>
          <div className="terminal-numbers"><span>24 / 7</span><small>PAPER TRADING</small></div>
          <svg viewBox="0 0 560 210" preserveAspectRatio="none" className="chart-line">
            <path d="M0 178 L35 165 L75 169 L105 125 L142 138 L178 121 L220 133 L255 87 L295 103 L336 80 L375 91 L414 54 L450 70 L487 35 L525 48 L560 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <path d="M0 178 L35 165 L75 169 L105 125 L142 138 L178 121 L220 133 L255 87 L295 103 L336 80 L375 91 L414 54 L450 70 L487 35 L525 48 L560 18 L560 210 L0 210 Z" fill="currentColor" opacity=".09" />
          </svg>
          <div className="terminal-bottom"><span>KRX · NYSE · NASDAQ</span><span>SIMULATION ONLY</span></div>
        </div>
        <span className="visual-side-note">DATA → SIGNAL → EXECUTION</span>
      </div>
    );
  }

  if (slug === "rift") {
    return (
      <div className="project-visual visual-rift" aria-hidden="true">
        <div className="rift-orbit orbit-one" /><div className="rift-orbit orbit-two" />
        <div className="rift-window">
          <div className="rift-top"><strong>RIFT<span>.</span>GG</strong><small>SUMMONER INTELLIGENCE</small></div>
          <div className="rift-search"><span>⌕</span> Find any summoner <b>↗</b></div>
          <div className="rift-stats">
            <div><small>REGIONS</small><strong>11</strong></div>
            <div><small>LIVE SCOUT</small><strong>10<span> PLAYERS</span></strong></div>
            <div><small>STATUS</small><strong>● LIVE</strong></div>
          </div>
          <div className="rift-stripes"><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <span className="rift-caption">KNOW THE GAME BEFORE IT STARTS.</span>
      </div>
    );
  }

  if (slug === "mom") {
    return (
      <div className="project-visual visual-mom" aria-hidden="true">
        <div className="mom-map">
          <div className="mom-map-top"><span>SPATIAL MEMORY</span><span>ROOM SCAN / 01</span></div>
          <div className="mom-floorplan"><div className="mom-room mom-room-living">LIVING</div><div className="mom-room mom-room-kitchen">KITCHEN<span>▣</span></div><div className="mom-room mom-room-bedroom">BEDROOM</div></div>
          <div className="mom-query"><span>WHERE IS MY FRIDGE?</span><strong>→ KITCHEN</strong></div>
        </div>
        <span className="mom-caption">A PLACE FOR EVERY THING.</span>
      </div>
    );
  }

  if (slug === "bruin") {
    return (
      <div className="project-visual visual-bruin" aria-hidden="true">
        <div className="bruin-phone">
          <div className="bruin-phone-top"><span>BRUIN BITES</span><span>☰</span></div>
          <div className="bruin-phone-title">Good food.<br />Good finds.</div>
          <div className="bruin-map"><i /><i /><i /><span>✦</span><b>CHEAP EATS NEAR YOU</b></div>
          <div className="bruin-phone-bottom"><span>EXPLORE</span><span>MAP</span><span>COMMUNITY</span></div>
        </div>
        <span className="bruin-caption">MADE FOR THE BRUIN COMMUNITY.</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-ats" aria-hidden="true">
      <div className="ats-ring ring-one" /><div className="ats-ring ring-two" />
      <div className="ats-sheet">
          <div className="ats-sheet-top"><span>WHAT’S MY ATS?</span><span>SAMPLE REPORT</span></div>
        <div className="ats-score"><strong>86</strong><span>/ 100<br />MATCH SCORE</span></div>
        <div className="ats-lines"><i /><i /><i /><i /></div>
        <div className="ats-tags"><span>SKILLS</span><span>IMPACT</span><span>KEYWORDS</span></div>
      </div>
      <div className="ats-stamp">MAKE EVERY<br />WORD COUNT ↗</div>
    </div>
  );
}
