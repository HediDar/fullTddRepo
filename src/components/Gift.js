import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/giftsAction";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

export class Gift extends Component {
  render() {
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (person, id) => dispatch(actions.addPerson(person, id)),
  addPresent: (present, id) => dispatch(actions.addPresent(present, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
