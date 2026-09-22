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
    { course: 'Royal County Down', location: 'Newcastle, Northern Ireland', date: 'Apr 15, 2024', score: '84', toPar: '+12', rating: '74.2', slope: '139' },
    { course: 'St Andrews Links', location: 'St Andrews, Scotland', date: 'Apr 02, 2024', score: '81', toPar: '+9', rating: '72.7', slope: '132' },
    { course: 'The Old Course at Ballybunion', location: 'Kerry, Ireland', date: 'Mar 19, 2024', score: '86', toPar: '+14', rating: '73.8', slope: '137' },
    { course: 'Turnberry Ailsa', location: 'Turnberry, Scotland', date: 'Mar 06, 2024', score: '83', toPar: '+11', rating: '73.1', slope: '135' },
    { course: 'Cabot Cliffs', location: 'Inverness, Canada', date: 'Feb 22, 2024', score: '88', toPar: '+16', rating: '74.5', slope: '140' },
    { course: 'Pebble Beach Golf Links', location: 'Pebble Beach, CA', date: 'Feb 08, 2024', score: '80', toPar: '+8', rating: '74.6', slope: '144' },
    { course: 'Bandon Dunes', location: 'Bandon, OR', date: 'Jan 24, 2024', score: '85', toPar: '+13', rating: '74.1', slope: '145' },
    { course: 'Barnbougle Dunes', location: 'Bridport, Australia', date: 'Jan 10, 2024', score: '87', toPar: '+15', rating: '74.8', slope: '140' },
    { course: 'Cape Kidnappers', location: 'Hawke\'s Bay, New Zealand', date: 'Dec 18, 2023', score: '89', toPar: '+17', rating: '75.3', slope: '142' },
    { course: 'Royal Melbourne West', location: 'Melbourne, Australia', date: 'Dec 04, 2023', score: '82', toPar: '+10', rating: '73.9', slope: '136' },
    { course: 'Leopard Creek Country Club', location: 'Malelane, South Africa', date: 'Nov 20, 2023', score: '84', toPar: '+12', rating: '72.9', slope: '128' },
    { course: 'Fancourt Links', location: 'George, South Africa', date: 'Nov 06, 2023', score: '90', toPar: '+18', rating: '75.0', slope: '141' },
    { course: 'Mission Hills Haikou', location: 'Haikou, China', date: 'Oct 21, 2023', score: '79', toPar: '+7', rating: '71.6', slope: '129' },
    { course: 'Nirwana Bali Golf Club', location: 'Tabanan, Indonesia', date: 'Oct 07, 2023', score: '83', toPar: '+11', rating: '72.3', slope: '130' },
    { course: 'Emirates Golf Club Majlis', location: 'Dubai, UAE', date: 'Sep 23, 2023', score: '81', toPar: '+9', rating: '72.0', slope: '127' },
    { course: 'The Els Club', location: 'Abu Dhabi, UAE', date: 'Sep 09, 2023', score: '78', toPar: '+6', rating: '71.4', slope: '124' },
    { course: 'Kauri Cliffs', location: 'Matauri Bay, New Zealand', date: 'Aug 26, 2023', score: '86', toPar: '+14', rating: '74.0', slope: '138' },
    { course: 'Carya Golf Club', location: 'Antalya, Turkey', date: 'Aug 12, 2023', score: '80', toPar: '+8', rating: '71.9', slope: '126' },
    { course: 'Montgomerie Maxx Royal', location: 'Belek, Turkey', date: 'Jul 29, 2023', score: '82', toPar: '+10', rating: '72.5', slope: '130' },
  ]
  const visibleRounds = showAll ? rounds : rounds.slice(0, 5)
  const clubs = [
    { type: 'Driver', brand: 'TaylorMade', model: 'Qi10 Max', detail: '9° · Stiff graphite', distance: '255 yds', accent: 'lime' },
    { type: '3 Wood', brand: 'Callaway', model: 'Paradym Ai Smoke', detail: '15° · Stiff graphite', distance: '230 yds', accent: 'coral' },
    { type: '5 Hybrid', brand: 'Titleist', model: 'TSR2', detail: '24° · Regular graphite', distance: '195 yds', accent: 'blue' },
    { type: '5 Iron', brand: 'Mizuno', model: 'JPX 923 Hot Metal', detail: '25° · Nippon 950GH', distance: '175 yds', accent: 'gold' },
    { type: '6 Iron', brand: 'Mizuno', model: 'JPX 923 Hot Metal', detail: '28° · Nippon 950GH', distance: '165 yds', accent: 'gold' },
    { type: '7 Iron', brand: 'Mizuno', model: 'JPX 923 Hot Metal', detail: '31° · Nippon 950GH', distance: '155 yds', accent: 'gold' },
    { type: '8 Iron', brand: 'Mizuno', model: 'JPX 923 Hot Metal', detail: '35° · Nippon 950GH', distance: '145 yds', accent: 'gold' },
    { type: '9 Iron', brand: 'Mizuno', model: 'JPX 923 Hot Metal', detail: '40° · Nippon 950GH', distance: '135 yds', accent: 'gold' },
    { type: '50° Wedge', brand: 'Vokey', model: 'SM10', detail: '50° · Steel', distance: '120 yds', accent: 'purple' },
    { type: '56° Wedge', brand: 'Vokey', model: 'SM10', detail: '56° · Steel', distance: '105 yds', accent: 'purple' },
    { type: '60° Wedge', brand: 'Vokey', model: 'SM10', detail: '60° · Steel', distance: '90 yds', accent: 'purple' },
    { type: 'Putter', brand: 'Scotty Cameron', model: 'Phantom X 5', detail: '34 in · Pistolini grip', distance: '2.1 putts', accent: 'mint' },
  ]
  const clubGroups = [
    { title: 'Driver', clubs: clubs.slice(0, 1) },
    { title: 'Woods + hybrids', clubs: clubs.slice(1, 3) },
    { title: 'Irons', clubs: clubs.slice(3, 8) },
    { title: 'Wedges', clubs: clubs.slice(8, 11) },
    { title: 'Putter', clubs: clubs.slice(11, 12) },
  ]
  const dashboardData = {
    'This year': { handicap: '6.8', handicapChange: '0.4', previousHandicap: '7.2', scoringAverage: '80.4', scoringChange: '2.1%', scoringBar: '72%', bestRound: '76', rounds: 14, completedRounds: 11, extraRounds: 6, lowIndex: '6.2', differentialCount: '14', pccAdjustments: '2', fairways: '78%', accuracyChange: '8%', gir: '54%', putts: '31.2', bunkerShots: '18', threePutts: '7', bogeys: '26', doubles: '9' },
    '6 months': { handicap: '7.1', handicapChange: '0.8', previousHandicap: '7.9', scoringAverage: '81.6', scoringChange: '1.4%', scoringBar: '68%', bestRound: '78', rounds: 9, completedRounds: 7, extraRounds: 3, lowIndex: '6.9', differentialCount: '9', pccAdjustments: '1', fairways: '74%', accuracyChange: '5%', gir: '51%', putts: '32.1', bunkerShots: '12', threePutts: '5', bogeys: '19', doubles: '6' },
    '30 days': { handicap: '6.6', handicapChange: '0.5', previousHandicap: '7.1', scoringAverage: '79.8', scoringChange: '3.8%', scoringBar: '78%', bestRound: '76', rounds: 4, completedRounds: 4, extraRounds: 2, lowIndex: '6.6', differentialCount: '4', pccAdjustments: '0', fairways: '82%', accuracyChange: '11%', gir: '59%', putts: '30.4', bunkerShots: '4', threePutts: '2', bogeys: '7', doubles: '1' },
  }[range as 'This year' | '6 months' | '30 days']

  return (
    <div className="app-shell">
      <main className="main-content">
        <header className="topbar"><div className="crumb">Overview <span>/</span> <strong>Season dashboard</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><button className="add-button" onClick={() => setRoundAdded(true)}><span>+</span> Add round</button><div className="avatar top-avatar">SC</div></div></header>
        <div className="dashboard-inner" id="overview">
          <section className="intro"><div><p className="eyebrow">Saturday, June 15, 2024 <span className="live-dot" /></p><div className="weather-chip" aria-label="Current weather: 68 degrees and partly cloudy"><span className="weather-icon">☼</span><span><strong>68°</strong><small>Partly cloudy · 8 mph</small></span></div><h1>Good morning, Sean<span className="sun">✳</span></h1><p className="intro-copy">A quick look at where your game is headed.</p></div><div className="range-control" aria-label="Date range">{['This year', '6 months', '30 days'].map((item) => <button className={range === item ? 'selected' : ''} onClick={() => setRange(item)} key={item}>{item}</button>)}</div></section>
          {roundAdded && <div className="toast" role="status">Ready to record your next round <button onClick={() => setRoundAdded(false)}>×</button></div>}
          <section className="stat-grid" id="stats"><article className="stat-card highlight"><div className="stat-top"><span>Current handicap</span><span className="trend up">↗ {dashboardData.handicapChange}</span></div><strong>{dashboardData.handicap}</strong><div className="sparkline"><svg viewBox="0 0 220 46" preserveAspectRatio="none" aria-label="Handicap trending down"><path d="M0 36 C16 34, 20 30, 35 32 S54 26, 68 29 S83 22, 99 25 S113 19, 130 22 S146 13, 161 17 S179 12, 192 9 S207 5, 220 7" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="220" cy="7" r="4" fill="currentColor" /></svg></div><small>Down from {dashboardData.previousHandicap} last season</small></article><article className="stat-card"><div className="stat-top"><span>Scoring average</span><span className="trend up">↗ {dashboardData.scoringChange}</span></div><strong>{dashboardData.scoringAverage}</strong><div className="bar-track"><span style={{ width: dashboardData.scoringBar }} /></div><small>Best round <b>{dashboardData.bestRound}</b> · Par 72</small></article><article className="stat-card rounds-stat"><div className="stat-top"><span>Rounds played</span><span className="trend neutral">{range}</span></div><strong>{dashboardData.rounds}</strong><div className="round-dots">{Array.from({ length: dashboardData.rounds }).map((_, index) => <i className={index >= dashboardData.completedRounds ? 'empty' : ''} key={index} />)}</div><small><b>{dashboardData.extraRounds}</b> more rounds than last year</small></article></section>
          <section className="ghin-panel" aria-labelledby="ghin-heading"><div className="ghin-heading"><div><p className="eyebrow">Official handicap record</p><h2 id="ghin-heading">GHIN data &amp; tracking</h2></div><span className="verified">● GHIN synced</span></div><div className="ghin-content"><div className="ghin-identity"><span className="ghin-label">GHIN NUMBER</span><strong>1234567</strong><span className="ghin-subtext">Last revision · Jun 15, 2024</span></div><div className="ghin-metrics"><div><span>Low index</span><strong>{dashboardData.lowIndex}</strong><small>Period low</small></div><div><span>Score differentials</span><strong>{dashboardData.differentialCount}</strong><small>Posted in period</small></div><div><span>PCC adjustments</span><strong>{dashboardData.pccAdjustments}</strong><small>This period</small></div><div className="differential-trend"><span>Recent differentials</span><div className="diff-bars"><i style={{ height: '58%' }} /><i style={{ height: '40%' }} /><i style={{ height: '72%' }} /><i style={{ height: '48%' }} /><i style={{ height: '30%' }} /><i className="current" style={{ height: '23%' }} /></div><small>Improving · {dashboardData.handicap} current</small></div></div></div></section>
          <section className={`content-grid ${showAll ? 'expanded' : ''}`}><article className="panel rounds-panel" id="rounds"><div className="panel-heading"><div><p className="eyebrow">Your scorecard</p><h2>Recent rounds</h2></div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'See More'} <span>↗</span></button></div><div className="round-list">{visibleRounds.map((round) => <div className="round-row" key={round.course}><div className="course-icon">⌂</div><div className="course-info"><strong>{round.course}</strong><span>{round.location} · {round.date}</span></div><div className="round-score"><strong>{round.score}</strong><span>{round.toPar}</span></div><div className="round-rating"><span>Rating / slope</span><strong>{round.rating} / {round.slope}</strong></div><div className="row-arrow">→</div></div>)}</div></article><article className="panel insight-panel"><div className="panel-heading"><div><p className="eyebrow">Period snapshot</p><h2>Game at a glance</h2></div><button className="more-button" aria-label="More options">•••</button></div><div className="insight-main"><div className="donut"><div><strong>{dashboardData.fairways}</strong><span>fairways hit</span></div></div><div className="insight-copy"><strong>Looking sharp</strong><p>Your accuracy is up <b>{dashboardData.accuracyChange}</b> from the previous period.</p><a href="#stats">See full stats <span>↗</span></a></div></div><div className="mini-stats"><div><span>GIR</span><strong>{dashboardData.gir}</strong><i><em style={{ width: dashboardData.gir }} /></i></div><div><span>Putts / round</span><strong>{dashboardData.putts}</strong><i><em style={{ width: '64%' }} /></i></div><div><span>Bunker shots</span><strong>{dashboardData.bunkerShots}</strong></div><div><span>3-putts</span><strong>{dashboardData.threePutts}</strong></div><div><span>Bogeys</span><strong>{dashboardData.bogeys}</strong></div><div><span>Double bogeys</span><strong>{dashboardData.doubles}</strong></div></div></article></section>
          <section className="bag-section" aria-labelledby="bag-heading"><div className="bag-heading"><div><p className="eyebrow">Equipment setup</p><h2 id="bag-heading">What's in the Bag</h2><p>Sean's current setup · 12 clubs</p></div><button className="text-button">Edit bag <span>↗</span></button></div><div className="club-groups">{clubGroups.map((group) => <section className="club-group" key={group.title}><div className="club-group-heading"><h3>{group.title}</h3><span>{group.clubs.length} {group.clubs.length === 1 ? 'club' : 'clubs'}</span></div><div className="club-grid">{group.clubs.map((club) => <article className="club-card" key={club.type}><div className={`club-swatch ${club.accent}`}><span>{club.type === 'Putter' ? '▰' : club.type.includes('Wedge') ? '◒' : club.type.includes('Iron') ? '▥' : '╱'}</span></div><div className="club-info"><span className="club-type">{club.type}</span><strong>{club.brand}</strong><span className="club-model">{club.model}</span><small>{club.detail}</small></div><div className="club-distance"><span>{club.type === 'Putter' ? 'Avg' : 'Carry'}</span><strong>{club.distance}</strong></div></article>)}</div></section>)}</div></section>
        </div>
      </main>
    </div>
  )
}

export default App
