import './index.css'

const Navbar = props => {
  const {score, time} = props

  const displayTime = () => {}

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="score-timer-container">
          <li className="nav-score-listItem">
            <p className="score">
              Score: <span className="score-span">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-img"
              alt="timer"
            />
            <p className="time">{time} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
