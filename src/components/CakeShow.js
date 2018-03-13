import React from 'react';

class CakeShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.showCakes()
    e.preventDefault();
  }

  render() {
    return (
      <div className="show-me-cakes">
        <button class="button" onClick={this.handleClick}><span>I wanna see some cakes!</span></button>
      </div>
    )
  }
}

export default CakeShow;
