import React, { Component } from 'react';
import InputText from '../common/InputText';
import InputFile from '../common/InputProfile';
import Select from '../common/Select';
import Radio from '../common/Radio';
import FormButton from '../common/FormButton';
import Table from '../common/Table';
import {
  inputNameValidation,
  inputEmailValidation,
  inputPasswordValidation,
} from '../helpers/validationHelpers';
import '../App.css';
import { options, headers } from '../utils/constant';
import userDetails from '../types/types'
import {
  uploadFileToCloudinary
} from '../utils/cloudunary';

type Props = {};

type State = {
  name: String;
  email: string;
  dateOfBirth: string;
  levelOfEducation: string;
  gender: string;
  password: string;
  confirmpassword: string;
  profile: string,
  errorMsg: string[];
  users: userDetails[];
};

export default class SignUp extends Component<Props, State> {
  initialState = {
    name: '',
    email: '',
    dateOfBirth: new Date().toISOString().split('T')[0],
    gender: '',
    profile: '',
    levelOfEducation: '',
    password: '',
    confirmpassword: '',
    errorMsg: [],
  };
  state = { ...this.initialState, users: [] };

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value }, () => {
      console.log(this.state.name);
    });
  };

  onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value }, () => {
      console.log(this.state.email);
    });
  };

  onDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dateOfBirth: e.target.value }, () => {
      console.log(this.state.dateOfBirth)
    });
  };

  onLevelOfEducationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ levelOfEducation: e.target.value }, () => {
      console.log(this.state.levelOfEducation);
    });
  };

  onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value }, () => {
      console.log(this.state.gender)
    });
  };

  onProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadFileToCloudinary(e ? e.target.files[0] : '').then((url) => {
        this.setState({ profile: url }, () => {
          console.log(url)
        })
      })
    }
  };

  onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value }, () => {
      console.log(this.state.password)
    });
  };

  onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ confirmpassword: e.target.value }, () => {
      console.log(this.state.confirmpassword)
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let {
      name,
      email,
      dateOfBirth,
      levelOfEducation,
      gender,
      password,
      profile
    } = this.state;

    const errors: string[] = [];
    let err = inputNameValidation(name);
    if (err.length) { errors.push(err) };
    err = inputEmailValidation(email);
    if (err.length) { errors.push(err) };
    err = inputPasswordValidation(password);
    if (err.length) { errors.push(err) };
    if (errors.length) {
      this.setState({
        ...this.state,
        errorMsg: errors,
      });
      return;
    }

    gender = gender ? gender : "male";

    const user: userDetails = {
      name,
      email,
      dateOfBirth,
      gender,
      levelOfEducation,
      password,
      profile
    };

    this.setState({
      ...this.state,
      ...this.initialState,
      users: [user, ...this.state.users],
    }, () => {
      console.log(this.state.users)
    });
  };

  render() {
    return (
      <><div className=''>
        <header className="SignUp">
          <form className="SignUp-Container" onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <InputText
              handleChange={this.onNameChange}
              value={this.state.name}
              label="Name"
              id="name"
              type="text"
              validationFunction={inputNameValidation}
              required={true}
            ></InputText>
            <InputText
              handleChange={this.onEmailChange}
              value={this.state.email}
              label="Email"
              id="email"
              type="email"
              validationFunction={inputEmailValidation}
              required={true}
            ></InputText>
            <InputFile
              selectedFile={this.state.profile}
              onProfileChange={this.onProfileChange}
            ></InputFile>
            <InputText
              handleChange={this.onDateOfBirthChange}
              value={this.state.dateOfBirth}
              label="Date Of Birth"
              id="dob"
              type="date"
              required={true}
            ></InputText>
            <Select options={options} onChange={this.onLevelOfEducationChange}></Select>
            <Radio onChange={this.onRadioChange} id="radio"></Radio>
            <InputText
              handleChange={this.onPasswordChange}
              value={this.state.password}
              label="Password"
              id="password"
              type="password"
              validationFunction={inputPasswordValidation}
              required={true}
            ></InputText>
            <InputText
              handleChange={this.onConfirmPasswordChange}
              value={this.state.confirmpassword}
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              validationFunction={inputPasswordValidation}
              required={true}
              match={this.state.password}
            ></InputText>
            <FormButton />
          </form>
          <div className="row">
            <Table headers={headers} data={this.state.users}></Table>
          </div>
        </header>
      </div></>
    );
  }
}
