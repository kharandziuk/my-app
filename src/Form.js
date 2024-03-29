import React from "react";
import { Field, reduxForm } from "redux-form";

const validator = (values) =>{
    const errors = {}
    if(!values.firstName){
      errors.firstName = "first name missing"
    }
    if(!values.lastName){
      errors.lastName = "last name missing"
    }
  return errors
  }

const FormComponent = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>

      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

const Form = reduxForm({
  form: "Form",
  validate: validator 
})(FormComponent);

export default Form;
