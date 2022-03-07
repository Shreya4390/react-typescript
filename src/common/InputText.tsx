import * as React from 'react';
import '../App.css'

export interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  id?: string;
  validationFunction?: Function | null;
  type?: string;
  name?: string;
  required?: boolean;
  match?: string;
}

export default function InputText(props: InputProps) {
  const [errMsg, seterrMsg] = React.useState('');
  const {
    handleChange,
    value = '',
    label,
    id = 'input',
    validationFunction = null,
    type,
    name = 'input',
    required = false,
    match,
  } = props;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validationFunction) {
      const err = validationFunction(event.target.value);
      seterrMsg(err);
    }
    if (match && event.target.value !== match) {
      seterrMsg('Password and confirm password should be same');
    }
    handleChange(event);
  };

  return (
    <div className="m-1 p-1">
      <input
        placeholder={label}
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
        id={id}
        autoComplete="off"
        required={required}
      />
      {errMsg.length ? <p className='errorMsg'>{errMsg}</p> : null}
    </div>
  );
}