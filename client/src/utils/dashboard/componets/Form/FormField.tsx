import React from "react";
import FormInputFields from "./Form_Input";
import File_input from "./File_input";


const FormField = ({ ...props }) => {
  return (
    <>
      {["text", "number", "richtext"].includes(props.type) && (
        <FormInputFields {...props} />
      )}
      {["file"].includes(props.type) && <File_input {...props} />}
   
    </>
  );
};

export default FormField;
