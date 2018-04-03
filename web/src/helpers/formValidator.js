import React from 'react';
import {isEmail} from '../string';

export const requiredError = (value, field, message = null) => {
  if (!value || !value.toString().trim()) {
    const errorMessage = message || `Please provide your ${field}`;
    return <div className="error">{errorMessage}</div>;
  }
};

export const emailError = (value) => {
  if (!isEmail(value)) {
    return <div className="error">{value} is not a valid email.</div>
  }
};

export const ltError = (value, length, message = null) => {
  if (!value.toString().trim().length > length) {
    const errorMessage = message || `The value exceeded ${length} symbols.`;
    return <div className="error">{errorMessage}</div>
  }
};

export const gtError = (value, length, message = null) => {
  if (!value.toString().length < length) {
    const errorMessage = message || `The value should not exceed ${length} symbols.`;
    return <div className="error">{errorMessage}</div>
  }
};

export const passwordError = (value, compareValue, message = null) => {
  if (value !== compareValue) {
    const errorMessage = message || `Passwords are not equal.`;
    return <div className="error">{errorMessage}</div>
  }
};
