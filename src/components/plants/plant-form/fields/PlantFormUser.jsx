import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantFormUser = (props) => {
  const userId = "userId";
  return (
    <FormGroup>
      <Label for={ userId } className="required">
        User:
      </Label>
      <Field
        component={ PlantasticInput }
        id={ userId }
        name={ PlantFormFields.USER }
        placeholder="user"
        type="text"
      />
    </FormGroup>
  );
};

PlantFormUser.propTypes = {};

export default PlantFormUser;