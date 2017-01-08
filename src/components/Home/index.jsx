import React, { Component } from 'react';

import Counter from '../Counter';

class Home extends Component {
  render() {
    return (
      <div id="home" className="bg-black-05">
        <Counter />
      </div>
    );
  }
}

export default Home;
