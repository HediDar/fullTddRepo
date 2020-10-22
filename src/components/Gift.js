import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/giftsAction";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { getCountriesArrayToDisplay } from "../selectors/selectCountries";

export class Gift extends Component {
  componentDidMount() {
    this.props.getAllCountriesAction();
  }

  handleChange = (e) => {
    this.props.setCountrieSelectedAction(e.target.value);
  };

  // handleChange(e) {
  //   this.props.setCountrieSelectedAction(e.target.value);
  // }

  render() {
    const arrTen1 = this.props.getArrayCountries; // im using the selector just to test them, i dont really need them in my app
    const arrTen = [];
    if (this.props.countries) {
      for (var k = 0; k < this.props.countries.length; k++) {
        arrTen.push(
          <option
            key={this.props.countries[k].name}
            value={this.props.countries[k].name}
          >
            {" "}
            {this.props.countries[k].name}{" "}
          </option>
        );
      }
    } else {
      arrTen.push(
        <option key="empty" value="loading">
          {" loading"}
        </option>
      );
    }
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Person</label>
            <input
              type="text"
              className="input-person"
              onChange={(event) =>
                this.props.addPerson(event.target.value, this.props.gift.id)
              }
            />
          </FormGroup>
          <FormGroup>
            <label>Gift</label>

            <input
              type="text"
              className="input-present"
              onChange={(event) =>
                this.props.addPresent(event.target.value, this.props.gift.id)
              }
            />
          </FormGroup>

          <FormGroup>
            <label>Countries</label>
            <select
              className="mySelect"
              onChange={this.handleChange}
              onFocus={this.handleChange}
            >
              {arrTen}
            </select>
          </FormGroup>

          <FormGroup>
            <label>Gift</label>
            <Button
              className="btn-delete"
              onClick={() => this.props.onDelete(this.props.gift.id)}
            >
              delete a gift
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gifts: state.gifts,
    countries: state.countries,
    getArrayCountries: getCountriesArrayToDisplay(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (person, id) => dispatch(actions.addPerson(person, id)),
  addPresent: (present, id) => dispatch(actions.addPresent(present, id)),
  getAllCountriesAction: () => dispatch(actions.getAllCountriesAction()),
  setCountrieSelectedAction: (countrie) =>
    dispatch(actions.setCountrieSelectedAction(countrie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
