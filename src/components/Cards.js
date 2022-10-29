import React from 'react';

class Cards extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div>
      <div
        onClick={()=>{this.props.handleClick(this.props.item.id)}}
        key={this.props.item.id}
        className="cardItem"
      >
        <img src={this.props.item.image} alt='' className="cardImg"/>
        <p className="cardText">
          <b>Name:</b> {this.props.item.name}
          <br></br>
          <b>Occupation:</b> {this.props.item.occupation}
        </p>
      </div>
      </div>
    )
  }
}

export default Cards;
