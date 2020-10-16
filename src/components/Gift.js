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
      gift: "",
      countries: [],
    };
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl
              className="input-person"
              onChange={(event) =>
                this.setState({ person: event.target.value })
              }
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Gift;
