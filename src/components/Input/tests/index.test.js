/**
 *
 * Tests for Input
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Input from '../index';

const defaultProps = {
  onChange: jest.fn(),
  value: 'Value',
  name: 'Name',
};

describe('<Input />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Input {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Input {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});
