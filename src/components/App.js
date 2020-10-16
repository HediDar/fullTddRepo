import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: [],
    };
  }

  addGift = () => {
    let myGifts = [...this.state.gifts];
    myGifts.push({ name: "gift1", id: myGifts.length });
    this.setState({ gifts: myGifts });
  };

  removeGift = (id) => {
    const gifts = this.state.gifts.filter((gift) => gift.id !== id);
    this.setState({ gifts });
  };

  render() {
    const toRender = this.state.gifts;
    return (
      <div>
        <h2>testst</h2>
        <div className="gift-list">
          {toRender.map((gift) => (
            <Gift key={gift.id} gift={gift} onDelete={this.removeGift} />
          ))}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          add a gift
        </Button>
      </div>
    );
  }
}

export default App;
