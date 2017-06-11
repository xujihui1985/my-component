import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInputCSSModule';

class RegistrationForm extends React.Component {

  static propTypes = {
    confirmationMessage: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    minPasswordLength: PropTypes.number
  }

  static defaultProps = {
    confirmationMessage: 'thanks for registering',
    minPasswordLength: 0
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false,
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  passwordQuality(password) {
    if (!password) {
      return null;
    }
    if (password.length >= this.props.minPasswordLength) {
      return 100;
    }
    return 0;
  }

  validate({ email, password }) {
    const errors = {};
    const { minPasswordLength } = this.props;

    if (!email) {
      errors.email = 'Email required';
    }
    if (password.length < minPasswordLength) {
      errors.password = `Password must be at least ${minPasswordLength}`;
    }
    this.setState({ errors });
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const { user } = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({ submitted: true });
    }
  }

  render() {
    const { errors, submitted } = this.state;
    const { email, password } = this.state.user;

    return (
      submitted ?
        (<h2>{this.props.confirmationMessage}</h2>)
        : (
          <div>
            <TextInput
              htmlID="registration-form-email"
              name="email"
              onChange={this.onChange}
              label="Email"
              value={email}
              error={errors.email}
              required
            />

            <input type="submit" value="Register" onClick={this.onSubmit} />
          </div>
        )
    );
  }
}

export default RegistrationForm;
