import { useState } from 'react';

export const useValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (emailValue = email) => {
    const isValid = emailValue.includes('@');
    return isValid;
  };

  const validatePassword = (passwordValue = password) => {
    const isValid = passwordValue.length >= 8;
    return isValid;
  };

  const validateEmailError = (emailValue = email) => {
    if (!validateEmail(emailValue)) {
      setEmailError('이메일은 @를 포함해야합니다.');
    } else {
      setEmailError('');
    }
  };

  const validatePasswordError = (passwordValue = password) => {
    if (!validatePassword(passwordValue)) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleChangeEmail = e => {
    const value = e.target.value;
    setEmail(value);
    validateEmailError(value);
  };

  const handleChangePassword = e => {
    const value = e.target.value;
    setPassword(value);
    validatePasswordError(value);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
    validateEmailError,
    validatePasswordError,
    handleChangeEmail,
    handleChangePassword,
  };
};
