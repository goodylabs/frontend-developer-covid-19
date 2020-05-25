/**
 *
 * Tests for CircleSpinner
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import CircleSpinner from '../index';

describe('<CircleSpinner />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CircleSpinner />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CircleSpinner />);
    expect(firstChild).toMatchSnapshot();
  });
});
