import React from 'react'
import request from 'superagent'
import {getCardData} from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      cards: [],
      activeGoblin: {}
    }
    this.getCards = this.getCards.bind(this)
    this.getGoblinFromNameInput = this.getGoblinFromNameInput.bind(this)
    this.setGoblin = this.setGoblin.bind(this)
  }

  componentDidMount () {
    this.getCards()
    
  }

  getCards () {
    getCardData()
    .then(res => {
      this.setState ({
        cards: res.body.cards
      })
    })
  }

  setGoblin(goblin){
    this.setState({
      activeGoblin: goblin
    })
  }

  getGoblinFromNameInput () {
    let goblinName = Math.floor(Math.random() * this.state.cards.length)
    let goblin = this.state.cards[goblinName]
    console.log(this.state)
    this.setGoblin(goblin)
  }
  
  render() {
  
    return (
      
      <div className= 'wrapper'>
        <div className='title'>
          <h1>Make yourself a Goblin, nerd!!</h1>
        </div>
        <div className='form'>
          <label>Your name</label><input type='text'name='name'/>
          <button type='button' onClick={() => this.getGoblinFromNameInput() }>Go blin yourself</button>
        </div>
        
        <h3>You are a {this.state.activeGoblin.name}</h3>
        <img src={this.state.activeGoblin.imageUrl}/>
        <p>Rarity: {this.state.activeGoblin.rarity}</p>
        <p>Type: {this.state.activeGoblin.type}</p>
        <p>Toughness: {this.state.activeGoblin.toughness}</p>
        <p>Power: {this.state.activeGoblin.power}</p>
        <p>{this.state.activeGoblin.flavor}</p>

      </div>
  )
}}

export default App

