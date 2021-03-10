import React from "react";
import { Button, FormGroup } from "reactstrap";
import PropTypes from 'prop-types';

/**
 * @component
 */
const PlantFormButtons = ({ cancelLabel, submitDisabled, submitLabel, deleteLabel, onDelete, onBackToList }) => {
  return (
    <React.Fragment>
      <hr className="mb-4 mt-4" />
      <FormGroup className="mb-2">
        <Button color="secondary" type="button" onClick={ onBackToList }>
          { cancelLabel }
        </Button>
        <Button color="primary" type="submit" className="ml-0 ml-md-2" disabled={ submitDisabled }>
          { submitLabel }
        </Button>
        {
          onDelete &&
          <Button color="danger" type="button" className="ml-0 ml-md-2" onClick={ onDelete }>
            { deleteLabel }
          </Button>
        }
      </FormGroup>
    </React.Fragment>
  );
};

PlantFormButtons.propTypes = {
  cancelLabel: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
};

export default React.memo(PlantFormButtons);
