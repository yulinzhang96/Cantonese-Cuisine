import React from 'react';

import './card.styles.css';

class Card extends React.Component {
  render() {
    return (
      <div className='card-container'>
        <img
          alt = 'cuisine'
          src = {this.props.dish.imgSrc}
        />
        <h2> {this.props.dish.name} </h2>
        <p> {this.props.dish.description} </p>
      </div>
    );
  }
}

export default Card;
