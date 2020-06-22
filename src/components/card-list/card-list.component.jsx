import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

class CardList extends React.Component {
  render() {
    return (
      <div className='card-list'>
        {this.props.dishes.map(dish => (
          <Card key={dish.id} dish={dish} />
        ))}
      </div>
    );
  }
}

export default CardList;
