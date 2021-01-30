import React from "react";
import {Card, CardBody, Col, FormGroup, Input, Label} from "reactstrap";

class Preferences extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userFullName = this.props.userFullName;
    const handleUserFullNameChange = this.props.handleUserFullNameChange;
    return (
            <Card className="mb-4">
              <CardBody>
                <FormGroup>
                  <Label for="userFullName">Full Name:</Label>
                  <Input
                          id="userFullName"
                          name="userFullName"
                          type="text"

                          onBlur={handleUserFullNameChange}
                  />
                </FormGroup>

              </CardBody>
            </Card>
    )

  }
}

export default Preferences;