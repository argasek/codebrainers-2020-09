import React from "react";
import {Card, CardBody, Col, FormGroup, Input, Label} from "reactstrap";

function Preferences() {

  return (
          <Card className="mb-4">
            <CardBody>
              <FormGroup>
                <Label for="userFullName">Full Name:</Label>
                <Input
                        id="userFullName"
                        name="userFullName"
                        type="text"
                        value={''}
                        onChange={() => {

                        }

                        }
                />
              </FormGroup>

            </CardBody>
          </Card>
  )

}

export default Preferences;