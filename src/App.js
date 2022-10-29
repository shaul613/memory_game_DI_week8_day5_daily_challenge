import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import cardsArr from './components/cards.json';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      score:0,
      highScore:0,
      clickedItems:[],
    }
  }

  handleClick = (id) => {
    if(this.state.clickedItems.includes(id)){
      let highScore;
      this.state.score > this.state.highScore ? highScore = this.state.score : highScore = this.state.highScore;
      this.setState({highScore, score:0, clickedItems:[]});
    } else{
      let clickedItems = [...this.state.clickedItems];
      clickedItems.push(id)
      this.setState({clickedItems, score:this.state.score+1});
    }
  }

  render(){

    const cards = cardsArr.superheroes.map(item => {
        return <Cards
          item={item}
          key={item.id}
          id={item.id}
          handleClick={this.handleClick}
        />
      }).sort((a,b) => {
        return Math.random() - 0.5;
      })

    return(
      <>
        <div>
          <p className="score">
            Score: {this.state.score}
            <br></br>
            High Score: {this.state.highScore}
          </p>
          <div className="cards">
            {cards}
          </div>
        </div>
      </>
    )
  }
}

export default App;
