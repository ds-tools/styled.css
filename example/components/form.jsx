import React from "react";
import styled from "@ds-tools/styled";
import styles from "./form.styles";

const FormElement = styled.form(styles.Form);

function Form(props) {
  return <FormElement {...props} />;
}

Form.Label = styled.label(styles.FormLabel);

export { Form };
