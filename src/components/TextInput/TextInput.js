import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import cns from 'classnames';

function TextInput({
  htmlID,
  name,
  label,
  type = "text",
  required = false,
  onChange,
  placeholder,
  value,
  error,
  ...rest
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <Label
        htmlFor={htmlID}
        label={label}
        required={required}
      />
      <input
        id={htmlID}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cns({
          'textinput__input--state-error': error
        })}
        {...rest}
      />
      {
        error &&
        (
          <div
            className={cns({ 'textinput__error': true })}
          >
            {error}
          </div>
        )
      }
    </div>
  );
}


export default TextInput;