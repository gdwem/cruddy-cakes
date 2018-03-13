import React from 'react';


class Cakes extends React.Component {
  render() {
    return (
      <div className="Cake">
        <div className="image-container">
          <img src={this.props.cake.imageUrl} alt=''/>
        </div>
        <h2>{this.props.cake.name}</h2>
      </div>
    )
  }
}
export default Cakes;
