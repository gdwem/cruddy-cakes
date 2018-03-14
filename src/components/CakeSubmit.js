import React from 'react';

class CakeSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      yumFactor: 0
    }
    this.addCake = this.addCake.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onYumFactorChange = this.onYumFactorChange.bind(this);
  }

  addCake(e) {
    if (e) e.preventDefault();
    this.props.addCake(this.state.name, this.state.comment, this.state.yumFactor);
    this.setState({ name: '', comment: '', yumFactor: 0 });
  }

  onNameChange(e) {
    const cakeName = e.target.value;
    this.setState({ name: cakeName });
  }

  onCommentChange(e) {
    const cakeComment = e.target.value;
    this.setState({ comment: cakeComment });
  }

  onYumFactorChange(e) {
    const cakeYumFactor = e.target.value;
    this.setState({ yumFactor: cakeYumFactor });
  }

  render() {
    return (
      <div className="add-cake-form">
        <form onSubmit={this.addCake}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Cake Name"
          />
          <input
            type="text"
            value={this.state.comment}
            onChange={this.onCommentChange}
            placeholder="Cake Comment"
          />
          <input
            type="number"
            value={this.state.yumFactor}
            onChange={this.onYumFactorChange}
            placeholder="Cake Yum Factor"
          />
          <input type="submit" value="Add Cake" />
        </form>
      </div>
    )
  }
}

export default CakeSubmit;
