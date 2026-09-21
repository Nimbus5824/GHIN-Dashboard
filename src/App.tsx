import { useState } from 'react'
import './App.css'

function App() {
  const [range, setRange] = useState('This year')
  const [showAll, setShowAll] = useState(false)
  const [roundAdded, setRoundAdded] = useState(false)
  const rounds = [
    { course: 'Cypress Point Club', location: 'Pebble Beach, CA', date: 'Jun 14, 2024', score: '82', toPar: '+10', rating: '72.4', slope: '136' },
    { course: 'Presidio Golf Course', location: 'San Francisco, CA', date: 'Jun 08, 2024', score: '78', toPar: '+6', rating: '71.2', slope: '129' },
    { course: 'Lincoln Park Golf Course', location: 'San Francisco, CA', date: 'May 30, 2024', score: '85', toPar: '+13', rating: '70.8', slope: '127' },
    { course: 'Half Moon Bay Golf Links', location: 'Half Moon Bay, CA', date: 'May 18, 2024', score: '80', toPar: '+8', rating: '72.1', slope: '132' },
    { course: 'Lake Merced Golf Complex', location: 'San Francisco, CA', date: 'May 11, 2024', score: '77', toPar: '+5', rating: '70.9', slope: '124' },
    { course: 'TPC Harding Park', location: 'San Francisco, CA', date: 'Apr 27, 2024', score: '79', toPar: '+7', rating: '71.8', slope: '131' },
  ]
  const visibleRounds = showAll ? rounds : rounds.slice(0, 3)
  const clubs = [
    { type: 'Driver', brand: 'TaylorMade', model: 'Qi10 Max', detail: '9° · Stiff graphite', distance: '255 yds', accent: 'lime' },
    { type: '3 Wood', brand: 'Callaway', model: 'Paradym Ai Smoke', detail: '15° · Stiff graphite', distance: '230 yds', accent: 'coral' },
    { type: '5 Hybrid', brand: 'Titleist', model: 'TSR2', detail: '24° · Regular graphite', distance: '195 yds', accent: 'blue' },
    { type: 'Irons', brand: 'Mizuno', model: 'JPX 923 Hot Metal', detail: '5–PW · Nippon 950GH', distance: '155 yds', accent: 'gold' },
    { type: 'Wedges', brand: 'Vokey', model: 'SM10', detail: '50° / 56° · Steel', distance: '105 yds', accent: 'purple' },
    { type: 'Putter', brand: 'Scotty Cameron', model: 'Phantom X 5', detail: '34 in · Pistolini grip', distance: '2.1 putts', accent: 'mint' },
  ]

  return (
    <div className="app-shell">
      <main className="main-content">
        <header className="topbar"><div className="crumb">Overview <span>/</span> <strong>Season dashboard</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><button className="add-button" onClick={() => setRoundAdded(true)}><span>+</span> Add round</button><div className="avatar top-avatar">SC</div></div></header>
        <div className="dashboard-inner" id="overview">
          <section className="intro"><div><p className="eyebrow">Saturday, June 15, 2024 <span className="live-dot" /></p><div className="weather-chip" aria-label="Current weather: 68 degrees and partly cloudy"><span className="weather-icon">☼</span><span><strong>68°</strong><small>Partly cloudy · 8 mph</small></span></div><h1>Good morning, Sean<span className="sun">✳</span></h1><p className="intro-copy">A quick look at where your game is headed.</p></div><div className="range-control" aria-label="Date range">{['This year', '6 months', '30 days'].map((item) => <button className={range === item ? 'selected' : ''} onClick={() => setRange(item)} key={item}>{item}</button>)}</div></section>
          {roundAdded && <div className="toast" role="status">Ready to record your next round <button onClick={() => setRoundAdded(false)}>×</button></div>}
          <section className="stat-grid" id="stats"><article className="stat-card highlight"><div className="stat-top"><span>Current handicap</span><span className="trend up">↗ 0.4</span></div><strong>6.8</strong><div className="sparkline"><svg viewBox="0 0 220 46" preserveAspectRatio="none" aria-label="Handicap trending down"><path d="M0 36 C16 34, 20 30, 35 32 S54 26, 68 29 S83 22, 99 25 S113 19, 130 22 S146 13, 161 17 S179 12, 192 9 S207 5, 220 7" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="220" cy="7" r="4" fill="currentColor" /></svg></div><small>Down from 7.2 last season</small></article><article className="stat-card"><div className="stat-top"><span>Scoring average</span><span className="trend up">↗ 2.1%</span></div><strong>80.4</strong><div className="bar-track"><span style={{ width: '72%' }} /></div><small>Best round <b>76</b> · Par 72</small></article><article className="stat-card rounds-stat"><div className="stat-top"><span>Rounds played</span><span className="trend neutral">This year</span></div><strong>14</strong><div className="round-dots">{Array.from({ length: 14 }).map((_, index) => <i className={index > 10 ? 'empty' : ''} key={index} />)}</div><small><b>6</b> more rounds than last year</small></article></section>
          <section className="ghin-panel" aria-labelledby="ghin-heading"><div className="ghin-heading"><div><p className="eyebrow">Official handicap record</p><h2 id="ghin-heading">GHIN data &amp; tracking</h2></div><span className="verified">● GHIN synced</span></div><div className="ghin-content"><div className="ghin-identity"><span className="ghin-label">GHIN NUMBER</span><strong>1234567</strong><span className="ghin-subtext">Last revision · Jun 15, 2024</span></div><div className="ghin-metrics"><div><span>Low index</span><strong>6.2</strong><small>Season low</small></div><div><span>Score differentials</span><strong>14</strong><small>Of 20 posted</small></div><div><span>PCC adjustments</span><strong>2</strong><small>This season</small></div><div className="differential-trend"><span>Recent differentials</span><div className="diff-bars"><i style={{ height: '58%' }} /><i style={{ height: '40%' }} /><i style={{ height: '72%' }} /><i style={{ height: '48%' }} /><i style={{ height: '30%' }} /><i className="current" style={{ height: '23%' }} /></div><small>Improving · 6.8 current</small></div></div></div></section>
          <section className="bag-section" aria-labelledby="bag-heading"><div className="bag-heading"><div><p className="eyebrow">Equipment setup</p><h2 id="bag-heading">What's in the Bag</h2><p>Sean's current setup · 14 clubs</p></div><button className="text-button">Edit bag <span>↗</span></button></div><div className="club-grid">{clubs.map((club) => <article className="club-card" key={club.type}><div className={`club-swatch ${club.accent}`}><span>{club.type === 'Putter' ? '▰' : club.type === 'Wedges' ? '◒' : club.type === 'Irons' ? '▥' : '╱'}</span></div><div className="club-info"><span className="club-type">{club.type}</span><strong>{club.brand}</strong><span className="club-model">{club.model}</span><small>{club.detail}</small></div><div className="club-distance"><span>{club.type === 'Putter' ? 'Avg' : 'Carry'}</span><strong>{club.distance}</strong></div></article>)}</div></section>
          <section className="content-grid"><article className="panel rounds-panel" id="rounds"><div className="panel-heading"><div><p className="eyebrow">Your scorecard</p><h2>Recent rounds</h2></div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show less' : 'View all'} <span>↗</span></button></div><div className="round-list">{visibleRounds.map((round) => <div className="round-row" key={round.course}><div className="course-icon">⌂</div><div className="course-info"><strong>{round.course}</strong><span>{round.location} · {round.date}</span></div><div className="round-score"><strong>{round.score}</strong><span>{round.toPar}</span></div><div className="round-rating"><span>Rating / slope</span><strong>{round.rating} / {round.slope}</strong></div><div className="row-arrow">→</div></div>)}</div></article><article className="panel insight-panel"><div className="panel-heading"><div><p className="eyebrow">Season snapshot</p><h2>Game at a glance</h2></div><button className="more-button" aria-label="More options">•••</button></div><div className="insight-main"><div className="donut"><div><strong>78%</strong><span>fairways hit</span></div></div><div className="insight-copy"><strong>Looking sharp</strong><p>Your accuracy is up <b>8%</b> from last season.</p><a href="#stats">See full stats <span>↗</span></a></div></div><div className="mini-stats"><div><span>GIR</span><strong>54%</strong><i><em style={{ width: '54%' }} /></i></div><div><span>Putts / round</span><strong>31.2</strong><i><em style={{ width: '64%' }} /></i></div><div><span>Bunker shots</span><strong>18</strong></div><div><span>3-putts</span><strong>7</strong></div><div><span>Bogeys</span><strong>26</strong></div><div><span>Double bogeys</span><strong>9</strong></div></div></article></section>
        </div>
      </main>
    </div>
  )
}

export default App
