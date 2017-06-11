import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import classNames from 'classnames/bind';
import styles from './style.css';
const cx = classNames.bind(styles);

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
    <div className={styles.fieldset}>
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
        className={cx({
          inputError: error
        })}
        {...rest}
      />
      {
        error &&
        (
          <div
            className={styles.error}
          >
            {error}
          </div>
        )
      }
    </div>
  );
}

export default TextInput;