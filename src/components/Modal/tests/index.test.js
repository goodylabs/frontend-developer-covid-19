/**
 *
 * Tests for Modal
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Modal from '../index';

const defaultProps = {
  error: 'error',
};

describe('<Modal />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Modal {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Modal {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});
