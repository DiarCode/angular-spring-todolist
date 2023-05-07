const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const minPasswordLength = 8;

const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

export const validateEmail = (email: string) => {
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  if (password.length < minPasswordLength) {
    return false;
  }

  if (
    password.search(/[a-z]/) < 0 ||
    password.search(/[A-Z]/) < 0 ||
    password.search(/[0-9]/) < 0
  ) {
    return false;
  }

  return true;
};

export const validateUsername = (fullName: string) => {
  return fullNameRegex.test(fullName);
};
