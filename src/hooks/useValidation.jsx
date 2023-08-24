import { useState } from 'react';

export const useValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = () => {
    const isValid = email.includes('@');
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 8;
    return isValid;
  };

  return { email, setEmail, password, setPassword, validateEmail, validatePassword };
};
