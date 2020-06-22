import React from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import dishes from './dishes/dishes';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dishes: [],
      searchField: ''
    };
  }

  componentDidMount() {
    this.setState({ dishes : dishes });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { dishes, searchField } = this.state;
    const filteredDishes = dishes.filter(dish =>
      dish.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Cantonese Cusine</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList dishes={filteredDishes} />
        <footer>© 2020 Yulin Zhang.</footer>
      </div>
    );
  }
}

export default App;
