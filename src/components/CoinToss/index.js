// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {img: true, count: 0, hco: 0, tco: 0}

  generate = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    this.setState(prevState => ({count: prevState.count + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({hco: prevState.hco + 1}))
      this.setState({img: true})
    } else if (tossResult === 1) {
      this.setState(prevState => ({tco: prevState.tco + 1}))
      this.setState({img: false})
    }
  }

  render() {
    const {img, count, hco, tco} = this.state
    return (
      <div className="contain">
        <div className="box">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {img ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <div>
            <button onClick={this.generate}>Toss Coin</button>
            <div className="result">
              <p>Total:{count}</p>
              <p>Heads:{hco}</p>
              <p>Tails:{tco}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
