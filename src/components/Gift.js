import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: "",
      countries: [],
    };
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Person</label>
            <FormControl
              className="input-person"
              onChange={(event) =>
                this.setState({ person: event.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <label>Gift</label>

            <FormControl
              className="input-present"
              onChange={(event) =>
                this.setState({ present: event.target.value })
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

export default Gift;
