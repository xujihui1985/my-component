import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './';
import { shallow } from 'enzyme';

test('show error', () => {
  const tree = renderer.create(
    <TextInput
      htmlID="registration-form-email"
      name="email"
      onChange={() => { }}
      label="Email"
      value={"email"}
      error={"error"}
      required
    />
  );
  expect(tree).toMatchSnapshot();
});

test('toggles input type when show/hide password checked', () => {
  const wrapper = shallow(
    <TextInput
      htmlID="test"
      name="test"
      label="test"
      value=""
      onChange={() => { }}
      showVisibilityToggle
    />
  );
  expect(wrapper.find({ type: 'text' })).toHaveLength(1);

});
