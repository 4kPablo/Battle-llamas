import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const FormTextarea = ({
  name,
  label,
  type,
  isError,
  placeholder,
  className,
}) => {
  return (
    <div>
      {/* <label htmlFor={label}>{label}</label> */}
      <Field
        className={className}
        placeholder={placeholder}
        name={name}
        type={type}
        error={isError}
        id={label}
        as={InputComponent}
      />
      <ErrorMessage name={name} component={ErrorComponent} />
    </div>
  );
};

const InputComponent = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

const ErrorComponent = ({ children }) => {
  return <span className='flex text-sm text-red-700'>{children}</span>;
};
