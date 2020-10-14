import React, { Component } from "react";
import { Button } from "react-bootstrap";

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

  render() {
    return (
      <div>
        <h2>testst</h2>
        <div className="gift-list">
          {this.state.gifts.map((gift) => {
            return <div key={gift.id}></div>;
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          add a gift
        </Button>
      </div>
    );
  }
}

export default App;
