import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    istimerIsRunning: false,
    timerSeconds: 0,
  }

  onClickOnReset = () => {
    clearInterval(this.timeIntervel)
    this.setState({istimerIsRunning: false, timerSeconds: 0})
  }

  onClickOnStop = () => {
    clearInterval(this.timeIntervel)
    this.setState({istimerIsRunning: false})
  }

  updateTime = () => {
    this.setState(PreState => ({
      timerSeconds: PreState.timerSeconds + 1,
    }))
  }

  ClickOnStart = () => {
    this.timeIntervel = setInterval(this.updateTime, 1000)
    this.setState({istimerIsRunning: true})
  }

  renderSeconds = () => {
    const {timerSeconds} = this.state
    const seconds = Math.floor(timerSeconds % 60)
    return seconds
  }

  renderMinute = () => {
    const {timerSeconds} = this.state
    const minute = Math.floor(timerSeconds / 60)
    return minute
  }

  render() {
    const {istimerIsRunning} = this.state
    const time = `${this.renderMinute()}:${this.renderSeconds()}`
    return (
      <div className="bg_container_of_stopWatch">
        <h1>Stopwatch</h1>
        <div className="min_container_of_stopWatch">
          <div className="timerIcon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{time}</h1>
          <div className="button_start_stop_reset">
            <div>
              <button
                type="button"
                className="button_start"
                onClick={this.ClickOnStart}
                disabled={istimerIsRunning}
              >
                Start
              </button>
            </div>
            <div>
              <button
                type="button"
                className="button_stop"
                onClick={this.onClickOnStop}
              >
                Stop
              </button>
            </div>
            <div>
              <button
                type="button"
                className="button_reset"
                onClick={this.onClickOnReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
