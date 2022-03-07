import { InputFieldLengths } from '../utils/constant';

const inputNameValidation = (
  name: string,
  minLength = InputFieldLengths.minNameLength,
  maxLength = InputFieldLengths.maxNameLength,
) => {
  const errorMsg: string[] = [];
  if (name.length < minLength)
    errorMsg.push(`Name length should be greater than ${minLength}.`);
  if (name.length > maxLength)
    errorMsg.push(`Name length should be less than ${maxLength}.`);
  return errorMsg.join(' ,');
};

const inputEmailValidation = (email: string) => {
  const regemailexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validEmail = regemailexp.test(email);
  if (validEmail) { return ''; } else { return 'Invalid Email'; }
};

const inputPasswordValidation = (password: string) => {
  const regexp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const validPassword = regexp.test(password);
  if (validPassword) { return ''; } else { return 'Password must be a minimum of 8 characters including number, upper, lower and one special character.'; }
};


export { inputNameValidation, inputEmailValidation, inputPasswordValidation};
