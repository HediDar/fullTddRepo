import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/giftsAction";
import Gift from "./Gift";

export class App extends Component {
  addingGift = () => {
    this.props.addGift();
  };

  removeGift = (id) => {
    this.props.removeGift(id);
  };

  render() {
    const toRender = this.props.gifts;

    if (toRender)
      return (
        <div>
          <h2>testst</h2>
          <div className="gift-list" data-testid="giftDiv" id="myDiv">
            {toRender.map((gift) => (
              <Gift
                key={gift.id}
                gift={gift}
                data-testid={gift.id + ""}
                onDelete={this.removeGift}
              />
            ))}
          </div>
          <button className="myBTN" id="btnAdd" onClick={this.addingGift}>
            add a gift
          </button>
        </div>
      );
    return (
      <div>
        <h2>testst</h2>

        <button className="myBTN" onClick={this.addingGift}>
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
  removeGift: (payload) => dispatch(actions.deleteGift(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
