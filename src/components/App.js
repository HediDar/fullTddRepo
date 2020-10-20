import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/giftsAction";
import Gift from "./Gift";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: [],
    };
  }

  addGift = () => {
    this.props.addGift();
  };

  removeGift = (id) => {
    const gifts = this.state.gifts.filter((gift) => gift.id !== id);
    this.setState({ gifts });
  };

  render() {
    // console.log(this.props.gifts);
    const toRender = this.props.gifts;
    // console.log(toRender);
    if (toRender)
      return (
        <div>
          <h2>testst</h2>
          <div className="gift-list">
            {toRender.map((gift) => (
              <Gift key={gift.id} gift={gift} onDelete={this.removeGift} />
            ))}
          </div>
          <button className="btn" onClick={this.addGift}>
            add a gift
          </button>
        </div>
      );
    return (
      <div>
        <h2>testst</h2>

        <button className="btn" onClick={this.addGift}>
          add a gift
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gifts: state.gifts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addGift: () => dispatch(actions.addGift()),
  deleteTask: (payload) => dispatch(actions.deleteGift(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
