import React from 'react';
import Cakes from './Cakes.js';

class CakeList extends React.Component {
  render() {
    return (
      <div className="CakeList">
      <h2>A list of cakes...</h2>
      {
        this.props.cakes.map(cake => {
         return <Cakes key={cake.id} cake={cake} />;
       })
      }
      </div>
    )
  }
}

export default CakeList;
