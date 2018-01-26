import React from 'react';
import {isEmail} from '../string';

export const requiredError = (value, field) => {
  if (!value || !value.toString().trim()) {
    return <div className="error">Please provide your {field}</div>;
  }
};

export const emailError = (value) => {
  if (!isEmail(value)) {
    return <div className="error">{value} is not a valid email.</div>
  }
};

export const ltError = (value, length) => {
  if (!value.toString().trim().length > length) {
    return <div className="error">The value exceeded {length} symbols.</div>
  }
};

export const passwordError = (value, compareValue) => {
  if (value !== compareValue) {
    return <div className="error">Passwords are not equal.</div>
  }
};
