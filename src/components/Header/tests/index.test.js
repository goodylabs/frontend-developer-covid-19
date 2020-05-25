/**
 *
 * Tests for Header
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Header from '../index';

describe('<Header />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Header />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Header />);
    expect(firstChild).toMatchSnapshot();
  });
});
